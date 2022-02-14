import React from "react";
import { Link } from "gatsby";
import { Grid, Icon } from "semantic-ui-react";
// import PDF from "../../resources/dungeon-world-overview.pdf";
// import PdfViewer from "../PdfViewer";

const LandingPage = () => {
  const pdfSrc =
    "https://drive.google.com/file/d/0B8_Fz4m5hcoiTXpTbklDOF9iUHc/preview?resourcekey=0-xI_68aH1lllySOdEovKvPQ";
  return (
    <React.Fragment>
      <h1 class="ui center aligned header">Dungeon World Manager</h1>
      {/* About Dungeon World */}
      <h2 class="ui center aligned header">Dungeon World</h2>
      {/* Table Top RPG */}
      <Grid centered columns={3}>
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              <Icon name="shield" size="large" />
              {/* <Icon name="compass outline" size="large" />
            <Icon name="fire" size="large" />
            <Icon name="magic" size="large" /> */}
            </Grid.Column>
            <Grid.Column>
              <h3>What is Dungeon World?</h3>
            </Grid.Column>
          </Grid>

          <p>Dungeon World is an open source table top roleplaying game.</p>
        </Grid.Column>
        {/* Exp from building the story */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={2}>
              <Icon name="conversation" size="large" />
              {/* <Icon name="beer" size="large" /> */}
            </Grid.Column>
            <Grid.Column width="fluid">
              <h3>Gain experience from building the story</h3>
            </Grid.Column>
          </Grid>

          <p>
            Dungeon World's simple rules happen based on what's happening within
            the game, so you spend more time talking about the action and less
            time talking about the rules.
          </p>
        </Grid.Column>
        {/* Vs DnD */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              <Icon name="trophy" size="large" />
            </Grid.Column>
            <Grid.Column>
              <h3>How's it different from DnD?</h3>
            </Grid.Column>
          </Grid>

          <p>Dungeon World uses the Powered by the Apocalypse engine.</p>
          <p>
            Story-driven world building and character development - experience
            is gained by progressing the story and developing your character.
          </p>
        </Grid.Column>
      </Grid>

      {/* About Our App */}
      <Grid columns={1}>
        <Grid.Column textAlign="center">
          <h2 class="ui center aligned header">About our app</h2>
          <p class="ui center aligned grid">
            Focus less on managing, and more on playing
          </p>
        </Grid.Column>
      </Grid>

      <Grid columns={2}>
        {/* Benefits of digital app */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              <Icon name="hourglass outline" size="large" />
            </Grid.Column>
            <Grid.Column>
              <h3>No more paper</h3>
            </Grid.Column>
          </Grid>
          <p>
            No need to print anything out, you can keep track of everything you
            need to through the app.
          </p>
        </Grid.Column>
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              {/* <Icon name="paint brush" size="large" />
            <Icon name="lightbulb outline" size="large" />
            <Icon name="map outline" size="large" /> */}
              <Icon name="sliders horizontal" size="large" />
            </Grid.Column>
            <Grid.Column>
              <h3>Embrace customization</h3>
            </Grid.Column>
          </Grid>

          <p>
            Dungeon World allows for endless customization. Use DW manager to
            create materials based on your customizations. Just enter your
            custom details and the app can generate a printable pdf of your
            custom class.
          </p>
        </Grid.Column>
        {/* Manage Sessions */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              {/* <Icon name="group" size="large" /> */}
              <Icon name="calendar check outline" size="large" />
            </Grid.Column>
            <Grid.Column>
              <h3>Manage sessions</h3>
            </Grid.Column>
          </Grid>

          <p>Streamline communication between the GM and the players.</p>
          <p></p>
        </Grid.Column>
        {/* Create, share, expand everything */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              <Icon name="group" size="large" />
            </Grid.Column>
            <Grid.Column>
              <h3>Create, share, expand everything</h3>
            </Grid.Column>
          </Grid>

          <p>
            Share your creations through the app, and browse what others have
            created to expand your own play sessions.
          </p>
        </Grid.Column>
      </Grid>

      {/* CTA */}
      <h2 class="ui center aligned header">Ready to begin your adventure?</h2>
      <Grid columns={3}>
        {/* - download the app */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              <Icon name="download" size="large" />
            </Grid.Column>
            <Grid.Column>
              <h3>Download the app</h3>
            </Grid.Column>
          </Grid>

          <p>DW Manager is a PWA [Instructions for downloading]</p>
        </Grid.Column>
        {/* - create an account */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              <Icon name="vcard" size="large" />
              {/* <Icon name="user" size="large" /> */}
              {/* <Icon name="id card" size="large" /> */}
            </Grid.Column>
            <Grid.Column>
              <h3>Create your account</h3>
            </Grid.Column>
          </Grid>

          <p>
            Create an account to play sessions with others [Benefits of creating
            an account]
          </p>
        </Grid.Column>
        {/* - learn more about DW  */}
        <Grid.Column>
          <Grid centered padded columns={2}>
            <Grid.Column width={1}>
              <Icon name="question circle" size="large" />
            </Grid.Column>
            <Grid.Column>
              <h3>Still have questions?</h3>
            </Grid.Column>
          </Grid>

          <p>
            Learn more about Dungeon World [link to more in-depth
            rules/description of mechanics, etc.]
          </p>
          <Link to="/pdfviewer" state={{ pdfSrc }}>
            Learn more
          </Link>
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};

export default LandingPage;
