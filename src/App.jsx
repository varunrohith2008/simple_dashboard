import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DashboardHome from './components/DashboardHome';
import Profile from './components/Profile';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard Route with Nested Routes */}
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Index route for /dashboard */}
        <Route index element={<DashboardHome />} />

        {/* You can add more nested routes here in the future */}
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
