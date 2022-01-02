import React, { useEffect, useState } from "react";
import AppBarMain from "./components/AppBarMain";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "./constants/Theme";
import FloatingActionButton from "./components/asides/FloatingActionButton";

const App = () => {
  const [btnStatus, setBtnStatus] = useState(false);
  useEffect(() => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  });
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
