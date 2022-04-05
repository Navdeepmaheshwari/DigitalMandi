import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../Context/Crops/CropContext";

export const FarmerDash = (props) => {
  const context = useContext(noteContext);

  const [value, setValue] = useState("");
  let history = useHistory();
  const { crop, updateNote } = props;
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
                  {new Date(date).toUTCString()}
                </time>
              </div>

              <div class="postcard__preview-txt">
                <p>Crop: {crop.cropName}</p>
                <p>Address: {crop.address}</p>
                <p>Market:{crop.market}</p>
                <p>Plot No.: {crop.plotno}</p>
                <p>Net weight:{crop.weight}</p>
                <p
                  style={{
                    "font-weight": "Bold",
                  }}
                >
                  {" "}
                  Merchant: {crop.merchant}
                </p>
                <p
                  style={{
                    "font-weight": "Bold",
                  }}
                >
                  {" "}
                  Final Bid: <span>{crop.price}</span>{" "}
                </p>
                <div class="tag__item play ">
                  <a
                    style={{
                      "font-weight": "Bold",
                    }}
                  >
                    <i
                      class="fa fa-check-square-o"
                      aria-hidden="true"
                      style={{
                        color: "green",
                        fontSize: "25px",
                        "font-weight": "Bold",
                      }}
                    ></i>{" "}
                    Succesfully Sold
                  </a>
                  <a
                    className="mx-3"
                    style={{
                      "font-weight": "Bold",
                    }}
                  >
                    <i
                      class="fa fa-file-pdf-o"
                      aria-hidden="true"
                      style={{
                        color: "red",
                        fontSize: "25px",
                        "font-weight": "Bold",
                      }}
                    ></i>{" "}
                    Print
                  </a>
                </div>
                {/* <i class="fa-solid fa-circle-check"></i> */}
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};
