import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const BookDetails = () => {
  const location = useLocation();
  const { bookname } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/api/v1/getBooks/${bookname}`);
        setData(response.data.books);
      } catch (error) {
        console.error('Error fetching Data:', error);
      }
    };
    fetchData();
  }, [bookname]);
  console.log(data);
      
  const renderBooks = () => {
    if (!data) {
      return <div className="text-white">Loading....</div>;
    }
  
    return (
      <div className="d-flex justify-content-around my-3">
        {data.map((book, index) => (
          <div
            key={index}
            className="cute"
            style={{
              width: "300px",
              height: "450px",
              border: "1px solid purple",
              borderRadius: "20px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ width: "300px", height: "320px", borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
              className="img-fluid"
              src={book.image}
              alt={book.bookname}
            />
            <div style={{ marginTop: "15px", textAlign: "center" }}>
              <h6 style={{ fontSize: "15px" }} className="text-black">
                {book.bookname}
              </h6>
            </div>
            <div className="my-0">
              <b style={{ fontSize: "20px", color: "black" }} className="p-2">Rs. {book.price}</b>
            </div>
            <div className="d-flex justify-content-around" style={{ width: "100%", marginTop: "auto", marginBottom:"15px",height:"30px"}}>
              <button style={{ fontSize: "13px", color: "white", width:"130px", height:"40px" }} className="btn btn-primary">ADD TO CART</button>
              <button style={{ fontSize: "13px", color: "white", width:"130px", height:"40px"}} className="btn btn-primary">WISHLIST</button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
};

export default BookDetails;
