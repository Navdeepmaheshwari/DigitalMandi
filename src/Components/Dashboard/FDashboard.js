import React from 'react'
import { Link } from "react-router-dom";
import "./fdasboard.module.css"
export const FDashboard = () => {
  return (
    <>
    <div className=" d-flex justify-content-center my-5 text-center">
        {/* <div className="">

        <h1 className="my-5">Welcome to Farmer Dashboard</h1>
        <h3 className='my-5'>Login Successful</h3>
        <button className="btn btn-success">
           <Link  to="/addcrop">Add New Crop</Link>     
              </button>
        </div> */}
   
    <div class="d-flex flex-row bd-highlight bg ">
  <div class="p-2 bd-highlight flex-fill"><button className="btn btn-success text-white">
           <Link className='text-white' to="/addcrop">Add New Crop</Link>     
              </button></div>
  <div class="p-2 bd-highlight flex-fill"><button className="btn btn-success text-white">
           <Link className='text-white' to="/">Recent Activity</Link>     
              </button></div>
  <div class="p-2 bd-highlight flex-fill"><button className="btn btn-success text-white">
           <Link className='text-white' to="/">Dashboard</Link>     
              </button></div>
</div> </div>
    </>
  )
}

