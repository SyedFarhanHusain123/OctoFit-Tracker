import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Connecting...');

  useEffect(() => {
    // Check backend health
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setBackendStatus(data.status))
      .catch(err => setBackendStatus('Backend offline'));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🏃‍♂️ OctoFit Tracker</h1>
        <p>Social Fitness App for Students</p>
        <div className="status">
          <span>Backend Status: {backendStatus}</span>
        </div>
      </header>

      <section className="features">
        <h2>Features Coming Soon</h2>
        <ul>
          <li>✅ Activity Tracking</li>
          <li>✅ Social Competition</li>
          <li>✅ Leaderboards</li>
          <li>✅ Achievement Badges</li>
          <li>✅ User Profiles</li>
          <li>✅ Fitness Challenges</li>
        </ul>
      </section>
    </div>
  );
}

export default App;