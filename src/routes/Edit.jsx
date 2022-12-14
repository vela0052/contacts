import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";

import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import db from '../db'

function Edit () {
  const params = useParams()
  const navigate = useNavigate()
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  function changeHandler (e) {
    setContact({
      ...contact,
      [e.target.name]:e.target.value
    })

  }

  function submitHandler (e) {
    e.preventDefault()
    //returns a promise ( then method)
    updateDoc(doc(db, 'contacts', params.id), contact)
    .then(()=> navigate('/contact/'+params.id))
  }

  function clickHandler () {
    deleteDoc(doc(db, 'contacts', params.id))
    .then(() => navigate('/'))
    
  }
  useEffect(()=>{
    //getting document from firestore
    //return 
    getDoc(doc(db, 'contacts', params.id))
    .then(document => {
        setContact({
            firstName: document.data().firstName,
            lastName: document.data().lastName,
            email: document.data().email
        })
    })

    },[])

  return (
    <Row>
      <Col>
        <form className="p-5 bg-light border border-1 mb-3"
          onSubmit={submitHandler}>
          <h2 className="mb-3">Edit Contact: {contact.firstName} {contact.lastName}</h2>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input name="firstName" type="text" className="form-control"
              value={contact.firstName} onChange={changeHandler}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input name="lastName" type="text" className="form-control"
              value={contact.lastName} onChange={changeHandler}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="text" className="form-control"
              value={contact.email} onChange={changeHandler}></input>
          </div>
          <div className="d-flex justify-content-end">
            <Link className="btn btn-secondary me-3" to={"/contact/"+params.id}>Cancel</Link>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>

        <button type="button" className="btn btn-danger"
          onClick={clickHandler}>Delete</button>
      </Col>
    </Row>
  )
}

export default Edit