import Navigation from './components/Navigation';
import './App.css';
// import Main from './components/Main';
import Footer from './components/Footer';
import Player from './components/Players';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      {/* <Main/> */}
      <Player/>
      <Footer/>
    </div>
  );
}

export default App;
