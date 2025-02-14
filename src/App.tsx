 
 
 
 
import "./App.css";
import { useRef, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
        <p>Введите ID6 или отсканируйте QR-Code.</p>
        {/*  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} className="input-logo">
          <input className="input-value" inputMode="numeric" type="text" pattern="[0-9A-Fa-f]" />
          <button className="login-button">
            <span className="login-icon">&#x1F511;</span>
            <span className="login-text">Войти</span>
          </button>
        </div> */}
        <div className="input-with-button">
          <input
            inputMode="numeric"
            type="text"
            pattern="[0-9A-Fa-f]"
            placeholder="Введите ID6 "
            className="input-field"
          />
          <button type="submit" className="submit-button">
            Отправить
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <video
            ref={videoRef}
            style={{ paddingBottom: "22px", width: "70%", display: isScanning ? "block" : "none" }}
          />

          <button onClick={isScanning ? stopScanning : startScanning} className="qr-scan-button">
            <span className="qr-icon">&#x1F4F7;</span>
            <span className="qr-text">{isScanning ? "Остановить сканирование" : "Сканировать QR-код"}</span>
          </button>
          {scannedData && <p>Сканированные данные: {scannedData}</p>}
        </div>
      </header>
    </div>
  );
}

export default App;
 