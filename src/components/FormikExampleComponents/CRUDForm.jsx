import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import "./styles/CRUDForm.css"

const ConfirmDelete = ({getDataList,item,setConfirm}) => {
  return (
    <div className="modal-container">
      <div className="custom-modal" style={{backgroundColor:"rgb(213, 73, 73)",height:"auto",padding:"20px"}}>
        <p>Confirm delete</p>
        <button onClick={()=> {
          axios.delete(`http://localhost:3004/data/${item.id}`);
          
          getDataList();
          setConfirm(false);
        }}>Yes</button>
        <button onClick={()=> {
          setConfirm(false)
        }}>No</button>
      </div>
    </div>
  );
};

const CRUDForm = () => {
  const [dataList, setDataList] = useState([]);
  const [editValues, setEditValues] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

  const getDataList = () => {
    axios
      .get("http://localhost:3004/data")
      .then((res) => setDataList(res.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getDataList();
  }, []);
  return (
    <div className="crud-form-page">
      {showModal && <Modal
        getDataList={getDataList}
        editValues={editValues}
        setEditValues={setEditValues}
        setShowModal={setShowModal}
      />}
      {confirm && <ConfirmDelete getDataList={getDataList} item={deleteItem} setConfirm={setConfirm}/>}
      <div className="data-table">
        <div>
          <h2>Data Entries</h2>
          <button
            type="button"
            className="btn btn-primary"
            onClick={()=> {
              setShowModal(true)
            }}
          >
            Add
          </button>
        </div>
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Skills</th>
              <th scope="col">Gender</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {dataList.map((item, index) => {
              return (
                <tr key={item.id}>
                  
                  <th scope="row">{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.skills.join(", ")}</td>
                  <td>{item.gender}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        setEditValues(item);
                        setShowModal(true)
                      }}
                      className="btn btn-primary"
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        setConfirm(true)
                        setDeleteItem(item)
                        // if(res === "n") return
                        // axios.delete(`http://localhost:3004/data/${item.id}`);
                        // getDataList();
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CRUDForm;
