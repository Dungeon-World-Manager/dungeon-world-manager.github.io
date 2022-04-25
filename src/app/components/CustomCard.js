import React from 'react';
import { Card, Icon, Grid, Button } from 'semantic-ui-react';
import { Link } from 'gatsby';

const CustomCard = ({
	header,
	meta,
	description,
	color = 'grey',
	to = '',
	isAuthor = false,
	editTo = '',
}) => (
	<Card>
		{isAuthor && editTo ? (
			<Card.Content>
				<Card.Description>
					<Grid columns='1'>
						<Grid.Column
							as={Link}
							to={editTo}
							color={color}
							textAlign='right'
						>
							<Icon name='pencil' />
							Edit
						</Grid.Column>
					</Grid>
				</Card.Description>
			</Card.Content>
		) : null}

		<Card.Content>
			<Card.Header>{header || 'Add header'}</Card.Header>
			{meta ? <Card.Meta>{meta}</Card.Meta> : null}
			<Card.Description>
				{description || 'Add description'}
			</Card.Description>
		</Card.Content>

		<Card.Content>
			<Card.Description>
				<Button as={Link} to={to} icon='eye' content='View' />
			</Card.Description>
		</Card.Content>
	</Card>
);

export default CustomCard;
