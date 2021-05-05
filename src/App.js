import './App.css';
import Nav from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import User from './components/User';
import React, { Fragment } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//class based component
class App extends React.Component{
  state = {
    users : [],
    user: {},
    loading: false,
    alert: null
  }

  static propTypes ={
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired
  }

  // async componentDidMount(){
  //   this.setState({ loading: true });
  //   const res = await axios.get('https://api.github.com/users')

  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async (text) =>{
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)

    this.setState({ users: res.data.items, loading: false });    
  }

  clearUsers = ()=>{
    this.setState({ users: [], loading: false})
  };

  setAlert = (msg, type)=>{
      this.setState({ alert: {msg:msg, type:type} });
      
      setTimeout(()=> this.setState(
        {alert: null}) , 5000
      );
  }

  //Get Single user
  getUser = async(username)=>{
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`)

    this.setState({ user: res.data, loading: false });    
  
  }

  render(){
    return (
      <Router>
        <div className="App">
        <Nav title='GitHub finder'/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Switch>
            <Route exact path='/' render={props =>(
              <Fragment>
                   <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length>0 ? true : false}
                    setAlert={this.setAlert}/>
                    <Users loading={this.state.loading} users={this.state.users} />
              </Fragment>
            )} />

            <Route exact path='/about' component={About}></Route>

            <Route exact path='/user/:login' render={props=>(
              <User { ...props } getUser={this.getUser} user={this.state.user} loading={this.state.loading}/>
            )} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
