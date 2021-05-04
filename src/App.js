import './App.css';
import Nav from './components/Navbar';
import Users from './components/Users';
import Search from './components/Search';
import Alert from './components/Alert';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

//class based component
class App extends React.Component{
  state = {
    users : [],
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

  render(){
    return (
      <div className="App">
        <Nav title='GitHub finder'/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Search 
          searchUsers={this.searchUsers} 
          clearUsers={this.clearUsers}
          showClear={this.state.users.length>0 ? true : false}
          setAlert={this.setAlert}/>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
