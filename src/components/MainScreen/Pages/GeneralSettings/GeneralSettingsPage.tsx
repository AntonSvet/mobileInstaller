import { Divider, List, ListItem, ListItemText, ListSubheader, Paper } from "@mui/material";
import CustomizedSwitches from "../../../../common/CustomizedSwitches/CustomizedSwitches";
import InputCustomized from "../../../../common/InputCustomized/InputCustomized";

const classes = {
  positionSettings: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
  },
  mainSettings: {
    width: "100%",
    maxWidth: 700,
    minWidth: 280,
    marginTop: "30px",
  },
  settingsTitle: {
    background: "#eee",
    borderRadius: "4px 4px 0 0",
    padding: "5px 0px",
    margin: "0px",
    lineHeight: "26px",

    fontSize: "1rem",
    zIndex: 2,
  },
  lockControl: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 37,
  },
};
function handleSettingsChange() {
  console.log("Click");
}
const GeneralSettingsPage = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0px 10px" }}>
        <Paper style={classes.mainSettings} elevation={24}>
          <List
            sx={{
              paddingBottom: "0px",
            }}
            component="ul"
            aria-label="mailbox folders"
            subheader={<ListSubheader style={classes.settingsTitle}>Конфигурация</ListSubheader>}
          >
            <InputCustomized
              isDisabled={true}
              id={"rtsp_url"}
              label={"Идентификатор устройства"}
              value={"0000-0099-6CAC"}
              storeID={"envControlRtspUrl"}
              handleSettingsChange={handleSettingsChange}
            />
            <InputCustomized
              id={"rtsp_url"}
              label={"Пароль доступа к конфигурации (от 4 до 8 цифр)"}
              value={"11111"}
              storeID={"envControlRtspUrl"}
              handleSettingsChange={handleSettingsChange}
            />
            <InputCustomized
              id={"rtsp_url"}
              label={"Пароль удаленного управления (5 цифр)"}
              value={"11111"}
              storeID={"envControlRtspUrl"}
              handleSettingsChange={handleSettingsChange}
            />

            <Divider />
          </List>
        </Paper>
        <Paper style={classes.mainSettings} elevation={24}>
          <List
            sx={{
              paddingBottom: "0px",
            }}
            component="ul"
            aria-label="mailbox folders"
            subheader={<ListSubheader style={classes.settingsTitle}>Индикация и сигнализация</ListSubheader>}
          >
            <InputCustomized
              id={"rtsp_url"}
              label={"Громкость встроеного зумера"}
              value={""}
              storeID={"envControlRtspUrl"}
              handleSettingsChange={handleSettingsChange}
            />
            <ListItem>
              <ListItemText primary="Режим работы светодиодной индикации" />
              <CustomizedSwitches handleSettingsChange={handleSettingsChange} id={"envControlEnabled"} option={true} />
            </ListItem>
            <Divider />
          </List>
        </Paper>
      </div>
    </div>
  );
};

export default GeneralSettingsPage;
