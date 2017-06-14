import React, { Component, PropTypes } from 'react'
import { Form, Button, Popconfirm, Tabs } from 'antd'
import MyBreadcrumb from 'components/MyBreadcrumb'
import FormComponent from 'components/FormComponent'
import ConfirmComponent from './ConfirmComponent'
const TabPane = Tabs.TabPane
import './AddHotel.scss'

class AddHotel extends Component {
  static propTypes = {
    AddHotel: PropTypes.object,
    saveActiveKey: PropTypes.func
  }
  constructor () {
    super()
    this.toggleTab = this.toggleTab.bind(this)
  }
  toggleTab (key) {
    this.props.saveActiveKey(key)
  }
  render () {
    const {
      AddHotel: { activeKey }
    } = this.props
    return (
      <div className="add-page">
        <MyBreadcrumb breadcrumb={basicInfo.breadcrumb} />
        <div className="tabs-box">
          <Tabs className="add-tabs" activeKey={activeKey} size="small" onChange={this.toggleTab}>
            <TabPane tab="基础信息" key="basic" />
            <TabPane tab="详细设定" key="detail" />
            <TabPane tab="宴会厅设置" key="yanhui" />
          </Tabs>
        </div>
      </div>
    )
  }
}

export default AddHotel
