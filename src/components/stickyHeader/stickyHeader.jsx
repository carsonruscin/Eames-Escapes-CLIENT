import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '100px',
  minWidth: '100vw',
  margin: '0',
  padding: '0',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.primary.main, // This sets the background color based on the theme
}));

export const StickyHeader = () => {
  return (
    <StyledAppBar>
      <Toolbar>
        <Typography variant="h4" sx={{}}>Eame's Escapes</Typography>
        {/* Add other header content here */}
      </Toolbar>
    </StyledAppBar>
  );
};



