import React from "react";
import HeroBanner from "../components/HeroBanner";
import CharactersData from "../components/CharactersData";

const Characters = () => {
  return (
    <>
      <HeroBanner
        headingText="The Rick and Morty Characters API"
        paraText="The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes."
      />
      <CharactersData />
    </>
  );
};

export default Characters;
