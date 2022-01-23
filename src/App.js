import React from "react";
import AppBarMain from "./components/AppBarMain";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./constants/Theme";
import FloatingActionButton from "./components/asides/FloatingActionButton";

const App = () => {
  
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <AppBarMain />
        {btnStatus && <FloatingActionButton />}
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
