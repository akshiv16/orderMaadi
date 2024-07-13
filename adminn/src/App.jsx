import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import  {Route, Routes} from 'react-router-dom'
import Addd from './pages/Addd/Addd'
import Lisst from './pages/Lisst/Lisst'
import Orderrs from './pages/Orderrs/Orderrs'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url="http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="appcontent">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Addd url={url} />}/>
          <Route path='/list' element={<Lisst url={url}/>}/>
          <Route path='/orders' element={<Orderrs url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
