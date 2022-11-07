import React, { useState, useEffect } from "react";
import "./FiltersPage.css";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { fetchGenres } from "../../helpers/fetch";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateBrowsing, updatePage } from "../../reducers/filterSlice";

function FiltersPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const dispatch = useDispatch();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const genres = fetchGenres();
  const browsing = useSelector((state) => state.filter.browsing);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          Genres
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: "block",
            }}
          >
            {genres?.map((genre) => (
              <MenuItem key={genre.id} onClick={handleCloseNavMenu}>
                <Link
                  to={`genre/${genre.id}`}
                  onClick={() => {
                    dispatch(updateBrowsing(genre.name));
                    dispatch(updatePage(1));
                  }}
                >
                  {genre.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Link
          to={`top-rated`}
          onClick={() => {
            dispatch(updatePage(1));
          }}
        >
          Top Rated{" "}
        </Link>
        <Link
          onClick={() => {
            dispatch(updatePage(1));
          }}
          style={{ marginLeft: "17px" }}
          to={`newest`}
        >
          Newest
        </Link>
      </div>
      <h1 style={{ textAlign: "center" }}>{browsing}</h1>
      <Outlet />
    </>
  );
}

export default FiltersPage;
