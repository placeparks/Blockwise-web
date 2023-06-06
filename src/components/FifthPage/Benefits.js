import AOS from'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Benefits(){
    useEffect(() => {
        AOS.init();
      },[])
    return(
 
        <div>
            <h1 style={{paddingBottom:"3%"}}>Real-Life Benefits of DeFi Software Development</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/simplify.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Process Simplification</h5>
        <p className="card-text">DeFi is revolutionizing traditional finance by eliminating the need for intermediaries, empowering participants to engage in direct transactions. This not only provides a faster and more cost-effective solution, but also fosters greater transparency and security, ensuring trust between all parties involved. The decentralized nature of DeFi truly puts financial control back into the hands of the people.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/installation.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Process Automation</h5>
        <p className="card-text">Say goodbye to tedious and time-consuming tasks with smart contracts! By automating processes and services, organizations can streamline their operations and increase efficiency. With smart contracts, businesses can now focus on what matters most - delivering exceptional value to their customers, all while saving valuable time and resources.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/lowCost.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Reduced Transaction Cost</h5>
        <p className="card-text">Say goodbye to high transaction fees! With peer-to-peer transactions, participants can enjoy reduced transaction costs. This means more money in your pocket and a faster, more streamlined process for all. Join the growing number of individuals and businesses embracing this cost-effective solution for seamless transactions.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" >
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/controls.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Increased Control</h5>
        <p className="card-text">Take control of your assets with non-custodial wallets, empowering you with greater autonomy. Stay informed with easy-to-read charts and graphs, providing valuable insights into your portfolio.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/transparency.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Transparency</h5>
        <p className="card-text">DeFi Blockwise tech's innovative DAO brings transparency to the forefront of decentralized finance, empowering users with greater control over their financial transactions. With its decentralized governance structure, DeFi Blockwise tech is revolutionizing the way we view and engage with financial systems, providing a more equitable and accessible approach for all</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/partnership.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Faster Settlement</h5>
        <p className="card-text">DeFi applications have revolutionized settlement times by reducing delays from T+1 to T+0, allowing for near-instant transactions. With this groundbreaking technology, users can experience quicker and more efficient transactions than ever before. The advent of DeFi has unlocked new possibilities for the finance industry, providing individuals with fast, secure, and reliable financial services.</p>
      </div>
    </div>
  </div>

  <div className="col">
     <div className="card h-100" >
          <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/liquidity.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Liquidity</h5>
        <p className="card-text">DeFi opens doors to financial services for those previously excluded from traditional banking systems, providing greater financial inclusion. From lending to payments and beyond, the decentralized nature of DeFi creates a more accessible and equitable financial landscape. With DeFi, individuals who were once underbanked or unbanked can now participate in global financial markets and access a wider range of opportunities.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card h-100">
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/innovation.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Innovation Enablement</h5>
        <p className="card-text">Blockwise tech's DeFi architecture offers open and permissionless programming, enabling customized financial services and instruments that cater to user requirements. It's a game-changer in the decentralized finance space, empowering users to access a range of innovative DeFi solutions that were previously unavailable in traditional financial systems</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img  data-aos="zoom-in" data-aos-duration="3000" style={{height:"80px", width:"80px", alignSelf:"center", paddingTop:"20px"}} src="/Defi/security.png" className="card-img-top" alt="..."/>
      <div className="card-body">
       <h5 className="card-title" style={{textAlign:"center", paddingTop:"20px"}}>Enhanced Security</h5>
        <p className="card-text">The beauty of blockchain architecture lies in its ability to ensure tamper-proof, secure, and auditable data. By harnessing the power of cryptography, users can trust that their transactions are safe and immutable. This innovative technology empowers individuals and organizations to operate with greater transparency and accountability, ultimately bringing them to the safer side of the digital economy.</p>
      </div>
    </div>
  </div>
  
</div>


        </div>
      
    )
}