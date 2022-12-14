import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";

import { collection, query, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore'
import db from '../db'

function Notes () {
  const [contacts, setContacts] = useState([])
  const [quer, setQuer] = useState([])
 

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
      const search = data.filter(contact => (
        contact.firstName.toLowerCase().includes(quer.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(quer.toLowerCase())))
    setContacts(search)
      })
    },[quer])
  
    function formHandler (e) {
      e.preventDefault();
    }
    function textHandler (e) {
      setQuer(e.target.value)
      
    }
  


  return (
    <>
    <form onSubmit={formHandler}>
      <input className="m-5 p-2" type="text" value={quer} onChange={textHandler} placeholder='Search' />
    </form>
    
    <Row>
      {contacts.map(contact =>(
      <Col key={contact.id} className="col-12 col-md-6 col-lg-4 mb-3">
        <Link className="text-decoration-none text-body" to={"/contact/" + contact.id}>
          <Card firstName={contact.firstName} lastName={contact.lastName} email={contact.email} />
        </Link>
      </Col>
      
    
  ))}
  </Row>
  </>
)
      }
export default Notes