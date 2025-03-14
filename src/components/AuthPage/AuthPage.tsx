import { useTheme } from "./../../hooks/useTheme";
import { BrowserMultiFormatReader } from "@zxing/library";
import { useRef, useState, useEffect } from "react";
import LogoCube from "../../common/LogoCube/LogoCube";
import MainScreen from "../MainScreen/MainScreen";
import "./authPage.css";
const AuthPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const { theme } = useTheme();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const codeReader = new BrowserMultiFormatReader();
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const [stream, setStream] = useState<MediaStream | null>(null);
  const startScanning = async () => {
    setIsScanning(true);
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    setStream(stream);
    applyMacroMode(); // Применяем настройки для макро-режима
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
    if (videoRef.current) {
      try {
        await codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
          if (result) {
            setScannedData(result.getText());

            stopScanning();
          }
          if (err && !(err instanceof Error)) {
            console.error(err);
          }
        });
      } catch (error) {
        console.error("Error in QR code scanning:", error);
        alert(`Error in QR code scanning: ${error}`);
        stopScanning();
      }
    }
  };
  // Применение настроек для макро-режима
  const applyMacroMode = async () => {
    if (!stream) return;

    const videoTrack: any = stream.getVideoTracks()[0];
    const capabilities = videoTrack.getCapabilities() as MediaTrackCapabilities & {
      zoom?: { min: number; max: number; step: number };
      focusMode?: string[];
    };

    // Ручная фокусировка на минимальное расстояние
    if ("focusMode" in capabilities && capabilities.focusMode?.includes("manual")) {
      await videoTrack.applyConstraints({
        advanced: [{ focusMode: "manual", focusDistance: 0.1 }],
      });
    }

    // Увеличение
    if ("zoom" in capabilities) {
      await videoTrack.applyConstraints({
        advanced: [{ zoom: 2 }], // Увеличение в 2 раза
      });
    }
  };
  const stopScanning = () => {
    codeReader.reset();
    setIsScanning(false);
    videoRef.current = null;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };
  useEffect(() => {
    return () => {
      if (codeReader) {
        codeReader.reset();
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
          setStream(null);
        }
      }
    };
  }, [codeReader]);

  // Применение режима фокусировки
  const applyFocusMode = async (mode: "continuous" | "single-shot" | "manual") => {
    console.log("mode", mode);
    if (!stream) return;

    const videoTrack = stream.getVideoTracks()[0];
    const capabilities = videoTrack.getCapabilities() as MediaTrackCapabilities & {
      zoom?: { min: number; max: number; step: number };
      focusMode?: string[];
    };
    const constraints: any = {};
    if ("focusMode" in capabilities && capabilities.focusMode?.includes(mode)) {
      constraints.focusMode = mode;
      alert(`Режим фокусировки "${mode}" `);
      if (Object.keys(constraints).length > 0) {
        await videoTrack.applyConstraints({ advanced: [constraints] } as MediaTrackConstraints);
      }
      console.log(`Режим фокусировки изменен на: ${mode}`);
    } else {
      alert(`Режим фокусировки "${mode}" не поддерживается камерой.`);
      console.warn(`Режим фокусировки "${mode}" не поддерживается камерой.`);
    }
    if (videoRef.current) {
      try {
        await codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
          if (result) {
            setScannedData(result.getText());
            console.log("Результат сканирования:", result.getText());
            stopScanning();
          }
          if (err && !(err instanceof Error)) {
            console.error(err);
          }
        });
      } catch (error) {
        console.error("Error in QR code scanning:", error);
        alert(`Error in QR code scanning: ${error}`);
        stopScanning();
      }
    }
  };
  const applyZoomMode = async () => {
    if (!stream) return;

    const videoTrack: any = stream.getVideoTracks()[0];
    const capabilities = videoTrack.getCapabilities() as MediaTrackCapabilities & {
      zoom?: { min: number; max: number; step: number };
      focusMode?: string[];
    };
    // Проверка и применение zoom

    if ("zoom" in capabilities && capabilities.zoom) {
      await videoTrack.applyConstraints({
        advanced: [{ zoom: capabilities.zoom.max / 2 }],
      });
      console.log("Зум установлен на:", capabilities.zoom.max / 2);
      alert(`Режим фокусировки "${capabilities.zoom.max / 2}" `);
    } else {
      alert(`Режим Zoom не поддерживается камерой.`);
    }
    if (videoRef.current) {
      try {
        await codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
          if (result) {
            setScannedData(result.getText());
            console.log("Результат сканирования:", result.getText());
            stopScanning();
          }
          if (err && !(err instanceof Error)) {
            console.error(err);
          }
        });
      } catch (error) {
        console.error("Error in QR code scanning:", error);
        alert(`Error in QR code scanning: ${error}`);
        stopScanning();
      }
    }
  };
  if (scannedData) {
    return <MainScreen />;
  }

  return (
    <header className="app-header">
      <div className="logo-elesta">
        {!isScanning && <LogoCube />}
        <video
          ref={videoRef}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            display: isScanning ? "block" : "none",
          }}
        />
      </div>
      <div className="qr-scan-view">
        <p>Введите ID6 или отсканируйте QR-Code</p>
        <div className="input-with-button">
          <input type="text" pattern="[0-9A-Fa-f]" placeholder="Введите ID6 " className="input-field" />
          <button onClick={() => setScannedData("текст")} type="submit" className="submit-button">
            Отправить
          </button>
        </div>

        <button onClick={isScanning ? stopScanning : startScanning} className="qr-scan-button">
          <div className="qr-icon">&#x1F4F7;</div>
          <div className="qr-text">{isScanning ? "Отмена" : "Сканировать QR-код"}</div>
        </button>
        <div style={{ bottom: "1%" }} className="qr-scan-button">
          <button onClick={() => applyFocusMode("continuous")}>Непрерывная фокусировка</button>
          <button onClick={() => applyFocusMode("single-shot")}>Одноразовая фокусировка</button>
          <button onClick={() => applyFocusMode("manual")}>Ручная фокусировка</button>
          <button onClick={applyZoomMode}> Zoom</button>
        </div>
      </div>
    </header>
  );
};

export default AuthPage;
