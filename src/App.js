import Navigation from './components/Navigation';
import './App.css';
import Footer from './components/Footer';
import Player from './components/Players';
import Detail from './components/Detail';
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Player />}>
        </Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
        {/* <Route path='/contact' element={<Contact />}></Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
