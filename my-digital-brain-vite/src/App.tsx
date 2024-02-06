// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Home page </h1>
//   }
// ]);

import Header from "./components/Header/Header";
import HeaderBackground from "./components/HeaderBackground/HeaderBackground";
import { AppBar, Box, CssBaseline } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#F7CAC9" }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "3rem" // Change this to the font size you want
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#079e49" // Change this to the color you want
        }
      }
    }
  }
});
const App = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100vw",
            backgroundColor: "black"
          }}
        >
          <HeaderBackground />
          <Box sx={{ marginTop: "1vh" }}>
            <AppBar position="fixed">
              <Header />
            </AppBar>
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
