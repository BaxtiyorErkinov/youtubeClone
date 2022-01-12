import React, { useState } from "react";
import {
  Search,
  Menu,
  VideoCall,
  Apps,
  Notifications,
  YouTube,
} from "@mui/icons-material";
import { MenuItem, TextField, Button } from "@mui/material";
import MyMenu from "@mui/material/Menu";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };
  const openMenu = () => {
    setOpen(true);
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__left__logo">
          <YouTube sx={{ color: "red", fontSize: "40px" }} />
          <h4>YouTube</h4>
        </div>
      </div>
      <div className="header__center">
        <form>
          <div>
            <Button
              onClick={openMenu}
              aria-haspopup="true"
              id="basic-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              color="error"
              sx={{ marginTop: "5px" }}
            >
              <Search sx={{ color: "white" }}/>
            </Button>
            <MyMenu
              id="demo-positioned-menu"
              anchorEl={open}
              open={open}
              onClose={closeMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem>
                <TextField type="text" variant="outlined" placeholder="Search ..."/>
              </MenuItem>
            </MyMenu>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Header;
