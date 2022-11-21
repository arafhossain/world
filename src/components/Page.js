import React, { Component } from 'react'
import NavBar from './NavBar';
import { Waves } from './Waves'

export class Page extends Component {
  constructor(props){
    super(props)
    this.state = {
      route: 'Home'
    }
  }
  clickRoute = (route) => {
    this.setState({route})
  }
  render() {
    return (
      <div>
        <NavBar clickRoute={this.clickRoute} currentRoute={this.state.route}/>
        <Waves />
      </div>
    )
  }
}
