import React, { useState } from 'react';
import { useHistory, NavLink } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './HomeMap.css';
// import { googleMapsAPIKey } from '../../../../../backend/config';

const containerStyle = {
    width: '100vw',
    height: 'calc(100vh - 151px)',
};

const center = {
    lat: 35.34447416913044,
    lng: -100.07212787530635,
};


function AllSpotMap({apiKey,markers,spots}) {
    const history = useHistory();
    const [activeMarker, setActiveMarker] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });


    const handleSubmit = (marker) => {
        history.push(`/spots/${marker}`)
    };

    if (!markers.length) { return null }

    return (
        <div className='homeMap-container'>
            {isLoaded && (
                <div className='homeMap-details'>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={5.3}
                    >

                        {markers.map(({ id, price, position }) => (
                            <Marker
                                key={id}
                                position={position}
                                title={price}
                                onClick={() => handleSubmit(id)}
                            />
                        )

                        )}
                    </GoogleMap>

                </div>
            )}
            <NavLink to={'/'} className='show-list'>
                <div>Show list</div>
                <img src='https://img.favpng.com/5/10/25/hamburger-button-computer-icons-menu-png-favpng-9Vab9cLvTbYSP5CikBNZQUrCv.jpg' />
            </NavLink>
</div>
    )

}

export default React.memo(AllSpotMap);
