import React from 'react';
import { Link } from 'gatsby';
import { Button, Grid, Header } from 'semantic-ui-react';

const ClassesView = () => {
    return (
        <React.Fragment>
            <Grid stackable>
                <Grid.Row columns='2'>
                    <Grid.Column>
                        <Button
                            as={Link}
                            to='/classes'
                            icon='arrow circle left'
                            color='blue'
                            content='Back to classes list'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h1'>Class Name</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment>
    );
};

export default ClassesView;
