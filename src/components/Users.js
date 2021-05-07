import React, {useContext} from 'react';
import UserItem from '../components/UserItem';
import GithubContext from '../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
        return (
            <div style={userStyle}>
                {githubContext.users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
