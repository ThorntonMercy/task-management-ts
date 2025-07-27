import { useParams, useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';

const TaskDetails = () => {
  const { id } = useParams();
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const task = tasks.find(t => t.id === id);

  return task ? (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button className="taskbutton" onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
    </div>
  ) : <p>Task not found</p>;
};

export default TaskDetails;