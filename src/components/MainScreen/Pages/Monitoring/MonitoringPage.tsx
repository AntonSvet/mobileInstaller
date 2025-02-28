import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import "./monitoringPage.css";
import device6270 from "../../../../img/device/6270.png";
import device2084 from "../../../../img/device/s_fonom_2084.png";
import { useRef, useState } from "react";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import Battery20SharpIcon from "@mui/icons-material/Battery20Sharp";
import SignalCellular2BarIcon from "@mui/icons-material/SignalCellular2Bar";
import FloatingButton from "./FloatingButton/FloatingButton";
import ImageLoader from "../../../../common/ImageLoader/ImageLoader";
import useImageLoader from "../../../../hooks/useImageLoader";
import { radioDevice } from "../../../../utils/mock";
import useResizeObserver from "../../../../hooks/useResizeObserver";

const MonitoringPage = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useResizeObserver(headerRef);
  const { progress, isLoading } = useImageLoader(document.querySelectorAll("img"));

  return (
    <>
      {isLoading && (
        <div>
          <ImageLoader progress={progress} />;
        </div>
      )}
      <div
        ref={headerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 48,
          left: 0,
          zIndex: 1000,
          width: "100%",
          background: " var(--background-header)",
          visibility: isLoading ? "hidden" : "visible",
        }}
      >
        <div className="device-grid-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: " var(--background-header)",
              marginLeft: "14px",
            }}
          >
            <span>Sim 1</span>
            <div style={{ margin: "0px 3px 0px 3px" }}>
              <SignalCellular2BarIcon />
            </div>

            <Battery20SharpIcon />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              background: " var(--background-header)",
              marginLeft: "5px",
            }}
          >
            <img style={{ maxWidth: "110px", paddingRight: "20px" }} width={"40%"} src={device2084} alt="logo" />

            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "var( --text-color)" }}>Провод. Зона 1, рзд. 1</span>
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    background: "green",
                    borderRadius: "20px",
                    marginLeft: "10px",
                  }}
                ></div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "var( --text-color)" }}>Провод. Зона 2, рзд. 1</span>
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    background: "red",
                    borderRadius: "20px",
                    marginLeft: "10px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <NavigationButtons />

        <div className="form-control">
          <select className="native-select" name="Фильтры">
            <option value="10">Фильтры</option>
            <option value="20">Все устройства</option>
            <option value="30">Устр. содерж. Зоны</option>
          </select>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0px 5px 85px 5px",
          marginTop: `${headerHeight + 10}px`,
          visibility: isLoading ? "hidden" : "visible",
        }}
      >
        {radioDevice.map((el, index) => {
          return (
            <Card key={index} className="cardSettings" elevation={24}>
              <CardActionArea
                onClick={() => setSelectedCard(1)}
                data-active={selectedCard === 1 ? "" : undefined}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  "&[data-active]": {
                    backgroundColor: "action.selected",
                    "&:hover": {
                      backgroundColor: "action.selectedHover",
                    },
                  },
                }}
              >
                <div style={{ height: "134px", width: "8px", background: `${el.stutusDevice}` }}></div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img width={"21%"} src={el.image} alt="logo2084" />
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span style={{ color: "var( --text-color)" }}>
                            Беспровод. зона {el.zone[0]}, рзд. {el.section[0]}
                          </span>
                        </div>
                        <div
                          style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "20px",
                            marginLeft: "10px",
                            background: `${el.statusZone[0]}`,
                          }}
                        ></div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {el.zone[1] === null ? (
                            <span style={{ color: "#c0c0c0" }}>Дополн. зона {el.zone[1]} </span>
                          ) : el.zone[1] ? (
                            <span>
                              Дополн. зона {el.zone[1]},рзд {el.section[1]}
                            </span>
                          ) : (
                            <span></span>
                          )}
                        </div>
                        {el.statusZone[1] && (
                          <div
                            style={{
                              width: "15px",
                              height: "15px",
                              borderRadius: "20px",
                              marginLeft: "10px",
                              background: `${el.statusZone[1]}`,
                            }}
                          ></div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-end", marginTop: "17px", marginLeft: "5px" }}>
                    <div style={{ color: "var( --text-color)" }}>
                      <span style={{ fontSize: "17px" }}>
                        Р/У {el.name} №{el.number}
                      </span>
                    </div>
                    <div style={{ margin: "0px 3px 0px 5px" }}>
                      <SignalCellular2BarIcon />
                    </div>
                    <div style={{ margin: "0px 3px 0px 3px" }}>
                      <Battery20SharpIcon />
                    </div>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          );
        })}

        <Card className="cardSettings" elevation={24}>
          <CardActionArea
            onClick={() => setSelectedCard(1)}
            data-active={selectedCard === 1 ? "" : undefined}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <div style={{ height: "134px", width: "10px", background: "red" }}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img style={{ padding: "6px 25px 0px 20px" }} width={"12%"} src={device6270} alt="logo2084" />
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "var( --text-color)" }}>Радио клавиатура, рзд 3</span>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        background: "white",
                        borderRadius: "20px",
                        marginLeft: "10px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", margin: "5px 0px 5px " }}>
                <div style={{ color: "var( --text-color)" }}>
                  <span style={{ fontSize: "17px", marginLeft: "2px" }}>Р/У Кл Ю-6270 №4</span>
                </div>
                <div style={{ margin: "0px 3px 0px 5px" }}>
                  <SignalCellular2BarIcon />
                </div>
                <div style={{ margin: "0px 3px 0px 3px" }}>
                  <Battery20SharpIcon />
                  <Battery20SharpIcon />
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>

        <FloatingButton />
      </div>
    </>
  );
};

export default MonitoringPage;
