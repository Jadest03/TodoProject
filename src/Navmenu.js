import React from 'react';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TaskIcon from '@mui/icons-material/Task';

const Sidebar = () => {
	const navigate = useNavigate();
	return (
		<nav aria-label='sidemenu'>
			<List>
				<ListItem disablePadding>
					<ListItemButton
						onClick={() => {
							navigate('/todo');
						}}
					>
						<ListItemIcon>
							<FormatListBulletedIcon />
						</ListItemIcon>
						<ListItemText primary='남은 할일' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton
						onClick={() => {
							navigate('/calendar');
						}}
					>
						<ListItemIcon>
							<CalendarMonthIcon />
						</ListItemIcon>
						<ListItemText primary='캘린더' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton
						onClick={() => {
							navigate('/achievement');
						}}
					>
						<ListItemIcon>
							<TaskIcon />
						</ListItemIcon>
						<ListItemText primary='달성률' />
					</ListItemButton>
				</ListItem>
			</List>
		</nav>
	);
};

export default Sidebar;
