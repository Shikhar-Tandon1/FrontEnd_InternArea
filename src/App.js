import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Register from './Components/auth/Register';
import Intern from "./Components/Internships/intern"
import JobAvl from "./Components/Job/JobAvl"
import JobDetail from './Components/Job/JobDetail';
import InternDetail from "./Components/Internships/InternDetail"
import { useDispatch} from 'react-redux';
import { login,logout} from "./Feature/Userslice"
import { useEffect } from 'react';
import { auth } from './firebase/firebase';
import Profile from './Profile/Profile';
import AdminLogin from './Admin/AdminLogin';
import AdminPanel from './Admin/AdminPanel';
import ViewAllApplication from "./Admin/ViewAllApplication"
import PostInternships from './Admin/PostInternships';
import DetailApplication from './Applications/DetailApplication';
import UserApplication from './Profile/UserApplication';
import UserapplicationDetail from "./Applications/DetailApplicationUser";
import LanguageSelector from './Components/LanguageSelector';
import RestrictedEntry from './Restriction/RestrictedEntry';
function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
  
          uid:authUser.uid,
          photo:authUser.photoURL,
          name:authUser.displayName,
          email:authUser.email,
          phoneNumber:authUser.phoneNumber
        }))
      }
        else{
          dispatch(logout())
        }
    })
    },[dispatch] );
  return (
    <div className="App">
         
            <LanguageSelector/>   

<Navbar/>


<Routes>

  <Route path='/' element={<Home/>}/>
 <Route path='restricted' element={<RestrictedEntry/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/internship' element={<Intern/>}/>
<Route path='/Jobs' element={<JobAvl/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/detailjob' element={<JobDetail/>}/>
<Route path='/detailInternship' element={<InternDetail/>}/>
<Route path='/detailApplication' element={<DetailApplication/>}/>
<Route path='/adminLogin' element={<AdminLogin/>}/>
<Route path='/adminepanel' element={<AdminPanel/>}/>
<Route path='/postInternship' element={<PostInternships/>}/>
<Route path='/applications' element={<ViewAllApplication/>}/>
<Route path='/UserapplicationDetail' element={< UserapplicationDetail/>}/>
<Route path='/userapplication' element={<UserApplication/>}/>

</Routes>

    </div>
  );
}

export default App;