import React from "react";
import CartDetails from "./CartDetails";
import cartimage from "../images/cart1.png";
import cartimage1 from "../images/cart2.png";
import cartimage2 from "../images/cart3.png";

const Cart = () => {
  return (
    <div id="features">
      <h1>Why you should choose our app</h1>
      <p style={{ textAlign: "center" }}>
        {" "}
        fugiat repellendus praesentium alias nihil placeat totam modi quasi
        <br />
        magni nisi libero dicta reiciendis. Assumenda esse
      </p>

      <div className="a-container">
        <CartDetails image={cartimage} title="Automatic Payouts" />
        <CartDetails image={cartimage1} title="Network Effect" />
        <CartDetails image={cartimage2} title="Bigger Rewards Method" />
      </div>

      

      
    </div>
    
  );
};

export default Cart;
