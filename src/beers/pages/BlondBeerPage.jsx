import { BeerList } from "../components/BeerList";

export const BlondBeerPage = () => {
  return (
    <>
      <h1 className="titleBeer"> Blond Beers</h1>
      <hr />

      <BeerList publisher={"Blond Beer"} />
    </>
  );
};
