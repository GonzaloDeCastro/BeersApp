import React from "react";
import { getBeersByPublisher } from "../helpers/getBeersByPublisher";
import { BeerCard } from "./BeerCard";

export const BeerList = ({ publisher }) => {
  const beers = getBeersByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {beers.map((beer) => (
        <BeerCard key={beer.id} {...beer} />
      ))}
    </div>
  );
};
