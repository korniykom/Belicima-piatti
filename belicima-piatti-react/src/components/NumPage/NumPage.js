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
<<<<<<< HEAD
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
=======
      <Link to={`/dishes/${category}?pageSize=10&page=${currentPage}`}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        <span> {page} </span>
        <button onClick={handleNextPage}>{">"}</button>
>>>>>>> a9a930c584ab468870df00afd12b2bcff6c2727f
      </Link>
    </div>
  );
}
