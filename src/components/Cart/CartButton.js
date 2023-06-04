import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const showMyCart = useSelector((state) => state.cart.totalQuantity);

  const uiToggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={uiToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{showMyCart}</span>
    </button>
  );
};

export default CartButton;
