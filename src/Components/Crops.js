import React from "react";
import { useContext, useEffect } from "react";
import noteContext from "../Context/Crops/CropContext";
import Addnote from "./AddCrops";
import Noteitem from "./CropDetails";
const Notes = () => {
  const context = useContext(noteContext);
  const { crops, getCrops } = context;
  useEffect(() => {
    getCrops();
    //eslint-disable-next-line
  }, []);
  const updateNote = (note) => {};

  return (
    <>
      {/* <Addnote /> */}
      <div className="container">
        <div className="row">
          {/* <h2>Your All Crops</h2> */}
          <div className="container mx-2">
            <h5>{crops.length === 0 && "No Crop to Display"}</h5>
          </div>
          {crops.map((crop) => {
            return (
              <Noteitem key={crop._id} updateNote={updateNote} crop={crop} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
