import './App.css';
import React from 'react';
import TodoApp from './components/TodoApp';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TodoApp />
    </div>
  );
}

export default App;
