import React, { Component, PropTypes } from 'react'
import { Form, Popconfirm, Button, Modal } from 'antd'
import FormComponent from 'components/FormComponent'

class BasicForm extends Component {
  static propTypes = {
    form: PropTypes.object
  }
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.cancleSubmit = this.cancleSubmit.bind(this)
    this.addWeddingMenu = this.addWeddingMenu.bind(this)
    this.cancleWeddingMenu = this.cancleWeddingMenu.bind(this)
  }
  toggleModal () {

  }
  render () {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    }
    const {
      form: { getFieldDecorator }
    } = this.props
    return (
      <Form className="vertival-form">
        <FormComponent getFieldDecorator={getFieldDecorator} item={{
          placeholder: '',
          label: '酒店价位',
          type: 'select',
          name: 'area_id',
          rules: { required: true }
        }} />
        <FormComponent getFieldDecorator={getFieldDecorator} item={{
          label: '酒店最大容纳桌数',
          name: 'area_id',
          rules: { required: true }
        }} />
        <FormComponent getFieldDecorator={getFieldDecorator} item={{
          label: '酒店类型',
          name: 'area_id',
          type: 'select',
          rules: { required: true }
        }} />
        <FormComponent getFieldDecorator={getFieldDecorator} item={{
          label: '酒店联系电话',
          name: 'area_id',
          rules: { required: true }
        }} />
        {/*酒店介绍图片*/}
        {/*婚宴菜单*/}
        <Form.Item label='婚宴菜单' {...formItemLayout} >
          <Button icon="add" onClick={this.toggleModal}>添加婚宴菜单</Button>
          <ul>
            <li className="">
              hunukkkk
            </li>
          </ul>
        </Form.Item>
        <Form.Item>
          <Popconfirm title="确认提交?" onConfirm={this.handleSubmit}>
            <Button className="add-btn" type="primary">提交</Button>
          </Popconfirm>
          <Button className="add-btn" type="default" size="default" onClick={this.cancleSubmit}>取消</Button>
        </Form.Item>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.addWeddingMenu}
          onCancel={this.cancleWeddingMenu}
          okText="确认"
          cancelText="取消">

        </Modal>
      </Form>
    )
  }
}

export default Form.create()(BasicForm)
