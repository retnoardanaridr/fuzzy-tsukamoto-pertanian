import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import FormLogin from './components/auth/login';
import FormRegister from './components/auth/register';
import LandingPage from './pages/landing-page';
import AddPupuk from './pages/add-pupuk';
import Header from './components/navbar';
import HitungPupuk from './pages/hitung-pupuk';
import Defuzzyfikasi from './pages/defuzzyfikasi';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/aturan-fuzzy' element={<Defuzzyfikasi/>} />
        <Route exact path='/hitung-pupuk' element={<HitungPupuk/>} />
        <Route exact path='/add-pupuk' element={<AddPupuk/>} />
        <Route exact path='/sign-in' element={<FormLogin/>} />
        <Route exact path='/sign-up' element={<FormRegister/>} />
      </Routes>
    </>
  );
}

export default App;
