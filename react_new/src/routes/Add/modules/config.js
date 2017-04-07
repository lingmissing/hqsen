export default {
  // 新增酒店
  hotel_info_hotel_list: {
    detailUrlKey: 'hotelDetail',
    editUrlKey: 'editHotel',
    createUrlKey: 'createHotel',
    formList: [{
      label: '酒店名称',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '所在区',
      type: 'select',
      name: 'area_id',
      rules: { required: true }
    }, {
      label: '具体地址',
      type: 'text',
      name: 'hotel_address',
      rules: { required: true }
    }, {
      label: '酒店等级',
      type: 'select',
      name: 'hotel_level',
      rules: { required: true }
    }],
    breadcrumb: ['基础信息设定', '酒店信息', '新增酒店']
  },
  // 区域
  hotel_info_area_list: {
    detailUrlKey: 'areaDetail',
    editUrlKey: 'editArea',
    createUrlKey: 'createArea',
    formList: [{
      label: '区域名称',
      type: 'text',
      name: 'area_name',
      rules: { required: true }
    }, {
      label: '所辖地区',
      type: 'checkbox',
      name: 'area_list',
      rules: { required: true }
    }],
    breadcrumb: ['基础信息设定', '客资区域信息', '编辑区域信息']
  },
  // 酒店账号
  account_info__hotel_list: {
    formList: [{
      label: '账号名称',
      type: 'text',
      name: 'name'
    }, {
      label: '所属酒店',
      type: 'select',
      name: 'type',
      data: [{
        label: '静安区',
        value: '1'
      }, {
        label: '静w区',
        value: '2'
      }, {
        label: '静f区',
        value: '3'
      }]
    }, {
      label: '初始密码',
      type: 'password',
      name: 'name'
    }, {
      label: '重置用户密码',
      type: 'password',
      name: 'pass'
    }, {
      label: '再次确认密码',
      type: 'password',
      name: 'checkPass'
    }],
    rules: {
      area: [
        { required: true, message: '请输入活动名称', trigger: 'blur' }
      ]
    },
    breadcrumb: ['账号管理', '账号信息', '新增酒店账号']
  },
  // 内部账号
  account_info__inner_list: {
    formList: [{
      label: '账号名称',
      type: 'text',
      name: 'name'
    }, {
      label: '所属角色',
      type: 'select',
      name: 'type',
      data: [{
        label: '静安区',
        value: '1'
      }, {
        label: '静w区',
        value: '2'
      }, {
        label: '静f区',
        value: '3'
      }]
    }, {
      label: '初始密码',
      type: 'text',
      name: 'name'
    }],
    rules: {
      area: [
        { required: true, message: '请输入活动名称', trigger: 'blur' }
      ]
    },
    breadcrumb: ['账号管理', '账号信息', '新增搭建账号']
  },
  // 设定打款系数
  remittance_info_remittance_ratio: {
    formList: [{
      label: '客资提供者系数',
      type: 'text',
      name: 'name'
    }, {
      label: '客资跟踪者系数',
      type: 'text',
      name: 'type'
    }, {
      label: '搭建提供者系数',
      type: 'text',
      name: 'name'
    }],
    rules: {
      area: [
        { required: true, message: '请输入活动名称', trigger: 'blur' }
      ]
    },
    breadcrumb: ['财务打款', '设置提供者系数']
  },
  // 超管重置密码
  account_info_password_back: {
    formList: [{
      label: '原密码',
      type: 'text',
      name: 'name'
    }, {
      label: '新密码',
      type: 'password',
      name: 'type'
    }, {
      label: '再次确认密码',
      type: 'password',
      name: 'name'
    }],
    rules: {
      type: [
        { required: true, message: '请输入活动名称', trigger: 'blur' }
      ]
    },
    breadcrumb: ['账号管理', '超管重置密码']
  }
}
