import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import FormLogin from './components/auth/login';
import FormRegister from './components/auth/register';
import LandingPage from './pages/landing-page';
import AddPupuk from './pages/add-pupuk';

function App() {
  return (
    <>
      <AddPupuk />
      <Routes>
        <Route exact path='/sign-in' element={<FormLogin/>} />
        <Route exact path='/sign-up' element={<FormRegister/>} />
      </Routes>
    </>
  );
}

export default App;
