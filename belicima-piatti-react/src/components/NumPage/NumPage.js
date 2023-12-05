import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NumPage.css";
import { useNavigate } from "react-router-dom";

export default function PageNavigator({ category, page, pageSize = 5 }) {
  const [currentPage, setCurrentPage] = useState(+page);
  const navigate = useNavigate();

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    navigate(`/dishes/${category}?pageSize=${pageSize}&page=${currentPage}`);
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
    navigate(`/dishes/${category}?pageSize=${pageSize}&page=${currentPage}`);
  };

  return (
    <div>
      <button
        class="buttonNumPage"
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <span class="numPage"> {page} </span>
      <button class="buttonNumPage" onClick={handleNextPage}>
        {">"}
      </button>
    </div>
  );
}
