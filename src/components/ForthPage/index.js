import FAQ from './FAQ';
import Hero from './Hero';
import styles from './Home.module.css'
import Services from './Services';

export default function Home(){
return(
<>
<div className={styles.section1}>
<Hero/>
</div>

<div className={styles.section2}>
<h1>Growing Popularity of NFT Development Services</h1>
    <p>NFT development services are taking the digital world by storm, and for good reason. These unique and verifiable digital assets are transforming the way we think about ownership and authenticity, opening up exciting new opportunities for creators and businesses alike. As more and more people discover the potential of NFTs, the demand for expert NFT development services is growing rapidly. With our cutting-edge approach and deep expertise, we're proud to be at the forefront of this exciting new industry. Join us today and experience the power of NFTs for yourself.</p>
</div>

<div className={styles.section3}>
    <Services/>
</div>

<div className={styles.section4}>
    <FAQ/>
</div>
</>
)
}