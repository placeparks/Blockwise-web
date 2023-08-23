import Main from './Main';
import styles from './Home.module.css'
import Offerings from './Offerings';
import Expertise from './Expertise';
import Solutions from './Solutions';
import Benefits from './Benefits';
import FAQ from './FAQ';
import ContactUs from './ContactUs';



export default function Hero(){
    return(
<>
<div className={styles.section1}>
<Main/>
</div>

<div className={styles.section2}>
<div className="card border-light mb-3" style={{maxWidth: "40rem", paddingTop:"5rem", border:"none"}}>
  <div className="card-body" style={{textAlign:"left"}}>
    <h5 className="card-title" style={{fontSize:"40px"}}>Embrace Web 3.0! <br/> Embrace Transformation!</h5>
    <p>Blockchain technology is a game-changer that's disrupting industries left and right. It's time for companies and organizations to get on board or get left behind. Embrace blockchain transformation and explore its disruptive potential if you want to stay ahead of the curve. Don't be foolish enough to ignore this technology's power to revolutionize the way we do business. The benefits are too great to ignore, and those who fail to recognize that fact will find themselves struggling to keep up with the competition. It's time to be bold and blunt: either you're on board with blockchain or you're going to be left in the dust.</p>
  </div>
</div>
</div>

<div className={styles.section3}>
<Offerings/>
</div>

<div className={styles.section4}>
<Expertise/>
</div>

<div className={styles.section5}>
<Solutions/>
</div>

<div className={styles.section6}>
  <Benefits/>
</div>

<div className={styles.section7}>
  <FAQ/>
</div>

<div className={styles.section8}>
<ContactUs/>
</div>

</>

    )
}