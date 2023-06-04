import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
// import { cartActions } from "../../store/cart-slice";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItem = useSelector((state) => state.cart.items);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItem.map((item) => (
          <CartItem
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
      <div>
        <h1>Total Amount : {cartTotalAmount}</h1>
      </div>
    </Card>
  );
};

export default Cart;
