import { useState } from "react";
import "./cardDevice.css"; // Подключаем CSS-стили
import SignalCellular2BarIcon from "@mui/icons-material/SignalCellular2Bar";
import Battery20SharpIcon from "@mui/icons-material/Battery20Sharp";

const RScardDevice = ({ openSettingModal, el, index }: any) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = () => {
    setSelectedCard(index);
  };

  return (
    <div
      style={{ minHeight: "260px" }}
      key={index}
      className={`card ${selectedCard === index ? "selected" : ""}`}
      onClick={openSettingModal}
    >
      <div className="card-content">
        <div className="status-bar" style={{ background: el.stutusDevice, minHeight: "260px" }}></div>
        <div className="content">
          <div className="main-content">
            <div className="image-device">
              <img src={el.image} alt={el.name} />
            </div>

            <div>
              {el.zone.map((item: number, i: number) => {
                return (
                  <div key={i} className="row">
                    <div className="text">
                      <span>
                        Проводная. зона {item}, рзд. {el.section[i]}
                      </span>
                    </div>
                    <div className="status-indicator" style={{ background: el.statusZone[i] }}></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footer" style={{ marginLeft: "8px" }}>
            <div className="text">
              <span style={{ fontSize: "17px" }}>
                {el.name} №{el.number}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RScardDevice;
