import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const ArtCard = ({ art }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(art));
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
      {/* Image with Fallback */}
      <div className="relative">
        <img 
          src={art.image} 
          alt={art.title} 
          className="w-full h-72 object-cover rounded-t-2xl"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-md">
          ${art.price}
        </div>
      </div>

      {/* Artwork Details */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{art.title}</h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">By {art.artist}</p>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}  
          className="mt-4 w-full bg-gray-900 dark:bg-indigo-700 text-black dark:text-white font-semibold py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ArtCard;
