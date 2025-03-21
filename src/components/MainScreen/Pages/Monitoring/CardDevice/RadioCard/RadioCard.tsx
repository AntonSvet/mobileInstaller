 import { useState } from "react";
import { radioDevice } from "../../../../../../utils/mock";
 import "./radioCard.css";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
 import icon1 from "../../../../../../img/icon/image 33.png"
 import icon2 from "../../../../../../img/icon/image 44.png"
 import icon3 from "../../../../../../img/icon/image 46.png"
 import icon4 from "../../../../../../img/icon/image 47.png"
 import icon5 from "../../../../../../img/icon/image 51.png"
import { devicesActions } from "../../../../../../redux/reducers/devices/devicesReducer";
import { useTypedDispatch } from "../../../../../../hooks/useTypedDispatch";
const RadioCard = ({ handleCloseModal, currentDevice }: any) => {
  const [device, setDevice] = useState(currentDevice);
  const dispatch = useTypedDispatch();
  function deleteDevice() {
    dispatch(devicesActions.removeRadioDevice(device.id));
    handleCloseModal();
  }
  return (
    <div className="radio-card">
      <header>
        <div className="radio-card-top-header">
          <div onClick={handleCloseModal} className="radio-card-back-arrow">
            {"<"}
          </div>

          <div className="radio-header-position">
            <span style={{ fontSize: "clamp(25px, 4vw, 24px)", color: "var(--header-text-color" }}>
              {device.fullName}
            </span>
          </div>

          <div style={{ paddingRight: "5px" }}>
            <SaveTwoToneIcon fontSize="large" />
          </div>
        </div>
        <div className="radio-card-middle-header">
          <div style={{ width: "50%" }}>
            <img width="100%;" src={device.image} alt="logo2084" />
          </div>
          <div className="radio-card-info">
            <div>
              <span>
                {device.name} № {device.number}
              </span>
              <span>S/N: 000000</span>
            </div>
            <div>
              <span>Версия ПО - 1.0а</span>
              <span>Версия АЧ - 1.1а</span>
            </div>
          </div>
        </div>

        <div className="radio-card-bottom-header">
          <div>
            <img src={icon5} alt="logo2084" />
            <span>Корпус - </span>
            <span>Закрыт </span>
          </div>
          <div>
            <img src={icon1} alt="logo2084" />
            <span>Батарея - 90%</span>
            <span>Норма </span>
          </div>

          <div>
            <img src={icon2} alt="logo2084" />
            <span>Уровень сигнала - </span>
            <span>5 (хороший) </span>
          </div>
          <div>
            <img src={icon3} alt="logo2084" />
            <span>Ретранслятор - </span>
            <span>1-2-3 </span>
          </div>
          <div>
            <img src={icon4} alt="logo2084" />
            <span>Температура - </span>
            <span>22°С </span>
          </div>
        </div>
      </header>
      <div className="radio-card-content">
        {device.zone.map((item: any, i: number) => {
          return (
            <div key={i} className="radio-card-one">
              <div className="radio-card-inside">
                <div className="radio-card-block">
                  <div className="radio-card-block-row">
                    <span>{i === 0 ? "Осн.зона" : "Доп.зона"}</span>
                    <input />
                  </div>
                  <div className="radio-card-block-row">
                    <span>Рзд.</span>
                    <input />
                  </div>
                  <div>
                    <input style={{ width: "120px", borderRadius: "6px" }} placeholder="Псевдоним" />
                  </div>
                </div>
                <div className="radio-card-block">
                  <span style={{ marginRight: "8px" }}>Тип</span>
                  <select style={{ fontSize: "17px" }} name="" id="">
                    <option style={{ fontSize: "17px" }}>Охранная с зад.(Проходная) с контр. взлома</option>
                    <option style={{ fontSize: "17px" }} value="Охранная">
                      Охранная
                    </option>
                  </select>
                </div>
                {item && (
                  <div className="radio-card-block">
                    <div className="radio-card-block-row">
                      <span>Задержка вход</span>
                      <input width="30px" />
                    </div>
                    <div className="radio-card-block-row">
                      <span>Выход</span>
                      <input width="30px" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
        <div className="radio-card-one">
          <div className="radio-card-inside">
            <div className="radio-card-block">
              <div>
                <span style={{ marginRight: "8px" }}>Элемент питания</span>
              </div>
              <select style={{ fontSize: "17px" }} name="" id="">
                <option style={{ fontSize: "17px" }}>ER14250(3,6 В)</option>
                <option style={{ fontSize: "17px" }} value="Охранная">
                  ER14250
                </option>
              </select>
            </div>

            <div className="radio-card-checkbox-block">
              <div className="radio-card-checkbox-row">
                <span>Контролировать датчик саботажа</span>
                <input type="checkbox" width="30px" />
              </div>
              <div className="radio-card-checkbox-row">
                <span>Контролировать датчик вскрытия</span>
                <input type="checkbox" width="30px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="radio-card-delete">
        <span onClick={deleteDevice}>Удалить устройство</span>
      </button>
    </div>
  );
};
 
 export default RadioCard;
 