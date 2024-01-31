import { AppBar, Typography, Toolbar, IconButton } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";

const Header = () => {
  return (
    <AppBar position="relative" sx={{ top: "30vh" }}>
      <Toolbar>
        <IconButton>
          <PsychologyIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none"
          }}
        >
          My Digital Brain
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
