import React from "react";
import "./DetailPage.css";

import { fetchCredit, fetchDescription, fetchImg } from "../../helpers/fetch";
import { useParams } from "react-router-dom";

function DetailPage() {
  let { movieId } = useParams();
  let images = fetchImg(movieId);
  let description = fetchDescription(movieId);
  let cast = fetchCredit(movieId);
  return (
    <>
      <div id="detailContainer">
        {images}
        {description}
        {cast}
      </div>
    </>
  );
}

export default DetailPage;
