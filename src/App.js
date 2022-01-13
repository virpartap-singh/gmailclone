import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Mail from './Components/Mail';
import EmailList from './Components/EmailList';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <EmailList />
        <Routes >
        <Route path="/" element={<EmailList />} />
        <Route path="/mail" element={<Mail />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
