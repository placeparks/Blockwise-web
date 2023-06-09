import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Home.module.css'

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

<div className={styles.table}>
<h1>Launch Your Web 3.0 Project Today!</h1>
<p>Please fill in the details below .</p>
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

    );
}