import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/countries/countriesActions";

function Pagination({ itemsPerPage, totalItems }) {
  const currentPage = useSelector((state) => state.countries.currentPage);
  const dispatch = useDispatch();
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages > 1)
    return (
      <>
        <nav style={{ display: "flex", justifyContent: "center" }}>
          <ul className="pagination">
            <li
              className={
                "page-item rounded" + (currentPage === 1 && " current-page")
              }
            >
              <a
                onClick={() => {
                  dispatch(setCurrentPage(1));
                }}
                className="page-link"
              >
                1
              </a>
            </li>
            {currentPage >= 4 && (
              <li className="page-item rounded">
                <a className="page-link"> ... </a>
              </li>
            )}
            {currentPage > 2 && (
              <li className="page-item rounded">
                <a
                  onClick={() => {
                    dispatch(setCurrentPage(currentPage - 1));
                  }}
                  className="page-link"
                >
                  {currentPage - 1}
                </a>
              </li>
            )}
            {!(currentPage === totalPages || currentPage === 1) && (
              <li className="page-item rounded current-page">
                <a
                  onClick={() => {
                    dispatch(setCurrentPage(currentPage));
                  }}
                  className="page-link"
                >
                  {currentPage}
                </a>
              </li>
            )}
            {currentPage < totalPages - 1 && (
              <li className="page-item rounded">
                <a
                  onClick={() => {
                    dispatch(setCurrentPage(currentPage + 1));
                  }}
                  className="page-link"
                >
                  {currentPage + 1}
                </a>
              </li>
            )}
            {currentPage <= totalPages - 3 && (
              <li className="page-item rounded">
                <a className="page-link"> ... </a>
              </li>
            )}
            <li
              className={
                "page-item rounded" +
                (currentPage === totalPages && " current-page")
              }
            >
              <a
                onClick={() => {
                  dispatch(setCurrentPage(totalPages));
                }}
                className="page-link"
              >
                {totalPages}
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
}

export default Pagination;
