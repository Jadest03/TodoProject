import React from 'react';
import TodoCard from './components/TodoCard';
import Stack from '@mui/material/Stack';
const TodoPage = () => {
	return (
		<Stack alignItems='stretch'>
			TodoPage
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
			<TodoCard
				title='콘텐츠 아이디어 리서치'
				deadline='12/23 3시'
				remaintime='12분'
			/>
		</Stack>
	);
};

export default TodoPage;
