import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blogs/Blog';
import Services from './Pages/Home/Services/Services';
import Header from './shared/Header/Header';
import Login from './Pages/Login/Login/Login';

import NotFound from './shared/NotFound/NotFound';
import Footer from './shared/Footer/Footer';
import Chackout from './Pages/Chackout/Chackout';
import Loading from './shared/Loading/Loading';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/chackout/:serviceId' element={<Chackout></Chackout>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>





      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
