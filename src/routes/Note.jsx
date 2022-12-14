import { useState } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";

function Note () {
  const [contacts, setNotes] = useState([])

  return (
    <Container>
    <Row className="m-5">
      <Col className="d-flex justify-content">
          <Link className="" to="/">Contacts</Link>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link className="" to="/edit/:id">edit</Link>
        </Col>
    </Row>
    <Row>
        
      <Col className="col-12 col-md-6 col-lg-4 mb-3">
          <ContactCard firstName="FirstName" lastName="LastName" email="Text" />
      </Col>
    </Row>
    </Container>
  )
}

export default Note