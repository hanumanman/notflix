import React from "react";
import "./Pagination.css";
import { Pagination as MUIPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../../reducers/filterSlice";

import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
});

function Pagination({ pagesAmount }) {
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();
  const handlePaginate = (event, value) => {
    dispatch(updatePage(value));
  };

  const { items } = usePagination({
    count: pagesAmount,
    onChange: handlePaginate,
    hideNextButton: true,
    hidePrevButton: true,
  });

  return (
    <div
      style={{
        background: "#141414",
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      <nav>
        <List>
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === "start-ellipsis" || type === "end-ellipsis") {
              children = "…";
            } else if (type === "page") {
              children = (
                <button
                  type="button"
                  style={{
                    border: selected
                      ? "solid 2px #E50914"
                      : "solid 2px whitesmoke",
                    color: "whitesmoke",
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }

            return (
              <li
                key={index}
                style={{
                  backgroundColor: "#141414",
                  background: "transparent",
                }}
              >
                {children}
              </li>
            );
          })}
        </List>
      </nav>
    </div>
  );
}

export default Pagination;
