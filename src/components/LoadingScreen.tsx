import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>Analizando imagen...</p>
    </div>
  );
};

export default LoadingScreen;