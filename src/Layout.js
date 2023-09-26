import { Outlet } from 'react-router-dom';

import ResponsiveDrawer from './Drawer';
const Layout = () => {
	return (
		<div>
			<main style={{ display: 'flex', flexDirection: 'row' }}>
				<ResponsiveDrawer />
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
