import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function TodoCard(props) {
	return (
		<Card>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color='text.secondary'
					gutterBottom
				>
					{props.remaintime} 남음
				</Typography>
				<Typography variant='h5' component='div'>
					{props.title}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color='text.secondary'>
					{props.deadline}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					variant='outlined'
					size='small'
					onClick={() => {
						props.handleOpen();
					}}
				>
					수정
				</Button>
				<Button variant='contained' size='small'>
					완료
				</Button>
			</CardActions>
		</Card>
	);
}
