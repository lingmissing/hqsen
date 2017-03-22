<template>
  <div class="content-wrapper">
    <my-breadcrumb :data="breadcrumb"></my-breadcrumb>

    <div class="control-box">
      <el-input
        class="search-input"
        @keyup.enter="handSearch"
        v-if="type === 'hotelAccount'"
        placeholder="跟进账号或酒店筛选"
        icon="search"
        v-model="searchInput"
        :on-icon-click="handSearch">
      </el-input>
       <el-button
        class="add-btn"
        v-if="type.indexOf(addBtnShowType) > -1"
        @click="addRow"
        type="primary">
        新增
      </el-button>
    </div>

    <my-table 
      @handleCurrentChange="handleCurrentChange($event)"
      :currentPage="currentPage"
      :total="total"
      :rowData="rowData" 
      :columnData="columnData">
        <el-table-column
          prop="control"
          label="操作">
            <template scope="scope">
              <!--查看详情-->
              <el-button @click="lookRow(scope)" size="small">查看详情</el-button>
              <!--禁用-->
              <el-button @click="disableRow(scope)" size="small" :plain="true" type="warn">禁用</el-button>
              <!--编辑-->
              <el-button @click="editRow(scope)" size="small">编辑</el-button>
              <!--删除-->
              <el-button @click="rmRow(scope)" size="small" :plain="true" type="danger">删除</el-button>
            </template>
        </el-table-column>
      </my-table>
  </div>
</template>

<style>
.control-box {
  margin: 20px 0;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  & .search-input {
    width: 250px;
  }
  & .add-btn {
    margin-right: 10px;
    float: right;
  }
}
</style>

<script>
  import { TableColumn, Button, Input } from 'element-ui'
  import MyTable from '../../components/MyTable'
  import MyBreadcrumb from '../../components/MyBreadcrumb'
  import config from './config'
  export default {
    components: {
      MyTable,
      MyBreadcrumb,
      ElTableColumn: TableColumn,
      ElButton: Button,
      ElInput: Input
    },
    created () {
      this.setBasicInfo()
    },
    data () {
      return {
        type: '',           // 列表类型
        searchInput: '',    // 输入框
        addBtnShowType: ['hotelAccount', 'innerAccount', 'customArea', 'hotel'],
        breadcrumb: [],     // 导航条
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
        columnData: [], // 表头
        total: 55,     // 总页数
        currentPage: 1 // 当前页
      }
    },
    watch: {
      '$route': 'setBasicInfo'
    },
    methods: {
      // 设置基础信息
      setBasicInfo () {
        const type = this.$route.params.type
        const { breadcrumb, columnData } = config[type]
        this.$emit('setActiveIndex', type)
        this.type = type
        this.breadcrumb = breadcrumb
        this.columnData = columnData
        this.handleCurrentChange(1)
      },
      // 分页跳转
      handleCurrentChange (current) {
        console.log('currentpage', current)
        // Fetch('getData', { id, page: current }).then(response => {
        //  this.rowData = response
        //  this.currentPage = current
        // this.total = total
        // })
      },
      // 搜索
      handSearch () {
        const { searchInput } = this
        if (searchInput) {

        } else {
          console.log('查询内容不能为空')
        }
      },
      // --查看详情--
      lookRow (data) {
        // const rowData = data.row
        this.$router.push({
          path: '/detail',
          name: 'Detail',
          param: { type: this.type },
          query: { id: 1 }
        })
      },
      // --禁用--
      disableRow (data) {

      },
      // --编辑--
      editRow (data) {
        this.$router.push({
          path: '/add',
          name: 'Add',
          params: { type: this.type },
          query: { id: 1 }
        })
      },
      // --删除--
      rmRow (data) {

      },
      // --添加--
      addRow () {
        this.$router.push({
          path: '/add',
          name: 'Add',
          params: { type: this.type }
        })
      }
    }
  }
</script>
