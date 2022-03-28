import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Button, Icon, Segment, Header, Accordion } from 'semantic-ui-react';
// import PDF from "../../resources/dungeon-world-overview.pdf";
// import PdfViewer from "../PdfViewer";

export default class LandingPage extends Component {
	state = { activeIndex: 0 };

	handleClick = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	render() {
		const { activeIndex } = this.state;

		const pdfSrc =
			'https://drive.google.com/file/d/0B8_Fz4m5hcoiTXpTbklDOF9iUHc/preview?resourcekey=0-xI_68aH1lllySOdEovKvPQ';

		return (
			<React.Fragment>
				<Segment color='red' textAlign='center'>
					<Header as='h1'>DW Manager</Header>
					<Header as='h3'>
						Start or join a Dungeon World Session Now!
					</Header>
					<Button
						as={Link}
						to='/sessions'
						color='red'
						size='massive'
						circular
					>
						<Icon name='users' />
						Sessions
					</Button>
				</Segment>

				{/* Info about Dungeon Worlds */}
				<Accordion>
					{/* Info about DW */}
					<Accordion.Title
						active={activeIndex === 0}
						index={0}
						onClick={this.handleClick}
					>
						<Icon name='dropdown' />
						What is Dungeon World?
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 0}>
						<p>
							Dungeon World is an open source table top
							roleplaying game. Dungeon World uses the Powered by
							the Apocalypse engine. Story-driven world building
							and character development-experience is gained by
							progressing the story and developing your character.
						</p>

						<p>
							Dungeon World's simple rules happen based on what's
							happening within the game, so you spend more time
							talking about the action and less time talking about
							the rules.
						</p>
					</Accordion.Content>

					{/* Info about the App */}
					<Accordion.Title
						active={activeIndex === 1}
						index={1}
						onClick={this.handleClick}
					>
						<Icon name='dropdown' />
						Why use our app?
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 1}>
						<p>Focus less on managing and more on playing</p>

						<p>
							No need to print anything out, you can keep track of
							everything you need to through the app.
						</p>

						<p>
							Streamline communication between the GM and the
							players.
						</p>

						<p>
							Share your creations through the app, and browse
							what others have created to expand your own play
							sessions.
						</p>

						<p>
							Dungeon World allows for endless customization. Use
							DW manager to create materials based on your
							customizations. Just enter your custom details and
							the app can generate a printable pdf of your custom
							class.
						</p>
					</Accordion.Content>

					{/* Info about how to use app/get started */}
					<Accordion.Title
						active={activeIndex === 2}
						index={2}
						onClick={this.handleClick}
					>
						<Icon name='dropdown' />
						How do I get started?
					</Accordion.Title>
					<Accordion.Content active={activeIndex === 2}>
						<p>
							Create an account to play sessions with others
							[Benefits of creating an account]
						</p>

						<p>
							DW Manager is a PWA [Instructions for downloading]
						</p>

						<p>
							Learn more about Dungeon World [Link to more
							in-depth rules/description of mechanics, etc.]
						</p>

						<Link to='/pdfviewer' state={{ pdfSrc }}>
							Learn more
						</Link>
					</Accordion.Content>
				</Accordion>
			</React.Fragment>
		);
	}
}
