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
      <h1 class="ui center aligned grid">Dungeon World Manager</h1>
      <Grid stackable>
        {/* About Dungeon World */}
        <h2 class="ui center aligned grid">Dungeon World</h2>
        {/* Table Top RPG */}
        <Grid.Row columns={3}>
          <Grid.Column>
            <Icon name="shield" />
            {/* <Icon name="compass outline" />
            <Icon name="fire" />
            <Icon name="magic" /> */}
            <h3>What is Dungeon World?</h3>
            <p>Dungeon World is an open source table top roleplaying game.</p>
          </Grid.Column>
          {/* Exp from building the story */}
          <Grid.Column>
            <Icon name="conversation" />
            {/* <Icon name="beer" /> */}
            <h3>Gain experience from building the story</h3>
            <p>
              Dungeon World's simple rules happen based on what's happening
              within the game, so you spend more time talking about the action
              and less time talking about the rules.
            </p>
          </Grid.Column>
          {/* Vs DnD */}
          <Grid.Column>
            <Icon name="trophy" />
            <h3>How's it different from DnD?</h3>
            <p>Dungeon World uses the Powered by the Apocalypse engine.</p>
            <p>
              Story-driven world building and character development - experience
              is gained by progressing the story and developing your character.
            </p>
          </Grid.Column>
        </Grid.Row>

        {/* About Our App */}
        <h2 class="ui center aligned grid">About our app</h2>
        <p class="ui center aligned grid">
          Focus less on managing, and more on playing
        </p>
        <Grid.Row columns={2}>
          {/* Benefits of digital app */}
          <Grid.Column>
            <Icon name="hourglass outline" />
            <h3>No more paper</h3>
            <p>
              No need to print anything out, you can keep track of everything
              you need to through the app.
            </p>
          </Grid.Column>
          <Grid.Column>
            {/* <Icon name="paint brush" />
            <Icon name="lightbulb outline" />
            <Icon name="map outline" /> */}
            <Icon name="sliders horizontal" />
            <h3>Embrace customization</h3>
            <p>
              Dungeon World allows for endless customization. Use DW manager to
              create materials based on your customizations. Just enter your
              custom details and the app can generate a printable pdf of your
              custom class.
            </p>
          </Grid.Column>
          {/* Manage Sessions */}
          <Grid.Column>
            {/* <Icon name="group" /> */}
            <Icon name="calendar check outline" />
            <h3>Manage sessions</h3>
            <p>Streamline communication between the GM and the players.</p>
            <p></p>
          </Grid.Column>
          {/* Create, share, expand everything */}
          <Grid.Column>
            <Icon name="group" />
            <h3>Create, share, expand everything</h3>
            <p>
              Share your creations through the app, and browse what others have
              created to expand your own play sessions.
            </p>
          </Grid.Column>
        </Grid.Row>

        {/* CTA */}
        <h2 class="ui center aligned grid">Ready to begin your adventure?</h2>
        <Grid.Row columns={3}>
          {/* - download the app */}
          <Grid.Column>
            <Icon name="download" />
            <h3>Download the app</h3>
            <p>DW Manager is a PWA [Instructions for downloading]</p>
          </Grid.Column>
          {/* - create an account */}
          <Grid.Column>
            <Icon name="vcard" />
            {/* <Icon name="user" /> */}
            {/* <Icon name="id card" /> */}
            <h3>Create your account</h3>
            <p>
              Create an account to play sessions with others [Benefits of
              creating an account]
            </p>
          </Grid.Column>
          {/* - learn more about DW  */}
          <Grid.Column>
            <Icon name="question circle" />
            <h3>Still have questions?</h3>
            <p>
              Learn more about Dungeon World [link to more in-depth
              rules/description of mechanics, etc.]
            </p>
            <Link
              to="/pdfviewer"
              params={{
                pdfSrc:
                  "https://drive.google.com/file/d/0B8_Fz4m5hcoiTXpTbklDOF9iUHc/preview?resourcekey=0-xI_68aH1lllySOdEovKvPQ",
              }}
              pdfSrc={{ pdfSrc }}
            >
              Learn more
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </React.Fragment>
  );
};

export default LandingPage;
