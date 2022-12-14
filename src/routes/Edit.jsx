import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";

function Edit () {
  const params = useParams()
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

  function clickHandler () {

  }

  return (
    <Row>
      <Col>
        <form class="p-5 bg-light border border-1 mb-3"
          onSubmit={submitHandler}>
          <h2 class="mb-3">Edit Contact: {params.id}</h2>
          <div class="mb-3">
            <label class="form-label">First Name</label>
            <input name="firstName" type="text" class="form-control"
              value={contact.firstName} onChange={changeHandler}  />
          </div>
          <div class="mb-3">
            <label class="form-label">Last Name</label>
            <input name="lastName" type="text" class="form-control"
              value={contact.lastName} onChange={changeHandler}  />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <textarea name="email" class="form-control"
              value={contact.email} onChange={changeHandler}></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <Link class="btn btn-secondary me-3" to="/contact/:id">Cancel</Link>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>

        <button type="button" class="btn btn-danger"
          onClick={clickHandler}>Delete</button>
      </Col>
    </Row>
  )
}

export default Edit