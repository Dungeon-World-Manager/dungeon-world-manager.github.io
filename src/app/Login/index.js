import React from 'react';
import { Grid, Button, Header, Modal, Input, Form } from 'semantic-ui-react';
import { googleSignIn, updateUserInfo } from '../../functions/db';
import State from '../../state';
import { Link } from 'gatsby';

const Login = () => {
    const state = React.useContext(State);
    const stateAuth = state.auth;
    const [userName, setUserName] = React.useState('');
    const [isLeftHanded, setIsLeftHanded] = React.useState(false);

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
            </Grid>
        </React.Fragment>
    );
};

export default Login;
