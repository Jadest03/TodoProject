import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '400px',
	height: '400px',
	bgcolor: 'background.paper',
	boxShadow: 24,
	p: 4,
};

export default function EditModal() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button
				variant='outlined'
				size='small'
				onClick={() => {
					handleOpen();
				}}
			>
				수정
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<div>
						<TextField
							id='outlined-basic'
							label='일정'
							variant='outlined'
							InputLabelProps={{ shrink: true }}
						/>
						<TextField
							id='outlined-basic'
							label='내용'
							variant='outlined'
						/>
					</div>
				</Box>
			</Modal>
		</div>
	);
}
