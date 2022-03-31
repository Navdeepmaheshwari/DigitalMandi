import React from "react";
import { useContext, useEffect } from "react";
import noteContext from "../Context/Crops/CropContext";
import Addnote from "./AddCrops";
import Noteitem from "./CropDetails";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    //eslint-disable-next-line
  }, []);
  const updateNote = (note) => {};

  return (
    <>
      {/* <Addnote /> */}
      {/* <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button> */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group my-3">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    placeholder="Enter Title"
                    // onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="tag">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    name="tag"
                    placeholder="Enter Category"
                    // onChange={onChange}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    placeholder="Enter Description"
                    // onChange={onChange}
                  />
                </div>
                {/* <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label"  htmlFor="exampleCheck1">Check me out</label>
            </div> */}
                <button
                  type="submit"
                  className="btn btn-primary my-2"
                  // onClick={handleClick}
                >
                  Add Note
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your All Notes</h2>
        <div className="container mx-2">
          <h5>{notes.length === 0 && "No Notes to Display"}</h5>
        </div>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;