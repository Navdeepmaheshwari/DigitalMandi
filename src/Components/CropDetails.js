import React from "react";
import { useContext } from "react";
import noteContext from "../Context/Crops/CropContext";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { crop, updateNote } = props;

  return (
    <div className="col-lg-4 mb-4">
    <div className="card alignCard">
      <img src={crop.image} alt="" className="card-img-top " />
      <div className="card-body">
        <h5 className="card-title mb-3">{crop.name}</h5>

        <div className="card-text">
          <p>Address: {crop.address}</p>
          <p>Plot No.: {crop.plotno}</p>
          <p>Market:{crop.market}</p>
          <p>Net weight:{crop.weight}</p>
          <p>Highest-bid: 500/-</p>
        </div>
        <a href="" className="btn btn-success btn-sm width100 mx-0">
          CHAT
        </a>
        <a href="" className="btn btn-danger btn-sm my-3 width100 mx-0">
          ACCEPT DEAL
        </a>
      </div>
    </div>
  </div>
  );
};

export default Noteitem;