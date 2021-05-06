import './App.css';
import Nav from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import User from './components/User';
import React, { Fragment, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//class based component
const App= ()=>{
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // state = {
  //   users : [],
  //   user: {},
  //   loading: false,
  //   alert: null
  // }

  // async componentDidMount(){
  //   this.setState({ loading: true });
  //   const res = await axios.get('https://api.github.com/users')

  //   this.setState({ users: res.data, loading: false });
  // }

  const searchUsers = async (text) =>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`)

    setUsers(res.data.items);   
    setLoading(false); 
  }

  const clearUsers = ()=>{
    setUsers([]);
    setLoading(false);
  };

  const showAlert = (msg, type)=>{
      setAlert({msg:msg, type:type});
      
      setTimeout(()=> this.setState(
        {alert: null}) , 5000
      );
  }

  //Get Single user
  const getUser = async(username)=>{
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}`)

    setUser(res.data);
    setLoading(false);   
  }

    return (
      <Router>
        <div className="App">
        <Nav title='GitHub finder'/>
        <div className="container">
          <Alert alert={alert}/>
          <Switch>
            <Route exact path='/' render={props =>(
              <Fragment>
                   <Search 
                    searchUsers={searchUsers} 
                    clearUsers={clearUsers}
                    showClear={users.length>0 ? true : false}
                    setAlert={showAlert}/>
                    <Users loading={loading} users={users} />
              </Fragment>
            )} />

            <Route exact path='/about' component={About}></Route>

            <Route exact path='/user/:login' render={props=>(
              <User { ...props } getUser={getUser} user={user} loading={loading}/>
            )} />
          </Switch>
        </div>
      </div>
      </Router>
    );
}


export default App;
