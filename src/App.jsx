// src/App.jsx

import React, { useState } from 'react';
import BirthdayPage from './components/BirthdayPage';
import VideoPlayer from './components/VideoPlayer';

function App() {
  // State untuk mengontrol tampilan: 'video' atau 'birthday'
  const [currentView, setCurrentView] = useState('video');

  // Fungsi ini akan dipanggil oleh VideoPlayer saat sudah selesai
  const handleVideoFinish = () => {
    setCurrentView('birthday');
  };

  // Logika render yang sangat sederhana
  if (currentView === 'video') {
    // Jika state adalah 'video', tampilkan HANYA VideoPlayer
    return <VideoPlayer onFinish={handleVideoFinish} />;
  } else {
    // Jika state adalah 'birthday', tampilkan HANYA BirthdayPage
    return <BirthdayPage />;
  }
}

export default App;