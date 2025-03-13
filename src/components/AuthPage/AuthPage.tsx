import { useTheme } from "./../../hooks/useTheme";
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType } from "@zxing/library";
import { useRef, useState, useEffect } from "react";
import LogoCube from "../../common/LogoCube/LogoCube";
import MainScreen from "../MainScreen/MainScreen";
import "./authPage.css";
const AuthPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const { theme } = useTheme();
  const hints = new Map<DecodeHintType, any>();
  hints.set(DecodeHintType.POSSIBLE_FORMATS, [
    BarcodeFormat.EAN_13, // Формат штрих-кода EAN-13
    BarcodeFormat.CODE_128, // Формат штрих-кода Code 128
    BarcodeFormat.UPC_A, // Формат штрих-кода UPC-A
    BarcodeFormat.QR_CODE, // QR-код
  ]);
  hints.set(DecodeHintType.TRY_HARDER, true); // Увеличивает точность сканирования

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const codeReader = new BrowserMultiFormatReader(hints);
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const startScanning = async () => {
    setIsScanning(true);
    const startCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "environment", // Используем заднюю камеру
        },
      });
      const videoTrack = stream.getVideoTracks()[0];
      const capabilities = videoTrack.getCapabilities() as MediaTrackCapabilities & {
        zoom?: { min: number; max: number; step: number };
        focusMode?: string[];
      };

      const constraints: any = {};

      /*  // Настройка зума
      if ("zoom" in capabilities && capabilities.zoom) {
        constraints.zoom = capabilities.zoom.max / 2;
      } */

      // Настройка фокусировки
      if ("focusMode" in capabilities && capabilities.focusMode?.includes("continuous")) {
        constraints.focusMode = "continuous";
      }

      // Применяем все параметры за один вызов
      if (Object.keys(constraints).length > 0) {
        await videoTrack.applyConstraints({ advanced: [constraints] } as MediaTrackConstraints);
      }

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    };

    startCamera().catch((err) => {
      console.error("Ошибка при запуске камеры:", err);
    });
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

  const stopScanning = () => {
    codeReader.reset();
    setIsScanning(false);
    videoRef.current = null;
  };
  useEffect(() => {
    return () => {
      if (codeReader) {
        codeReader.reset();
      }
    };
  }, [codeReader]);
  if (scannedData) {
    return <MainScreen />;
  }
  const startCameraWithZoom = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
      },
    });
    const videoTrack: any = stream.getVideoTracks()[0];
    const capabilities = videoTrack.getCapabilities() as MediaTrackCapabilities & {
      zoom?: { min: number; max: number; step: number };
      focusMode?: string[];
    };
    const settings = videoTrack.getSettings();

    console.log("Возможности камеры:", capabilities);
    console.log("Текущие настройки камеры:", settings);
    if (capabilities.zoom) {
      await videoTrack.applyConstraints({
        advanced: [{ zoom: capabilities.zoom.max / 2 }],
      });
    }

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };
  const startCameraWithFocus = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment",
      },
    });
    const videoTrack: any = stream.getVideoTracks()[0];
    const capabilities = videoTrack.getCapabilities() as MediaTrackCapabilities & {
      zoom?: { min: number; max: number; step: number };
      focusMode?: string[];
    };
    console.log("Возможности камеры:", capabilities);
    if (capabilities.focusMode && capabilities.focusMode.includes("continuous")) {
      await videoTrack.applyConstraints({
        advanced: [{ focusMode: "continuous" }],
      });
    }

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };
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
        <button style={{ bottom: "8%" }} onClick={startCameraWithZoom} className="qr-scan-button">
          <div className="qr-icon">&#x1F4F7;</div>
          <div className="qr-text">Зум</div>
        </button>
        <button style={{ bottom: "2%" }} onClick={startCameraWithFocus} className="qr-scan-button">
          <div className="qr-icon">&#x1F4F7;</div>
          <div className="qr-text">Фокус</div>
        </button>
      </div>
    </header>
  );
};

export default AuthPage;
