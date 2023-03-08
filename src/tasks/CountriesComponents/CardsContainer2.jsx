import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Container } from "react-bootstrap";

function CardsContainer2() {
  const dataList = useSelector((state) => state.data);
  return (
    <div className="countries">
      <h1 className="countries-heading">Countries Data</h1>
      <Container>
        {dataList.map((arr, index) => {
          return (
            <Row key={index}>
              {arr.map((item, index) => {
                return (
                  <Col
                    key={index}
                    sm="12"
                    md="6"
                    lg="4"
                    xl="3"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Card
                      className="countries-card"
                      style={{
                        width: "300px",
                        margin: "10px 0",
                        padding: "30px",
                        textAlign: "left",
                      }}
                    >
                      <div className="content">
                        <p>
                          <strong>Country Name:</strong> {item.name.common}
                        </p>
                        <p>
                          <strong>Population:</strong> {item.population}
                        </p>
                        <ul>
                          <p>
                            <strong>Currencies: </strong>

                            {item.currencies
                              ? Object.values(item.currencies).map(
                                  (currency, index) => (
                                    <li
                                      key={index}
                                    >{`${currency.name} (${currency.symbol})`}</li>
                                  )
                                )
                              : "No official currency"}
                          </p>
                        </ul>
                        <p>
                          <strong>Region:</strong> {item.region}
                        </p>
                        <ul>
                          <p>
                            <strong>Capital: </strong>
                            {item.capital
                              ? item.capital.map((item, index) => (
                                  <li key={index} style={{}}>
                                    {item}
                                  </li>
                                ))
                              : "No Capital"}
                          </p>{" "}
                        </ul>
                        <p>
                          <strong>Number of Languages: </strong>
                          {item.numOfLanguages
                            ? Object.keys(item.numOfLanguages).length
                            : 0}
                        </p>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </Container>
    </div>
  );
}

export default CardsContainer2;
