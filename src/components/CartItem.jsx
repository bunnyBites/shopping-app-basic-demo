import PropTypes from 'prop-types';

const CartItem = ({ cartImage, isCartSelected, onManageCartItem }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={cartImage} className="card-img-top" alt="cart-image" />
    <div className="card-body">
      <button
        type="button"
        onClick={onManageCartItem}
        className={`btn btn-${isCartSelected ? "danger" : "success"}`}
      >
        {isCartSelected ? "Remove from cart" : "Add to cart"}
      </button>
    </div>
  </div>
);

CartItem.propTypes = {
  cartImage: PropTypes.string.isRequired,
  isCartSelected: PropTypes.bool.isRequired,
  onManageCartItem: PropTypes.func.isRequired,
};

export default CartItem;
