import React, { Component } from 'react'

import UserItem from '../components/UserItem';

class Users extends Component {
    state ={
        Users:[{
            id : '1',
        login : 'aditya',
        avatar_url : 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url : 'https://github.com/mojombo'
        },
        {
            id : '2',
        login : 'aj',
        avatar_url : 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url : 'https://github.com/mojombo'
        },
        {
            id : '3',
        login : 'jain',
        avatar_url : 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url : 'https://github.com/mojombo'
        }]
    }

    render() {
        return (
            <div style={userStyle}>
                {this.state.Users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
