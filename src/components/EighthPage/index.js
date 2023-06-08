import Services from './Services'
import Hero from './Hero'
import styles from './Home.module.css'
import UseCases from './UseCases'
import Contact from './ContactUs'

export default function Home(){
    return(
        <>
        <div className={styles.section1}>
        <Hero/>
        </div>

        <div className={styles.section2}>
   <UseCases/>
        </div>

        <div className={styles.section3}>
        <div className="container">
            <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-2 pt-5">
                  <img src='./Blockchain/contract.png' className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-7 order-md-1">
                <div className="card-body pt-4" style={{textAlign:"center", color:"black"}}>
                  <h1 className="card-title pt-5">Leading the Way in Smart Contract Development and Audit Services</h1>
        <h6 className="card-text" style={{lineHeight:"30px"}}>At our company, we pride ourselves on offering the best smart contract development and audit services in the market. Our team of expert developers can create custom smart contracts tailored to your specific business needs, ensuring that your contracts are secure, efficient, and transparent. We also provide comprehensive smart contract audit services to identify potential vulnerabilities and ensure that your smart contracts are functioning properly. With our cutting-edge technology and industry expertise, we are committed to providing our clients with the highest quality smart contract solutions that meet their unique requirements. Whether you're looking to streamline your business operations or enhance the security of your contracts, our smart contract development and audit services are the perfect choice for your company.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className={styles.section4}>
<Services/>
        </div>

        <div className={styles.section5}>
<Contact/>
        </div>
        </>
    )
}