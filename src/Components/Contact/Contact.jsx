import React, {useState} from 'react';
import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Description from "../Services/Description/Description";
const Contact = () => {
  var [mailSent, setMailStatus] = useState(false);
  var [formSubmitted, setForSubmission] = useState(false);
const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_irw47tq', 'template_6nyh8lo', form.current, {
            publicKey: 'E_BJkihH1b2ffCppw',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setMailStatus(true);
              setForSubmission(true);
            },
            (error) => {
              console.log('FAILED...', error.text);
              setMailStatus(false);
              setForSubmission(true);
            },
          );
      };

    return (
        <div className='contact' id='Contact'>
            <Description hasButton="false" title1={"Get in Touch"} title2={"Contact me"}/> 
            <form className="right" ref={form} onSubmit={sendEmail}>      
            <input type="text" name='user-name' placeholder='Name'/>
            <input type="text" name='user-email' placeholder='Email'/>
            <textarea type="text" name='message' placeholder='Message'/>
            <span style={mailSent? {color: "green"}:{color:"red"}}>{formSubmitted && (mailSent? "Mail sent, thanks for contacting us.": "Oops, mail could not be sent !")}</span>
            <input type='submit' className="button cm-button" value={"Send"}/>
            <div className='p-blur'><div className="blurDiv" style={{background:"var(--purple)"}}></div></div>
            
            </form>    
        </div>
    );
}

export default Contact;
