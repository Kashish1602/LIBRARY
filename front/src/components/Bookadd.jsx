import React, { useState } from "react";
import axios from "axios";

function Bookadd() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [desc, setDesc] = useState("");
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:1441/admin/bookadd", {
        name,
        author,
        imgurl,
        desc
      });
      console.log(result);
      if(result.data.success){
        alert("Book added");
      }
    } catch (error) {
      if (error.response.data.errorMessage === "Book is already in here") {
        alert("Book is already in here");
      } else {
        console.log("error:", error);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center kas1">
      <div className="bg-white p-3 rounded w-50">
        <h2>Add Book</h2>
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Author</label>
            <input
              type="text"
              placeholder="Author"
              name="author"
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass">Imageurl</label>
            <input
              type="text"
              placeholder="img"
              name="img"
              onChange={(e) => {
                setImgurl(e.target.value);
              }}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="text">Description</label>
            <textarea name="text" id="text" cols="30" rows="10" onChange={(e)=>setDesc(e.target.value)}></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-outline-danger w-100 rounded-0"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default Bookadd;
