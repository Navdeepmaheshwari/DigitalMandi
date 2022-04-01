import react from "react";
import NoteContext from "./CropContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const NoteState = (props) => {
  // const host = "http://localhost:8000";
  
  const initialnotes = [];
  const [crops, setCrops] = useState(initialnotes);
  let history = useHistory();
  //Get All Notes
  const getCrops = async () => {
    //API
    const response = await fetch("", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmZDUwNzMxNzRjYWMyMDlkZWE4ZDdhIn0sImlhdCI6MTY0Mzk5NTAzOH0.Vkb6w1A1mLyGi5Bo-_tG_xh6-m-tfupLGDqb7DSe56c",
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    console.log(json);
    setCrops(json);
  };

  //Add New Note
  const addCrop = async (name, address, plotno, weight, market,image) => {
    let url = "http://localhost:3000/api/sell/farmer/addcrop";
    //API
    console.log(image,"nameeee:",image.name)
    const formdata =new FormData();
    formdata.append('image',image,image.name)
    formdata.append('cropName',name)
    formdata.append('address',address)
    formdata.append('market',market)
    formdata.append('weight',weight)
    formdata.append('plotno',plotno)
try {
  let resp= await axios.post(url,formdata,{
    headers: {
    "Content-Type": "multipart/form-data",
        
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0NWZlYmQ0NzZkYzgwZjAzYjBhMTFmIn0sImlhdCI6MTY0ODc5OTUyMH0.X4hvDau8-e2Dq33BQauqDzJjfRPJhMMTagwwPW02bu4"
  }})
  

  
  if(resp.status == 200){
    window.alert("New Crop Added Successfull");
    //history.push("/fdashboard");
  }
  
} catch (error) {
  window.alert("Failed");
  console.log(error);
  
}

    /* const response = await fetch("/api/sell/farmer/addcrop", {
      method: "POST",
      body: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
        
        "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0MGJhYmVkOGIyOGE5MzYzOWFjNDBhIn0sImlhdCI6MTY0ODc5NDM2NX0.qp7L1j6kSKa03_bqpbicP92AM9T4FIbpjcgn1TBy88o"
          
      },

       // body data type must match "Content-Type" header
    });
    const crop= await response.json(); // parses JSON response into native JavaScript objects
    if(crop.success){
      window.alert("New Crop Added Successfull");
      history.push("/fdashboard");
    }
    else{
      window.alert("Failed");
      history.push("/addcrop");
    } */
    
    // const note = {
    //   _id: "6207771315f6d8891d409859",
    //   user: "61fd5073174cac209dea8d7a",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2022-02-08T15:32:04.135Z",
    //   __v: 0,
    // };

    //setCrops(crops.concat(crop));
  };

  //Delete Note
  const deleteNote = async (id) => {
    //API
    //API
    const response = await fetch(`/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0MmNkNmJlY2EyZWMxYjdkOTM3NGIzIn0sImlhdCI6MTY0ODc0MDI1N30.x9bKGsXjNv7-5Mrm0x_ekrxen97ao_nMJDdSORf0lzY",
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    console.log(json);
    // setCrops(json);
    console.log("delete note with id" + id);
    const newNotes = crops.filter((note) => {
      return note._id !== id;
    });
    setCrops(newNotes);
  };

  //Update
  const editNote = (id, title, description, tag) => {
    //API
    const response = fetch(`/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI0MGJhYmVkOGIyOGE5MzYzOWFjNDBhIn0sImlhdCI6MTY0ODc5NDExNX0.BwV2Elkki9FvAQs_znBjKuGLwIJygDyhsW7bVFSrdwU",
      },

      body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects

    for (let index = 0; index < crops.length; index++) {
      const element = crops[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ crops, setCrops, addCrop, deleteNote, editNote, getCrops }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
