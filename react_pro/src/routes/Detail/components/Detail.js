import React, { Component, PropTypes } from 'react'
import { Form } from 'antd'
import MyBreadcrumb from 'components/MyBreadcrumb'
import FormComponent from 'components/FormComponent'
import Back from 'components/Back'
import './Detail.scss'

class Detail extends Component {
  static propTypes = {
    configData: PropTypes.object,
    form: PropTypes.object,
    getFieldDecorator: PropTypes.func,
    Detail: PropTypes.object,
    basicInfo: PropTypes.object,
    location: PropTypes.object,
    params: PropTypes.object,
    getInit: PropTypes.func,
    clearAll: PropTypes.func
  }
  componentWillMount () {
    const { type } = this.props.params
    const { id } = this.props.location.query
    this.props.getInit(type, id)
  }
  componentWillUnmount () {
    this.props.clearAll()
  }

  render () {
    const {
      location: { query: { page, type, url } },
      configData,
      Detail: { basicInfo, formData },
      form: { getFieldDecorator }
    } = this.props
    return (
      <div className="detail-page">
        <Back type={type} page={page} url={url} />
        <MyBreadcrumb breadcrumb={basicInfo.breadcrumb} />
        <Form className="vertival-form">
          {basicInfo.formList.map((item, index) => {
            return (
              <FormComponent
                key={index}
                getFieldDecorator={getFieldDecorator}
                item={item}
                dataSource={configData[item.name]}
                defaultValue={formData[item.name]}
              />
            )
          })}
        </Form>
      </div>
    )
  }
}

export default Form.create()(Detail)
