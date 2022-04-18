import React from 'react';
import { Link } from 'gatsby';
import { Menu, Dropdown, Icon, Image, Sidebar } from 'semantic-ui-react';
import DWIcon from '../images/dwLogo.jpg';
import State from '../state';

const Navbar = ({ closeSidebar }) => {
	const state = React.useContext(State);
	var auth = state.auth;
	const [profile, setProfile] = React.useState(false);

	return (
		<React.Fragment>
			{/* // ! App Navigation */}

			{/* //* Checks to see if user is logged in to display their username and profile pic */}
			{auth.user.id ? (
				<Menu.Item onClick={() => setProfile(!profile)}>
					<Image
						src={DWIcon}
						size='tiny'
						spaced='left'
						circular
						centered
					/>
					<p>{auth.user.userName}</p>
				</Menu.Item>
			) : null}

			{profile && auth.user.id ? (
				<React.Fragment>
					<Menu.Item onClick={closeSidebar} as={Link} to='/settings'>
						<Icon name='settings' />
						Settings
					</Menu.Item>
					<Menu.Item
						onClick={() => auth.logoutUser() && setProfile(false)}
					>
						<Icon name='sign out' />
						Logout
					</Menu.Item>
				</React.Fragment>
			) : null}

			<Menu.Item onClick={closeSidebar} as={Link} to='/'>
				<Icon name='home' />
				Home
			</Menu.Item>
			<Menu.Item onClick={closeSidebar} as={Link} to='/sessions'>
				<Icon name='users' />
				Sessions
			</Menu.Item>
			<Menu.Item onClick={closeSidebar} as={Link} to='/classes'>
				<Icon name='address book' />
				Classes
			</Menu.Item>
			<Menu.Item onClick={closeSidebar} as={Link} to='/characters'>
				<Icon name='street view' />
				Characters
			</Menu.Item>

			{/* //* If user is not logged in show menu item leading to login page or else show logout with onclick auth.logoutUser */}
			{auth.user.id ? null : (
				<Menu.Item onClick={closeSidebar} as={Link} to='/login'>
					<Icon name='user circle' /> Login
				</Menu.Item>
			)}
		</React.Fragment>
	);
};

export default Navbar;
