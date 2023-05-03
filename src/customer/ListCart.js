import React from 'react';

const ListCart = (cartItems) => {
    return (
      <div className="diff">
        <p className="prodtitle">Cart Items</p>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Seller</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.name}</td>
                <td>{cartItem.description}</td>
                <td>${cartItem.price}</td>
                <td>{cartItem.sellerName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default ListCart;