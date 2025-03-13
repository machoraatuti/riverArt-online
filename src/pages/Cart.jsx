import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubHeader from '../components/SubHeader';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleReturnToHome = () => {
    navigate('/');
  };

  const handleCheckout = () => {
    alert("Checkout functionality will be implemented soon! 🚀");
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SubHeader current="Cart" />

      {/* Cart Section - Ensures it Fills the Page */}
      <div className="flex-grow flex flex-col justify-center items-center p-6 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center mb-20 min-h-screen"> {/* Added margin-bottom */}
            {/* <FontAwesomeIcon 
              icon={faShoppingCart} 
              className="text-gray-400 text-12xl mb-6" 
            /> */}
             {/* Empty Cart Image */}
             <img
              src={`${process.env.PUBLIC_URL}/assets/images/cartimage.png`} 
              alt="Empty Cart"
              className="w-28 h-28 mb-6 object-contain"
            />
            <p className="text-lg text-gray-600">Your cart is empty.</p>
            <button
              onClick={handleReturnToHome}
              className="mt-6 px-6 py-3 bg-success text-white rounded-md hover:bg-indigo-700 transition"
            >
              Return to Home
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center justify-between py-4">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <p className="text-xl font-semibold">{item.title}</p>
                      <p className="text-gray-600">{item.artist}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <p className="text-xl font-bold">${item.price}</p>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="ml-6 text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            
            {/* Cart Summary */}
            <div className="mt-6 border-t pt-4 text-right">
              <p className="text-2xl font-semibold">Total: ${calculateTotal()}</p>
              <button
                onClick={handleCheckout}
                className="mt-6 px-8 py-3 bg-success text-white rounded-md hover:bg-green-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
