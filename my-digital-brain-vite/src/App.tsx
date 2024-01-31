// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>Home page </h1>
//   }
// ]);
import "./index.css";
import Header from "./components/Header/Header";
import HeaderBackground from "./components/HeaderBackground/HeaderBackground";
import { Box } from "@mui/material";

const App = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
