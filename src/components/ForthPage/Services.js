import AOS from'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Services(){
    useEffect(() => {
        AOS.init();
      },[])
    return(
        <div>
            <h1 className='pt-3'>NFT Development Services</h1>
            <p style={{paddingBottom:"3%"}}>Blockwise tech, the top NFT development company has experience and expertise in building products over complex algorithms.</p>

            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/art.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Arts</h5>
        <p className="card-text">NFTs are transforming the art industry by allowing artists to sell unique digital artworks and verifying their ownership and authenticity. This new technology is democratizing the art market by giving independent artists a platform to sell their work directly to collectors. NFTs are also providing a new level of transparency and security in art transactions, making it easier for buyers to purchase art with confidence.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/music.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Music</h5>
        <p className="card-text">NFTs are revolutionizing the music industry by allowing artists to sell unique digital assets like albums, concert tickets, and unreleased tracks directly to fans. NFTs can provide a new revenue stream for artists and give fans a new way to engage with their favorite musicians. The use of NFTs is expected to continue to grow in the music industry as more artists and fans become familiar with the technology.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/fashion.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Fashion</h5>
        <p className="card-text">The fashion industry is catching up with the NFT trend, allowing designers to monetize their creations and engage with collectors and fans through digital clothing designs and exclusive collaborations. With more designers exploring the potential of blockchain technology in fashion, the use of NFTs in the industry is rapidly gaining traction. NFTs are at the forefront of this digital revolution, pointing towards a promising future for the fashion industry.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"  data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/game.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Games</h5>
        <p className="card-text">NFTs are transforming the gaming industry by enabling players to buy, sell and trade in-game items as unique digital assets. NFTs offer players true ownership of their in-game items, making it easier for players to monetize their gaming experience. Moreover, NFTs are empowering game developers to create more immersive and engaging gaming experiences, by providing a way for players to own and trade rare in-game items.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/realEstate.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Real Estate</h5>
        <p className="card-text">NFTs are making waves in the real estate industry by enabling fractional ownership and trading of properties. NFTs can be used to represent ownership of a portion of a property, providing an opportunity for smaller investors to participate in real estate deals. This technology also allows for more efficient and secure transfer of property ownership, reducing the need for intermediaries and paperwork. NFTs are expected to bring a new level of liquidity and accessibility to the real estate market.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"  data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/loans.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">NFT backed Loans</h5>
        <p className="card-text">NFTs are shaking up the lending industry through NFT-backed loan platforms. With NFTs used as collateral, borrowers have a new way to access financing, and lenders have a new layer of security in case of default. It's a groundbreaking development in finance that's changing the game for borrowers and lenders alike. The power of NFTs is clearly on display in this emerging lending trend, and the possibilities for the future of finance are limitless.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100"  data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/content.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Digital-Content</h5>
        <p className="card-text">NFTs for digital content provide an immutable proof of ownership, ensuring that creators get the credit they deserve for their work and eliminating copyright issues. This technology is revolutionizing the way digital content is shared and consumed, creating a fairer and more transparent ecosystem for creators and their audiences. With NFTs, artists, writers, and other creators can be confident that their work is rightfully attributed to them, and they can be sure that they will not fall victim to copyright infringement or other forms of exploitation.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/domain.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Domain Name</h5>
        <p className="card-text">NFTs have disrupted the domain services industry, turning domain names into digital assets that can be owned, sold and traded. No longer are domains just rented or leased, with limited ownership rights. Now, individuals and companies can truly own their online identities and profit from them. This technology has created a new market for domain names, driving innovation and democratizing the industry. With NFTs, the possibilities for domain owners are endless, and the future of online identity is brighter than ever.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/Gen.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Generative Art</h5>
        <p className="card-text">Generative art is no longer confined to the realms of obscure galleries and niche collectors. Thanks to NFTs, this captivating art form is now gaining a global audience. Created using autonomous systems, generative art is the product of algorithms that produce unique and mesmerizing visual experiences. With the rise of NFT platforms, generative artists can now showcase their work to a wider audience and monetize their digital creations like never before.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/exchange.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Exchange</h5>
        <p className="card-text">An NFT exchange platform is like a treasure trove, brimming with unique and rare digital assets that are waiting to be discovered. From iconic art pieces to one-of-a-kind gaming items, these non-fungible token collections are not just fascinating but also profitable. They offer artists, game developers, and collectors a new way to showcase and monetize their creations, making NFT exchange platforms an exciting and lucrative space to explore.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/contracts.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Smart Contract</h5>
        <p className="card-text">Imagine a world where transactions occur automatically without the need for intermediaries, delays, or human error. Enter smart contracts - digital programs on the blockchain that can automate the execution of agreements when certain conditions are met. With smart contracts, you can streamline and accelerate business processes, cut out the middleman, and ensure accuracy and transparency in all your transactions. Welcome to the future of automation, welcome to the world of smart contracts.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" data-aos="zoom-in-down">
      <img  data-aos="fade-up"
     data-aos-duration="3000" style={{height:"90px", width:"90px", alignSelf:"center", paddingTop:"20px"}} src="/Nfts/mining.png" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">NFT Minting</h5>
        <p className="card-text">Unleash your creativity and cash in on the NFT craze with our cutting-edge minting platform! Whether you're an artist, musician, or content creator, our platform provides the tools you need to bring your unique digital assets to life as valuable NFTs. Take the first step towards your NFT selling journey with Blockwise tech – the platform that empowers you to showcase your talent and unlock new revenue streams. Don't miss out on the NFT revolution – start minting now!</p>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}