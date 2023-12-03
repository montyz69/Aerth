"use client"
import React, { useEffect } from 'react';
import './register.css'

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
          <h1>Register</h1>
        </header>
        <main className="sign-upbody">
          <form action="#">
            <p>
    
              <label htmlFor="Username"></label>
              <input type="text" id="full_name" placeholder="Username" required />
            </p>
            <p>
              <label htmlFor="Email ID"></label>
              <input type="text" id="email" placeholder="Email ID" required />
            </p>
            <p>
              <label htmlFor="Mobile NO."></label>
              <input type="phone" id="number" placeholder="Mobile number" required />
            </p>
            <p>
              <label htmlFor="Password"></label>
              <input type="phone" id="pass" placeholder="Password" required />
            </p>
            <p>
            <label htmlFor="RPassword"></label>
              <input type="phone" id="passr" placeholder="Reenter Password" required />
            </p>
            {/* Other form fields go here */}
            <p>
              <input type="submit" onClick={validateForm} className="submit" value="Submit Here" />
            </p>
          </form>
        </main>
        <footer className="footer">
          <p>
            Already have an account? <a href="/Login">Login here</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Page;
