import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs(){
    const form = useRef();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    const [isFormValid, setIsFormValid] = useState(false);

   
    useEffect(() => {
      setIsFormValid(name && email && city && state && zip && number && message);
  }, [name, email, city, state, zip, number, message]);

  const sendEmail = (e) => {
      e.preventDefault();

      if (!isFormValid) {
          return;
      }

      emailjs.sendForm('service_fw8vqvu', 'template_1everhj', form.current, 't_NkU5u7x-KOk0AID')
      .then((result) => {
        console.log(result.text);
        alert('Email successfully sent!');
          }, (error) => {
              console.log(error.text);
          });
      e.target.reset();
  }; 
    return(
        <>
 <div className="row row-cols-1 row-cols-md-2 g-4" >
 <div className="col">
    <div className="card pt-5" style={{border:"none", backgroundColor:"transparent", color:"white", textAlign:"left"}}>
      <div className="card-body pt-5" style={{textAlign:"center"}}>
      <h1>Launch Your Web 3.0 Project Today!</h1>
      <h6 style={{lineHeight:"30px"}}>By choosing our company for your blockchain needs, you'll experience the benefits of this revolutionary technology firsthand. Our solutions are secure, transparent, and efficient, and our team of experts will work with you every step of the way to ensure that our solutions are tailored to your specific needs and goals. So why wait? Contact us today to learn more about how we can help you leverage the power of blockchain technology to take your business to the next level.</h6>

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card" style={{backgroundColor:"transparent",border:"none"}}>
      <div className="card-body" style={{ width:"50%",padding:"5%", width:"fit-content", color:"white"}}>
      <h2 style={{fontWeight:"700"}}>Talk to Our Experts</h2>
                <p>We are available for a friendly chat to discuss your business needs, no obligation.</p>
      <form className="row g-3" onSubmit={sendEmail} ref={form}>
                    <div className="col-md-6">
                        <div className="col-12">
                            <label for="user_name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="user_name" name='user_name' placeholder="" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='user_email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label">State</label>
                        <input id="inputState" type="text" className="form-control" value={state} onChange={(e) => setState(e.target.value)}/>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" value={zip} onChange={(e) => setZip(e.target.value)}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="number" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" id="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" name='message' rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" disabled={!isFormValid}>Submit</button>
                    </div>
                </form>               
      </div>
    </div>
  </div>

</div>
  
        </>
    )
}