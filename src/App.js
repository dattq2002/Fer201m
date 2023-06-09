// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Film from './components/Films';
import Footer from './components/footer';
import Title from './components/Title';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Title/>
      <Film/>
      {/* <Footer/> */}
      <script src="components/FontTitle.js"></script>
    </div>
  );
}

export default App;
