import { useNavigate } from 'react-router-dom';
import { useTasks } from '../hooks/useTasks';

const Dashboard = () => {
  const { tasks, deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Task Dashboard</h1>
      <button onClick={() => navigate('/new')}>Create New Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong className="task">{task.title}</strong>
            <button className="taskbutton" onClick={() => navigate(`/task/${task.id}`)}>View</button>
            <button className="taskbutton" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;