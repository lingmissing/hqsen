import 'es6-promise'
import axios from 'axios'
import { Modal } from 'antd'

const urlKey = {
  login: 'c=user&f=login',
  registerList: 'c=account&f=registerAccountList',
  configData: 'c=user&f=configData',
  changeDisabledStaus: 'c=account&f=accountChangeStatus',
  // hotel
  hotelList: 'c=hotel&f=hotelList',
  createHotel: 'c=hotel&f=hotelCreate',
  editHotel: 'c=hotel&f=hotelEdit',
  deleteHotel: 'c=hotel&f=hotelDelete',
  hotelDetail: 'c=hotel&f=hotelDetail',
  // area
  areaList: 'c=area&f=areaList',
  createArea: 'c=area&f=areaCreate',
  editArea: 'c=area&f=areaEdit',
  deleteArea: 'c=area&f=areaDelete',
  areaDetail: 'c=area&f=areaDetail',
  // 客资产列表详情
  keziList: 'c=kezi&f=keziList',
  keziDetail: 'c=kezi&f=keziDetail',
  // 搭建列表详情
  dajianList: 'c=dajian&f=dajianList',
  createdajian: 'c=dajian&f=dajianCreate',
  getShanghaiArea: 'c=area&f=areaSH',
  feedback: 'c=user&f=feedback',
  // 酒店账户列表
  hotelAccountList: 'c=account&f=hotelAccountList',
  getHotelSelect: 'c=account&f=hotelList',
  addHotelAccount: 'c=account&f=hotelAccountAdd',
  hotelAccountDetail: 'c=account&f=hotelAccountDetail',
  hotelAccountEdit: 'c=account&f=accountEdit',
  deleteHotelAccount: 'c=account&f=accountDelete',
  // 内部账号
  innerAccountList: 'c=account&f=innerAccountList',
  addInnerAccount: 'c=account&f=innerAccountAdd',
  innerAccountDetail: 'c=account&f=innerAccountDetail',
  innerAccountEdit: 'c=account&f=accountEdit',
  deleteInnerAccount: 'c=account&f=accountDelete',
  // 超管重置密码
  resetPwd: 'c=account&f=adminAccountEdit'
}

const formatData = (param) => {
  let newData = ''
  for (let key in param) {
    newData += `${key}=${param[key]}&`
  }
  return newData.substring(0, newData.length - 1)
}

export default function Fetch (url, data = {}, method = 'post', showLoading = false) {
  // 开启loding
  let loadingInstance
  let domain = 'http://dev.meiui.me/index.php?m=web&'
  const token = sessionStorage.getItem('access_token') || ''

  if (method === 'get') {
    data = { params: { ...data, access_token: token } }
  } else {
    data = formatData({ ...data, access_token: token })
  }
  const instance = axios.create({
    timeout: 10000,
    validateStatus: function (status) {
      return status >= 200 && status < 300
    }
  })
  const defer = new Promise((resolve, reject) => {
    instance[method](`${domain}${urlKey[url]}`, data)
    .then(response => response.data)
    .then(response => {
      if (response.status === 200) {
        resolve(response)
      } else if (response.message === '登录失效请重新登录') {
        // 登录失效
        Modal.error({
          title: '错误提示',
          content: response.message
        })
        setTimeout(() => {
          window.location.href = '#/login'
        }, 3000)
      } else {
        Modal.error({
          title: '错误提示',
          content: response.message
        })
        reject(response, true)
      }
    })
    .catch((error) => {
      reject(error, false)
      showLoading && loadingInstance.close()
      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        Modal.error({
          title: '错误提示',
          content: '网络响应错误'
        })
      } else if (error.message.indexOf('timeout') > -1) {
        Modal.error({
          title: '错误提示',
          content: '网络请求超时'
        })
      } else {
        Modal.error({
          title: '错误提示',
          content: '接口异常'
        })
      }
      console.log(error.config)
    })
  })
  return defer
}

