import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NotflixLogo from "../../../assets/notflix.png";
import "./NavBar.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBrowsing, updatePage } from "../../../reducers/filterSlice";

const pages = ["Home", "TV Show", "Movies", "New & Popular"];

function ResponsiveAppBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let q = searchParams.get("q");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ q: event.target.value });
  };

  const onlySpaces = /[^-\s]/;
  React.useEffect(() => {
    if (q != null) {
      if (onlySpaces.test(q)) {
        navigate("/search?q=" + q);
      }
    }
  }, [searchParams]);

  return (
    <AppBar
      id="appBar"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link
            to="/"
            onClick={() => {
              dispatch(updatePage(1));
            }}
          >
            <img id="nfLogo" src={NotflixLogo} alt="" />
          </Link>
          <Link
            style={{ marginLeft: "25px" }}
            to="/browse"
            onClick={() => {
              dispatch(updateBrowsing("Pick something! Right over there ↑"));
              updatePage(1);
            }}
          >
            {" "}
            Browse
          </Link>
          <input
            style={{
              color: "white",
              background: "transparent",
              border: "3px solid whitesmoke",
              marginLeft: "50px",
              height: "40px",
              paddingLeft: "10px",
              borderRadius: "5px",
            }}
            placeholder="Search"
            type="text"
            onChange={handleSearch}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
