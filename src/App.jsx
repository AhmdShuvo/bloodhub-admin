import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Pages/Dashboard/Dashboard'
import DashboardHome from './Pages/Dashboard/DashboardHome'
import MakeAdmin from './Pages/MakeaAdin/MakeAdmin'
import Requests from './Pages/Requests/Requests'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'
            element={<Dashboard />}>
               <Route
              path='/'
              element={
             
                
                  <DashboardHome />
              
              }
            ></Route>
            <Route path='makeadmin' 
            element={
             
              
                <MakeAdmin />
              
            }
          ></Route>
            <Route path='requests' 
            element={
             
              
                <Requests />
              
            }
          ></Route>
            </Route>
         
          
    </Routes>
  </BrowserRouter>
       
    </>
  )
}

export default App
