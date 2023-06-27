// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Film from './components/Films';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';
import Footer from './components/footer';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
      <Route path='/' element={<Film/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
