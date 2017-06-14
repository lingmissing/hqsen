import config from './config'
import { message } from 'antd'
import { createAction } from 'redux-act'
import Fetch from 'root/Fetch'

// ------------------------------------
// Actions
// ------------------------------------
export const saveActiveKey = createAction('保存当前tab激活key')

export const saveForm = createAction('初始化新增数据')
export const saveDataSource = createAction('保存列表资源')
export const clearData = createAction('清除添加页面数据')
export const toggleLoading = createAction('切换addLoading')
export const toggleAreaSelect = createAction('所在区域的切换')

export const actions = {
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [saveActiveKey]: (state, action) => ({
    ...state,
    activeKey: action.payload
  }),
  [clearData]: (state, action) => initialState
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  activeKey: 'basic',
  weddingMenu: []
}

export default function addHotelReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
