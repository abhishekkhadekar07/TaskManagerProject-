import { Box, Button, Modal } from '@mui/material';
import './App.css';
import TaskManager from './ComponentForIntuit/TaskManager';
import { useState } from 'react';


function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    console.log("handleclose is called");
    setOpen(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 420,
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="App">
      <Button onClick={handleOpen} variant="contained" color="primary">Add Task</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box' >
          <TaskManager handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}

export default App;
