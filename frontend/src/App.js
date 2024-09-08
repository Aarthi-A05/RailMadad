import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FeedbackForm from "./FeedbackForm"; // No need for `.js`
import LoginPage from './LoginPage'; // Import the LoginPage component
import Statistics from './Statistics'; // Import the Statistics component

function App() {
    return (
        <Router> {/* Wrap your app with BrowserRouter */}
            <Header />
            <Routes> {/* Define your routes */}
                <Route path="/" element={<FeedbackForm />} /> {/* Home route */}
                <Route path="/login" element={<LoginPage />} /> {/* Login route */}
                <Route path="/statistics" element={<Statistics />} /> {/* Statistics route */}
            </Routes>
        </Router>
    );
}

export default App;
