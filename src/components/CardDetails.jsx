import React from "react";

export const CardDetails = ({name,image,gender,status,species,origin}) => {
  return (
    <div className="xd">
      <div className="img-details">
        <img src={image} alt={name} />
      </div>
      <div className="info-details">
        <h1>{name}</h1>
        <div>
          <ul>
            <li>
              <b>Gender:</b>
              {gender}
            </li>
            <li>
              <b>Status:</b>
              {status}
            </li>
            <li>
              <b>Species:</b>
              {species}
            </li>
            <li>
              <b>Origin:</b>
              {origin}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
