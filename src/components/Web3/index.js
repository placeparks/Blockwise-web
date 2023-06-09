import Hero from './Hero';
import Stats from './Stats';
import styles from './Home.module.css'
import BusinessToWeb3 from './BusinessToWeb3';
import Company from './Company';
import Journey from './Journey';
import Services from './Services';
import FAQ from './FAQ';
import Contact from './Contact';

export default function Home(){
return(
<>
<div className={styles.section1}>
<Hero/>
</div>

<Stats/>

<div className={styles.section2}>
<h1>Connect With Our Web 3.0 Development Company to Widen Your Market Globally</h1>
        <p>The web has undergone massive changes in the last three decades. Web 3.0, or read-write-own web is the third generation of the internet that allows websites and dApps to interact much similar to humans. Entrepreneurs can capitalize on the opportunity to enter business relationships with their customers worldwide using Decentralized Ledger Technology for trustless transactions. Augment yoir marketing infrastructure with Big Data, AI, & ML. Our team offers end-to-end web3 development services for streamlining and accelerating your transition to evolved web that is open, intelligent, and autonomous. Harness our expertise to start your web3 development journey effortlessly.
Ready To Choose Us For Web 3.0 Development Services?</p>
</div>

<div className={styles.section3}>
    <BusinessToWeb3/>
</div>

<div className={styles.section4}>
<h2>Connect with SMEs at our Web3 development agency to create a distributed& decentralized platform for your business.</h2>
</div>

<div className={styles.section5}>
   <Company/>
</div>

<div className={styles.section6}>
   <Journey/>
</div>

<div className={styles.section7}>
<div className="card mb-3 pt-2" style={{maxWidth: "540px;", backgroundColor:"transparent", border:"none"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src='/Web3.0/image3.0.png' className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title pt-5" style={{color:"white", fontWeight:"600"}}>Steer your Web 3.0 development journey with us.</h2>
      </div>
    </div>
  </div>
</div>
</div>

<div className={styles.section8}>
  <Services/>
</div>

<div className={styles.section9}>
  <FAQ/>
</div>

<div className={styles.section10}>
<Contact/>
</div>
</>
)
}