import React, { useState } from "react";
import { Card } from "semantic-ui-react";

const ChooseClass = () => {
  /*Retrieve Class and Character data from firebase*/

  function loadClassData() {}

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
