import React from "react";
import NavBarLand from "./components/NavBarLand/NavBarLand";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./constants/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <NavBarLand />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
