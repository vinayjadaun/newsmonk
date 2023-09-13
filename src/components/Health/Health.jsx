import React, { Component } from 'react'
import News from '../News/News'

export default class Sports extends Component {
  render() {
    return (
      <div>
        
         <News pageSize={8} country ='in'category='health'/>
        
      </div>
    )
  }
}
