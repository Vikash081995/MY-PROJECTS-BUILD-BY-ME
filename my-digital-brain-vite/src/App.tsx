// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Home page </h1>
//   }
// ]);

import Header from "./components/Header/Header";
import HeaderBackground from "./components/HeaderBackground/HeaderBackground";
import { Box, CssBaseline } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <React.Fragment>
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
          <Header />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default App;
