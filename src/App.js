import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Chats from './components/Chats';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPi5DAFZO-YX6EsmeeS9JGuW3cYG8E77o",
  authDomain: "seedsowmatic.firebaseapp.com",
  projectId: "seedsowmatic",
  storageBucket: "seedsowmatic.appspot.com",
  messagingSenderId: "1053929503955",
  appId: "1:1053929503955:web:8437b2dc80a76e53eca826",
  measurementId: "G-XJHJ0LJ6YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import HistoryPage from './components/HistoryPage';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
