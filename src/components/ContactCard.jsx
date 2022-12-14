function ContactCard (props) {
    return (
        
      <div className="m-3">
        <h1 className="">{props.firstName} {props.lastName}</h1>
        <div className="m-5">
            <h4>E-mail</h4>
            <p className="m-0">{props.email}</p>
            </div>
        
      </div>
      
      
    )
  }
  
  export default ContactCard