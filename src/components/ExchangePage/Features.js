import AOS from'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Features(){
    useEffect(() => {
        AOS.init();
      },[])
    return(
        <div>
            <h1>Key Features of White Label Exchange Software</h1>
            <p style={{paddingBottom:"3%"}}>We create White Label Crypto Exchange Software with industry-leading features that are incorporated but are not restricted to the following aspects</p>
            

            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/1.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>High-Volume TPS</h5>
        <p className="card-text" style={{textAlign:"center"}}>In the world of crypto exchange platforms, speed is king. That's why Transaction Processing Speed (TPS) is a crucial factor in determining a platform's viability. Luckily, with our white label crypto exchange, you won't have to worry about sluggish performance. Our platform can handle a whopping 100,000 transactions per second, ensuring lightning-fast trades and an overall world-class user experience.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/2.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>High-Powered Trading Engine</h5>
        <p className="card-text" style={{textAlign:"center"}}>Experience lightning-fast trading like never before with our cutting-edge trading engine. Our powerful technology ensures your buy/sell orders are executed with minimal latency, giving you a competitive edge in the market. Trust us to fortify your exchanges and revolutionize your trading experience.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/3.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>KYC and AML</h5>
        <p className="card-text" style={{textAlign:"center"}}>Geography-based KYC/AML is like the bouncer of the cryptocurrency world, keeping out any shady characters trying to sneak into the exchange. But it's not just about preventing entry - it also swoops in like a superhero when a massive withdrawal request raises eyebrows. Safety first, folks.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/4.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>500+ Cryptocurrencies and Fiat Support</h5>
        <p className="card-text" style={{textAlign:"center"}}>Unlock the power of cryptocurrency trading with our cutting-edge white label exchange! Supporting both fiat and over 500 cryptocurrencies, our exchange software allows you to create a unified platform for multi-currency trading. Take your business to the next level with our versatile and reliable solution.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/5.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Bot Trading</h5>
        <p className="card-text" style={{textAlign:"center"}}>With the dynamic bot trading module, users can now take advantage of market opportunities at any time of the day or night. This clever bot enables round-the-clock trading, so you never have to miss out on a potentially lucrative trade, even if you're not actively monitoring the markets. Say goodbye to sleepless nights and hello to profitable trading with this powerful tool.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/6.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Referral and Reward Program</h5>
        <p className="card-text" style={{textAlign:"center"}}>Looking for a white label cryptocurrency exchange software with a winning edge? Look no further than Solutions! Our top-of-the-line software not only features cutting-edge technology but also comes with custom referral and reward programs. Get ready to earn big by simply bringing in more users!</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/7.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>High-Liquidity At All Market Conditions</h5>
        <p className="card-text" style={{textAlign:"center"}}>Our cutting-edge technology seamlessly integrates your cryptocurrency exchanges with multiple liquidity options, providing a robust order book and ensuring smooth trade executions in all market conditions. With us, you'll never miss a beat in the fast-paced world of crypto trading.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/8.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Advanced Chart Tools</h5>
        <p className="card-text" style={{textAlign:"center"}}>Experience seamless crypto trading with our white label exchange! Our intuitive trading view offers a clear and concise overview of positions, orders, and more - making it easy for both novice and seasoned traders to strategize and execute their trades with ease. Start trading like a pro today!</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/9.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Payment Gateway Integration</h5>
        <p className="card-text" style={{textAlign:"center"}}>Offering multiple payment options not only expands the customer reach but also boosts their confidence in crypto exchanges. At our trading platforms, we prioritize customer convenience by integrating various payment gateways for seamless transactions.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/10.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Staking Module</h5>
        <p className="card-text" style={{textAlign:"center"}}>Staking isn't just a way to earn more rewards on your crypto holdings, it's a win-win for both end-users and platform owners. By staking, you can increase your earnings while also contributing to the overall liquidity and security of the platform. And for platform owners, staking provides a powerful tool for enhancing control and governance over the network.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/11.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Enterprise-Grade Multi-cryptocurrency Wallet</h5>
        <p className="card-text" style={{textAlign:"center"}}>Introducing our white label exchange, featuring a state-of-the-art multi-cryptocurrency wallet equipped with the latest in secure ecliptic curve and multi-signature technology. Store your digital assets with ease and confidence, knowing that they're safeguarded by top-of-the-line protection.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="flip-down"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Exchange/12.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Advanced Admin Dashboard</h5>
        <p className="card-text" style={{textAlign:"center"}}>Elevate your cryptocurrency exchange game with our cutting-edge white label solution. Our user-friendly admin dashboard gives you complete control over your platform and funds, ensuring seamless management and maximum profits.</p>
      </div>
    </div>
  </div>
  </div>
        </div>
    )
}