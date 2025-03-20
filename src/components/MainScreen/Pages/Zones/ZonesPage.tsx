import { useState } from "react";
import "../Monitoring/FloatingButton/floatingButton.css";
import "./zonesPage.css";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const Zones = () => {
  const [selectedButton, setSelectedButton] = useState<string>("по зонам");
  const { radio, rs485 } = useTypedSelector((state) => state.devices);
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  return (
    <>
      <div className="navigation-header">
        <div className="navigation-buttons">
          <button
            className={`nav-button ${selectedButton === "по разделам" ? "selected" : ""}`}
            onClick={() => handleButtonClick("по разделам")}
          >
            по разделам
          </button>
          <button
            className={`nav-button ${selectedButton === "по зонам" ? "selected" : ""}`}
            onClick={() => handleButtonClick("по зонам")}
          >
            по зонам
          </button>
        </div>
      </div>
      {Array(192)
        .fill(1)
        .map((el, i) => (
          <div className="setting-rs-card-one">
            <div className="setting-rs-card-inside">
              <div
                style={{
                  justifyContent: "space-between",
                }}
                className="setting-rs-card-block"
              >
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div className="setting-rs-card-block-row">
                    <span>Зона</span> <span>{i + 1}</span>
                  </div>
                  <div className="setting-rs-card-block-row">
                    <span>Разд.</span>
                    <span>1</span>
                  </div>
                </div>

                <div>
                  <span>Вх. дверь</span>
                </div>
              </div>
              <div className="setting-rs-card-block">
                <span style={{ fontSize: "19px" }}>
                  {i % 3 ? "Охранная с зад.(Проходная) с контр. взлома" : "Охранная"}
                </span>
              </div>
              {i % 3 ? (
                <div className="setting-rs-card-block">
                  <div className="setting-rs-card-block-row">
                    <span>Задержка вход</span>
                    <span>{i + 28}</span>
                  </div>
                  <div className="setting-rs-card-block-row">
                    <span>Выход</span>
                    <span>{i + 32}</span>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
    </>
  );
};

export default Zones;
