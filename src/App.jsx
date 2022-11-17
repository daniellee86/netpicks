import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//
import Home from './pages/Home';
import About from './pages/About';
import Movies from './pages/Movies';
//
import Navigation from './components/NavBar';


function App() {

  return (
       <div className='homebg'>

      <Router>
      <Navigation/>
        <Routes>
          <Route exact path = "/react_movieDiscoverReviewApp/" element = {<Home/>} />
          <Route exact path = "/Movies" element = {<Movies/>} />
          <Route exact path = "/About" element = {<About/>} />
          
        </Routes>
      </Router>

     

     </div>
  );
}

export default App;
