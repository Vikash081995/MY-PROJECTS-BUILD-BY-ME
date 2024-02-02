import { IconButton, Typography } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";

const Logo = () => {
  return (
    <>
      <IconButton color="primary" size="large">
        <PsychologyIcon fontSize="inherit" />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontSize: "1.5rem",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".5rem",
          color: "white",
          textDecoration: "none"
        }}
      >
        DIGITAL BRAIN
      </Typography>
    </>
  );
};

export default Logo;
