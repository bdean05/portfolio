import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import TodoList from './components/TodoList'


function App() {
  return (
    <div className="App">

      <Header />
      <Contact />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
