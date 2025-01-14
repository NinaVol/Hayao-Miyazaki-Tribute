import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cartImage from '../../assets/images/cart-icon.png';


const Cart= () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);


    return(
        <div className="cart-container">          
          <img className="cartIcon" src={cartImage} alt="cart"/>
          <h3>Total: ${totalPrice} </h3>
          {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}       
        </div>
    )
}
export default Cart;