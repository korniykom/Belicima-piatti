import { Link } from "react-router-dom";
import React, { useState } from "react";

const PageNavigator = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Link to={`/dishes?pageSize=10&page=${currentPage}`}>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        <span> {currentPage} </span>
        <button onClick={goToNextPage}>{">"}</button>
      </Link>
    </div>
  );
};

export default PageNavigator;
