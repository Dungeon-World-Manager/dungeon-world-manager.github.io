import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import { Link } from 'gatsby';
import { getClasses } from '../../functions/db';
import State from '../../state';

const ClassesList = () => {
    const loadedData = React.useRef(false);
    const state = React.useContext(State);
    const stateClasses = state.classes;

    React.useEffect(() => {
        attemptLoadClasses();
    });

    async function attemptLoadClasses() {
        if (loadedData.current) return;
        loadedData.current = true;
        try {
            const classes = await getClasses();
            stateClasses.loadPublicClasses(classes);
        } catch {}
    }

    return (
        <React.Fragment>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header as='h1'>Classes</Header>
                    </Grid.Column>
                    <Grid.Column textAlign='right'>
                        <Button
                            as={Link}
                            to='/classes/new'
                            icon='plus'
                            color='green'
                            content='New Class'
                        />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns='3'>
                    <Grid.Column>
                        <Header>Name</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header>Description</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header>Created By</Header>
                    </Grid.Column>
                </Grid.Row>
                {stateClasses.publicClasses.map(function (curClass, i) {
                    return (
                        <React.Fragment key={`public-class-${i}`}>
                            <Grid.Row
                                columns='3'
                                as={Link}
                                to={`/classes/view#${curClass.id}`}
                            >
                                <Grid.Column>
                                    {curClass.className || '-'}
                                </Grid.Column>
                                <Grid.Column>
                                    {curClass.classDescription || '-'}
                                </Grid.Column>
                                <Grid.Column>
                                    {curClass.userName || '-'}
                                </Grid.Column>
                            </Grid.Row>
                        </React.Fragment>
                    );
                })}
            </Grid>
        </React.Fragment>
    );
};

export default ClassesList;
