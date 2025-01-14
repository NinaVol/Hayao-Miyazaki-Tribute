import dataItems from "../../data/dataItems";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from 'react-redux';
import deleteImage from '../../assets/images/delete-icon.png';

const CartItem= ({cartItem}) => {
    const items = dataItems.find(item => item.id === cartItem.itemId)
    const dispatch = useDispatch();

    return(
        <div>
          <p>{items.name}</p>
          <p>{cartItem.quantity} pcs</p>
          <p>Price: ${items.price * cartItem.quantity}</p>
          <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
          <img className="deleteIcon" src={deleteImage} alt="delete"/>
          </span>
        </div>
    )
}
export default CartItem;