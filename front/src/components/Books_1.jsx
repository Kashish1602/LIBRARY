import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
function Books_1() {
  const [dat, setDat] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1441/getbook");
        setDat(response.data.data);
      } catch (error) {
        console.log(`error : ${error}`);
      }
    };
    fetchData();
  }, []);

  console.log(dat);

  return (
    <div className="container">
      {dat.length > 0 ? (
        <div className="row">
          {dat.map((i) => (
            <div className="col-lg-3 d-flex justify-content-center align-items-center">
              <BookCard
                img={i.imgurl}
                author={i.author}
                name={i.name}
                desc={i.desc}
                id={i._id}
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Books_1;
