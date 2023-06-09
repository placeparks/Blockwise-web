import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Web3 from './components/Web3';
import MetaversePage from './components/MetaversePage';
import NFT from './components/NFT';
import DefiProtocol from './components/DefiProtocol';
import ExchangePage from './components/ExchangePage';
import Wallets from './components/Wallets';
import Blockchains from './components/Bloackchains';
import CoinDevelopment from './components/CoinDevelopment';
import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MdFirstPage } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/main' element={<Main />} />
          <Route exact path='/web3' element={<Web3/>}/>
          <Route exact path='/metaversePage' element={<MetaversePage/>}/>
          <Route exact path='/nft' element={<NFT/>}/>
          <Route exact path='/defiProtocol' element={<DefiProtocol/>}/>
          <Route exact path='/exchangePage' element={<ExchangePage/>}/>
          <Route exact path='/wallets' element={<Wallets/>}/>
          <Route exact path='/blockchains' element={<Blockchains/>}/>
          <Route exact path='/coinDevelopment' element={<CoinDevelopment/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
