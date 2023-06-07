import AOS from'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Expertise(){
    useEffect(() => {
        AOS.init();
      },[])
    return(
        <div>
          <h2>Secure, Customized, and Cutting-Edge Wallet Development - Trust Us to Deliver Excellence</h2>  
          <h5 style={{paddingBottom:"3%"}}>At Blockwise tech, we are passionate about helping businesses and organizations harness the power of blockchain technology to achieve their goals. Let us be your partner in wallet development – we're confident you'll be glad you chose us.</h5>
          
          <h4  data-aos="fade-right"
     data-aos-easing="ease-in-sine">Expertise</h4>
          <p  data-aos="fade-right"
     data-aos-easing="ease-in-sine">We have years of experience in blockchain development and wallet design, and we stay up-to-date with the latest trends and technologies in the field. You can trust us to create a wallet that is both cutting-edge and reliable.</p>
       

        <h4 data-aos="fade-left"
     data-aos-easing="ease-in-sine">Customization</h4>
        <p data-aos="fade-left"
     data-aos-easing="ease-in-sine">We know that every business has unique requirements and preferences when it comes to their wallet solution. That's why we work closely with you to understand your needs and develop a wallet that fits your specific use case.
        </p>

        <h4  data-aos="fade-right"
     data-aos-easing="ease-in-sine">Security</h4>
        <p  data-aos="fade-right"
     data-aos-easing="ease-in-sine">We understand the importance of security in wallet development, and we take every measure to ensure that your wallet and its contents are protected from threats such as hacking and theft. You can trust us to keep your data and assets safe.
        </p>

        <h4  data-aos="fade-left"
     data-aos-easing="ease-in-sine">Quality</h4>
        <p data-aos="fade-left"
     data-aos-easing="ease-in-sine">We are committed to delivering the highest quality wallet solutions to our clients. From design to deployment, we strive for excellence in every aspect of our work.</p>
        

        <h4  data-aos="fade-right"
     data-aos-easing="ease-in-sine">Client satisfaction</h4>
        <p  data-aos="fade-right"
     data-aos-easing="ease-in-sine"> We measure our success by the satisfaction of our clients. We work hard to ensure that you are thrilled with the final product and the level of service you receive from us.</p>
        </div>
    )
}