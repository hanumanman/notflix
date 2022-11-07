import React from "react";
import PopularList from "../../components/PopularList";
import Preview from "../../components/Preview/Preview";
import "./MainPage.css";

function MainPage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Preview />
        </div>

        <div className="movie-list-wrapper">
          <h2
            style={{
              paddingLeft: "2rem",
              fontWeight: "normal",
            }}
          >
            Popular Titles
          </h2>
          <PopularList />
        </div>
      </div>
    </>
  );
}

export default MainPage;
