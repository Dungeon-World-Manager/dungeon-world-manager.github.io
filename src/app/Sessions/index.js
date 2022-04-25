import React, { useState } from 'react';
import { Grid, Header, Card, Icon, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
// import New from './new';
// import Edit from './edit';
import State from '../../state';
import { getSessions } from '../../functions/db';
import { Link } from 'gatsby';

const Session = () => {
	const [loadedData, setLoadedData] = React.useState(false);
	const state = React.useContext(State);
	const stateSessions = state.sessions;
	const stateAuth = state.auth;

	React.useEffect(() => {
		attemptLoadSessions();
	});

	async function attemptLoadSessions() {
		if (loadedData) return;
		setLoadedData(true);
		try {
			const sessions = await getSessions();
			stateSessions.loadSessionsList(sessions);
		} catch {
			console.log('Error loading sessions');
		}
	}
	console.log(stateAuth.user.id);

	// Opening and closing form functions
	const [newSessionOpen, setNewSessionOpen] = React.useState(false);

	function openNewSession() {
		setNewSessionOpen(true);
	}

	function closeNewSession() {
		setNewSessionOpen(false);
	}

	const [editSessionOpen, setEditSessionOpen] = React.useState(false);

	function openEditSession() {
		setEditSessionOpen(true);
	}

	function closeEditSession() {
		setEditSessionOpen(false);
	}

	//Retrieving data functions
	//   const retrieveAll = React.useRef(false);

	//   React.useEffect(() => {
	//     attemptLoadSessions();
	//   });

	//   async function attemptLoadSessions() {
	//     if (retrieveAll.current) return;
	//     retrieveAll.current = true;
	//     try {
	//         const sessions = await getSessions();
	//         stateSessions.loadPublicSession(sessions);
	//     } catch {}
	// }

	//Retrieve the session data and display it as a new session on the page.

	//create a const that accepts an initial value.

	const [RetrieveSessionData, setRetrieveSessionData] = React.useState(false);

	//Run the loadSession function before anything else.
	React.useEffect(() => {
		loadSession();
	});

	async function loadSession() {
		//Check to see if the current data has been applied, if it has then don't do anything
		// If it hasn't, add the new sessions and display them.
		if (RetrieveSessionData) return;
		setRetrieveSessionData(true);
		try {
			//retrieve the session data with a new session.
			const sessions = await getSessions();
			stateSessions.loadPublicSession(sessions);
		} catch {}
	}
	console.log(state.sessions);

	return (
		<React.Fragment>
			<Grid centered columns='2'>
				<Grid.Column>
					<Header as='h1'>Sessions List</Header>
				</Grid.Column>
				<Grid.Column textAlign='right' width='4'>
					{stateAuth.user.id ? (
						<Icon
							color='green'
							name='plus'
							size='big'
							onClick={openNewSession}
						/>
					) : null}
				</Grid.Column>

				{/* {newSessionOpen ? (
					<New closeNewSession={closeNewSession} />
				) : null} */}
				<Grid.Row>
					<Grid.Column></Grid.Column>
				</Grid.Row>
			</Grid>
			<Card.Group stackable itemsPerRow='2'>
				{/* Loop through sessions and their info cards */}
				{stateSessions.list.flatMap((curSession, i) => {
					console.log(curSession);
					return (
						<Card key={`session-card-${i}`}>
							<Card.Content>
								<Card.Header>
									{curSession.description}
								</Card.Header>
								<Card.Meta>{curSession.creatorName}</Card.Meta>
								<Card.Description>
									{curSession.meetingDay}
								</Card.Description>
								<Card.Description>
									{curSession.meetingTime}
								</Card.Description>
								<Card.Description>
									{curSession.sessionDuration}
								</Card.Description>
								<Card.Meta>
									{curSession.numbPlayers + ' players' ??
										null}
								</Card.Meta>
							</Card.Content>
							<Card.Content extra>
								<Button.Group fluid>
									{/* display edit info if logged in */}
									{stateAuth.user.id ? (
										<React.Fragment>
											<Button color='red'>Trash</Button>
											<Button.Or />
											<Button
												color='orange'
												onClick={openEditSession}
											>
												Edit
											</Button>
										</React.Fragment>
									) : (
										<Button
											color='blue'
											as={Link}
											to={`/sessions/view#${curSession.id}`}
										>
											Join
										</Button>
									)}
								</Button.Group>
							</Card.Content>
						</Card>
					);
				})}
			</Card.Group>
			{/* {editSessionOpen ? (
				<Edit closeEditSession={closeEditSession} />
			) : null} */}
		</React.Fragment>
	);
};

export default Session;
