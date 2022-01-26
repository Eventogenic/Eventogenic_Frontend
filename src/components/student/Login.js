import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { Fragment } from "react";
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
                marginTop: 5,
                borderRadius: 2,
              }}
            >
              <Stack spacing={3}>
                <Typography variant="h4" align="center">
                  Login
                </Typography>
                <TextField label="username" />
                <TextField label="password" type="password" />
                <Button variant="contained" className={classes.button}>
                  LOGIN
                </Button>
              </Stack>
            </Box>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default Login;
