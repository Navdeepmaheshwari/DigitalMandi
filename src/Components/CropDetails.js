import React from "react";
import { useContext } from "react";
import noteContext from "../Context/Crops/CropContext";
// import cropimg from "../../Backend/images/"
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { crop, updateNote } = props;

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
              <p>Crop: {crop.cropName}</p>
              <p>Address: {crop.address} &emsp; Market:{crop.market}</p>
              <p>
                Plot No.: {crop.plotno} &emsp; &emsp; Net weight:{crop.weight}
              </p>
              <p></p>

              <p>Highest-bid: {crop.price}</p>
            </div>
            <ul class="postcard__tagbox">
            <li class="tag__item play green">
                <a href="#">
                  <i class=""></i> Chat With Merchant
                </a>
              </li>
              <li class="tag__item play green">
                <a href="#">
                Accept Deal
                </a>
              </li>
              <li class="tag__item play red">
                <a href="#">
                Delete
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Noteitem;
