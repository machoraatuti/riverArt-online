// ArtCard.js or DisplayList.js (Where the Add to Cart button is located)
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';   // Assuming you have a Redux slice for the cart

const ArtCard = ({ art }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(art)); // Dispatch the action to add the item to the cart
  };

  return (
    <div className="bg-white border rounded-md shadow-md overflow-hidden">
      <img
        src={art.image}
        alt={art.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{art.title}</h3>
        <p className="text-gray-600">{art.artist}</p>
        <p className="text-gray-800 font-bold">${art.price}</p>
        <button
                onClick={handleAddToCart}
                className="mt-2 bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 active:opacity-75 transition-all"
                >
                Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ArtCard;
