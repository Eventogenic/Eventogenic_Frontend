import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  button: {
    backgroundColor: "#152A3C",
    "&:hover": {
      backgroundColor: "#152A3C",
    },
  },
});

const Login = () => {
  const classes = useStyle();
  useEffect(() => {
    document.body.style.overflowY = "hidden";
  });
  return (
    <Fragment>
      <div style={{ backgroundColor: "#f7f7f7" }}>
        <Container
          sx={{
            height: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              component="form"
              sx={{
                padding: 5,
                backgroundColor: "#fff",
                marginTop: 15,
                borderRadius: 2,
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h4" align="center">
                  Login
                </Typography>
                <TextField label="username" />
                <TextField label="password" type="password" />
                <Button variant="contained" className={classes.button}>
                  LOGIN
                </Button>
                <Button sx={{ padding: 0 }}>Signup</Button>
                <Button sx={{ padding: 0 }}>Forgot Password</Button>
              </Stack>
            </Box>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Login;
