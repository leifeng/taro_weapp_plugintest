import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import './avatar.css'

export default class Avatar extends Component {
  render () {
    return (
      <View>
        <Image src='http://storage.360buyimg.com/taro-static/static/images/logo.png' />
      </View>
    )
  }
}
