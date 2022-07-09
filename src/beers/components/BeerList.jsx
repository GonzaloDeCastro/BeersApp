import React from "react";
import { getBeersByPublisher } from "../helpers/getBeersByPublisher";

export const BeerList = ({ publisher }) => {
  const beers = getBeersByPublisher(publisher);

  return (
    <ul>
      {beers.map((beer) => (
        <li key={beer.id}>{beer.superhero}</li>
      ))}
    </ul>
  );
};
