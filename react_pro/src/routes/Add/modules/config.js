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
  // 详细设定
  hotel_info_hotel_lis: {
    detailUrlKey: 'hotelDetail',
    editUrlKey: 'editHotel',
    createUrlKey: 'createHotel',
    formList: [{
      label: '酒店价位',
      type: 'text',
      name: 'hotel_nam22e',
      rules: { required: true }
    }, {
      label: '酒店最大容纳桌数',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '酒店联系电话',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '酒店介绍图片',
      type: 'upload',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '婚宴菜单',
      type: 'wedding',
      name: 'area_id',
      rules: { required: true }
    }],
    breadcrumb: ['基础信息设定', '酒店信息', '新增酒店']
  },
  // 婚宴菜单
  hotel_info_hotel_lisww: {
    detailUrlKey: 'hotelDetail',
    editUrlKey: 'editHotel',
    createUrlKey: 'createHotel',
    formList: [{
      label: '宴会厅名称',
      type: 'text',
      name: 'hotel_nam22e',
      rules: { required: true }
    }, {
      label: '最大容纳桌数',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '最少容纳桌数',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '最佳容纳桌数',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '宴会厅面积',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '宴会厅立柱数',
      type: 'text',
      name: 'hotel_name',
      rules: { required: true }
    }, {
      label: '酒店介绍图片',
      type: 'upload',
      name: 'hotel_name',
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
  account_info_hotel_list: {
    createUrlKey: 'addHotelAccount',
    editUrlKey: 'hotelAccountEdit',
    detailUrlKey: 'hotelAccountDetail',
    formList: [{
      label: '账号名称',
      type: 'text',
      name: 'user_name',
      rules: { required: true }
    }, {
      label: '所属酒店',
      type: 'select',
      name: 'hotel_id',
      rules: { required: true }
    }],
    breadcrumb: ['账号管理', '账号信息', '新增酒店账号']
  },
  // 内部账号
  account_info_inner_list: {
    createUrlKey: 'addInnerAccount',
    editUrlKey: 'innerAccountEdit',
    detailUrlKey: 'innerAccountDetail',
    formList: [{
      label: '账号名称',
      type: 'text',
      name: 'user_name',
      rules: { required: true }
    }, {
      label: '所属角色',
      type: 'select',
      name: 'user_type',
      rules: { required: true }
    }, {
      label: '所属区域',
      type: 'select',
      name: 'area_id',
      hide: true
    }],
    breadcrumb: ['账号管理', '账号信息', '新增搭建账号']
  },
  // 设定打款系数
  remittance_info_remittance_ratio: {
    detailUrlKey: 'payDetail',
    editUrlKey: 'paySubmit',
    formList: [{
      label: '客资提供者系数',
      type: 'text',
      name: 'kezi_user'
    }, {
      label: '客资跟踪者系数',
      type: 'text',
      name: 'kezi_hotel'
    }, {
      label: '搭建提供者系数',
      type: 'text',
      name: 'dajian_user'
    }],
    breadcrumb: ['设置提供者系数']
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
