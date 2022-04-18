import React, { useState } from 'react';
import Navbar from './navbar';
import { Segment, Menu, Icon, Image, Sidebar } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';
// import Logo from '../images/dungeon-world.png';

const Layout = ({ children }) => {
	// * Opens and closes sidebar Menu
	const [sidebar, setSidebar] = useState(false);

	function openSidebar() {
		setSidebar(true);
	}

	function closeSidebar() {
		setSidebar(false);
	}

	return (
		<React.Fragment>
			<Menu color='red' inverted fluid attached='top'>
				<Menu.Menu position='right'>
					<Menu.Item onClick={openSidebar}>
						<Icon name={sidebar ? 'x' : 'bars'} size='big' />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			<Sidebar.Pushable>
				<Sidebar
					as={Menu}
					animation='overlay'
					inverted
					vertical
					width='thin'
					visible={sidebar}
					onHide={closeSidebar}
					direction='right'
					icon='labeled'
				>
					<Navbar closeSidebar={closeSidebar} />
				</Sidebar>

				<Sidebar.Pusher dimmed={sidebar}>
					<Segment basic>{children}</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</React.Fragment>
	);
};

export default Layout;
