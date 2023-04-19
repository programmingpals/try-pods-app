import React from "react"
import { Link } from "react-router-dom"

//receives props.attributes which contains all podcast details

export default function PodResultItem(props) {


  function clearResults () {
    props.setPodcast([])
  }

  return (
    <div>
      <p>Hello from PodResultItem</p>
       <Link onClick={() => clearResults()} to={`/querypodcast/${props.uuid}`}><p>{props.name}</p></Link>
      <p><img src={props.image} style={{width: "125px"}}/></p>
      <p>{props.description}</p>
      <Link onClick={() => clearResults()} to= "/addpodcast" state={{ attributes: props.attributes }}><p>Add to list</p></Link>
      {/* <Link onClick={() => clearResults()} to={{pathname: "/addpodcast", podcast:"hi from podresultitem"}}><p>Add to list</p></Link> */}
    </div>
  )
}