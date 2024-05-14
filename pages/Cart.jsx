import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import QuantityBox from '../components/quantityBox';
import { MyContext } from '../App'; // Import MyContext


const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    
    // Use MyContext
    const history = useNavigate();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books data from your MongoDB database
        axios.get('http://localhost:3000/getBooks/:id')
            .then(response => {
                setBooks(response.data); // Assuming response.data is an array of books
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    }, []);

    const deleteItem = async (id) => {
        const response = await axios.delete(`http://localhost:1000/cartItems/${id}`);
    }

    const emptyCart = () => {
        let response = null;
    }

    const updateCart = (items) => {
    }

    return (
        <>
            {
                <div className="breadcrumbWrapper mb-4">
                    <div className="container-fluid">
                        <ul className="breadcrumb breadcrumb2 mb-0">
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>
                                Shop
                            </li>
                            <li>
                                Cart
                            </li>
                        </ul>
                    </div>
                </div>
            }

            <section className='cartSection mb-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='d-flex align-items-center w-100'>
                                <div className='left'>
                                    <h1 className='hd mb-0'>Your Cart</h1>
                                    <p>There are <span className='text-g'></span> products in your cart</p>
                                </div>
                                <span className='ml-auto clearCart d-flex align-items-center cursor '
                                      onClick={() => emptyCart()}><DeleteOutlineOutlinedIcon /> Clear Cart</span>
                            </div>
                            <div className='cartWrapper mt-4'>
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Unit Price</th>
                                            <th>Quantity</th>
                                            <th>Subtotal</th>
                                            <th>Remove</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                           
                                           books.map((book, index) => (
                                                    <tr key={index}>
                                                        <td width={"50%"}>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='img'>
                                                                    <Link to={`/data/${books.id}`}>
                                                                    </Link>
                                                                </div>
                                                                <div className='info pl-4'>
                                                                    <Link to={`/data/${books.id}`}>
                                                                        <h4>{books.productName}</h4>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td width="20%"><span>Rs: {parseInt(books.price.split(",").join(""))}</span></td>
                                                        <td>
                                                            <QuantityBox books={books} index={index} updateCart={updateCart}/>
                                                        </td>
                                                        <td>
                                                            <span className='text-g'>Rs. {parseInt(books.price.split(",").join("")) * parseInt(books.quantity)}</span>
                                                        </td>
                                                        <td align='center'>
                                                            <span className='cursor' onClick={() => deleteItem(books.id)}>
                                                                <DeleteOutlineOutlinedIcon />
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <br />
                            <div className='d-flex align-items-center'>
                                <Link to="/">
                                    <Button className='btn-g'>Continue Shopping</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;
