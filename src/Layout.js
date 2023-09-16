import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
const Layout = () => {
	return (
		<div>
			<header
				style={{
					background: 'skyblue',
					padding: 16,
					fontSize: 24,
				}}
			>
				Core To Do List
			</header>
			<main style={{ display: 'flex', flexDirection: 'row' }}>
				<Sidebar />
				<Outlet />
			</main>
		</div>
	);
};

export default Layout;
