import { useState } from "react";
import "./cardDevice.css"; // Подключаем CSS-стили
import SignalCellular2BarIcon from "@mui/icons-material/SignalCellular2Bar";
import Battery20SharpIcon from "@mui/icons-material/Battery20Sharp";

const RScardDevice = ({ el, index }: any) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClick = () => {
    setSelectedCard(index);
  };

  return (
    <div
      style={{ minHeight: "260px" }}
      key={index}
      className={`card ${selectedCard === index ? "selected" : ""}`}
      onClick={handleClick}
    >
      <div className="card-content">
        <div className="status-bar" style={{ background: el.stutusDevice, minHeight: "260px" }}></div>
        <div className="content">
          <div className="main-content">
            <img height={"22%"} style={{ padding: "10px 15px 0px 10px" }} src={el.image} alt={el.name} />
            <div>
              {el.zone.map((item: number, i: number) => {
                return (
                  <div className="row">
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
  );
};

export default RScardDevice;
