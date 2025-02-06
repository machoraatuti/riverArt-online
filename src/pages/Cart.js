// Cart.js
import { useSelector, useDispatch } from 'react-redux';  // Assuming you're using Redux for state management
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Get items in the cart from Redux state
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id)); // Dispatch the action to remove an item from the cart
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0); // Calculate total price of all items in the cart
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.title}</p>
                    <p className="text-gray-600">{item.artist}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-lg font-bold">${item.price}</p>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
            <button className="mt-4 bg-blue-500 text-black px-6 py-2 rounded-md hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
