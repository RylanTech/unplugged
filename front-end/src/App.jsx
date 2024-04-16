import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AdminLogin from './Pages/Admin/AdminLogin';
import AdminPanel from './Pages/Admin/AdminPanel';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>

        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin-panel' element={<AdminPanel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
