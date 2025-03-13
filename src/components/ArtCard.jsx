import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';


const ArtCard = ({ art }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(art));
  };

  return (
    <div className="bg-white border rounded-md shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105">
      {/* Image with Fallback */}
      
      <img 
        src={art.image} 
        alt={art.title} 
        className="w-full h-60 object-cover"
        

        
      />
      

      {/* Artwork Details */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">{art.title}</h2>
        <p className="text-gray-500">By {art.artist}</p>
        <p className="text-indigo-600 font-semibold text-lg">${art.price}</p>

        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}  
          className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ArtCard;
