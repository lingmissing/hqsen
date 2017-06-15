import React, { Component, PropTypes } from 'react'
import { Upload, message, Button, Icon } from 'antd'
import './UploadImage.scss'

class UploadImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      uploadList: []
    }
  }
  removeImage (name) {
    this.setState({
      uploadList: this.state.uploadList.filter(item => item.name !== name)
    })
  }
  render () {
    // const { setFieldsValue } = this.props
    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text'
      },
      onChange (info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`)
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }
    return (
      <div className="uploa-image-box">
        <Upload {...props} className="upload-btn">
          <Button size="small">
            <Icon type="upload" /> 上传图片
          </Button>
        </Upload>
        <ul className="upload-list">
          <li className="upload-item">
            <Icon className="upload-close" type="close" onClick={() => this.removeImage()} />
            <img className="upload-image" src="aa.kpg" />
          </li>
        </ul>
      </div>
    )
  }
}

UploadImage.propTypes = {
}

export default UploadImage
