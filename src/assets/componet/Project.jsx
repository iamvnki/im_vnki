import React from 'react'
import { Link } from 'react-router-dom'


export const Project = () => {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-6">
        <img src="About.png" alt="image" width={400} />
        </div>
        <div className="col-6 text-end pt-5">
          <Link to='/'><p className='btn btn-danger'>Go Back</p></Link>
        </div>
        <h1>comming soon</h1>
      </div>
    </div>
  )
}
