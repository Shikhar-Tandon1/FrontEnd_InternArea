import { initializeApp } from 'firebase/app';
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useState , useEffect} from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyCq7R2C8UnLe4uRsUd4GrUMCd0D_BOQmY0",
    authDomain: "intern-area-1b584.firebaseapp.com",
    projectId: "intern-area-1b584",
    storageBucket: "intern-area-1b584.appspot.com",
    messagingSenderId: "681344438724",
    appId: "1:681344438724:web:8bfb94cc8fd4cf1c951491",
    measurementId: "G-PTMXVE49ZT"
  };
  
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);

  const detectBrowser = () => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
      return 'Chrome';
    } else if (userAgent.includes('Edg') || userAgent.includes('MSIE') || userAgent.includes('Trident')) {
      return 'MicrosoftEdge';
    } else {
      return 'Other';
    }
  };

  const EmailAuth = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isChrome, setIsChrome] = useState(false);
  
    useEffect(() => {
      const browser = detectBrowser();
      if (browser === 'Chrome') {
        setIsChrome(true);
      }
    }, []);
  
    useEffect(() => {
      // Check if the user is returning from email sign-in link
      if (isSignInWithEmailLink(auth, window.location.href)) {
        const email = window.localStorage.getItem('emailForSignIn');
        if (email) {
          signInWithEmailLink(auth, email, window.location.href)
            .then(() => {
              window.localStorage.removeItem('emailForSignIn');
              alert('Email verified and user signed in!');
            })
            .catch((error) => {
              setError('Failed to verify email.');
              console.error('Error during signInWithEmailLink', error);
            });
        }
      }
    }, []);
  
    const handleSendOtp = async () => {
      if (!isChrome) {
        alert('Email OTP verification is only required on Google Chrome.');
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const actionCodeSettings = {

          url: 'https://internareaship.netlify.app',
          handleCodeInApp: true,
        };
  
        await sendSignInLinkToEmail(auth, email, actionCodeSettings);
        window.localStorage.setItem('emailForSignIn', email);
        alert('Verification email sent!');
      } catch (error) {
        setError('Failed to send verification email.');
        console.error('Error during sendSignInLinkToEmail', error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <h1>Email Authentication</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendOtp} disabled={loading}>
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </div>
      </div>
    );
  };
  
  export default EmailAuth;