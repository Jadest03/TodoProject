import React from 'react';
import TodoCard from './components/TodoCard';
import EditModal from './components/EditModal';
import Stack from '@mui/material/Stack';
const TodoPage = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	return (
		<Stack alignItems='stretch'>
			TodoPage
			<TodoCard
				handleOpen={handleOpen}
				title='콘텐츠 아이디어 리서치'
				deadline='12/23 3시'
				remaintime='12분'
			/>
			<EditModal open={open} />
			<TodoCard
				title='콘텐츠 아이디어 리서치'
				deadline='12/23 3시'
				remaintime='12분'
			/>
			<TodoCard
				title='콘텐츠 아이디어 리서치'
				deadline='12/23 3시'
				remaintime='12분'
			/>
			<TodoCard
				title='콘텐츠 아이디어 리서치'
				deadline='12/23 3시'
				remaintime='12분'
			/>
		</Stack>
	);
};

export default TodoPage;
