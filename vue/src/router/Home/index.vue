<template>
  <div class="content-wrapper">
    <my-breadcrumb :data="breadcrumb"></my-breadcrumb>
    <my-table 
      @handleCurrentChange="handleCurrentChange($event)"
      :currentPage="currentPage"
      :total="total"
      :rowData="rowData" 
      :columnData="columnData">
        <el-table-column
          prop="hh"
          label="操作">
            <template scope="scope">
              <el-button
                @click.native.prevent="lookDetail(scope)"
                type="text"
                size="small">
                查看详情
              </el-button>
            </template>
        </el-table-column>
      </my-table>
  </div>
</template>

<script>
  import { TableColumn, Button } from 'element-ui'
  import MyTable from '../../components/MyTable'
  import MyBreadcrumb from '../../components/MyBreadcrumb'
  export default {
    components: {
      MyTable,
      MyBreadcrumb,
      ElTableColumn: TableColumn,
      ElButton: Button
    },
    created () {
      // Customer
      this.$emit('setActiveIndex', '1-1')
    },
    data () {
      return {
        breadcrumb: ['客资/搭建信息', '客资信息列表'],
        rowData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          hh: 'hhhhhh',
          dd: 'ddd'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        columnData: [{
          name: 'date',
          label: '序号'
        }, {
          name: 'name',
          label: '姓名'
        }, {
          name: 'address',
          label: '手机号'
        }, {
          name: '3',
          label: '指定类型'
        }, {
          name: '2',
          label: '酒店/区域名称'
        }],
        total: 55,
        currentPage: 1
      }
    },
    methods: {
      handleCurrentChange (current) {
        console.log('currentpage', current)
        // Fetch('getData', { id, page: current }).then(response => {
        //  this.rowData = response
        //  this.currentPage = current
        // })
      },
      lookDetail (data) {
        const rowData = data.row
        console.log(rowData)
      }
    }
  }
</script>
