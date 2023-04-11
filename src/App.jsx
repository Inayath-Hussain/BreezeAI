import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './components/home';
import Login from './components/login'
import Register from './components/register';
import ProtectedRoute from './utilities/protectedroute';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </div>
  )
}

export default App
