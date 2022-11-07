import React from "react";
import { BASE_URL, IMG_BASE_URL, API_KEY } from "../app/API/config";
import useFetch from "../hooks/useFetch";
import ERROR_IMG from "../assets/no-image.jpg";
import { Chip, ImageListItem, ImageListItemBar } from "@mui/material";

const enFilter = (data) => {
  const enData = data?.filter((data) => data.iso_639_1 === "en");
  return enData;
};

export const fetchImg = (movieId) => {
  if (movieId) {
    const { data, loading, error } = useFetch(
      `${BASE_URL}movie/${movieId}/images?api_key=${API_KEY}`
    );
    let logos = enFilter(data?.logos) || [];
    let posters = data?.posters || [];
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
      <div id="detailPoster">
        <img
          id="detailImg"
          src={
            posters[0]?.file_path
              ? `${IMG_BASE_URL}${posters[0]?.file_path}`
              : `${ERROR_IMG}`
          }
          alt=""
        ></img>

        <div id="gradient"></div>

        {logos[0]?.file_path && (
          <img
            className="detailLogo"
            src={logos ? `${IMG_BASE_URL}${logos[0]?.file_path}` : null}
            alt="title logo"
          />
        )}
      </div>
    );
  }
  return null;
};

export const fetchDescription = (movieId) => {
  if (movieId) {
    const { data, loading, error } = useFetch(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );

    let overview = data?.overview;
    let genres = data?.genres;
    let release = data?.release_date;
    let title = data?.title;
    let popularity = data?.popularity;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
      <div id="movieDescription">
        <h1 id="movieTitle"> {title}</h1>
        <div id="moviePopularity">
          <a href="https://developers.themoviedb.org/3/getting-started/popularity">
            Popularity:
          </a>{" "}
          {popularity}
        </div>
        <div id="movieGenres">
          {genres?.map((genre) => (
            <div className="genreItem" key={genre.name}>
              {genre.name}{" "}
            </div>
          ))}
        </div>
        <div id="movieOverview">{overview}</div>
        <div>Release Date: {release}</div>
      </div>
    );
  }
};

export const fetchCredit = (movieId) => {
  if (movieId) {
    const { data, loading, error } = useFetch(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );

    let cast = data?.cast;
    let crew = data?.crew;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
      <div id="movieCast">
        <h2>CAST</h2>
        <div id="castList" style={{ display: "flex" }}>
          {cast?.slice(0, 5).map((member, index) => (
            <ImageListItem key={member.name}>
              <img
                src={
                  member.profile_path
                    ? `${IMG_BASE_URL}${member.profile_path}`
                    : `${ERROR_IMG}`
                }
                alt={member.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={member.name}
                subtitle={member.character}
              />
            </ImageListItem>
          ))}
        </div>
        <h2>CREW</h2>
        <div id="castList" style={{ display: "flex" }}>
          {crew?.slice(0, 5).map((member, index) => (
            <ImageListItem key={member.name}>
              <img
                src={
                  member.profile_path
                    ? `${IMG_BASE_URL}${member.profile_path}`
                    : `${ERROR_IMG}`
                }
                alt={member.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={member.name}
                subtitle={member.department}
              />
            </ImageListItem>
          ))}
        </div>
      </div>
    );
  }
};

export const fetchGenres = () => {
  const { data, loading, error } = useFetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  let genres = data?.genres;
  return genres;
};

export const fetchPopular = (pageNumber) => {
  const { data, loading, error } = useFetch(`
${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${pageNumber}`);

  let popularMovies = data ? data : `lmao`;
  return popularMovies;
};
