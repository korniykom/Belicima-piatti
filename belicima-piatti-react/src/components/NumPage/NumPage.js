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
      <button onClick={goToPrevPage} disabled={currentPage === 1}>
        {"<"}
      </button>
      <span> {currentPage} </span>
      <button onClick={goToNextPage}>{">"}</button>
    </div>
  );
};

export default PageNavigator;
