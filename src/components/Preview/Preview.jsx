import React from "react";
import "./Preview.css";
import Trailer from "../../assets/trailer.mp4";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ReactPlayer from "react-player";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Link } from "react-router-dom";

function Preview() {
  return (
    <>
      <div id="moviePreview">
        <ReactPlayer
          url={Trailer}
          playing={true}
          muted={true}
          width={"100%"}
          height={"100%"}
          style={{
            backgroundColor: "black",
            maxHeight: "50vh",
          }}
          loop={true}
        />
        <div id="previewDetail">
          <h2>Bullet Train</h2>
          <Stack direction="row" spacing={2}>
            <Button
              id="button1"
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "white",
                color: "#141414",
                opacity: "0.9",
                fontSize: "0.7rem",
              }}
              href="https://phimmoichilly.net/xem/sat-thu-doi-dau-tap-full-pm101618"
            >
              <PlayArrowIcon sx={{ marginRight: "5px" }} />
              Play
            </Button>
            <Link to={`/movie/718930`}>
              <Button
                sx={{
                  backgroundColor: "rgba(109, 109, 110, 0.7)",
                  color: "white",
                  padding: "0.5rem",
                  fontSize: "0.7rem",
                  opacity: "0.8",
                }}
                size="small"
              >
                <InfoOutlinedIcon sx={{ marginRight: "5px" }} />
                More Info
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
    </>
  );
}

export default Preview;
