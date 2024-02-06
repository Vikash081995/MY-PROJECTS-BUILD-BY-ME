import { Toolbar, Container } from "@mui/material";
import Logo from "../Logo/Logo";

import AvatarImage from "../Avatar/Avatar";

const Header = () => {
  return (
    <Container sx={{ maxWidth: "x1" }}>
      <Toolbar disableGutters>
        <Logo />
        <AvatarImage />
      </Toolbar>
    </Container>
  );
};

export default Header;
