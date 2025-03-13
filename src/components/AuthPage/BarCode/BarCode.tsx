import React, { useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const BarcodeScanner: React.FC = () => {
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    const onScanSuccess = (decodedText: string, decodedResult: any) => {
      console.log(`Code matched = ${decodedText}`, decodedResult);
      // Здесь можно обработать результат сканирования
    };

    const onScanFailure = (error: string) => {
      console.warn(`Code scan error = ${error}`);
    };

    scannerRef.current = new Html5Qrcode("reader");
    scannerRef.current
      .start({ facingMode: "environment" }, config, onScanSuccess, onScanFailure)
      .catch((err: string) => {
        console.error(`Unable to start scanning, error = ${err}`);
      });

    return () => {
      if (scannerRef.current) {
        scannerRef.current
          .stop()
          .then(() => {
            console.log("QR Code scanning stopped.");
          })
          .catch((err: string) => {
            console.error(`Unable to stop scanning, error = ${err}`);
          });
      }
    };
  }, []);

  return (
    <div>
      <div id="reader" style={{ width: "100%" }}></div>
    </div>
  );
};

export default BarcodeScanner;
