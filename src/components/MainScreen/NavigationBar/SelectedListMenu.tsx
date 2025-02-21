import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = [
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
];

export default function SelectedListMenu({ selectedMenu }: { selectedMenu: string }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" style={{ padding: "0px" }} aria-label="Device settings">
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
          sx={{ padding: "0px" }}
        >
          <ListItemText
            primary={<p style={{ fontSize: "19px", margin: "0px", color: "#4abd4a" }}>Юпитер-2084</p>}
            secondary={<p style={{ fontSize: "17px", margin: "0px", color: "var(--text-color)" }}>{selectedMenu}</p>}
          />
        </ListItemButton>
      </List>
      <Menu
        style={{ padding: "0px" }}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            style={{ background: "black", color: "green", fontSize: "22px" }}
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
