
import { useEffect } from 'react';
import styles from './Home.module.css'
import AOS from'aos';
import 'aos/dist/aos.css';


export default function Offerings() {
useEffect(() => {
  AOS.init();
},[])
  return (

   <div>
    
    <h1>Blockchain Offerings</h1>
    <p style={{color:"#EA6656", fontSize:"20px"}}>Enterprise blockchain services to build a better and decentralised future.</p>

  <div className={styles.offerings}>

        <h3 data-aos="fade-right">DeFi 2.0 Development</h3> 

        <h3 data-aos="fade-left">Exchange Development</h3>

        <h3 data-aos="fade-up-right">Wallet Development</h3>
        
        <h3 data-aos="fade-up-left">Metaverse Development</h3>

        <h3 data-aos="fade-down-right">NFTs & NFT Marketplaces Development</h3>

        <h3 data-aos="fade-down-left">Custom Blockchain Development</h3>

        <h3 data-aos="fade-right">Crypto Bank Development</h3>

        <h3  data-aos="fade-left">Smart Contract Development</h3>

        <h3 data-aos="fade-up-right">Smart Contract Audit Development</h3>

</div>
    </div>

  );
}
