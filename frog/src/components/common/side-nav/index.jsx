// import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { SwipeableDrawer } from "@material-ui/core";
import React from "react";

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

export const SideNav = () => {
  return (
    <Hidden smUp implementation="css">
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        variant="temporary"
        anchor="right"
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
      >
        this is a drawer
      </SwipeableDrawer>
    </Hidden>
  );
};
