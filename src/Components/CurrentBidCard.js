import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../Context/Crops/CropContext";

export const CurrentBidCard = () => {
  const context = useContext(noteContext);

  const [value, setValue] = useState("");
  let history = useHistory();

  let date = crop.date;
  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <section class="">
        <div class="container py-2">
          <article class="postcard light blue">
            <a class="postcard__img_link" href="#">
              <img
                class="postcard__img"
                src={`http://localhost:8000/${crop.image}`}
                alt="Crop Image"
              />
            </a>
            <div class="postcard__text t-dark">
              <h1 class="postcard__title blue">
                {/* <a href="#">Podcast Title</a> */}
              </h1>
              <div class="postcard__subtitle  ">
                <time datetime="2020-05-25 12:00:00 ">
                  <i
                    class="fas fa-calendar-alt my-4 mx-1
                "
                  ></i>
                  {new Date(date).toGMTString()}
                </time>
              </div>

              <div class="postcard__preview-txt">
                <p>Crop: {crop.cropName}</p>
                <p>
                  Address: {crop.address} &emsp; &emsp; Market:{crop.market}
                </p>

                <p>
                  Plot No.: {crop.plotno} &emsp; &emsp; Net weight:{crop.weight}
                </p>
                <p>
                  Update Bid Amount:
                  <input
                    type="number"
                    onChange={onChange}
                    className=" mx-4"
                    id="price"
                    name="price"
                    value={value}
                    // placeholder="00"
                  />
                </p>
              </div>
              <button
                className="btn btn-lg btn-success btn-login fw-bold text-uppercase"
                type="submit"
                onClick={handleClick}
              >
                Update Bid
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
