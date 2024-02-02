import {
  AppBar,
  // Typography,
  Toolbar,
  // IconButton,
  Container
} from "@mui/material";
import Logo from "../Logo/Logo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AvatarImage from "../Avatar/Avatar";

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

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Container sx={{ maxWidth: "x1" }}>
          <Toolbar disableGutters>
            <Logo />
          </Toolbar>
          <AvatarImage />
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
