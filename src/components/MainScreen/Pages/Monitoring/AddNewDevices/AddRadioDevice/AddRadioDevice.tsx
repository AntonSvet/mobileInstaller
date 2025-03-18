 import { useState } from "react";
import ImageLoader from "../../../../../../common/ImageLoader/ImageLoader";
import "./addRadioDevice.css";
 interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   openDeviceCard: (el: string) => void;
   deviceName: string;
 }

const AddRadioDevice: React.FC<ModalProps> = ({ isOpen, onClose, deviceName, openDeviceCard }) => {
  const [isNewDevice, setIsNewDevice] = useState<boolean>(false);
  function openNewDevice() {
    setIsNewDevice(true);
    setTimeout(() => {
      setIsNewDevice(false);
      openDeviceCard(deviceName);
    }, 2000);
  }
  if (!isOpen) return null;
  return (
    <div className="new-radio-card">
      <header>
        <div onClick={onClose} className="new-radio-back-arrow">
          {"<"}
        </div>
        <div className="new-radio-font-size">
          <span>{deviceName}</span>
        </div>

        <div className="new-radio-instruction">
          <span>1.Для батареи "ER14250" должна быть проведена предварительная депассивация</span>
          <span>2.Установите элемент питания в датчик </span>
          <span>3.При зажатой кнопке mode переведите выключатель в положение on. </span>
          <span>4.Датчик перейдет в режим обучения далее нажать кнопку “Продолжить”. </span>
        </div>
      </header>
      <div className="new-radio-content">
        <button onClick={openNewDevice} className="new-radio-one">
          <div className="new-radio-inside">
            <span>Продолжить</span>
          </div>
        </button>
      </div>
      {isNewDevice && <ImageLoader title={"Поиск устройства"} />}
    </div>
  );
};

export default AddRadioDevice;
