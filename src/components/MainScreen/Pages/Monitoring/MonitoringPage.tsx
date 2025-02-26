import {
  BottomNavigation,
  BottomNavigationAction,
  CardActionArea,
  Divider,
  Fab,
  FormControl,
  InputLabel,
  List,
  MenuItem,
  NativeSelect,
  Paper,
  Select,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import device5130 from "../../../../img/device/5130.png";
import device5830 from "../../../../img/device/5830.png";
import device5230 from "../../../../img/device/5230.png";
import device6270 from "../../../../img/device/6270.png";
import AddIcon from "@mui/icons-material/Add";
import device2084 from "../../../../img/device/s_fonom_2084.png";
import { useEffect, useRef, useState } from "react";
import NavigationButtons from "./NavigationButtons/NavigationButtons";
import Battery20SharpIcon from "@mui/icons-material/Battery20Sharp";
import SignalCellular2BarIcon from "@mui/icons-material/SignalCellular2Bar";
import { Height } from "@mui/icons-material";
import FloatingButton from "./FloatingButton/FloatingButton";
const classes = {
  positionSettings: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
  },
  cardSettings: {
    display: "flex",
    alignItems: "center",

    maxWidth: "588px",
    minWidth: "280px",
    maxHeight: "160px",
    minHeight: "130px",
    marginTop: "10px",

    background: "var(--background-device-card)",
  },

  buttons: {
    background: "transparent" /* Прозрачный фон */,
    border: "none" /* Убираем границу */,
    color: "var(--text-color)" /* Цвет текста */,
    fontSize: "16px" /* Размер текста */,
    cursor: "pointer" /* Курсор в виде указателя */,
    padding: "10px 20px" /* Отступы внутри кнопки */,
  },
};
const MonitoringPage = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [value, setValue] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const [contentMargin, setContentMargin] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      // Функция для обновления отступа
      const updateContentMargin = () => {
        setContentMargin(headerRef.current?.offsetHeight || 0);
      };

      // Инициализация ResizeObserver
      const resizeObserver = new ResizeObserver(updateContentMargin);
      resizeObserver.observe(headerRef.current);

      // Установить начальный отступ
      updateContentMargin();

      // Очистка при размонтировании
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);
  return (
    <>
      <div
        ref={headerRef}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          top: 56,
          left: 0,
          zIndex: 1000,
          width: "100%",
          background: " var(--background-header)",
        }}
      >
        <div
          style={{
            display: "grid",

            justifyContent: "center",
            background: " var(--background-header)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: " var(--background-header)",
              marginLeft: "20px",
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
            }}
          >
            <img style={{ maxWidth: "110px", paddingRight: "20px" }} width={"20%"} src={device2084} alt="logo" />

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
                  style={{ width: "15px", height: "15px", background: "red", borderRadius: "20px", marginLeft: "10px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <NavigationButtons />
        <FormControl sx={{ minWidth: 120, display: "flex", alignItems: "center" }} size="medium">
          <NativeSelect
            sx={{ fontSize: "clamp(23px, 4vw, 26px)" }}
            defaultValue={10}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Все устройства</option>
            <option value={20}>----</option>
            <option value={30}>-----</option>
          </NativeSelect>
        </FormControl>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: `${contentMargin + 10}px`,
          marginBottom: "20px",
          padding: "0px 5px",
          height: "calc(100vh - 80px)" /* Высота контента, чтобы был скролл */,
        }}
      >
        <Card style={classes.cardSettings} elevation={24}>
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
            <div style={{ height: "165px", width: "8px", background: "white" }}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img width={"21%"} src={device5130} alt="logo2084" />
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "var( --text-color)" }}>Беспровод. зона 3, рзд. 1</span>
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
                    <span style={{ color: "#c0c0c0" }}>Дополн. зона </span>
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
              <div style={{ display: "flex", alignItems: "flex-end", marginTop: "17px" }}>
                <div style={{ color: "var( --text-color)" }}>
                  <span style={{ fontSize: "17px" }}>Р/У МК Ю-5130 №1</span>
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
        <Card style={classes.cardSettings} elevation={24}>
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
            <div style={{ height: "165px", width: "8px", background: "white" }}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img width={"21%"} src={device5830} alt="logo2084" />
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "var( --text-color)" }}>Беспровод. зона 4, рзд. 2</span>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        background: "grey",
                        borderRadius: "20px",
                        marginLeft: "10px",
                      }}
                    ></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "var( --text-color)" }}>Доп. зона 5, рзд. 2</span>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        background: "grey",
                        borderRadius: "20px",
                        marginLeft: "10px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", marginTop: "17px" }}>
                <div style={{ color: "var( --text-color)" }}>
                  <span style={{ fontSize: "17px" }}>Р/У АК Ю-5830 №2</span>
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
        <Card style={classes.cardSettings} elevation={24}>
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
            <div style={{ height: "165px", width: "10px", background: "orange" }}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img width={"21%"} src={device5230} alt="logo2084" />
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "var( --text-color)" }}>Беспровод. зона 6, рзд. 2</span>
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
              <div style={{ display: "flex", alignItems: "flex-end", marginTop: "17px" }}>
                <div style={{ color: "var( --text-color)" }}>
                  <span style={{ fontSize: "17px", marginLeft: "2px" }}>Р/У ИК Ю-5230 №3</span>
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
        <Card style={classes.cardSettings} elevation={24}>
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
            <div style={{ height: "165px", width: "10px", background: "red" }}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img style={{ padding: "15px 12px 0px 8px" }} width={"16%"} src={device6270} alt="logo2084" />
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
              <div style={{ display: "flex", alignItems: "flex-end", margin: "10px 0px 11px " }}>
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
        <Card style={classes.cardSettings} elevation={24}>
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
            <div style={{ height: "165px", width: "8px", background: "white" }}></div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img width={"21%"} src={device5830} alt="logo2084" />
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "var( --text-color)" }}>Беспровод. зона 7, рзд. 2</span>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        background: "grey",
                        borderRadius: "20px",
                        marginLeft: "10px",
                      }}
                    ></div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ color: "var( --text-color)" }}>Доп. зона 8, рзд. 2</span>
                    <div
                      style={{
                        width: "15px",
                        height: "15px",
                        background: "grey",
                        borderRadius: "20px",
                        marginLeft: "10px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", marginTop: "17px" }}>
                <div style={{ color: "var( --text-color)" }}>
                  <span style={{ fontSize: "17px" }}>Р/У АК Ю-5830 №2</span>
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
        <FloatingButton />
      </div>
    </>
  );
};

export default MonitoringPage;
