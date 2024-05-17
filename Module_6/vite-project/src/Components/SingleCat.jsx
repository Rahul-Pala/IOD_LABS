import React from "react";

export default function SingleCat(props) {
  return (
    <div>
      <li key={props.name}>
        {props.name}, {props.latinName}
        <div>
       <img src={props.image} height="150" width="150" alt={`Photo of a ${props.name}`} />
        </div>
      </li>
    </div>
  );
}