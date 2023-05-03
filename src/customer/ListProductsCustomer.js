import React, { useState, useEffect, useCallback } from 'react';
import '../list/ListAdmins.css';
import Cookies from 'js-cookie';
import axiosCookie from '../axios';
import { useNavigate } from 'react-router-dom';
import './product.css';

const ListProductsCustomer = () => {
 
  const [productsc, setProductsCust] = useState([]);
  const[cartItems, setCartItems]= useState([]);
  const [showCart, setShowCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [q, setQuantity] = useState(0);

  const sessionId = Cookies.get('JSESSIONID')
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/logoutcustomer');
  };

  const handleClickHome = () => {
    navigate('/');
  };
  const handleClickNotification = () => {
    navigate('/listnotifications');
  };
  const handleClickPast = () => {
    navigate('/viewpast');
  };
  const handleClickCurrent = () => {
    navigate('/viewcurrent');
  };
 
  const handleAddToCart = (productsc) => {
    setCartItems((prevCartItems) => [...prevCartItems, productsc]);
    alert(`${productsc.name} added to cart`);
    
  };
  const calculateTotalPrice = useCallback(() => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price;
    });
    setTotalPrice(totalPrice);
  }, [cartItems]);
  
  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);
  
  

  const handlePurchase = () => {
   // const cartItemNames = cartItems.map(item => item.name).join(',');
   const productIds = cartItems.map((item) => item.name);
    const url = `http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/customer/purchase/${productIds.join(',')}`;

    axiosCookie.post(url, {
      //cartItemNames,
      productIds,
    }, {
      params: {
        sessionId,
      },
    }).then(response => {
      if (response.status === 201) {
        alert('Purchase successful!');
        setCartItems([]);
        setTotalPrice(0);
 
      } else {
       
        alert('Failed to purchase items');
        setCartItems([]);
        setTotalPrice(0);
     
      }
    }).catch(error => {
      console.log(error);
      
      alert('Failed to purchase items');
      setCartItems([]);
        setTotalPrice(0);
       
    });
  };
  
  
  
 
  useEffect(() => {
    const fetchProductsCust = async () => {
      try {

        const response = await axiosCookie.get('http://localhost:8080/Monolithic_REST-1.0-SNAPSHOT/api/customer/listProducts',{
          params: {
            sessionId
          }
         } );
        
        if (response.status === 200) {
          setProductsCust(response.data);
          console.log(response.data);
        }
        else
        {
          console.log(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProductsCust();
  }, []);
  const ListCart = () => {
    return (
      <div className="parent-container cart">
        <hr />
        <table>
          <thead>
          <tr>
            <th colspan="4">Cart Items</th>
          </tr>
            <tr>
              <th>Name</th>
              <th>Seller</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.name}</td>
                <td>{cartItem.sellerName}</td>
                <td>${cartItem.price}</td>
                
              </tr>
            ))}
             <tr>
           
            <td colSpan="2">Total:</td>
            <td>{totalPrice}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  };

 

  return (
    
    <div className='parent-container'>
    
    <button class="bn632-hover bn18" id='buttonproducts'onClick={handleClick}>Logout</button>
    <button class="bn632-hover bn18 mainpage" id='buttonproducts' onClick={handleClickHome}>Home</button>
    <button class="bn632-hover bn18 " id ="notify" onClick={handleClickNotification}>Notifications</button>
    <button class="bn632-hover bn18 past" id='buttonproducts'onClick={handleClickPast}>View Past Orders</button>
    <button class="bn632-hover bn18 current" id='buttonproducts'onClick={handleClickCurrent}>View Current Orders</button>
    <div className="diff">
      <p className='prodtitle'>Products List</p>
      <hr />
      {productsc.map((productsc) => (
        <div className="cardProduct" key={productsc.id}>
          <div className="product-details">
            <h3>{productsc.name}</h3>
            <p>Quantity: {productsc.quantity}</p>
            <p>Price: ${productsc.price}</p>
            <p>Seller: {productsc.sellerName}</p>
            <button onClick={() => handleAddToCart(productsc)}>Add to Cart</button>
          
          </div>
        </div>
      ))}
      <hr />
      
    </div>
    {/* <button class="bn632-hover bn18 current view" id='buttonproducts'onClick={handleClickCurrent}>View Current Orders</button> */}
    <button class="bn632-hover bn18 past view" onClick={() => setShowCart(!showCart)}>View Cart</button>
      {showCart && <ListCart />}
      <button class="bn632-hover bn18 mainpage view" onClick={handlePurchase}>Purchase</button>

    
    </div>
      
  
  );
};

export default ListProductsCustomer;
