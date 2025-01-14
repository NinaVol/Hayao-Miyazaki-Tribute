import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cartSlice';
import ChangeQuantity from '../Cart/ChangeQuantity'
import { useState } from 'react';


const Item = ({item}) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return( 
        <div className="Item-container">
            <img src={`${item.img}.jpg`} alt="item" width='200px'/>

            <div className='action-container'>
           <h3 className='item-header'>{item.name}</h3>
           <p>${item.price}</p>

           <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>

           <button onClick={() => {dispatch(addItemToCart({item, quantity}))}}>Add To Cart</button>
           </div>

        </div>
    )
}
export default Item;