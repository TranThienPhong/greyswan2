import React from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { timelineData } from './timelineData';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-rich-black">
      <Header />
      <Timeline data={timelineData} />
    </div>
  );
}

export default App;
