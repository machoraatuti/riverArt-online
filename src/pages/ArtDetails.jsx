// ArtDetails.js
import { useSelector } from 'react-redux';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import ArtCard from '../components/ArtCard';
import SubHeader from '../components/SubHeader';
import { selectArtById } from '../features/art/artSlice';


const ArtDetails = () => {
    const { id } = useParams();
    const art = useSelector((state) => selectArtById(state, id));
    const isLoading = useSelector((state) => state.art.isLoading);
    const errMsg = useSelector((state) => state.art.errMsg);

    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (errMsg) {
        content = <Error message={errMsg} />;
    } else if (art) {
        content = <ArtCard art={art} onAddToCart={() => console.log('Added to cart:', art)} />;
    } else {
        content = <Error message="Art not found." />;
    }

    return (
        <div>
            {art && <SubHeader current={art.title} detail={true} />}
            <div className="p-4 flex justify-center">
                {content}
            </div>
        </div>
    );
};

export default ArtDetails; 
