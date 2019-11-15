import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'
import Swal from 'sweetalert2'

class Auth extends Component {
  state = {
    username: '',
    password: ''
  }

  register = () => {
    const { username, password } = this.state
    if (username && password) {
      axios
        .post('/auth/register', { username, password })
        .then(res => {
          this.props.updateUser(res.data)
          Swal.fire(`Welcome, ${username}`)
          this.props.history.push('/dashboard')
        })
        .catch(err => Swal.fire(err.response.data.message))
    } else {
      Swal.fire('Please enter a username and password.')
    }
  }

  login = () => {
    const { username, password } = this.state
    axios
      .post('/auth/login', { username, password })
      .then(res => {
        console.log(res.data)
        this.props.updateUser(res.data)
        Swal.fire(`Welcome, ${username}!`)
        this.props.history.push('/dashboard')
      })
      .catch(err => Swal.fire(err.response.data.message))
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <input placeholder='Username' autoComplete='off' value={this.state.username} onChange={this.handleChange} name='username' type="text" />
        <input placeholder='Password' autoComplete='off' value={this.state.password} onChange={this.handleChange} name='password' type="password" />
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  updateUser
}

export default connect(null, mapDispatchToProps)(Auth)