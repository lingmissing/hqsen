import React, { Component, PropTypes } from 'react'
import { Button, Icon, Modal, Input, Row, Col } from 'antd'
import './WeddingMenu.scss'

class WeddingMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      name: '',
      price: '',
      wedingList: []
    }
    this.addWeddingMenu = this.addWeddingMenu.bind(this)
    this.cancleWeddingMenu = this.cancleWeddingMenu.bind(this)
    this.showModal = this.showModal.bind(this)
  }
  addWeddingMenu () {
    const { wedingList, name, price } = this.state
    if (name && price) {
      if (wedingList.filter(item => item.name === name).length) {
        this.setState({ errorTip: '您输入的套餐名重复！' })
      } else {
        this.setState({
          wedingList: [...wedingList, { name: name, price: price }]
        })
        // setFieldsValue({})
        this.cancleWeddingMenu()
      }
    } else {
      this.setState({ errorTip: '请输入完整数据！' })
    }
  }
  cancleWeddingMenu () {
    this.setState({
      visible: false,
      name: '',
      price: '',
      errorTip: ''
    })
  }
  showModal () {
    this.setState({ visible: true })
  }
  saveModalValue (e, name) {
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  removeWeddingItem (name) {
    // const { setFieldsValue } = this.props
    this.setState({
      wedingList: this.state.wedingList.filter(item => item.name !== name)
    })
  }

  render () {
    const { name, price, visible, wedingList, errorTip } = this.state
    return (
      <div className="wedding-menu">
        <Button size="small" icon="plus" onClick={this.showModal}>添加</Button>
        <ul>
          { wedingList.map((item, index) =>
            <li key={index} className="wedding-item">
              {item.name} ： &nbsp;&nbsp;￥{item.price}/桌
              <Icon className="remove-weding" type="close" onClick={() => this.removeWeddingItem(item.name)} />
            </li>)}
        </ul>
        <Modal
          title="添加婚宴"
          width={400}
          visible={visible}
          onOk={this.addWeddingMenu}
          onCancel={this.cancleWeddingMenu}
          okText="确认"
          cancelText="取消">
          <Row className="m5">
            <Col sm={6}>套餐名：</Col>
            <Col sm={18}>
              <Input value={name} onChange={e => this.saveModalValue(e, 'name')} />
            </Col>
          </Row>
          <Row className="m5">
            <Col sm={6}>价格：</Col>
            <Col sm={18}>
              <Input value={price} onChange={e => this.saveModalValue(e, 'price')} />
            </Col>
          </Row>
          <p className="error-tip">{errorTip}</p>
        </Modal>
      </div>
    )
  }
}

WeddingMenu.propTypes = {
}

export default WeddingMenu
