import react from "react";
import NoteContext from "./CropContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = [];
  const [notes, setNotes] = useState(initialnotes);

  //Get All Notes
  const getNotes = async () => {
    //API
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
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
    setNotes(json);
  };

  //Add New Note
  const addCrop = async (title, description, tag) => {
    //API
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept':'application/json',
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmZDUwNzMxNzRjYWMyMDlkZWE4ZDdhIn0sImlhdCI6MTY0Mzk5NTAzOH0.Vkb6w1A1mLyGi5Bo-_tG_xh6-m-tfupLGDqb7DSe56c",
      },

      body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
    });
    const note= await response.json(); // parses JSON response into native JavaScript objects

    console.log('adding new note');
    
    // const note = {
    //   _id: "6207771315f6d8891d409859",
    //   user: "61fd5073174cac209dea8d7a",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2022-02-08T15:32:04.135Z",
    //   __v: 0,
    // };

    setNotes(notes.concat(note));
  };

  //Delete Note
  const deleteNote = async (id) => {
    //API
    //API
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmZDUwNzMxNzRjYWMyMDlkZWE4ZDdhIn0sImlhdCI6MTY0Mzk5NTAzOH0.Vkb6w1A1mLyGi5Bo-_tG_xh6-m-tfupLGDqb7DSe56c",
      },
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects
    const json = await response.json();
    console.log(json);
    // setNotes(json);
    console.log("delete note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Update
  const editNote = (id, title, description, tag) => {
    //API
    const response = fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFmZDUwNzMxNzRjYWMyMDlkZWE4ZDdhIn0sImlhdCI6MTY0Mzk5NTAzOH0.Vkb6w1A1mLyGi5Bo-_tG_xh6-m-tfupLGDqb7DSe56c",
      },

      body: JSON.stringify(title, description, tag), // body data type must match "Content-Type" header
    });
    // const json= response.json(); // parses JSON response into native JavaScript objects

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addCrop, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
