import React, { Component, PropTypes } from 'react'
import { Form, Button, Popconfirm, Tabs } from 'antd'
import MyBreadcrumb from 'components/MyBreadcrumb'
import FormComponent from 'components/FormComponent'
import ConfirmComponent from './ConfirmComponent'
import './Add.scss'
const TabPane = Tabs.TabPane

class Add extends Component {
  static propTypes = {
    Add: PropTypes.object,
    form: PropTypes.object,
    basicInfo: PropTypes.object,
    configData: PropTypes.object,
    formData: PropTypes.object,
    getDataSource: PropTypes.func,
    type: PropTypes.string,
    id: PropTypes.string,
    params: PropTypes.object,
    query: PropTypes.object,
    location: PropTypes.object,
    submitForm: PropTypes.func,
    clearData: PropTypes.func,
    toggleAreaSelect: PropTypes.func
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  constructor () {
    super()
    this.state = {
      showConfirm: false,
      showArea: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.cancleSubmit = this.cancleSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.callback = this.callback.bind(this)
  }

  componentWillMount () {
    const { getDataSource } = this.props
    const { type } = this.props.params
    const { id } = this.props.location.query
    getDataSource(type, id)
    this.setState({
      showConfirm: type === 'account_info_hotel_list' || type === 'account_info_inner_list'
    })
  }

  componentWillUnmount () {
    this.props.clearData()
  }

  handleSubmit (e) {
    const { id } = this.props.location.query
    const { submitForm, form } = this.props
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        submitForm(id, values, this.context.router)
      }
    })
  }
  cancleSubmit () {
    this.context.router.goBack()
  }
  handleChange (name, value) {
    if (name === 'user_type') {
      if (value === '11' || value === '12') {
        this.props.toggleAreaSelect(false)
      } else {
        this.props.toggleAreaSelect(true)
      }
    }
  }
  callback (key) {
    console.log(key)
    this.context.router.push(`/add/${key}`)
  }

  render () {
    const {
      form: { getFieldDecorator, setFieldsValue },
      Add: { basicInfo, dataSource, formData, loading }
    } = this.props
    let configData = { ...this.props.configData, ...dataSource }
    if (basicInfo.type === 'account_info_inner_list') {
      // configData.area_id = configData.config_area
    } else {
      configData.area_id = configData.config_area
    }
    configData.user_type = configData.inner_type
    return (
      <div className="add-page">
        <MyBreadcrumb breadcrumb={basicInfo.breadcrumb} />
        <div className="tabs-box">
          <Tabs className="add-tabs" defaultActiveKey="hotel_info_hotel_list" size="small" onChange={this.callback}>
            <TabPane tab="基础信息" key="hotel_info_hotel_list" />
            <TabPane tab="详细设定" key="hotel_info_hotel_lis" />
            <TabPane tab="宴会厅设置" key="hotel_info_hotel_lit" />
          </Tabs>
        </div>
        <Form className="vertival-form">
          { basicInfo.formList.map((item, index) => {
            return <FormComponent
              key={index}
              getFieldDecorator={getFieldDecorator}
              setFieldsValue={setFieldsValue}
              item={item}
              onChange={this.handleChange}
              dataSource={configData[item.name]}
              defaultValue={formData[item.name]} />
          })
          }
          { this.state.showConfirm && basicInfo.type && <ConfirmComponent form={this.props.form} id={basicInfo.id} />}
          <Form.Item>
            <Popconfirm title="确认提交?" onConfirm={this.handleSubmit}>
              <Button className="add-btn" type="primary" loading={loading}>提交</Button>
            </Popconfirm>
            <Button className="add-btn" type="default" size="default" onClick={this.cancleSubmit}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Add)
