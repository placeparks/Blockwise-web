import './App.css';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import ForthPage from './components/ForthPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MdFirstPage } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/' element={<FirstPage />} />
          <Route exact path='/firstPage' element={<FirstPage />} />
          <Route exact path='/secondPage' element={<SecondPage/>}/>
          <Route exact path='/thirdPage' element={<ThirdPage/>}/>
          <Route exact path='/forthPage' element={<ForthPage/>}/>
          <Route exact path='/fifthPage' element={""}/>
          <Route exact path='/sixthPage' element={""}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
