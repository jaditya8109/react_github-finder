import './App.css';
import Nav from './components/Navbar';
import Users from './components/Users';
import React from 'react';
import axios from 'axios';

//class based component
class App extends React.Component{
  state = {
    users : [],
    loading: false
  }

  async componentDidMount(){
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users')

    this.setState({ users: res.data, loading: false });
  }

  render(){
    return (
      <div className="App">
        <Nav title='GitHub finder'/>
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
