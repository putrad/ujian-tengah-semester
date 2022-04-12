import react from "react"
const Card =(props)=>{
        console.log(props);
    return (
        
<div className='card'>
          <img src={props.contact.imageurl}  alt=""class="card-img-top" />
          <div className="card body">
            <h1>{props.title}</h1>
            <small className="text-muted">{props.publishe}</small>

          </div>
          </div>
    )
}
export default Card