import { BeerList } from "../components/BeerList";

export const BlackBeerPage = () => {
  return (
    <>
      <h1 className="titleBeer"> Black Beers</h1>
      <hr />

      <BeerList publisher={"Black Beer"} />
    </>
  );
};
