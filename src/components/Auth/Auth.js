import React, { Component } from 'react'

class Auth extends Component {
  state = {
    username: '',
    password: ''
  }

  handelChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        Auth.js
      </div>
    )
  }
}

export default Auth