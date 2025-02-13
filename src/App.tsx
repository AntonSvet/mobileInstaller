 
 
 
import logo from './img/elestaLogo.png';
import './App.css';
import {   useEffect, useRef, useState } from 'react';
 import { BrowserMultiFormatReader } from '@zxing/library';
function App() {
     const videoRef = useRef<HTMLVideoElement | null>(null);
     const [scannedData, setScannedData] = useState<string | null>(null);
     const [isScanning, setIsScanning] = useState<boolean>(false);

     const codeReader = new BrowserMultiFormatReader();
 
     const startScanning = async () => {
       setIsScanning(true);

       if (videoRef.current) {
         try {
           await codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
             if (result) {
               setScannedData(result.getText());
              /*  alert(`QR Code Scanned: ${result.getText()}`); */
               stopScanning();
               window.location.href = result.getText();
             }
             if (err && !(err instanceof Error)) {
               console.error(err);
             }
           });
         } catch (error) {
           console.error("Error in QR code scanning:", error);
           alert(`Error in QR code scanning: ${error}`);
         }
       }
     };

     const stopScanning = () => {
       codeReader.reset();
       setIsScanning(false);
     };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Введите ID6 или отсканируйте QR-Code.</p>
        <div className="input-logo">
          <input type="number" />
          <button>Войти</button>
        </div>

        <div>
          <h1>Сканер QR-кода</h1>
          <video ref={videoRef} style={{ width: "100%", display: isScanning ? "block" : "none" }} />
          <button onClick={isScanning ? stopScanning : startScanning}>
            {isScanning ? "Остановить сканирование" : "Начать сканирование"}
          </button>
          {scannedData && <p>Сканированные данные: {scannedData}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
 