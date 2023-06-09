import Company from './Company';
import Cards from './Cards';
import Hero from './Hero';
import styles from './Home.module.css'
import Benefits from './Benefits';
import Services from './Services';
import FAQ from './FAQ';


export default function Home(){
return(
<>
<div className={styles.section1}>
<Hero/>
</div>

<div className={styles.section2}>
<Cards/>
</div>

<div className={styles.section3}>
<Company/>
</div>

<div className={styles.section4}>
<Benefits/>
</div>

<div className={styles.section5}>
<div className="card text-bg-dark">
  <img src='./Defi/Rectangle.png' className="card-img" alt="..."/>
  <div className="card-img-overlay d-flex align-items-center justify-content-center">
    <h2 className="text-specific">Unlock your DeFi potential with Blockwise tech! Our expert team brings your ideas to life and navigates the ever-changing landscape of decentralized finance. Join our innovative community and let's build the future of finance together.</h2>
  </div>
</div>
</div>

<div className={styles.section6}>
<Services/>
</div>

<div className={styles.section7}>
<FAQ/>
</div>

</>
)
}