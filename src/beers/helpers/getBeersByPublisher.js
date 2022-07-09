import { beers } from "../data/beers";

export const getBeersByPublisher = (publisher) => {
  const validPublishers = ["Black Beer", "Blond Beer"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return beers.filter((beer) => beer.publisher === publisher);
};
