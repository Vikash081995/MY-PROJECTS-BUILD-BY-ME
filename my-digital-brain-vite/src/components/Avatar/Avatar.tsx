import { Avatar, Box, IconButton, Tooltip } from "@mui/material";

const AvatarImage = () => {
  return (
    <Box>
      <Tooltip title="Open settings">
        <IconButton sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default AvatarImage;
