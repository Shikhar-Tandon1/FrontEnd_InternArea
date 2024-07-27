import { initializeApp } from "firebase/app";
import { getAuth ,RecaptchaVerifier} from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { Link } from 'react-router-dom'

function PhoneAuth(){

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
  const recaptchaVerifier = new RecaptchaVerifier(authp, 'phone-number', {
  'size': 'invisible',
  'callback': (response) => {
    console.log(response) 

  }
});
let confirmationResult;
const sendVerificationCode=()=>{
    const phoneNumber = document.getElementById('phone-number').value;
    const appVerifier = recaptchaVerifier;
    signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log('Verification code sent');
      })
      .catch((error) => {
        console.error('Error during sign-in:', error.message);
      });
    }
    const verifyCode =() => {
        const verificationCode = document.getElementById('verification-code').value;
        confirmationResult.confirm(verificationCode)
          .then((result) => {
            const user = result.user;
            console.log('User:', user);
            <Link to={"/"}></Link>  
          })
          .catch((error) => {
            console.log(error)
          })
      }
      <section class="text-gray-600 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Sign In Using Phone Number</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="phone-number" class="leading-7 text-sm text-gray-600">Phone Number</label>
            <input type="text" id= "phone-number" placeholder="Enter phone number"/>
            <br />
            <button onClick={sendVerificationCode}>Send Verification Code</button>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="code" class="leading-7 text-sm text-gray-600">Verification Code</label>
            <input type="text" id="code" placeholder="Enter verification code"/>
            <button onclick={verifyCode}>Verify OTP</button>
          </div>
        </div>
      </div> 
    </div>
  </div>
</section>
}
export default PhoneAuth