import { Component } from 'react'
import CMS from 'netlify-cms'

export default class App extends Component {
  componentDidMount () {
    CMS.init({ config: this.props.config })
  }

  render () {
    return (
      <div></div>
    )
  }
}
