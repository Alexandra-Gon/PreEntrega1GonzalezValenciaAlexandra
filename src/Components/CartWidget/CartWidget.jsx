import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



const CartWidget = () => {
  return (
    <div className="shoppingCartIcon">
      <ShoppingCartIcon className="icon"/>

      <p>0</p>
    </div>
  );
};

export default CartWidget;
