import { useParams } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';
import TaskForm from '../components/TaskForm';

const TaskEdit = () => {
  const { id } = useParams();
  const { tasks } = useTasks();
  const task = tasks.find(t => t.id === id);

  return task ? <TaskForm editTask={task} /> : <p>Task not found</p>;
};

export default TaskEdit;