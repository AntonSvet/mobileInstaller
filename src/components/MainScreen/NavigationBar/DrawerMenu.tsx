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
          "Мониторинг",
          "Общие",
          "Расширители",
          "Радиоканал",
          "Зоны",
          "Выходы управления",
          "Параметры связи",
          "GPRS",
          "SMS",
          "LAN",
          "Коды пользователя",
        ].map((text, index) => (
          <>
            <ListItem key={text} disablePadding>
              <ListItemButton style={{ background: text === selectedMenu ? "#6c5858" : "", fontSize: "30px" }}>
                {/*  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                <span onClick={() => callback(text)}>{text}</span>
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Меню</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
export default DrawerMenu;