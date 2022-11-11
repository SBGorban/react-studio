import { CartItem } from "./CartItem";
export const CartList = (props) => {
    return (
        <aside className="CartListContainer">
            <h2>Carti</h2>
            {props.data.map((cartItem, index)=> (
            <CartItem key={index} item={cartItem.item} quantity={cartItem.quantity}></CartItem>
            ))
            }
            <p>Total:{props.total.toFixed(2)}</p>
        </aside>
    )
}