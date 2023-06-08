import styles from './Hero.module.css'

  export default function Hero() {

    
    return (
 <>
  <div className={styles.section1}>
  <div className="container">
            <div className="row">
          <div className="col-md-6 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-0">
                <div className="col-md-4 order-md-2">
                  <img src='./Coin/coin.png' className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 order-md-1 pt-5">
                <div className="card-body pt-5" style={{textAlign:"center", color:"white"}}>
                  <h1 className="card-title pt-5">Crypto Coin Development Company</h1>
        <h5 className="card-text">Ace The Digital World With Custom Cryptocurrency Development Services</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>

<div className={styles.section2}>
        <div class="card mb-3" style={{background:"transparent", color:"white", border:"none"}}>
  <div class="row g-0">
    <div class="col-md-4 pt-5">
      <img src='/Coin/coin1.png' class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-7">
      <div class="card-body" style={{textAlign:"left", paddingTop:"10%", color:"black"}}>
      <h1 style={{textAlign:"center"}}>Crypto Development Services</h1>
      <h5 style={{textAlign:"justify"}}>Are you looking to launch your very own cryptocurrency? Look no further! Our team offers a complete range of coin development services that will take your vision from initial consultation to launch and beyond.

We understand that developing a custom coin can be a complex and challenging process, which is why we're here to make it as easy and stress-free as possible. Our services cover everything from concept development to designing the coin's architecture, creating the blockchain network, and launching the coin on exchanges.

But that's not all! When you work with us, you'll also benefit from our team's extensive experience in the blockchain industry. We stay up-to-date on the latest trends and technologies, so we can offer expert advice and guidance throughout the entire process.

And unlike other development firms, we don't just walk away once your coin is launched. We offer ongoing support and maintenance to ensure that your coin is always performing at its best. Whether you need technical assistance or marketing support, we're here to help.

So why wait? Contact us today to learn more about how we can help you launch your very own cryptocurrency and join the exciting world of blockchain technology.</h5>
      </div>
    </div>
  </div>
</div>
</div>
 </>
    );
  }