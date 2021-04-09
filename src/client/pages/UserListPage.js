import React, { Component } from 'react';

import { Helmet } from 'react-helmet'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  head() {
    return (
      <Helmet>
          <title>Users App</title>
          <meta property="og:title" content="User App" />
      </Helmet> 
    )
  }
  render () {
    const { users  } = this.props
    return (
      <div>
        {this.head()}
        Here is a big list of users
        <ul>
          {users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    )
  }
}

const selector = (state) => {
  return { users: state.users }
}

const actions = {
  fetchUsers
}

const loadData = (store) => {
  return store.dispatch(fetchUsers());
}

export default {
  component: connect(selector, actions)(UserList),
  loadData
}

