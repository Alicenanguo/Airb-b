import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getKey } from '../../../store/maps';
import { getAllSpots } from '../../../store/spots';
import AllSpotMap from './HomeMap';
import './HomeMap.css';

function HomePageMap() {
    const key = useSelector((state) => state.maps.key);
    const dispatch = useDispatch();
    const spots = Object.values(useSelector(state => state.spots.allSpots))

    useEffect(() => {
        if (!key) {
            dispatch(getKey());
        }
    }, [dispatch, key]);

    useEffect(() => {
        dispatch(getAllSpots());
    }, [dispatch]);

    if (!key) {
        return null;
    }

    let arr = [];
    for (let i = 0; i < spots.length; i++) {
        arr.push({
            id: spots[i].id,
            price: ('$' + spots[i].price).toString(),
            position: {
                lat: parseFloat(spots[i].lat),
                lng: parseFloat(spots[i].lng)
            }
        })
    }
    if (!spots || arr.length === 0) {
        return null
    }
    return (
     <AllSpotMap apiKey={key} markers={arr} spots={spots} />
 )


}

export default HomePageMap;
