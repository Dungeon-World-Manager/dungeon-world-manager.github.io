import React from 'react';
import { Card, Icon, Grid } from 'semantic-ui-react';
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
			</Card.Content>
		) : null}

		<Card.Content as={Link} to={to}>
			<Card.Header>{header || 'Add header'}</Card.Header>
			{meta ? <Card.Meta>{meta}</Card.Meta> : null}
			<Card.Description>
				{description || 'Add description'}
			</Card.Description>
		</Card.Content>
	</Card>
);

export default CustomCard;
