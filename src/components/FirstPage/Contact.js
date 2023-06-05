import styles from './Contact.module.css'
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
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
        <div className={styles.Contact}>
            <div className={styles.container}>
                <h2>Talk to Our Experts</h2>
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
<div className={styles.container2}>
    <h1>Success in Progress, One Block at a Time.</h1>
    <div className={styles.circle1}><h5>6+</h5><p>Years of Blockchain Experience</p></div>
</div>
    <div className={styles.circle2}><h5>5+</h5><p>Years of Blockchain Experience</p></div>
    <div className={styles.circle3}><h5>600+</h5><p>Team Members</p></div>
    <div className={styles.circle4}><h5>90%</h5><p>Blockchain Experts</p></div>

</div>
    );
}