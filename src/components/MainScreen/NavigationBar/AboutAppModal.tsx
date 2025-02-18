import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AboutAppModal({open,callback}:{open:boolean, callback:(x:boolean) => void}) {
  
 
  const handleClose = () => callback(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div>
            <div>
              Web-приложение "Инсталлятор" версия <span id="versionIndex">1.0.0</span>
            </div>
            <div>
              2025 ©
              <a href="http://elesta.ru" target="_blank" rel="noreferrer">
                    ООО Элеста
              </a>
            </div>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}