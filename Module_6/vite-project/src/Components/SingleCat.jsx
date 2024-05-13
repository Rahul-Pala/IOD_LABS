import React from "react";

export default function SingleCat(props) {
  return (
    <div>
      <li key={props.name}>
        {props.name}, {props.latinName},{props.image}
        <img src={props.image} />
      </li>
    </div>
  );
}
