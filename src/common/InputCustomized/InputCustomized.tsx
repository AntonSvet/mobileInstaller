import { Box, IconButton, TextField } from "@mui/material";
import React, { FunctionComponent, useState, useRef, useEffect } from "react";
 
 
 
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
 
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { IKeyboard } from "./InputCustomized.types";
import { classes } from "./InputCustomized.style";

 
 
 
 
const InputCustomized: FunctionComponent<IKeyboard> = ({
  label,
  id,
  flag,
  type,
  value,
  handleSettingsChange,
  storeID,
  numeric = false,
  isDisabled,
  inputProps,
  scrollView = "start",
}) => {
  const [currentValue, setCurrentValue] = useState<string | null>(value);
  const [typePassword, setTypePassword] = useState<string>(type || "");
  const inputRef = useRef<HTMLInputElement>(null);

  const isFirstMounted = useRef(true);
 
  const cursorFocus = function (elem: EventTarget & HTMLInputElement) {
    elem.parentElement?.parentElement?.parentElement?.parentElement?.scrollIntoView({
      behavior: "smooth",
      block: scrollView as ScrollLogicalPosition,
    });
  };

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    let { value } = evt.target;
    value = value && (id === "findUser" || id === "code") ? value : value;
    const reg = new RegExp(/^([0-9a-fA-F]\s*)*0?$/);
    if (numeric) {
      value = reg.test(value) ? value : "";
    }

    evt.target.scrollLeft = evt.target.scrollWidth;
  };

  const inputFocus: React.FocusEventHandler<HTMLInputElement> = (evt) => {
    cursorFocus(evt.target);
  };
  function clearInput() {
    setCurrentValue("");
  }

  if (flag === "placeholder")
    return (
      <TextField 
        ref={inputRef}
        name={"a" + Math.random()}
        size="small"
        autoComplete="new-password"
        id={id}
        fullWidth
        variant="outlined"
        label={label}
        onChange={onChangeInput}
        value={""}
        onFocus={inputFocus}
        InputProps={{
          endAdornment: !!currentValue && (
            <IconButton size="small" onClick={clearInput}>
              <ClearRoundedIcon />
            </IconButton>
          ),
          startAdornment: inputProps,
        }}
      />
    );

  return (
    <Box sx={ {"& .MuiTextField-root": { width: "100%" }, ...classes.inputMain}}>
      <TextField
        ref={inputRef}
        name={"a" + Math.random()}
        disabled={isDisabled}
        autoComplete="new-password"
        id={id}
        style={{ padding: "2px" }}
        label={label}
        variant="standard"
        value={""}
        onChange={onChangeInput}
        onFocus={inputFocus}
        autoFocus={type === "password" && numeric}
        type={typePassword}
        InputProps={{
          endAdornment: type
            ? type &&
              (typePassword ? (
                <VisibilityOffIcon onClick={() => setTypePassword("")} fontSize="small" sx={classes.typePassword} />
              ) : (
                <VisibilityIcon
                  onClick={() => setTypePassword("password")}
                  fontSize="small"
                  sx={classes.typePassword}
                />
              ))
            : "",
        }}
      />
    </Box>
  );
};

 
export default InputCustomized