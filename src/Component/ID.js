import Naruto from './Naruto.jpg'

function ID() {
  return (
    <div className = "wrapper">
      <Card 
      title = "K V Kousik" 
      Collage = "KL UNIVERSITY"
      img = {Naruto}
      ID = "2000031142"
      dept = "CSE"
      accomodation = "Day Scholar"
      address = "Address: Green Fields, Vaddeswaram, Andhra Pradesh 522502"></Card>
    </div>
  )
}

function Card(props) 
{
  return(
    <div className="card">
      <div className="card_body">
      <h4 className="Collage"> {props.Collage}</h4>
        <img className="photo" src={props.img} />
        <h2 className="ID">ID: {props.ID}</h2>
        <h4 className="title">NAME: {props.title}</h4>
        <h4 className="dept">Department: {props.dept}</h4>
        <h4 className="accomodation">{props.accomodation}</h4>
        <h4 className="address">{props.address}</h4>
        <h4 className="phoneno">{props.phoneno}</h4>

      </div>
    </div>
  )
}

export default ID