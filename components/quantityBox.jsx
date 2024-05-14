import React, { useState, useEffect } from 'react';



const QuantityBox = (props) => {
    const [inputValue, setinputValue] = useState(1);
    const [cartItems, setcartItems] = useState([]);

    useEffect(() => {
        setcartItems(props.cartItems);
        //setinputValue(props.item.quantity)
    }, [props.cartItems])


    const updateCart=(items)=>{
        props.updateCart(items)
    }



    // const plus = () => {
    //     setinputValue(inputValue + 1)
    // }

    // const minus = () => {
    //     if (inputValue !== 1) {
    //         setinputValue(inputValue - 1)
    //     }
    // }



    return (
        <div className='addCartSection pt-4 pb-4 d-flex align-items-center '>
            <div className='counterSec mr-3'>
                <input type='number' value={inputValue} />
                <span className='arrow plus'
                   
                   onClick={
                    () => {
                        setinputValue(inputValue + 1);
                        const _cart = props.cartItems?.map((cartItem, key) => {
                            return key === parseInt(props.index) ? { ...cartItem, quantity: inputValue+1 } : {...cartItem}
                           
                        });
                            
                        updateCart(_cart);
                        setcartItems(_cart);
                       
                    }
                }      
                
                ></span>


                <span className='arrow minus'
                 onClick={
                        () => {
                            if (inputValue !== 1) {
                                setinputValue(inputValue - 1)
                            }
                            
                            const _cart = props.cartItems?.map((cartItem, key) => {
                                return key === parseInt(props.index) ? { ...cartItem, quantity: cartItem.quantity !== 1 ? inputValue-1 : cartItem.quantity } : {...cartItem}
                            });

                          
                            
                            updateCart(_cart);
                            setcartItems(_cart);



                        }
                    }
                ></span>
            </div>

        </div>
    )
}

export default QuantityBox;