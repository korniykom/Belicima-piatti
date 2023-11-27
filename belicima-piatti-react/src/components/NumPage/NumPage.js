import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function PageNavigator({ category }) {
  const [currentPage, setCurrentPage] = useState(1);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Link to={`/dishes/${category}?pageSize=10&page=${currentPage}`}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        <span> {currentPage} </span>
        <button onClick={handleNextPage}>{">"}</button>
      </Link>
    </div>
  );
}
