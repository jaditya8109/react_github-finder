import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class User extends Component {
    componentDidMount(){
        this.props.getUser(this.props.match.params.login)
    }

    static propTypes = {
        user: PropTypes.object.isRequired,
        getUser: PropTypes.func.isRequired,
    }

    render() {
        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            company,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists
        } = this.props.user;

        return (
            <Fragment>
                <Link to='/' className="btn btn_light">Back to Search</Link>

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" alt=""
                        style={{ width: '150px' }}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                    </div>

                    <div>
                        {bio && (<Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            </Fragment>)}
                            <a href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
                            <ul>
                                <li>
                                    {login && <Fragment>
                                            <strong>Username: </strong> {login}
                                        </Fragment>}
                                </li>
                                <li>
                                    {company && <Fragment>
                                            <strong>Company: </strong> {company}
                                        </Fragment>}
                                </li>
                                <li>
                                    {blog && <Fragment>
                                            <strong>Website: </strong> {blog}
                                        </Fragment>}
                                </li>
                            </ul>
                    </div>
                </div>

                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers}</div>
                    <div className='badge badge-success'>Following: {following}</div>
                    <div className='badge badge-light'>Public Repos: {public_repos}</div>
                    <div className='badge badge-dark'>Publuc Gists: {public_gists}</div>
                </div>
            </Fragment>
        )
    }
}

export default User