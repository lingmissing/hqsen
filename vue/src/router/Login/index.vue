<template>
  <el-form ref="loginForm" label-width="80px" :rules="rules" :model="loginForm">
    <my-component 
      v-for="(comp,index) in formList" 
      :key="index"
      :item="comp.item" 
      :data="comp.data"
      v-model="loginForm[comp.item.name]"
      ></my-component>
    <form-button @submitForm="submitForm('loginForm')"></form-button>
  </el-form>
</template>

<script>
  import { Form } from 'element-ui'
  import MyComponent from '../../components/MyComponent'
  import FormButton from '../../components/MyComponent/FormButton'
  export default {
    components: {
      ElForm: Form,
      MyComponent,
      FormButton
    },
    data () {
      return {
        loginForm: {},
        rules: {},
        formList: [{
          item: {
            type: 'text',
            label: '4',
            name: 'd',
            placeholder: '请输入。。'
          }
        }, {
          item: {
            type: 'text',
            label: '5',
            name: 'e',
            placeholder: '请输入。。'
          }
        }]
      }
    },
    created () {
      sessionStorage.setItem('token', '11111')
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!')
            this.$router.push('/home')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
