
import Header from './components/Header'
import ShowTask from './components/ShowTask'
import AddTask from './components/AddTask'

import './App.css';

import { useState, useEffect } from 'react';



export default function App() {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem('tasklist')) || []);
  const [editid, setEditid] = useState(0);
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


