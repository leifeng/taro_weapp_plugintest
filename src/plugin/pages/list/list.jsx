import { Component } from "react";
import { View } from "@tarojs/components";
import { getCurrentInstance } from "@tarojs/taro";
import "./list.css";

export default class Index extends Component {
  $instance = getCurrentInstance();
  componentDidMount() {
    console.log(this.$instance.router);
    console.log(this.$instance.router.params);
  }
  render() {
    return <View>test</View>;
  }
}
