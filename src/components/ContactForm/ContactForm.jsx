import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import style from "./ContactForm.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function ContactForm() {
  const [animation, setAnimation] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID, // מזהה השירות מ-EmailJS
        process.env.REACT_APP_YOUR_TEMPLATE_ID, // מזהה התבנית מ-EmailJS
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY // המפתח הציבורי שלך מ-EmailJS
      )
      .then(
        () => {
          setAnimation(true);
        },
        (error) => {
          alert("Failed to send message, please try again later.");
          console.error("EmailJS Error:", error.text);
          console.error("EmailJS Error:", error);
        }
      );

    e.target.reset(); // איפוס הטופס לאחר שליחה
  };

  return (
    <div>
      {animation ? (
        <DotLottieReact
          className={style.lotti}
          src="https://lottie.host/7e81f359-1be1-4216-b1da-73cd7b60bb60/3pFhCoDAh8.lottie"
          loop
          autoplay
        />
      ) : (
        <form ref={form} onSubmit={sendEmail} className={style.contactform}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="user_name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
