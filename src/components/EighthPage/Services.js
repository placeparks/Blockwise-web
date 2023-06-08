import AOS from'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Services(){
    useEffect(() => {
        AOS.init();
      },[])
    return(
<div>
    <h1>Solutions We Provide</h1>
    <h6 style={{paddingBottom:"3%"}}>At our company, we offer a range of blockchain solutions that can help businesses and organizations improve their operations, increase efficiency, and solve problems. Here's what sets us apart from others on the market:</h6>
    
    
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col" data-aos="zoom-out-down" data-aos-duration="3000">
  <div className="card h-100" style={{border:"none", backgroundColor:"transparent", color:"white"}}>
      <img src="/Blockchain/1.png" style={{height:"100px", width:"110px", paddingLeft:"10px", paddingTop:"10px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"600"}}>Blockchain Development </h5>
        <p className="card-text" style={{textAlign:"justify"}}>Our team of blockchain developers can create custom solutions tailored to your specific business needs, including smart contract development, tokenization, and more. With our digital ledger technology, you can rest assured that your transactions are secure, transparent, and tamper-proof.</p>
      </div>
    </div>
  </div>
  <div className="col" data-aos="zoom-out-down" data-aos-duration="3000">
  <div className="card h-100" style={{ border:"none", backgroundColor:"transparent", color:"white"}}>
      <img src="/Blockchain/2.png" style={{height:"100px", width:"130px", paddingLeft:"10px", paddingTop:"10px"}}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"600"}}>Blockchain Consulting</h5>
        <p className="card-text" style={{textAlign:"justify"}}>Our blockchain consultants can provide expert guidance on how to leverage blockchain technology for your business, including strategy development, feasibility analysis, and more. We'll work with you to understand your business needs and goals, and tailor our solutions to help you achieve them.</p>
      </div>
    </div>
  </div>
  <div className="col" data-aos="zoom-out-down" data-aos-duration="3000">
  <div className="card h-100" style={{ border:"none", backgroundColor:"transparent", color:"white"}}>
      <img src="/Blockchain/3.png" style={{height:"100px", width:"140px", paddingLeft:"10px", paddingTop:"10px"}}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"600"}}>Blockchain Integration </h5>
        <p className="card-text" style={{textAlign:"justify"}}>Our blockchain integration services enable seamless integration of blockchain solutions into your existing business processes and systems. Our solutions are tailored to the specific needs of each client, regardless of their industry or level of technical expertise.</p>
      </div>
    </div>
  </div>
  <div className="col" data-aos="zoom-out-down" data-aos-duration="3000">
  <div className="card h-100" style={{ border:"none", backgroundColor:"transparent", color:"white"}}>
      <img src="/Blockchain/4.png" style={{height:"100px", width:"120px", paddingLeft:"10px", paddingTop:"10px"}}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"600"}}>Digital Ledger Technology</h5>
        <p className="card-text" style={{textAlign:"justify"}}> Blockchain technology can be complex, but we make it simple for our clients. Think of a digital ledger as a way to record transactions that is completely transparent, tamper-proof, and decentralized. Just like a traditional ledger, a digital ledger keeps track of all transactions and changes made to the ledger. But instead of being stored in a centralized database, it is stored across a network of computers, making it virtually impossible to hack or manipulate. Our digital ledger technology is the foundation of all our blockchain solutions, and it provides unparalleled security and transparency for our clients.</p>
      </div>
    </div>
  </div>
  <div className="col" data-aos="zoom-out-down" data-aos-duration="3000">
  <div className="card h-100" style={{ border:"none", backgroundColor:"transparent", color:"white"}}>
      <img src="/Blockchain/5.png" style={{height:"100px", width:"130px", paddingLeft:"10px", paddingTop:"10px"}}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"600"}}>Digital Notary Services</h5>
        <p className="card-text" style={{textAlign:"justify"}}>Just like a traditional notary, our digital notary services provide an independent third-party verification of documents, contracts, and other important records. But instead of relying on a human notary, our digital notary services use blockchain technology to ensure that documents are tamper-proof and can be verified by anyone. This makes it easy for businesses and organizations to ensure the authenticity of important documents and contracts without the need for costly and time-consuming legal procedures.</p>
      </div>
    </div>
  </div>
  <div className="col" data-aos="zoom-out-down" data-aos-duration="3000">
  <div className="card h-100" style={{border:"none", backgroundColor:"transparent", color:"white"}}>
      <img src="/Blockchain/6.png" style={{height:"100px", width:"150px", paddingLeft:"10px", paddingTop:"10px"}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title" style={{fontWeight:"600"}}>Blockchain Solutions for Any Industry</h5>
        <p className="card-text" style={{textAlign:"justify"}}>Many people think that blockchain technology is only used for cryptocurrencies or that it's only for tech-savvy individuals. But that couldn't be further from the truth. Blockchain technology can be applied to a wide range of industries and used by anyone. Our solutions are tailored to the specific needs of each client, regardless of their industry or level of technical expertise. Whether you're a healthcare provider looking to manage patient data securely or a real estate broker looking to streamline transactions, we have a solution for you.</p>
      </div>
    </div>
  </div>

  </div>
        
    </div>
    )
}