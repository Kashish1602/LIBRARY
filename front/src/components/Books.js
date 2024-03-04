import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Books() {
  const [data, setData] = useState([]);
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1441/getbook');
        setData(response.data.data);
      } catch (error) {
        console.log(`error : ${error}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Total no. of Books are {data.length}</h1>
      {data.length === 0 && <h1>Loading.........</h1>}
    </div>
  );
}

export default Books;
