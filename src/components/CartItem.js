import { ChevronDown, ChevronUp } from '../icons';

const CartItem = ({ id, img, title, price, amount }) => {
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remoce-btn">Remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <button className="amount-btn">
          <ChevronUp />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
