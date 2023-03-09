import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideModal } from "./../../redux/countries/countriesActions";

function Modal() {
  const dispatch = useDispatch();
  const modalData = useSelector((state) => state.countries.modal.modalData);
  return (
    <div className="modal-container">
      <div className="custom-modal">
        <h1 style={{ display: "inline" }}>
          {modalData.name.common}{" "}
          {/* <span onClick={() => dispatch(hideModal())}>X</span> */}
        </h1>
        <button
          style={{ position: "absolute", right: "20px" }}
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => dispatch(hideModal())}
        ></button>
        <div className="modal-data">
          <ul>
            <p>
              <strong>Currencies: </strong>

              {modalData.currencies
                ? Object.values(modalData.currencies).map((currency, index) => (
                    <li
                      key={index}
                    >{`${currency.name} (${currency.symbol})`}</li>
                  ))
                : "No official currency"}
            </p>
          </ul>
          <ul>
            <p>
              <strong>Capital: </strong>
              {modalData.capital
                ? modalData.capital.map((modalData, index) => (
                    <li key={index}>{modalData}</li>
                  ))
                : "No Capital"}
            </p>{" "}
          </ul>
          <ul>
            <p>
              <strong>Languages: </strong>
              {modalData.numOfLanguages
                ? Object.values(modalData.numOfLanguages).map(
                    (modalData, index) => <li key={index}>{modalData}</li>
                  )
                : "No Official Language"}
            </p>{" "}
          </ul>
          <p>
            <strong>Google Maps: </strong>{" "}
            <a href={modalData.map} target="_blank">
              {modalData.map}
            </a>
          </p>
          <p>
            <strong>Independent Status: </strong>
            {!modalData.independentStatus && "Not"} Independent
          </p>
          <ul>
            <p>
              <strong>Timezones: </strong>
              {modalData.timezones
                ? modalData.timezones.map((modalData, index) => (
                    <li key={index}>{modalData}</li>
                  ))
                : "No Official Language"}
            </p>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Modal;
