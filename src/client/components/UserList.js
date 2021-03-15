import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }
  render () {
    const { users  } = this.props
    return (
      <div>
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
export default connect(selector, actions)(UserList);
