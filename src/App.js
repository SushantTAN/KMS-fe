import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { employeeRoutes } from './routes/employee';
import { extraRoutes } from './routes/extras';
import { incentivesRoutes } from './routes/incentives';
import { projectRoutes } from './routes/project';
import { trainingRoutes } from './routes/training';

const router = createBrowserRouter([
  ...employeeRoutes,
  ...incentivesRoutes,
  ...projectRoutes,
  ...trainingRoutes,
  ...extraRoutes
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
