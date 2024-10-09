import { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import UploadScreen from './components/UploadScreen';
import AnalysisScreen from './components/AnalysisScreen';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'upload' | 'loading' | 'analysis'>('welcome');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleAccept = () => {
    setCurrentScreen('upload');
  };

  const handleBack = () => {
    setCurrentScreen('welcome');
    setSelectedImage(null);
  };

  const handleImageConfirm = (imageData: string) => {
    setSelectedImage(imageData);
    setCurrentScreen('loading');
  };

  useEffect(() => {
    if (currentScreen === 'loading') {
      const timer = setTimeout(() => {
        setCurrentScreen('analysis');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  return (
    <div className="App">
      {currentScreen === 'welcome' && <WelcomeScreen onAccept={handleAccept} />}
      {currentScreen === 'upload' && <UploadScreen onBack={handleBack} onConfirm={handleImageConfirm} />}
      {currentScreen === 'loading' && <LoadingScreen />}
      {currentScreen === 'analysis' && <AnalysisScreen image={selectedImage} onBack={handleBack} />}
    </div>
  );
}

export default App;