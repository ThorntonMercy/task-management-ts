import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TaskCreate from './pages/TaskCreate';
import TaskEdit from './pages/TaskEdit';
import TaskDetails from './pages/TaskDetails';

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/new' element={<TaskCreate />} />
    <Route path='/edit/:id' element={<TaskEdit />} />
    <Route path='/task/:id' element={<TaskDetails />} />
  </Routes>
);

export default AppRoutes;