import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MyBreadcrumb from 'components/MyBreadcrumb'
import { Table, Button } from 'antd'
import './Follow.scss'

class Follow extends Component {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentWillMount () {}

  componentWillUnmount () {}

  render () {
    const columns = [
      {
        key: 'order_money',
        dataIndex: 'order_money',
        title: '联系人'
      },
      {
        key: 'order_money',
        dataIndex: 'order_money',
        title: '跟踪方'
      },
      {
        key: 'order_money',
        dataIndex: 'order_money',
        title: '创建时间'
      },
      {
        key: 'order_money',
        dataIndex: 'order_money',
        title: '订单状态'
      },
      {
        key: 'order_money',
        dataIndex: 'order_money',
        title: '操作',
        render: text => (
          <div>
            <Button>壳子详情</Button>
            <Button>跟进日志</Button>
          </div>
        )
      }
    ]

    const pagination = {
      current: pageInfo.page,
      total: resultInfo.count,
      showQuickJumper: true,
      pageSize: pageInfo.pagesize,
      showTotal (total) {
        return `共 ${total} 条`
      }
    }
    return (
      <div className="list-page">
        <MyBreadcrumb breadcrumb={[]} />
        <Table
          loading={loading}
          rowKey={record => record[basicInfo.uniqueKey]}
          pagination={pagination}
          onChange={pageInfo => handleCurrentChange(pageInfo.current)}
          dataSource={resultInfo.list}
          columns={columns}
        />
      </div>
    )
  }
}

export default Follow
