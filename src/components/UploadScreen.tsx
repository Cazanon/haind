import { useState, useRef } from 'react';

interface UploadScreenProps {
  onBack: () => void;
  onConfirm: (imageData: string) => void;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ onBack, onConfirm }) => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleConfirm = () => {
    if (image) {
      onConfirm(image);
    }
  };

  return (
    <div className="upload-screen">
      <h1>Subir Imagen</h1>
      <p>Selecciona una imagen de tu dispositivo o captura una nueva con la cámara.</p>
      <div className="upload-options">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <button onClick={() => fileInputRef.current?.click()}>Subir Imagen</button>
        <button onClick={handleCameraCapture}>Usar Cámara</button>
      </div>
      {image && (
        <div className="preview">
          <h2>Vista Previa</h2>
          <img src={image} alt="Preview" />
          <button className="confirm-button" onClick={handleConfirm}>Confirmar Imagen</button>
        </div>
      )}
      <button className="back-button" onClick={onBack}>Volver</button>
    </div>
  );
};

export default UploadScreen;