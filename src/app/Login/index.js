import React from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';
import { googleSignIn } from '../../functions/db';
import State from '../../state';
import { Link } from 'gatsby';

const Login = () => {
    const state = React.useContext(State);
    const stateAuth = state.auth;

    React.useEffect(() => {
        // if user is signed in, welcome them
        if (stateAuth.user.id) {
            document.querySelector('#signedInLink').click();
        }
    });

    async function attemptSignIn() {
        const user = await googleSignIn();
        if (user.id) {
            stateAuth.signInUser(user);
        }
    }

    async function attemptSignBackIn() {
        stateAuth.signInUser(stateAuth.lastUser);
    }

    return (
        <React.Fragment>
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
