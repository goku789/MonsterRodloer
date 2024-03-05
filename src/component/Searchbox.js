import React, { Component } from 'react'
import './searchbox.css'

 class Searchbox extends Component {
  render() {
    return (
        <input
        className={`searchbox ${this.props.classname}`}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      ></input>
    )
  }
}

export default Searchbox
