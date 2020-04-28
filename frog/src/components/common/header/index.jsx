import React from "react";
import dictionary from '../../../dictionary.json';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const Header = props => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{dictionary.appTitle}</Typography>
      </Toolbar>
    </AppBar>
  );
};
