import { useState } from "react";
import axios from 'axios';
import "./ContactForm.css";

const ContactForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

   const onNameChange = (event) => {
        setName(event.target.value)
      }

    const onEmailChange = (event) => {
        setEmail(event.target.value)
      }
      
    const onMessageChange = (event) => {
        setMessage(event.target.value)
      }
      
      const handleSubmit = (e) => {
        e.preventDefault();
        axios({
          method: "POST",
          url:"pelagenkolena@gmail.com",
        }).then((response)=>{
          if (response.data.status === 'success') {
            alert("Message Sent.");
            resetForm();
          } else if (response.data.status === 'fail') {
            alert("Message failed to send.")
          }
        })
      }

      const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
      }

      return(
        <div className="contact-form">
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
              <label htmlFor="name"><h4 className="contact-form-label ">Name</h4></label>
              <input type="text" className="form-control input" value={name} onChange={onNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail"><h4 className="contact-form-label">Email address</h4></label>
              <input type="email" className="form-control input" aria-describedby="emailHelp" value={email} onChange={onEmailChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message"><h4 className="contact-form-label">Message</h4></label>
              <textarea className="form-control textarea" rows="5" value={message} onChange={onMessageChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
    }
   
  export default ContactForm;
