import { Link } from "react-router-dom";
import React, { useState, useReducer } from "react";
import "./NumPage.css";
import { useNavigate } from "react-router-dom";

export default function PageNavigator({
  category,
  page,
  pageSize,
  ignored,
  forceUpdate,

  country,
}) {
  const [currentPage, setCurrentPage] = useState(+page);
  const navigate = useNavigate();

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    navigate(
      `/dishes?pageSize=${pageSize}&country=${country}&category=${category}&page=${currentPage}`
    );
    forceUpdate();
  }
  // http://localhost:3000/dishes?pageSize=10&country=&category=Перші%20страви&page=1
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    navigate(
      `/dishes?pageSize=${pageSize}&country=${country}&category=${category}&page=${currentPage}`
    );
    forceUpdate();
  };

  return (
    <div>
      <div class="navNumPage">
        <button
          class="buttonNumPage"
          onClick={handlePrevPage}
          disabled={currentPage < 1}
        >
          {"<"}
        </button>
        <span class="numPage"> {page} </span>
        <button class="buttonNumPage" onClick={handleNextPage}>
          {">"}
        </button>
      </div>
    </div>
  );
}
