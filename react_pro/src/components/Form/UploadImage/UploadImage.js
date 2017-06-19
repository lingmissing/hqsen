import React, { Component, PropTypes } from 'react'
import { message, Button, Icon } from 'antd'
import axios from 'axios'
import { domain, urlKey } from 'root/Fetch'
import ViewImage from '../../ViewImage'
import './UploadImage.scss'

class UploadImage extends Component {
  static propTypes = {
    setFieldsValue: PropTypes.func
  }
  constructor (props) {
    super(props)
    this.state = {
      uploadList: []
    }
  }
  removeImage (name) {
    const uploadList = this.state.uploadList.filter(item => item.name !== name)
    this.setState({
      uploadList
    })
    this.props.setFieldsValue({
      nnn: JSON.stringify(uploadList)
    })
  }
  uploadImage (e) {
    const { setFieldsValue } = this.props
    const file = e.target.files[0]
    const data = new FormData()
    data.append('file', file)
    axios
      .post(`${domain}${urlKey.uploadPic}`, data)
      .then(response => response.data)
      .then(response => {
        const uploadList = [...this.state.uploadList, response.data.url]
        this.setState({
          uploadList
        })
        console.log(JSON.stringify(uploadList))
        setFieldsValue({
          hotel_image: JSON.stringify(uploadList)
        })
      })
      .catch(error => {
        message.error(error)
      })
  }
  render () {
    return (
      <div className="uploa-image-box">
        <div className="upload-btn-box">
          <Button icon="upload">上传图片</Button>
          <input type="file" accept="image/jpg,image/jpeg,image/png,image/gif" onChange={e => this.uploadImage(e)} />
        </div>
        <ul className="upload-list">
          {this.state.uploadList.map((item, index) =>
            <li key={index} className="upload-item">
              <Icon className="upload-close" type="close" onClick={() => this.removeImage()} />
              <img className="upload-image" onClick={() => ViewImage({ source: item })} src={item} />
            </li>
          )}

        </ul>
      </div>
    )
  }
}

UploadImage.propTypes = {}

export default UploadImage
