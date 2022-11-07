import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../../app/API/config";
import ERROR_IMG from "../../assets/no-image.jpg";

function MovieList({ movies }) {
  return (
    <ImageList cols={3}>
      {movies?.map((item, index) => (
        <Link key={index} to={`/movie/${item.id}`}>
          <ImageListItem>
            <img
              src={
                item.poster_path
                  ? `${IMG_BASE_URL}/${item.poster_path}`
                  : `${ERROR_IMG}`
              }
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}

export default MovieList;
