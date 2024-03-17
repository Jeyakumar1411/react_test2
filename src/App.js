import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import AxiosGet from './components/AxiosGet';
import AxiosPost from './components/AxiosPost';
import Navbar from './components/Navbar';
import RootLayout from './components/layouts/RootLayout';
import About from './components/About';
import Login from './components/Login';
import AxiosEdit from './components/AxiosEdit';

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route Path='/' element={<RootLayout/>}>

        <Route index element={<AxiosGet/>} />

          <Route path='/' element={<AxiosGet/>} />
          <Route path='/post' element={<AxiosPost/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/post/:id' element={<AxiosEdit/>} />

       
      </Route>
      )
)


  return (
    <div className="App">
      
     <RouterProvider router={router} />
      
      
     
      
    </div>
  );
}

export default App;
