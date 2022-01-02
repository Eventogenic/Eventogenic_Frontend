import * as React from "react";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
  backgroundColor: "#152A3C",
};

const handleClick = ()=> {
    window.scrollTo({
        top: '0',
        behavior: 'smooth'
    })
}

const FloatingActionButton = () => {
  return (
    <Fab style={fabStyle} color="primary" aria-label="add" onClick={handleClick}>
      <UpIcon />
    </Fab>
  );
};

export default FloatingActionButton;
