import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderPage from './pages/HomePage'
import DashboardPage from './pages/DashboardPage';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import BookMarkPage from './pages/BookMarkPage';
import ProtectedRoutes from './services/ProtectedRoutes';

// axios.defaults.baseURL="http://localhost:8000";
// axios.defaults.withCredentials=true

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
    <Routes>
      <Route path='/' element={<HeaderPage/>}/>
      <Route path='/dashboard' element={<ProtectedRoutes/>}>
        <Route path='/dashboard' element={<DashboardPage/>}/>
      </Route>

      <Route path='/bookmark' element={<ProtectedRoutes/>}>
        <Route path='/bookmark' element={<BookMarkPage/>}/>
      </Route>
    </Routes>  
    </div>
    </BrowserRouter>
  );
}

export default App;
