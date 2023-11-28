import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NumPage.css";

export default function PageNavigator({ category, page }) {
  const [currentPage, setCurrentPage] = useState(+page);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Link
        class="navNumPage"
        to={`/dishes/${category}?pageSize=10&page=${currentPage}`}
      >
        <button
          class="buttonNumPage"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span class="numPage"> {page} </span>
        <button class="buttonNumPage" onClick={handleNextPage}>
          {">"}
        </button>
      </Link>
    </div>
  );
}
