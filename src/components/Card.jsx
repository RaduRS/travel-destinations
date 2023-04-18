import React from "react";
import locationIcon from "../images/location-path.png";

export default function Card({ item }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={require(`../images/${item.coverImg}`)} alt={item.title} />
      </div>

      <div className="card-info">
        <div className="location">
          <div>
            <img className="location-icon" src={locationIcon} alt="location" />
            <span>{item.location}</span>
          </div>
          <div>
            <a href={item.link} rel="noopener noreferrer" target="_blank">
              View on Google Maps
            </a>
          </div>
        </div>
        <div className="card-title">{item.title}</div>
        <div>{item.dates}</div>
        <div className="card-description">{item.description}</div>
        <button className="book-button">Book now</button>
      </div>
    </div>
  );
}
