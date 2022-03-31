import React from 'react'
import cropImg from '../../images/cropo.jpg'
import './Ccard.css'

export const Card = () => {
  return ( 
    <div class="card alignCard">
    <img src={cropImg} alt="" className="card-img-top imgBorderRad" />
    <div class="card-body">
      <h5 class="card-title">Crop</h5>
      <p class="card-text">
        <p>Net weight: 1.2 quintal</p>
        <p>Highest-bid: 500/-</p>
      </p>
     <a href="" class="btn btn-success btn-sm width100">CHAT</a>
     <a href="" class="btn btn-danger btn-sm my-3 width100">ACCEPT DEAL</a>
      
    
    </div>
    </div>
  )
}




