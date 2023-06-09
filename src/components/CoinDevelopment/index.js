import styles from './Home.module.css'
import Hero from './Hero'
import Types from './Types'
import Services from './Services'
import FAQ from './FAQ'

export default function Home(){
    return(
        <>
        <Hero/>

<div className={styles.section1}>
    <Types/>
</div>

<div className={styles.section2}>
    <Services/>
</div>

<div className={styles.section3}>
    <FAQ/>
</div>
        </>
    )
}