import { useState } from "react";
import { Link } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";

function New () {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  function changeHandler (e) {

  }

  function submitHandler (e) {
    e.preventDefault()
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
            <textarea name="email" className="form-control"
              value={contact.email} onChange={changeHandler}></textarea>
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