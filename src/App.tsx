import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "리액트";
  let port = undefined;
  
  const style = {
    backgroundColor: 'black',
    color: 'yellow'
  }

  return (
    <div style={style}>
      <h1>Hello {name}</h1>
      <p>반갑습니다</p>
      <div>{port || 3000}</div>
    </div>
  );
}

export default App;