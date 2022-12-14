import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";

import { collection, addDoc } from 'firebase/firestore'
import db from '../db'

function New () {
  const navigate = useNavigate()
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  function changeHandler (e) {
    // console.log(e.target.name, e.target.value)
    setContact({
      ...contact,
      [e.target.name]:e.target.value 
    })


  }

  function submitHandler (e) {
    e.preventDefault()
    const c = collection(db, 'contacts')
    // addDoc returns a promise, use an asynchronous method( ex. then method)
    addDoc(c, contact)
      .then(document => navigate('/contact/' + document.id))


  }

  return (
    <Row>
      <Col>
        <form className="p-5 bg-light border border-1 mb-3"
          onSubmit={submitHandler}>
          <h2 className="mb-3">New Contact</h2>
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
            <label className="form-label">email</label>
            <input name="email" type="text" className="form-control"
              value={contact.email} onChange={changeHandler}></input>
          </div>
          <div className="d-flex justify-content-end">
            <Link className="btn btn-secondary me-3" to="/">Cancel</Link>
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </form>
      </Col>
    </Row>
  )
}

export default New