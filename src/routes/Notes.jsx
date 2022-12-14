import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";

import { collection, query, onSnapshot, orderBy } from 'firebase/firestore'
import db from '../db'

function Notes () {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const c = collection(db, 'contacts' )
    const q = query(c, orderBy('firstName'))
    //get snapshot
    const unsubscribe = onSnapshot(q, (snapshot) =>{
      const data = [] 
      snapshot.forEach(doc => data.push({
        id: doc.id,
        firstName: doc.data().firstName,
        lastName: doc.data().lastName,
        email: doc.data().email
      }))
      setContacts(data)
    })

  }, [])

  return (
    <Row>
      {contacts.map(contact =>(
      <Col key={contact.id} className="col-12 col-md-6 col-lg-4 mb-3">
        <Link className="text-decoration-none text-body" to={"/contact/" + contact.id}>
          <Card firstName={contact.firstName} lastName={contact.lastName} email={contact.email} />
        </Link>
      </Col>
    
  ))}
  </Row>
)
      }
export default Notes