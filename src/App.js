// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MainContent from './components/mainContent/MainContent';
import './index.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="h-screen flex flex-col">
                <Header className="w-4/5 bg-green-100" />
                <div className="flex flex-1 bg-gray-50">
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </Router>
    );
};

export default App;