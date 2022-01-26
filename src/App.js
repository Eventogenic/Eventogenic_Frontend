import React from "react";
import AppBarMain from "./components/AppBarMain";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./constants/Theme";
import ScreenLogin from "./pages/ScreenLogin";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <React.Fragment>
        <AppBarMain />
        <ScreenLogin />
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
