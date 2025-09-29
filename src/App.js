
import Header from './components/Header'
import ShowTask from './components/ShowTask'
import AddTask from './components/AddTask'

import './App.css';

import { useState, useEffect } from 'react';



export default function App() {
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || "medium");

  return (
    <div className={'App'+theme}>
       <div className="container"></div>
        <Header setTheme={setTheme} theme={theme}>
          Taskmate
        </Header>
      
    </div>
  );
}


