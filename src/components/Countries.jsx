import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/countries/countriesActions";
import CardsContainer from "./CountriesComponents/CardsContainer";

function Countries() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  useEffect(() => dispatch(fetchData()), []);
  return data.loading ? (
    <h3>Loading...</h3>
  ) : data.error ? (
    <h3>{data.error}</h3>
  ) : (
    <CardsContainer />
  );
}

export default Countries;
