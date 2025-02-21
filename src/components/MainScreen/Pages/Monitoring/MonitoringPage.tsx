import { CardActionArea, Divider, List, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import device5130 from "../../../../img/device/5130.png";
import { useState } from "react";
const classes = {
  positionSettings: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "30px",
  },
  mainSettings: {
    display: "flex",
    alignItems: "center",
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
const MonitoringPage = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <Card style={classes.mainSettings} elevation={24}>
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
          <div style={{ minHeight: "100px", width: "5px", background: "red" }}></div>
          <img width={"25%"} height={"25%"} src={device5130} alt="logo" />
          <CardContent>
            <Typography variant="body2" sx={{ color: "var( --text-color)" }}>
              Беспровод. зона 1
            </Typography>
            <Typography variant="body2" sx={{ color: "var( --text-color)" }}>
              Беспровод. зона 2
            </Typography>
            <Typography variant="body2" sx={{ color: "var( --text-color)" }}>
              МК-5130 №1
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card elevation={24} style={classes.mainSettings}>
        <div style={{ width: "5px", minHeight: "100px", background: "green" }}></div>
        <img width={"25%"} height={"25%"} src={device5130} alt="logo" />
        <CardContent>
          <Typography variant="body2" sx={{ color: "var( --text-color)" }}>
            Беспровод. зона 3
          </Typography>
          <Typography variant="body2" sx={{ color: "var( --text-color)" }}>
            Беспровод. зона 4
          </Typography>
          <Typography variant="body2" sx={{ color: "var( --text-color)" }}>
            МК-5130 №2
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoringPage;
