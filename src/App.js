import { app } from './firebase';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Login from './components/Login';
import Chats from './components/Chats';
import HistoryPage from './components/HistoryPage';





function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
