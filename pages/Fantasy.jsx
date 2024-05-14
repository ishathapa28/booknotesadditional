import React, { useState, useEffect } from "react";
import axios from "axios";

const Fantasy = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:1000/api/v1/getBooks');
                setData(response.data.books);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const renderBooks = () => {
        if (!data) {
            return <div className="text-white">Loading....</div>;
        }
    
        const rows = [];
        for (let i = 0; i < data.length; i += 3) {
            const row = (
                <div key={i} className="d-flex justify-content-around my-3">
                    {data.slice(i, i + 3).map((item, index) => (
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
                                    src={item.image}
                                    alt="/"
                                />
                            <div style={{ marginTop: "15px", textAlign: "center" }}>
                                <h6 style={{ fontSize: "15px" }} className="text-black">
                                    {item.bookname.slice(0, 50)}
                                </h6>
                            </div>
                            <div className="my-0">
                                <b style={{ fontSize: "20px", color: "black" }} className="p-2">Rs. {item.price}</b>
                            </div>
                            <div className="d-flex justify-content-around" style={{ width: "100%", marginTop: "auto", marginBottom:"15px",height:"30px"}}>
                                <button style={{ fontSize: "13px", color: "white", width:"130px", height:"40px" }} className="btn btn-primary">ADD TO CART</button>
                                <button style={{ fontSize: "13px", color: "white", width:"130px", height:"40px"}} className="btn btn-primary">WISHLIST</button>
                            </div>
                        </div>
                    ))}
                </div>
            );
            rows.push(row);
        }
    
        return rows;
    };
    
    return (
        <div className="bg-light" style={{ minHeight: "150.5vh" }}>
            <div className="d-flex justify-content-center align-items-center p-3">
                <h4 className="text-dark p-3">Books Section</h4>
            </div>
            {renderBooks()}
        </div>
    );
    };
    
    export default Fantasy;