'use client'

import { GoogleMap, useJsApiLoader,  } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const center = {
  lat: -3.4865303551110483,
  lng: -39.57400493068633
};

const containerStyle = {
  width:'100%',
  minWidth: '390px',
  height: '150px',
  borderRadius: '10px',
  border: '1px solid #C1C1C1',
};

const API_KEY = 'AIzaSyCWzR7J9HG_IrHLC8N_57YG30ilzxj49A8';

function Map() {
  const [map, setMap] = useState(null);
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  })

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    new google.maps.Marker({
      position: center,
      map
    })

    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null)
  }, [])

  return (
    <div
      className='w-full flex items-center justify-center basis-[50%]'>
      {
        isLoaded ? (
          <div className='flex flex-col w-full'>
            <span
              className='text-[#ACACAC]
              font-medium
              text-base
              text-left
              mb-2
              min-[700px]:text-xl'
            >Localização</span>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={20}
              onLoad={onLoad}
              onUnmount={onUnmount}
            />
          </div>
      ) : <></>
      }
    </div>
  )
}

export default Map