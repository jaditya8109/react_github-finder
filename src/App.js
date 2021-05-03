import './App.css';
import Nav from './components/Navbar';
import Users from './components/Users';
import React from 'react';

//class based component
class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Nav title='GitHub finder'/>
        <div className="container">
          <Users />
        </div>
        
        <h1>Hello from Aditya</h1>
      </div>
    );
  }
}

export default App;
