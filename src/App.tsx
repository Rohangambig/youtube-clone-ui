import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './config/app.routes.tsx';
import Navbar from './component/Navbar/index.ts';

function AppRoutes() {
  return (
    useRoutes(routes)
  )
}

function App() {

  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
