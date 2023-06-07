import Features from './Features';
import Hero from './Hero';
import styles from './Home.module.css';
import OrderSection from './OrderSection';
import Sections from './Sections';
import Security from './Security';
import Services from './Services';
import FAQ from './FAQ';


export default function Home(){
return(
<>
<div className={styles.section1}>
<Hero/>
</div>

<div className={styles.section2}>
<div class="card mb-3" style={{background:"transparent", color:"black", border:"none"}}>
  <div class="row g-0">
    <div class="col-md-4 pt-5 p-5" >
      <img src='/Exchange/stats.JPG' style={{paddingTop:"4%"}} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body" style={{textAlign:"left", paddingTop:"7%"}}>
      <div className="col text-justify" >
    <h1>Cryptocurrency Exchange Development - A Gateway to Billion-Dollar Market</h1>
                <h6 className={styles.text} >The world of cryptocurrency has transcended the stereotype of being a fad for tech-savvy millennials. Its influence has now spread far and wide, disrupting traditional financial practices and ushering in a new era of global fintech. Blockwise tech is at the forefront of this revolution, providing cutting-edge cryptocurrency exchange software that empowers people with unchallenged financial freedom. This software boasts unparalleled security, transparency, speed, and decentralization, making it the perfect platform for seamless transactions and profitable investments. With the widespread adoption of cryptocurrency, the demand for exchange software is skyrocketing, benefiting big brands, SMEs, and individual investors alike. And if you're looking to ride the wave of change and set up your own golden goose, Blockwise tech's customizable white label exchange software is just what you need.</h6>
            <p>Exploit The Expertise of a Cryptocurrency Exchange Software Development Company</p>
            </div>
      </div>
    </div>
  </div>
</div>
</div>

<Sections/>

<div className={styles.section3}>
    <Features/>
</div>

<div className={styles.section4}>
  <Security/>
</div>

  <OrderSection/>

<div className={styles.section5}>
  <Services/>
</div>

<div className={styles.section6}>
<FAQ/>
</div>
</>
)
}