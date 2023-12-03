"use client"
import React, { useEffect } from 'react';
import './login.css'

const Page = () => {
  useEffect(() => {
    // Load external script (signup.js) when the component mounts
    const script = document.createElement('script');
    script.src = 'signup.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateForm = () => {
    // Define your form validation logic here
    console.log('Form submitted');
  };

  return (
    <div className="outer-box">
      <div className="inner-box">
        <header className="sign-up">
        <img src="https://dnk.cept.gov.in/customers.web/static/img/IPlogo.png" alt="Example" />
          <h1>Log In</h1>
          <p>Don't have an account?<a href="/Register">Register Now!</a></p>
        </header>
        <main className="sign-upbody">
          <form action="#">
            <p>
              <label htmlFor="Usern"></label>
              <input type="text" id="full_name" placeholder="Mobile/E-mail" required />
            </p>
            <p>
              <label htmlFor="otp"></label>
              <input type="number" id="eotp" placeholder="OTP" required />
            </p>
            {/* Other form fields go here */}
            <p>
              <input type="submit" onClick={validateForm} className="submit" value="GET OTP" />
            </p>
          </form>
        </main>
        <footer className="footer">
          <p>
            Forgot Password? <a href="#">Reset Now!"</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
