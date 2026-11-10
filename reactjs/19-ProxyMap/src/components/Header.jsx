import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Stack, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import logo from "../image/Logo.png";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    navigate("/login");
  };

  const handleProfileClick = () => {
    handleMenuClose();
    navigate("/profile");
  };

  const handleLogin = () => navigate("/login");
  const handleSignup = () => navigate("/signup");

  const menuId = "primary-search-account-menu";

  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Box
          onClick={() => navigate("/")}
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            height: { xs: 40, sm: 45, md: 54 },
            mr: 3,
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
        {isAuthenticated ? (
          <>
            <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
              <IconButton
                size="large"
                edge="end"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Stack>
            <Menu
              anchorEl={anchorEl}
              id={menuId}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem disabled>
                {user?.firstName
                  ? `${user.firstName} ${user.lastName}`
                  : user?.email}
              </MenuItem>
              <MenuItem onClick={handleProfileClick}>Profil</MenuItem>
              <MenuItem onClick={handleLogout}>Çıkış Yap</MenuItem>
            </Menu>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
