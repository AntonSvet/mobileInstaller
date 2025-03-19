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
import CardDevice from "./CardDevice/CardDevice";
import RScardDevice from "./CardDevice/RScardDevice";
import SettingRSCard from "./CardDevice/SettingCard/SettingRSCard";
import FullScreenSettingDevice from "../../../../utils/FullScreenDialog/FullScreenSettingDevice";
import { dialogTitlesDevice } from "../../../../const/const";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const MonitoringPage = ({ route, callback }: { route: string; callback: (el: string) => void }) => {
  const devicesStore = useTypedSelector((state) => state.devices);
  const [openModalSetting, setOpenModalSetting] = useState({ open: false, name: "", currentDevice: {} });
  const [isModalNewDevice, setIsModalNewDevice] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const headerHeight = useResizeObserver(headerRef);
  const { progress, isLoading } = useImageLoader(document.querySelectorAll("img"));

  return (
    <>
      {isLoading && (
        <div>
          <ImageLoader progress={progress} title={"Загрузка"} />;
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
          <div style={{ display: "flex", marginLeft: "14px" }}>
            <span>ID: 0000-0099-6CAC</span>
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
          paddingBottom: "85px",
          marginTop: `${headerHeight + 10}px`,
          visibility: isLoading ? "hidden" : "visible",
          minWidth: "260px",
          maxWidth: "500px",
          width: "100%",
          marginLeft: "6px",
          marginRight: "6px",
        }}
      >
        {[...devicesStore.radio, ...devicesStore.rs485].map((el, index) => {
          return el.type ? (
            <RScardDevice
              openSettingModal={() => setOpenModalSetting({ open: true, name: el.name, currentDevice: el })}
              key={index}
              el={el}
              index={index}
            />
          ) : (
            <CardDevice
              openSettingModal={() => setOpenModalSetting({ open: true, name: el.name, currentDevice: el })}
              key={index}
              el={el}
              index={index}
            />
          );
        })}

        <FloatingButton openNewDevice={() => setIsModalNewDevice(true)} />
      </div>
      {openModalSetting.open && (
        <FullScreenSettingDevice
          open={openModalSetting.open}
          handleClose={() => setOpenModalSetting({ open: false, name: "", currentDevice: {} })}
          title={openModalSetting.name}
          currentDevice={openModalSetting.currentDevice}
        />
      )}{" "}
      {isModalNewDevice && (
        <FullScreenSettingDevice
          open={isModalNewDevice}
          handleClose={() => setIsModalNewDevice(false)}
          title={dialogTitlesDevice.NEW_DEVICE}
        />
      )}
    </>
  );
};

export default MonitoringPage;
