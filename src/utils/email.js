import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const sendEmail = ({ name, email, subject, message, callback }) => {
  emailjs
    .send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        message: message,
        reply_to: email,
        subject: subject
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    )
    .then(
      () => {
        callback();
        toast.success('Contact request successfully sent.');
      },
      error => toast.error(error.text)
    );
};

export { sendEmail };
