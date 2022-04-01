import React from "react";
import { useContext, useEffect } from "react";
import noteContext from "../Context/Crops/CropContext";
import Addnote from "./AddCrops";
import Noteitem from "./CropDetails";
import { FDashboard } from "./Dashboard/FDashboard";
const Notes = () => {
  const context = useContext(noteContext);
  const { crops,addCrop } = context;
  // useEffect(() => {
  //   getCrops();
  //   //eslint-disable-next-line
  // }, []);
  const updateNote = (note) => {};

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="mb-5 text-white">Your All Crops</h2>
          <div className="container mx-2">
            {/* <h5>{crops.length === 0 && "No Crop to Display"}</h5> */}
          </div>
          {crops.map((crop) => {
            return <Noteitem key={crop._id} crop={crop} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
