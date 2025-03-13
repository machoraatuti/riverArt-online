import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ArtCard from '../../components/ArtCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { fetchArtworks } from './artSlice';


const ArtListings = () => {
    const dispatch = useDispatch();
    const { artworks, isLoading, errMsg } = useSelector((state) => state.art);

    useEffect(() => {
        dispatch(fetchArtworks());
    }, [dispatch]);

    if (isLoading) return <Loading />;
    if (errMsg) return <Error message={errMsg} />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            
            {artworks.map((art) => (
                <ArtCard key={art.id} art={art} />
            ))}
        </div>
        
    );
};

export default ArtListings;
