import logo from './logo.svg';
import './App.css';
import Header from './Page/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Login from './Page/Shared/Login/Login';

function App() {
  return (
    <div className="App">
      <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
