<template>
  <div class="content-wrapper">
    <my-breadcrumb :data="breadcrumb"></my-breadcrumb>

    <div class="control-box">
      <el-input
        class="search-input"
        v-if="type === 'hotelAccount'"
        placeholder="跟进账号或酒店筛选"
        icon="search"
        v-model="input2"
        :on-icon-click="handleIconClick">
      </el-input>
       <el-button
        class="add-btn"
        v-if="type === 'hotelAccount' || type === 'innerAccount' || type === 'customArea' || type === 'hotel'"
        @click.native.prevent="lookDetail(scope)"
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
          v-if="type == 'custom' || type === 'build'"
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
        <!--酒店操作-->
        <el-table-column
          v-if="type === 'hotel' || type === 'customArea'"
          prop="hh"
          label="操作">
            <template scope="scope">
              <el-button
                @click.native.prevent="lookDetail(scope)"
                size="small">
                编辑
              </el-button>
              <el-button
                @click.native.prevent="lookDetail(scope)"
                size="small" :plain="true" type="danger">
                删除
              </el-button>
            </template>
        </el-table-column>
        <!--酒店账号-->

        <el-table-column
          v-if="type === 'hotelAccount' || type === 'innerAccount'"
          prop="hh"
          label="操作">
            <template scope="scope">
              <el-button
                @click.native.prevent="lookDetail(scope)"
                type="text"
                size="small">
                禁用
              </el-button>
              <el-button
                @click.native.prevent="lookDetail(scope)"
                type="text"
                size="small">
                编辑
              </el-button>
              <el-button
                @click.native.prevent="lookDetail(scope)"
                type="text"
                size="small">
                删除
              </el-button>
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
        type: '',
        breadcrumb: [],
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
        columnData: [],
        total: 55,
        currentPage: 1
      }
    },
    watch: {
      // '$route' (to, from) {
      //   debugger
      //   console.log(to)
      // }
      '$route': 'setBasicInfo'
    },
    methods: {
      setBasicInfo () {
        const type = this.$route.params.type
        const { breadcrumb, columnData } = config[type]
        this.$emit('setActiveIndex', type)
        this.type = type
        this.breadcrumb = breadcrumb
        this.columnData = columnData
        this.handleCurrentChange(1)
      },
      handleCurrentChange (current) {
        console.log('currentpage', current)
        // Fetch('getData', { id, page: current }).then(response => {
        //  this.rowData = response
        //  this.currentPage = current
        // this.total = total
        // })
      },
      lookDetail (data) {
        const rowData = data.row
        console.log(rowData)
      }
    }
  }
</script>
