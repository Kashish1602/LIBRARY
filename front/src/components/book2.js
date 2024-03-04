import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Book2() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      try {
        const response = await axios.get(`http://localhost:1441/specificBook/${id}`);
        setBook(response.data.data);
        console.log(response);
      } catch (error) {
        console.log("error:", error);
      }
    }
    fetchBook();
  }, [id]);

  return (
    <div>
      {book ? (
        <div className='container mx-auto'>
          <h1 className='text-uppercase'>{book.name}</h1>
          <p>{book.author}</p>
          <p>{book.desc}</p>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Book2;
