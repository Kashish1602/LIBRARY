import React from "react";
import { Link } from "react-router-dom";

function BookCard({id, name, author, desc, img }) {
  const shortenedDesc = desc.slice(0, 100);
  const truncatedDesc = desc.length > 100 ? `${shortenedDesc}...` : desc;

  return (
    <div className="card" style={{ width: "18rem", height: "450px" }}>
      <img src={img} className="card-img-top" alt="img" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
        <p className="card-text">{truncatedDesc}</p>
        {desc.length > 100 && (
          <Link to={`/book2/${id}`} className="btn btn-primary">
            Read More...
          </Link>
        )}
      </div>
    </div>
  );
}

export default BookCard;
