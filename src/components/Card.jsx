function Card (props) {
    return (
      <div className="card">
        <div className="card-header">{props.firstName} {props.lastName}</div>
      </div>
    )
  }
  
  export default Card