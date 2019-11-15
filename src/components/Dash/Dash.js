import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Dash extends Component {
  state = {
    posts: [],
    search: '',
    myPosts: true
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    axios
      .get('/api/posts')
      .then(res => {
        console.log(res.data)
        this.setState({posts: res.data})
      })
      .catch(err => console.log(err))
  }

  render() {
    let posts = this.state.posts.map(el => (
      <div key={el.id}>
        <h1>{el.title}</h1>
        <p>by {el.username}</p>
        <img src={el.profile_pic} alt="" />
      </div>
    ))
    return (
      <div>
        <div>
          <input type="text" />
          <button>Search</button>
          <button>Reset</button>
          <input type="checkbox" />
        </div>
        <div>
          {posts}
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  const { user_id } = reduxState
  return {
    user_id
  }
}

export default connect(mapStateToProps)(Dash)