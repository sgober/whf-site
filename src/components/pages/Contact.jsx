import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          message: message,
          reply_to: email
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => toast.success('Contact request successfully sent.'), // clear form on success
        error => toast.error(error.text)
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <div>
        <label htmlFor="name">Name:</label>
        <input required id="name" onChange={e => setName(e.target.value)} type="text" value={name} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input required id="email" onChange={e => setEmail(e.target.value)} type="email" value={email} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea required id="message" onChange={e => setMessage(e.target.value)} value={message} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact;
