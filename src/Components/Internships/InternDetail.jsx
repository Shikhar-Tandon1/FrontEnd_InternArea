import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Feature/Userslice'
import "./detail.css"
import axios from 'axios'
import { useTranslation } from 'react-i18next'

function InternDetail() {
  const user=useSelector(selectUser)
  const [isDivVisible,setDivVisible]=useState(false)
  const [textare, setTextare]=useState("")
  const [company,setCompany]=useState("")
  const [category,setCategory]=useState("")
  const navigate=useNavigate();
  let search=window.location.search;
  const params=new URLSearchParams(search);
const id=params.get("q")
  const show=()=>{
    setDivVisible(true)
}
const hide=()=>{
    setDivVisible(false)
}
const [data,setData] =useState([])
useEffect(()=>{
   const fetchData= async()=>{
  const response=await axios.get(`https://backend-internarea-1dye.onrender.com/api/internship/${id}`)
  setData(response.data)

  const {company,category}=response.data;
  setCompany(company)
  setCategory(category)
   }
   fetchData()
})

const submitApplication= async()=>{
  const text=document.getElementById("text")
    if (text.value==="") {
      alert("Fill the mandatory fields")
    }
    else{
      const bodyJson={
        coverLetter:textare,
        category:category,
        company :company,
        user:user,
        Application:id
      }
    
      await axios.post("https://backend-internarea-1dye.onrender.com/api/application",bodyJson).then((res)=>{
  
  
        
      }).catch((err)=>{
        alert("error happend")
      })
      alert("Done")
      navigate("/Jobs")
    }
  }
  const { t } = useTranslation();
  return (
    <div>
      
      <div className="details-app">
    
          <>
          <h1 className='font-bold text-3xl'>{data.title}</h1>
          <div className="m-14 shadow-sm rounded-md border">
          <p className='mb-4 mt-3' id='boxer'> <i className='bi bi-arrow-up-right text-blue-500' ></i> {t("Actively Hiring")}</p>
          <div className="main-info align-baseline mr-96 mt-7">


 <p className='text-xl font-bold mt-4'> {data.title}</p>
 <p className='text-sm text-slate-300 font-bold'>{data.title}</p>
 <p> <i class="bi bi-geo-alt-fill"></i> {data.location}</p>
 </div>
 <div className="flex tedxt-sm justify-between">
  <p className='mt-3 text-slate-400'> <i class="bi bi-play-circle-fill"></i>   {t("Start Date")} <br />  {data.StartDate}</p>


  <p className='mt-3 text-slate-400' > <i class="bi bi-calendar-check-fill"></i>  {t("Duration")}  <br />
  {data.Duration}</p>

  <p className='mt-3 text-slate-400'>  <i class="bi bi-cash"></i>   {t("Stipend")} <br /> {data.stipend}</p>
   </div>
   <div className="flex">
    <p className='bg-green-100 rounded-md ml-4 text-green-300'> <i class="bi bi-clock"></i> 12/12/2012</p>
   </div>
   <hr />
   <div className="aboutCompany flex justify-start">
<p className='mt-3 text-xl font-bold text-start'>{t("About")} {data.company}</p>
<br />
   </div>
<div className="flex">

 <p className='text-blue-500'> {t("Instagram page")}  <i className='bi bi-arrow-up-right-square'></i></p>

</div>
 <p className='mt-4'> {data.aboutCompany}</p>
          <div className="about-Job">
          <p className='mt-3 text-xl font-bold text-start'> {t("About Internship")}</p>
          <p>{data.aboutInternship}</p>
          </div>
          <p className='text-blue-500 justify-start'> {t("Learn Business Communication")}</p>

          <div className="whocan">
          <p className='mt-3 text-xl font-bold text-start'>{t("Who can apply?")}</p>
          <p>{data.Whocanapply}</p>
          </div>

          <p className='mt-3 text-xl font-bold text-start'>{t("Perks")}</p>
          <p>{data.perks}</p>
          
          <p className='mt-3 text-xl font-bold text-start'>{t("Additional information")}</p>
          <p>{data.AdditionalInfo}</p>

          <p className='mt-3 text-xl font-bold text-start'> {t("Number Of Opening")}</p>
          <p className='text-start'>{data.numberOfopning}</p>
          <div className='flex justify-center mt-6 bg-blue-500 w-40 text-center text-white font-bold '>
          <button className='flex justify-center align-middle' onClick={show}>{t("Apply")}</button>

          </div>
     
          </div>
          </>
      
     

      </div>
      {isDivVisible &&(
  <>
  <div className="application-page">
    <div className="bg">
      <button className='close2' onClick={hide} ><i className='bi-bi-x'></i> {t("close")}</button>
      <p>{t("Applying for")}  {data.company}</p>
      <p className='mt-3 text-sm font-bold text-start mb-3'>{data.aboutCompany}</p>

    </div>
    <div className="moreSteps">
      <p className='font-semibold text-xl'>{t("Your resume.base")}</p>
      <small>{t("Your resume.small")}</small>

      <p className='mt-5 font-semibold text-xl'>{t("Cover letter")}</p>
      <br />
      <p>{t("Why should we hire for this role?")}</p>
      <textarea name="coverLetter" placeholder='' id="text"  value={textare} onChange={(e)=>setTextare(e.target.value)}></textarea>
      <p className='mt-5 font-semibold text-xl'>{t("Your availability")}</p>
      <p>{t("Confirm your availability")}</p>

    </div>
    <div>
        <label>
          <input
            type="radio"
            value="Yes, I am available to join immediately"
           
          
          />
          {t("Yes, I am available to join immediately")}
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="No, I am currently on notice period"
           
          
          />
          {t("No, I am currently on notice period")}
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="No, I will have to serve notice period"
          
           
          />
          {t("No, I will have to serve notice period")}
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="Other"
            
       
          />
          Other <span className='text-slate-500'>
          ({t("Please specify your availability")})  </span> 
        </label>
      </div>
      <p className='mt-5 font-semibold text-xl'>{t("Custom resume")} <span className='text-slate-500'>({t("Optional")})</span></p>
      <small className='text-slate-500'>{t("Employer can download and view this resume")}</small>

 
      <div className="submit flex justify-center">
        {user?(
    <button className='submit-btn' onClick={submitApplication} >{t("Submit application")}</button>
        ):(
          <Link to={"/register"}>
          <button className='submit-btn'  >{t("Submit application")}</button>
          </Link>
        )
          
        }
  </div>
  </div>
  </>
)

}
    </div>
  )
}

export default InternDetail
