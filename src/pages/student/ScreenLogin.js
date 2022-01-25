import { Container } from "@mui/material";
import React from "react";

const ScreenLogin = () => {
  return (
    <Container maxWidth="sm">
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </Container>
  );
};

export default ScreenLogin;
