import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCq7R2C8UnLe4uRsUd4GrUMCd0D_BOQmY0",
    authDomain: "intern-area-1b584.firebaseapp.com",
    projectId: "intern-area-1b584",
    storageBucket: "intern-area-1b584.appspot.com",
    messagingSenderId: "681344438724",
    appId: "1:681344438724:web:8bfb94cc8fd4cf1c951491",
    measurementId: "G-PTMXVE49ZT"};

    const app = initializeApp(firebaseConfig);
    const authp = getAuth(app);

    const PhoneAuth = () => {
        const [phoneNumber, setPhoneNumber] = useState('');
        const [verificationCode, setVerificationCode] = useState('');
        const [setConfirmResult] = useState(null);
      
        const setupRecaptcha = () => {
          window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            size: 'invisible',
            callback: (res) => {
              console.log(res)
            },
          }, authp);
        };
      
        const handleSendCode = async () => {
          setupRecaptcha();
          const appVerifier = window.recaptchaVerifier;
          try {
            const confirmationResult = await signInWithPhoneNumber(authp, phoneNumber, appVerifier);
            setConfirmResult(confirmationResult);
            alert('Verification code sent!');
          } catch (error) {
            console.error('Error during signInWithPhoneNumber', error);
            alert('Error sending verification code');
          }
        };
      
        const handleVerifyCode = async () => {
          try {
            alert('Phone number verified and user signed in!');
          } catch (error) {
            console.error('Error during code verification', error);
            alert('Error verifying code');
          }
        };
      
        return (
          <div>
            <h1>Phone Authentication</h1>
            <div id="recaptcha-container"></div>
            <div>
              <input
                type="text"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <button onClick={handleSendCode}>Send Verification Code</button>
            </div>
            <div>
              <input
                type="text"
                placeholder="Verification code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <button onClick={handleVerifyCode}>Verify Code</button>
            </div>
          </div>
        );
      };
      
      export default PhoneAuth;