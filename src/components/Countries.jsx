import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/countries/countriesActions";

function Countries() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const dataList = data.data;

  useEffect(() => dispatch(fetchData()), []);
  return data.loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="countries">
      <h1 className="countries-heading">Countries Data</h1>
      <Container>
        <Row style={{ justifyContent: "space-around" }}>
          {dataList.map((item, index) => {
            return (
              <Col
                key={index}
                sm="12"
                md="6"
                lg="4"
                xl="3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card className="countries-card">
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
      </Container>
    </div>
  );
}

export default Countries;
