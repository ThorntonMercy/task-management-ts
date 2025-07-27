import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import type { Task } from '../types/task';

const TaskForm = ({ editTask }: { editTask?: Task }) => {
  const { addTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const [title, setTitle] = useState(editTask?.title || '');
  const [description, setDescription] = useState(editTask?.description || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editTask) {
      updateTask({ ...editTask, title, description });
    } else {
      addTask({ id: crypto.randomUUID(), title, description, completed: false });
    }
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="input" value={title} onChange={e => setTitle(e.target.value)} required placeholder="Task Title" />
      <textarea className="input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Task Details" />
      <button className="taskbutton" type="submit">Save</button>
    </form>
  );
};

export default TaskForm;