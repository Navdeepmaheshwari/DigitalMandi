import React from "react";
import { useContext } from "react";
import noteContext from "../Context/Crops/CropContext";
// import cropimg from "../../Backend/images/"
const AfterBidCard = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { crop, updateNote ,disply} = props;
    let  date=crop.date
  return (
    
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
               {new Date(date).toGMTString()}
              </time>
            </div>
            {/* <div class="postcard__bar"></div> */}
            <div class="postcard__preview-txt">
              <p>Crop: {crop.cropName} </p>
              <p>Address: {crop.address} &emsp; &emsp; Market:{crop.market}</p>
              
              <p>
                Plot No.: {crop.plotno} &emsp; &emsp; Net weight:{crop.weight}
              </p>
              <p></p>

              <p>Highest-bid: {crop.price}</p>
            </div>
            <ul class="postcard__tagbox">
            <li class="tag__item play blue">
                <a href="#">
                <i class="fa fa-whatsapp" aria-hidden="true"></i> Chat With Merchant
                </a>
              </li>
              <li class="tag__item play green">
                <a href="#">
                <i class="fa fa-check" aria-hidden="true"></i> Accept Deal
                </a>
              </li>
              <li class="tag__item play red">
                <a href="#">
                <i class="fa fa-trash" aria-hidden="true"></i> Delete
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AfterBidCard;
