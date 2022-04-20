import React, { useState } from 'react'
import './form.css'


function Form() {
    const[modal , setmodal]= useState(false)
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`Thankyou ${name} your form was submitted`)
    }
  return (
      <div className="feedbackbutton">
        { !modal && 
        <button type="button" class="btn btn-danger"
        onClick={()=> setmodal((value)=>!value)}>
          Give Feedback   
        </button>}
       
        <div className="form-control">
            { modal && <form className='m-auto w-50' onSubmit={handleSubmit}>
            
            <label for="exampleFormControlInput1" className="form-control my-4">Enter Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="@Ali_Hamza"
  value={name}
  onChange={(e) => setName(e.target.value)}
   />
  <label for="exampleFormControlInput1" className="form-control my-4">Email address</label>
  <input type='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  <label for="exampleFormControlInput1" className="form-control my-4">Your Feedback</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <input type="submit" class="btn btn-success"/>
  
  
   <button type="button" class="btn btn-light"
  onClick={()=> setmodal((value)=>!value)}>
  Close</button>
            </form>}
        </div>
    </div>
  )
        }
export default Form