import React from "react";
import Cart from "./Components/Cart/Cart";
import AllCategories from "./Components/Filter/AllCategories";
import Items from "./Components/Items/Items";

function Merch() {
    return (
        <div className="Merch-container">
            
            <div className="Items-Container">
            <Items/>
            </div>

            <div className="Sidebar">
            <AllCategories/>
            <Cart/>
            </div>

          
        </div>
    )
}

export default Merch;
