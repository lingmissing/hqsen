import React, { Component, PropTypes } from 'react'
import './MyCard.scss'

class MyCard extends Component {
  static propTypes = {
    data: PropTypes.object
  }
  render () {
    const { data } = this.props
    return (
      <div className="my-card">
        <div className="card-header">
          {data.create_time} （{data.status_type === '1' ? '总经理' : '财务'}审批{data.status === '6'
            ? '-线下齐全'
            : ''}）
          <span className="card-status">{data.status_view}</span>
        </div>
        <div className="card-body">审批备注：{data.status_desc}</div>
      </div>
    )
  }
}

export default MyCard
