
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landingpage from './pages/Landingpage';
import Home from './pages/Home'
import Watchhistory from './pages/Watchhistory'
import { Route, Routes } from 'react-router-dom';


function App(){

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch' element={<Watchhistory/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
