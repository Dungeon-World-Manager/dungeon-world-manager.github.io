import React from "react";
import { Button } from "semantic-ui-react";
import State from "../../state";
import InviteLink from "../Sessions/InviteLink";

const Test = () => {
  const { test } = React.useContext(State);

  return (
    <React.Fragment>
      <h1>Test</h1>
      <p>Color: {test.color}</p>
      <Button color="red" onClick={() => test.pickColor("red")} />
      <Button color="green" onClick={() => test.pickColor("green")} />
      <Button color="blue" onClick={() => test.pickColor("blue")} />
      <InviteLink />
    </React.Fragment>
  );
};

export default Test;
