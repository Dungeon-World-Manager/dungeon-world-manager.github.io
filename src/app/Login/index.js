import React from 'react';
import { Grid, Button, Header, Modal, Input, Form } from 'semantic-ui-react';
import {
	googleSignIn,
	updateUserInfo,
	signInEmail,
	signUpEmail,
} from '../../functions/db';
import State from '../../state';
import { Link } from 'gatsby';

const Login = () => {
	const state = React.useContext(State);
	const stateAuth = state.auth;
	const [userName, setUserName] = React.useState('');
	const [isLeftHanded, setIsLeftHanded] = React.useState(false);
	const [signInData, setSignInData] = React.useState({
		email: '',
		password: '',
	});

	React.useEffect(() => {
		// if user is signed in, welcome them
		if (stateAuth.user.id && !stateAuth.user.isNew) {
			goHome();
		}
	});

	function goHome() {
		document.querySelector('#signedInLink').click();
	}

	async function attemptSignIn() {
		const user = await googleSignIn();
		if (user.id) {
			stateAuth.signInUser(user);
		}
	}

	async function attemptSignBackIn() {
		stateAuth.signInUser(stateAuth.lastUser);
	}

	function changeUserName(e, { value }) {
		setUserName(value);
	}

	function changeIsLeftHanded(checked) {
		setIsLeftHanded(checked);
	}

	async function attemptUpdateUser() {
		const updatedUser = await updateUserInfo({
			...stateAuth.user,
			userName,
			isLeftHanded,
			isNew: false,
		});
		stateAuth.updateUser(updatedUser);
	}

	function changeSignInData(e, { name, value }) {
		setSignInData({ ...signInData, [name]: value });
	}

	async function signInWithEmail() {
		const user = await signInEmail(signInData);
		console.log('signin', user);
		if (user.id) {
			stateAuth.signInUser(user);
		}
	}

	async function signUp() {
		const user = await signUpEmail(signInData);
		console.log('signup', user);
		if (user.id) {
			stateAuth.signInUser(user);
		}
	}

	return (
		<React.Fragment>
			{/* 
                Modal for new users 
                Change the username
                Is the user left/right handed? Move nav on left or right hand
                Skip options?
            */}
			{stateAuth.user.isNew ? (
				<Modal open={true}>
					<Modal.Header>
						Welcome, {stateAuth.user.userName}
					</Modal.Header>
					<Modal.Content>
						<Form>
							<Form.Field>
								<label>Username</label>
								<Input
									value={userName || stateAuth.user.userName}
									onChange={changeUserName}
								/>
							</Form.Field>
							<Form.Field>
								<label>Left or Right Handed</label>
								<Button
									color={isLeftHanded ? 'green' : null}
									content='Left Handed'
									onClick={() => changeIsLeftHanded(true)}
								/>
								<Button
									color={!isLeftHanded ? 'green' : null}
									content='Right Handed'
									onClick={() => changeIsLeftHanded(false)}
								/>
							</Form.Field>
						</Form>
					</Modal.Content>
					<Modal.Actions>
						<Button content='Skip for now' onClick={goHome} />
						<Button
							color='green'
							content='Save Changes'
							onClick={attemptUpdateUser}
						/>
					</Modal.Actions>
				</Modal>
			) : null}
			<Link to='/' id='signedInLink'></Link>
			<Grid>
				<Grid.Row columns='1'>
					<Grid.Column textAlign='center'>
						<Header as='h1'>Login</Header>
					</Grid.Column>
				</Grid.Row>

				<Grid.Row columns={1} textAlign='center'>
					{stateAuth.lastUser.id ? (
						<React.Fragment>
							<Grid.Column>
								<Button
									onClick={attemptSignBackIn}
									content='Sign back in'
									color='blue'
									size='massive'
								/>
							</Grid.Column>
							<Grid.Column style={{ margin: '24px 0' }}>
								<Button
									color='google plus'
									icon='google'
									content={`Not ${stateAuth.lastUser.userName}?`}
									onClick={attemptSignIn}
								/>
							</Grid.Column>
						</React.Fragment>
					) : (
						<React.Fragment>
							<Grid.Column>
								<Button
									onClick={attemptSignIn}
									content='Sign in with Google'
									icon='google'
									color='google plus'
									size='massive'
								/>
							</Grid.Column>
						</React.Fragment>
					)}
				</Grid.Row>

				<Grid.Row columns={1}>
					<Grid.Column>
						<Form onSubmit={signInWithEmail}>
							<Form.Input
								label='Email'
								name='email'
								onChange={changeSignInData}
								value={signInData.email}
								type='email'
							/>
							<Form.Input
								onChange={changeSignInData}
								label='Password'
								name='password'
								value={signInData.password}
								type='password'
							/>
							<Form.Group widths='equal'>
								<Form.Button
									type='button'
									content='Sign Up'
									onClick={signUp}
									fluid
								/>
								<Form.Button
									type='submit'
									color='green'
									content='Sign In'
									fluid
								/>
							</Form.Group>
						</Form>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</React.Fragment>
	);
};

export default Login;
