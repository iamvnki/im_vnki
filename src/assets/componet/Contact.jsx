import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
export const Contact = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-6">
        <h1 className='text-secondary'>Contact Me</h1>
        </div>
        <div className="col-6 text-end  form-design pt-5">
          <Link to='/'><p className='btn btn-danger'>Go Back</p></Link>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src="Contact us-rafiki.png" alt="contact" width={600} />
          </div>
          <div className="col-lg-6">
            <form action="" className='form-control-lg form-design'>
              <input type="text" placeholder='company name / your name' className='form-control  form-design pt-3 py-4 my-4'  />
              <input type="text" placeholder='organization'className='form-control  form-design pt-3 py-4 my-4'   />
              <input type="messave" placeholder='type message' className='form-control  form-design pt-3 py-4 my-4'   />
              <input type="submit" value="Submit" className='form-control  form-design pt-3 py-4 my-4'   />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
