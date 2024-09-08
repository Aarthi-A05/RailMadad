import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function LoginPage() {
  const [username, setUsername] = useState(''); // Added username state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate(); // Get the navigate function

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // Update username state
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage('Please enter username, email, and password.');
      return;
    }

    if (username === 'Detonate' && password === 'SIH24SW091' && email === 'detonate@gmail.com') {
      navigate('/Statistics'); 
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow" style={{ width: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input 
                type="text" className="form-control" id="username" value={username} onChange={handleUsernameChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <div className="text-center mt-3"> {/* Add margin top here */}
              <button type="submit" className="btn btn-success">Login</button>
            </div>
          </form>
          {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
