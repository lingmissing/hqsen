<template>
  <div class="content-wrapper">
    <my-breadcrumb :data="basicInfo.breadcrumb"></my-breadcrumb>
    <el-row>
      <el-col :span="8" :offset="8">
        <el-form ref="myForm" label-width="110px" :model="formData" :rules="basicInfo.rules">
          <my-component 
            v-for="(item,index) in basicInfo.formList" 
            :key="index"
            :item="item" 
            v-model="formData[item.name]"/>
            <form-button @submitForm="submitForm" @cancleForm="cancleForm"/>
        </el-form>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  import { Form, Row, Col } from 'element-ui'
  import MyComponent from '../../components/MyComponent'
  import FormButton from '../../components/MyComponent/FormButton'
  import MyBreadcrumb from '../../components/MyBreadcrumb'
  import config from './config'
  import Fetch from '../../Fetch'
  export default {
    components: {
      ElRow: Row,
      ElCol: Col,
      ElForm: Form,
      MyComponent,
      MyBreadcrumb,
      FormButton
    },
    created () {
      this.setBasicInfo()
    },
    data () {
      return {
        type: '',
        formData: {},
        rules: {},
        formList: [],
        breadcrumb: []
      }
    },
    watch: {
      '$route': 'setBasicInfo'
    },
    methods: {
      setBasicInfo () {
        const validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'))
          } else {
            if (this.myForm.checkPass !== '') {
              this.$refs.myForm.validateField('checkPass')
            }
            callback()
          }
        }
        const validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'))
          } else if (value !== this.myForm.pass) {
            callback(new Error('两次输入密码不一致!'))
          } else {
            callback()
          }
        }
        const passrules = {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
        const type = this.$route.params.type
        const { rules, formList, breadcrumb } = config[type]
        this.type = type
        this.formList = formList
        this.breadcrumb = breadcrumb
        this.rules = {
          ...ruless,
          ...passrules
        }
      },
      submitForm () {
        this.$refs.myForm.validate((valid) => {
          if (valid) {
            console.log(this.formData)
            Fetch('data', { formData }).then(response => {
              console.log(response)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      cancleForm () {
        this.$refs.myForm.resetFields()
      }
    }
  }
</script>
