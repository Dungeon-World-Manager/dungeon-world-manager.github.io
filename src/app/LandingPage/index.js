import React from "react";
import { Link, useHistory } from "gatsby";
import PDF from "../../resources/dungeon-world-overview.pdf";
import PdfViewer from "../PdfViewer";

const LandingPage = () => {
	const pdfSrc =
		"https://drive.google.com/file/d/0B8_Fz4m5hcoiTXpTbklDOF9iUHc/preview?resourcekey=0-xI_68aH1lllySOdEovKvPQ";
	return (
		<React.Fragment>
			<h1 class="ui center aligned grid">Dungeon World Manager</h1>
			{/* About Dungeon World */}
			<h2 class="ui center aligned grid">Dungeon World</h2>
			{/* Table Top RPG */}
			<div class="ui stackable three column grid">
				<div class="column">
					<h3>What is Dungeon World?</h3>
					<p>Dungeon World is an open source table top roleplaying game.</p>
				</div>
				{/* Exp from building the story */}
				<div class="column">
					<h3>Gain experience from building the story</h3>
					<p>
						Dungeon World's simple rules happen based on what's happening within
						the game, so you spend more time talking about the action and less
						time talking about the rules.
					</p>
				</div>
				{/* Vs DnD */}
				<div class="column">
					<h3>How's it different from DnD?</h3>
					<p>Dungeon World uses the Powered by the Apocalypse engine.</p>
					<p>
						Story-driven world building and character development - experience
						is gained by progressing the story and developing your character.
					</p>
				</div>
			</div>

			{/* About Our App */}
			<h2 class="ui center aligned grid">About our app</h2>
			<p class="ui center aligned grid">
				Focus less on managing, and more on playing
			</p>
			<div class="ui stackable two column grid">
				{/* Benefits of digital app */}
				<div class="column">
					<h3>No more paper</h3>
					<p>
						No need to print anything out, you can keep track of everything you
						need to through the app.
					</p>
				</div>
				<div class="column">
					<h3>Embrace customization</h3>
					<p>
						Dungeon World allows for endless customization. Use DW manager to
						create materials based on your customizations. Just enter your
						custom details and the app can generate a printable pdf of your
						custom class.
					</p>
				</div>
				{/* Manage Sessions */}
				<div class="column">
					<h3>Manage sessions</h3>
					<p>Streamline communication between the GM and the players.</p>
					<p></p>
				</div>
				{/* Create, share, expand everything */}
				<div class="column">
					<h3>Create, share, expand everything</h3>
					<p>
						Share your creations through the app, and browse what others have
						created to expand your own play sessions.
					</p>
				</div>
			</div>

			{/* CTA */}
			<h2 class="ui center aligned grid">Ready to begin your adventure?</h2>
			<div class="ui stackable three column grid">
				{/* - download the app */}
				<div class="column">
					<h3>Download the app</h3>
					<p>DW Manager is a PWA [Instructions for downloading]</p>
				</div>
				{/* - create an account */}
				<div class="column">
					<h3>Create your account</h3>
					<p>
						Create an account to play sessions with others [Benefits of creating
						an account]
					</p>
				</div>
				{/* - learn more about DW  */}
				<div class="column">
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
				</div>
			</div>
		</React.Fragment>
	);
};

export default LandingPage;
