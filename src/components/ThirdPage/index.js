import Benefits from './Benefits';
import Cards from './Cards';
import FAQ from './FAQ';
import Hero from './Hero';
import styles from './Home.module.css'


export default function Home(){
return(
<>
<Hero/>

<div className={styles.section1}>
<h1>Metaverse App Development Solutions for Every Industry</h1>
    <p style={{fontSize:"20px"}}>The potential for metaverse exists across use cases. We provide the following enterprise-focusedsolutions to help businesses tap into the metaverse</p>
</div>

<div className={styles.section2}>
    <Cards/>
</div>

<div className={styles.section3}>
    <Benefits/>
</div>

<div className={styles.section4}>
   <FAQ/>
</div>
</>
)
}