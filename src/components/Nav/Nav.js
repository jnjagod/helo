import React from 'react'
import { withRouter, Link } from 'react-router-dom'

const Nav = (props) => {
  if (props.location.pathname === '/') {
    return null
  } else {
    return (
      <div>
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

export default withRouter(Nav)