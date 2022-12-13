import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";

function Notes () {
  const [contacts, setNotes] = useState([])

  return (
    <Row>
      <Col className="col-12 col-md-6 col-lg-4 mb-3">
        <Link className="text-decoration-none text-body" to="/contact/1">
          <Card firstName="FirstName" lastName="LastName" email="Text" />
        </Link>
      </Col>
    </Row>
  )
}

export default Notes