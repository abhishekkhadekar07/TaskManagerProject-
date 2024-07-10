import React, { useEffect, useState } from 'react';
import style from './TaskList.module.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Form from '../Form/Form'; // Adjust the path to where Form component is located

const TaskList = () => {
  const [taskList, setTaskList] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const updateTaskList = () => {
    setTaskList(JSON.parse(localStorage.getItem('taskList')) || []);
  };

  useEffect(() => {
    updateTaskList();

    const handleStorageChange = () => {
      updateTaskList();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const onDelete = (title) => {
    const updatedList = taskList.filter((task) => task.taskTitle !== title);
    localStorage.setItem('taskList', JSON.stringify(updatedList));
    updateTaskList();
  };

  const onEdit = (title) => {
    const taskToEdit = taskList.find((task) => task.taskTitle === title);
    setEditingTask(taskToEdit);
  };

  const handleFormSubmit = () => {
    setEditingTask(null);
    updateTaskList();
  };

  return (
    <div className={style.container}>
      <div className={style.headings}>
        <h2>Pending</h2>
        {taskList && taskList.map((task) => (
          <div key={task.taskTitle} className={style.containerForTask}>
            <div>{task?.taskTitle}</div>
            <div onClick={() => onDelete(task.taskTitle)}>
              <DeleteIcon>Delete</DeleteIcon>
            </div>
            <div onClick={() => onEdit(task.taskTitle)}>
              <EditIcon>Edit</EditIcon>
            </div>
          </div>
        ))}
      </div>
      <div className={style.headings}>
        <h2>Doing</h2>
      </div>
      <div className={style.headings}>
        <h2>Completed</h2>
      </div>
      {editingTask && (
        
        <Form
          task={editingTask}
          onSubmit={handleFormSubmit}
          handleClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
};

export default TaskList;
