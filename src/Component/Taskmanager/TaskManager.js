import { Box, Button, Modal } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import Form from '../Form/Form';

const TaskManager = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
      setOpen(false);
    }
  return (
    <>
    <Button onClick={handleOpen} variant="contained" color="primary">Add Task</Button>
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className='box' >
        <Form handleClose={handleClose} />
      </Box>
    </Modal>
    </>
  )
}

export default TaskManager