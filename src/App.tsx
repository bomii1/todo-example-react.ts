import React from 'react';
import './App.css';
import TodoList from './Todolist';
import Timer from './Timer';
import Clock from './Timer';

function App() {

  return (
    <div className='container'>
      <TodoList />
      <Clock />
    </div>
  );
}

export default App;