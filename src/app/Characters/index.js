import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import { getCharacterInfo } from "../../functions/db";

const ChooseClass = () => {
  /*Retrieve Class and Character data from firebase*/
  var dataLoaded = false;
  var characters = [];
  useEffect(() => {
    loadCharacterData();
  });
  async function loadCharacterData() {
    if (dataLoaded == true) {
      return;
    } else {
      characters = await getCharacterInfo();
    }
    /* Loop the card so that each new collection of data is displayed (based on user is done later) */
    /* Display the collection in a card */
  }
  console.log(characters);
  /*Put the character info into a new card that will be displayed*/
  return (
    <React.Fragment>
      <Card
        href="#Character-details-page"
        header="Character Name"
        meta="Character Class"
        description="Character Description/Backstory"
      />
    </React.Fragment>
  );
};

export default ChooseClass;
