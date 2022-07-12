import React from "react";
import { Link } from "react-router-dom";

const beerImages = require.context("../../assets", true);

export const BeerCard = ({
  id,
  typeBeer,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="col">
      <div className="card">
        <div className="row no-glutters">
          <div>
            <img
              src={beerImages(`./${id}.jpg`)}
              className="card-img"
              alt={typeBeer}
            />
          </div>
          <div className="col-8">
            <div className="car-body">
              <h5 className="card-title">{typeBeer}</h5>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`/beer/${id}`}>Mas..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
