import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Container } from "react-bootstrap";
import Pagination from "./../common/Pagination";
import {
  setCurrentPage,
  setModalData,
} from "../../redux/countries/countriesActions";
import { setCardsPerPage } from "./../../redux/countries/countriesActions";
import Modal from "./Modal";

function CardsContainer() {
  const dataList = useSelector((state) => state.countries.data);
  const cardsPerPage = useSelector((state) => state.countries.cardsPerPage);
  const currentPage = useSelector((state) => state.countries.currentPage);
  const showModal = useSelector((state) => state.countries.modal.showModal);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  //const [currentPageData, setCurrentPageData] = useState();

  const [filterCriteria, setFilterCriteria] = useState({
    name: "",
    region: "",
  });

  const regionsList = useMemo(() => {
    return [
      ...new Set(
        dataList.map((item) => {
          return item.region;
        })
      ),
    ];
  }, [dataList]);

  useEffect(() => {
    setFilteredData(
      dataList
        .filter((item) =>
          item.name.common
            .toLowerCase()
            .includes(filterCriteria.name.toLowerCase())
        )
        .filter((item) =>
          filterCriteria.region ? item.region === filterCriteria.region : true
        )
    );
    dispatch(setCurrentPage(1));
  }, [filterCriteria]);

  const currentPageData = useMemo(() => {
    const lastCardIndex = cardsPerPage * currentPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;
    return filteredData.slice(firstCardIndex, lastCardIndex);
  }, [currentPage, filteredData, filterCriteria, cardsPerPage]);

  return (
    <>
      {showModal && <Modal />}
      <div className="countries">
        <div className="topnav">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={filterCriteria.name}
              onChange={(e) =>
                setFilterCriteria({ ...filterCriteria, name: e.target.value })
              }
            />
            <select
              name="region"
              defaultValue="default-option"
              onChange={(e) =>
                setFilterCriteria({ ...filterCriteria, region: e.target.value })
              }
            >
              <option value="default-option" disabled hidden>
                Select an Option
              </option>
              <option value="">All</option>

              {regionsList.map((region, index) => (
                <option key={index} value={region}>
                  {region}
                </option>
              ))}
            </select>
            <select
              name="cards-per-page"
              onChange={(e) => dispatch(setCardsPerPage(e.target.value))}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
        <h1 className="countries-heading">Countries Data</h1>
        <Container className="cards-container">
          <Row
          // style={{ justifyContent: "center" }}
          >
            {currentPageData.map((item, index) => {
              return (
                <Col
                  key={index}
                  sm="12"
                  md="6"
                  lg="4"
                  xl="3"
                  onClick={() => dispatch(setModalData(item))}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card className="countries-card">
                    <div
                      className="flag-img"
                      style={{
                        height: "40%",
                        // width: "100%",
                        backgroundColor: "#ddd9",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item.flag.src}
                        alt={item.flag.alt}
                        style={{
                          width: "90%",
                          maxHeight: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div
                      className="content"
                      style={{ height: "60%", paddingTop: "20px" }}
                    >
                      <p>
                        <strong>Country Name:</strong> {item.name.common}
                      </p>
                      <p>
                        <strong>Population:</strong> {item.population}
                      </p>
                      <p>
                        <strong>Region:</strong> {item.region}
                      </p>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <Pagination
          itemsPerPage={cardsPerPage}
          totalItems={filteredData.length}
        />
      </div>
    </>
  );
}

export default CardsContainer;
