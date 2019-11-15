import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = (props) => {
  if (props.location.pathname === '/') {
    return null
  } else {
    return (
      <div>
        <div>
          <img src={props.profile_pic} alt=""/>
          <p>{props.username}</p>
        </div>
        <Link to='/dashboard'>
          <button>Home</button>
        </Link>
        <Link to='/new'>
          <button>New Post</button>
        </Link>
        <Link to='/'>
          <button>Logout</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return reduxState
}

export default withRouter(connect(mapStateToProps)(Nav))