import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function DrawerMenu({ selectedMenu, callback }: { selectedMenu: string; callback: (el: string) => void }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        paddingTop: "15px",
        height: "100vh",
        color: "var( --text-color)",
        width: "100%",
        background: "var(--background-drawer-menu)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          "Устройства",
          "Общие",

          "Зоны",
          "Выходы управления",
          "Параметры связи",
          "GPRS",
          "SMS",
          "LAN",
          "Коды пользователя",
        ].map((text, index) => (
          <div key={index}>
            <ListItem disablePadding>
              <ListItemButton style={{ background: text === selectedMenu ? "#6c5858" : "", fontSize: "30px" }}>
                <span onClick={() => callback(text)}>{text}</span>
              </ListItemButton>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <span style={{ color: "#5b5e5b", fontSize: "clamp(25px, 4vw, 24px)" }} onClick={toggleDrawer(true)}>
        Меню
      </span>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
export default DrawerMenu;