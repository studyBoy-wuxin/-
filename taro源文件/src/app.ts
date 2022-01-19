import { Component } from 'react'
import './app.scss'
import './accept/iconfont/index.css'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  taroGlobalData = {
    musicInfo: {}
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
