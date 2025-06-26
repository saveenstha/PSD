import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [entries, setEntries] = useState([]);
  const [transportMode, setTransportMode] = useState('');
  const [energyUsage, setEnergyUsage] = useState('');
  const [wasteGenerated, setWasteGenerated] = useState('');

  const fetchEntries = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:8000/api/entries/', {
      headers: { Authorization: `Token ${token}` },
    });
    setEntries(response.data);
  };

  const addEntry = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post(
      'http://localhost:8000/api/entries/',
      {
        transport_mode: transportMode,
        energy_usage: parseFloat(energyUsage),
        waste_generated: parseFloat(wasteGenerated),
        date: new Date().toISOString().split('T')[0],
      },
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    fetchEntries();
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div>
      <h1>My Sustainability Dashboard</h1>
      <form onSubmit={addEntry}>
        <input
          placeholder="Transport Mode"
          value={transportMode}
          onChange={(e) => setTransportMode(e.target.value)}
        />
        <input
          placeholder="Energy Usage"
          value={energyUsage}
          onChange={(e) => setEnergyUsage(e.target.value)}
        />
        <input
          placeholder="Waste Generated"
          value={wasteGenerated}
          onChange={(e) => setWasteGenerated(e.target.value)}
        />
        <button>Add Entry</button>
      </form>

      <h2>My Entries</h2>
      <ul>
        {entries.map((entry) => (
          <li key={entry.id}>
            {entry.date}: {entry.transport_mode} - {entry.energy_usage} kWh, {entry.waste_generated} kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
