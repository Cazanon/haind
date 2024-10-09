import React from 'react';

interface AnalysisScreenProps {
  image: string | null;
  onBack: () => void;
}

const AnalysisScreen: React.FC<AnalysisScreenProps> = ({ image, onBack }) => {
  // This is a placeholder for the AI analysis. In a real application,
  // you would call an API to get the image description.
  const placeholderDescription = "Esta es una imagen de ejemplo. En una aplicación real, aquí se mostraría una descripción generada por IA basada en el análisis de la imagen subida.";

  const shareResult = (platform: string) => {
    const shareText = encodeURIComponent("¡Mira el análisis de mi imagen con IA!");
    const shareUrl = encodeURIComponent(window.location.href);
    let shareLink = '';

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`;
        break;
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`;
        break;
    }

    if (shareLink) {
      window.open(shareLink, '_blank');
    }
  };

  return (
    <div className="analysis-screen">
      <h1>Análisis de Imagen</h1>
      {image && (
        <div className="analysis-content">
          <img src={image} alt="Analyzed" className="analyzed-image" />
          <div className="description">
            <h2>Descripción:</h2>
            <p>{placeholderDescription}</p>
          </div>
          <div className="share-options">
            <h3>Compartir resultado del análisis:</h3>
            <div className="share-buttons">
              <button onClick={() => shareResult('twitter')} className="share-button twitter">Twitter</button>
              <button onClick={() => shareResult('facebook')} className="share-button facebook">Facebook</button>
              <button onClick={() => shareResult('linkedin')} className="share-button linkedin">LinkedIn</button>
              <button onClick={() => shareResult('whatsapp')} className="share-button whatsapp">WhatsApp</button>
            </div>
          </div>
        </div>
      )}
      <button className="back-button" onClick={onBack}>Volver al Inicio</button>
    </div>
  );
};

export default AnalysisScreen;