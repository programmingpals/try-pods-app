import React from "react"
import { Link } from "react-router-dom"

//receives props.attributes which contains all podcast details

export default function PodResultItem(props) {
  return (
    <div>
      <p>Hello from PodResultItem</p>
       <Link to={`/querypodcast/${props.uuid}`}><p>{props.name}</p></Link>
      {/* <p>{props.name}</p> */}
      <p><img src={props.image} style={{width: "125px"}}/></p>
      <p>{props.description}</p>
      <button>Add to list</button>
    </div>
  )
}