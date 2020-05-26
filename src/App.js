import React, { Component } from 'react';
import './App.css';
import MouseContainer from './components/MouseContainer';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';




class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <ClassMouse />
        <HookMouse /> */}
        <MouseContainer />
      </div>
    );
  }
}

export default App;
