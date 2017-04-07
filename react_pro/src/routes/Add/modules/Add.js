import config from './config'
import { message } from 'antd'
import { createAction } from 'redux-act'
import Fetch from '../../../Fetch'

// ------------------------------------
// Actions
// ------------------------------------
export const setBasicInfo = createAction('获取新增基础信息')
export const saveForm = createAction('初始化新增数据')
export const saveDataSource = createAction('保存列表资源')
export const clearData = createAction('清除添加页面数据')

export const getInit = (type, id) => {
  return (dispatch, getState) => {
    const basicInfo = config[type]
    dispatch(setBasicInfo({ ...basicInfo, type }))
    if (id) {
      Fetch(basicInfo.detailUrlKey, { id }).then(response => {
        dispatch(saveForm(response.data))
      })
    }
  }
}
// eslint-disable-line
export const getDataSource = (type, id) => {
  return (dispatch, getState) => {
    Fetch('getShanghaiArea', { id }).then(response => {
      dispatch(saveDataSource({ area_list: response.data.area_sh }))
      dispatch(getInit(type, id))
    })
  }
}

export const submitForm = (data, router) => {
  return (dispatch, getState) => {
    const { id, basicInfo } = getState().Add
    const url = id ? basicInfo.editUrlKey : basicInfo.createUrlKey
    const formData = id ? { ...data, id } : { ...data }
    Fetch(url, formData).then(response => {
      message.success('提交成功')
      router.push(`/list/${basicInfo.type}`)
    })
  }
}

export const actions = {
  getInit,
  submitForm,
  getDataSource,
  clearData
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [setBasicInfo]: (state, action) => {
    return {
      ...state,
      basicInfo: action.payload
    }
  },
  [saveForm]: (state, action) => {
    return {
      ...state,
      formData: action.payload
    }
  },
  [saveDataSource]: (state, action) => {
    return {
      ...state,
      dataSource: action.payload
    }
  },
  [clearData]: (state, action) => {
    return initialState
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  id: '',
  loading: false,
  formData: [],
  basicInfo: {
    formList: [],
    breadcrumb: []
  },
  dataSource: {
    area_list: []
  }
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
