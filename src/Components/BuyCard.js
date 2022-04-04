import React from "react";
import { useContext ,useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../Context/Crops/CropContext";
// import cropimg from "../../Backend/images/"
const BuyCard = (props) => {
  const context = useContext(noteContext);
  const { bidCrop } = context;
  const [value, setValue] = useState("");
  let history = useHistory();
  const { crop } = props;
  const onChange= (e) =>{
    
    setValue(e.target.value)
    console.log(e.target.value);
 }
 const handleClick = async ()=>{
  /*    console.log(crop._id);
     console.log(value); */
     
     /* bidCrop(crop._id,value);
    
     window.alert("jay shrre ram");
     history.push("/merchantdashboard");  */
     console.log(crop._id);
     console.log(value);
     const price=value;
     const response = await fetch(`/api/buy/merchant/list/${crop._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth":localStorage.getItem('token'),
        },
        body: JSON.stringify({price})
      });
  
      const note = await response.json();
      console.log(response.status);
      if(response.status===200){
        window.alert("Bid successfully");
        history.push("/merchantdashboard");
      }else{
        window.alert(note);
        history.push("/mcurrent");
        setValue(0)
      }

 }
  return (
    //   <div className="col-lg-4 mb-4">
    //   <div className="card alignCard">
    //      <img src={`http://localhost:8000/${crop.image}`} alt="" className="card-img-top " />
    //     <div className="card-body">
    //       <h5 className="card-title mb-3">{crop.name}</h5>

    //       <div className="card-text">
    //       <p>Crop: {crop.cropName}</p>
    //         <p>Address: {crop.address}</p>
    //         <p>Plot No.: {crop.plotno} &emsp; &emsp;  Net weight:{crop.weight}</p>
    //         <p>Market:{crop.market}</p>

    //         <p>Highest-bid: {crop.price}</p>

    //       </div>

    //        <a href="" className="btn btn-success btn-sm width100 mx-0 fa-brands fa-whatsapp" >
    //         Chat With Merchant
    //       </a>
    //       <a href="" className="btn btn-danger btn-sm my-3 width100 mx-0 ">

    //         ACCEPT DEAL
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <section class="">
      <div class="container py-2">
        {/* <div class="h1 text-center text-dark" id="pageHeaderTitle">
          My Cards Light
        </div> */}

        <article class="postcard light blue">
          <a class="postcard__img_link" href="#">
            <img
              class="postcard__img"
              src={`http://localhost:8000/${crop.image}`}
              alt="Image Title"
            />
          </a>
          <div class="postcard__text t-dark">
            <h1 class="postcard__title blue">
              {/* <a href="#">Podcast Title</a> */}
            </h1>
            <div class="postcard__subtitle  ">
              <time datetime="2020-05-25 12:00:00 ">
                <i class="fas fa-calendar-alt my-4 mx-1
                "></i>
                {crop.date}
              </time>
            </div>
            {/* <div class="postcard__bar"></div> */}
            <div class="postcard__preview-txt">
              <p>Crop: {crop.cropName} &emsp; &emsp; Market:{crop.market}</p>
              <p>Address: {crop.address} </p>
              
              <p>
                Plot No.: {crop.plotno} &emsp; &emsp; Net weight:{crop.weight}
              </p>
              <p>Enter Bid Amount</p>
              <input
                    type="number"
                     onChange={onChange}
                    className="form-control mb-2"
                   id="price"
                    name="price"
                    value={value}
                    placeholder="00"
                  />
                 
            
              
            </div>
            <button
                    className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                    type="submit"
                    onClick={handleClick}
                  >
                    Bid
                  </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BuyCard;
