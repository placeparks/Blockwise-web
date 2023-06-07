import Hero from './Hero';
import styles from './Home.module.css';
import Hero2 from './Hero2';
import Solution from './Solution';
import Expertise from './Expertise';
import FAQ from './FAQ';

export default function Home(){
return(
<>
<div className={styles.section1}>
<Hero/>
</div>

<div className={styles.section2}>
<Hero2/>
</div>

<div className={styles.section3}>
<Solution/>
</div>

<div className={styles.section4}>
<Expertise/>
</div>

<div className={styles.section5}>
<FAQ/>
</div>
</>
)
}