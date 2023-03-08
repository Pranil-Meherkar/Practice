import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/countries/countriesActions";

function Pagination({ itemsPerPage, totalItems }) {
  const currentPage = useSelector((state) => state.countries.currentPage);
  const dispatch = useDispatch();
  const pageNumbers = [
    ...Array(Math.ceil(totalItems / itemsPerPage)).keys(),
  ].map((key) => key + 1);
  return (
    <>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <ul className="pagination">
          <li className="page-item">
            <a
              onClick={() => {
                if (currentPage === 1) return;
                dispatch(setCurrentPage(currentPage - 1));
              }}
              className="page-link"
            >
              Prev
            </a>
          </li>
          {pageNumbers.map((number) => {
            return (
              <li className="page-item" key={number}>
                <a
                  onClick={() => {
                    dispatch(setCurrentPage(number));
                  }}
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            );
          })}
          <li className="page-item">
            <a
              onClick={() => {
                if (currentPage === pageNumbers.length) return;
                dispatch(setCurrentPage(currentPage + 1));
              }}
              className="page-link"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
