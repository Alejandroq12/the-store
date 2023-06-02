import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return <section className="cart">
        <header>
            <h2>your bag</h2>
            <h4 className="empty-cart">is currently empty</h4>
        </header>
    </section>;
  }
  return <section className="cart">
        <header>
            <h2>your bag</h2>
        </header>
  </section>;
};
export default CartContainer;
