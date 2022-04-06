import React from "react";
import { Navbar } from "../nav links/CNav";
import "./CHero.css";
import { Link } from "react-router-dom";
import { Carousel } from "../carousel/Ccarousel";
import image from "../../images/indian-farmer.webp";
import { LatestPrice } from "../KnowCurrPrice/priceboard";


export const Hero = () => {
  return (
    <>
    <Carousel/>
    <LatestPrice/>

    {/* <div className="aboutapp container ">
        <h1 className="about">About This App :</h1>
        <div className="abouttext">
          <ol>
            <li>
              We Provide The Appointment Facilities So that any one can book
              their appointment, and also predict the the approx time it will
              take for his turn
            </li>
            <li>
              We have the disease predictor so that any one can predict what
              disease he/she might have.
            </li>
            <li>
              We have also facility of personal talk, so that any one can chat
              privately with doctors.
            </li>
          </ol>

          <div className="illustrate d-flex justify-content-center">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div class="container smal">
        
      <h1 className="about text-center">Contact Us:</h1>
        <div class="row mx-auto">
          <div class="contactbody">
            <div class=" mt-2 bg-transparent">
              <div class="card-body bodycolor">
                <div class=" containercolor">
                  <form id="contact-form" role="form">
                    <div class="controls">
                      <div class="row">
                        <div class="col-md-6 my-2">
                          <div class="form-group">
                            {" "}
                            <label for="form_name" className="my-1">Firstname *</label>{" "}
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              class="form-control chngcolor"
                              placeholder="Please enter your firstname *"
                              required="required"
                              data-error="Firstname is required."
                            />{" "}
                          </div>
                        </div>
                        <div class="col-md-6 my-2">
                          <div class="form-group">
                            {" "}
                            <label for="form_lastname" className="my-1">Lastname *</label>{" "}
                            <input
                              id="form_lastname"
                              type="text"
                              name="surname"
                              class="form-control chngcolor"
                              placeholder="Please enter your lastname *"
                              required="required"
                              data-error="Lastname is required."
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 my-2">
                          <div class="form-group" className="my-1">
                            {" "}
                            <label for="form_email">Email *</label>{" "}
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              class="form-control chngcolor"
                              placeholder="Please enter your email *"
                              required="required"
                              data-error="Valid email is required."
                            />{" "}
                          </div>
                        </div>
                        
                      </div>
                      <div class="row">
                        <div class="col-md-12 my-2">
                          <div class="form-group">
                            {" "}
                            <label for="form_message" className="my-1">Message *</label>{" "}
                            <textarea
                              id="form_message"
                              name="message"
                              class="form-control chngcolor"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                            ></textarea>{" "}
                          </div>
                        </div>
                        <div class="mt-3">
                          {" "}
                          <input
                            type="submit"
                            class="btn btn-success btn-send pt-2 btn-block "
                            value="Send Message"
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
    </>
  );
};
    

   
