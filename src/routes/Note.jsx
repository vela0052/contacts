import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ContactCard from "../components/ContactCard";
import Col from "../components/Col";
import Row from "../components/Row";
import Container from "../components/Container";

import { doc, getDoc } from 'firebase/firestore'
import db from '../db'

function Note () {
    const params = useParams()
  const [contacts, setContacts] = useState([])
    useEffect(()=>{
    //getting document from firestore
    //return 
    getDoc(doc(db, 'contacts', params.id))
    .then(document => {
        setContacts({
            firstName: document.data().firstName,
            lastName: document.data().lastName,
            email: document.data().email
        })
    })

    },[])
  return (
    <Container>
    <Row className="m-5">
      <Col className="d-flex justify-content">
          <Link className="" to="/">Contacts</Link>
        </Col>
        <Col className="d-flex justify-content-end">
          <Link className="" to={"/edit/" + params.id}>edit</Link>
        </Col>
    </Row>
    <Row>
        
      <Col className="col-12 col-md-6 col-lg-4 mb-3">
          <ContactCard firstName={contacts.firstName} lastName={contacts.lastName} email={contacts.email} />
      </Col>
    </Row>
    </Container>
  )
}

export default Note