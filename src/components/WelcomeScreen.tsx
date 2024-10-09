interface WelcomeScreenProps {
  onAccept: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onAccept }) => {
  return (
    <div className="welcome-screen">
      <h1>Análisis de Imágenes IA</h1>
      <p>Bienvenido a nuestra aplicación de análisis de imágenes. Sube una imagen y nuestra IA la analizará para ti.</p>
      <button onClick={onAccept}>Comenzar</button>
    </div>
  );
};

export default WelcomeScreen;