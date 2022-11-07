import React from "react";
import "./Pagination.css";
import { Pagination as MUIPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../../reducers/filterSlice";

function Pagination({ pagesAmount }) {
  const currentPage = useSelector((state) => state.filter.currentPage);
  const dispatch = useDispatch();
  const handlePaginate = (event, value) => {
    dispatch(updatePage(value));
  };

  return (
    <div
      style={{
        background: "#141414",
        display: "flex",
        justifyContent: "center",
        margin: "1rem",
      }}
    >
      <Stack spacing={2}>
        <MUIPagination
          count={pagesAmount}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handlePaginate}
        />
      </Stack>
    </div>
  );
}

export default Pagination;
