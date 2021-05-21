import React from 'react';
import ReactMapboxGl, { Layer, Feature, LngLat } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const M = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoianJqYWNrc28iLCJhIjoiY2s5ZzFvMmN2MGV0dzNtbzN4dGlqaGc1dCJ9.vUi9VvVM7kb2AoPYLVW89w',
});

export const Map = ({ lat, lon }) => {
  return (
    <>
      {lat && lon && (
        <M
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '50vh',
            width: '50vw',
          }}
          center={[lon, lat]}
          zoom={[9]}
        >
          <Layer
            type="symbol"
            id="marker"
            layout={{ 'icon-image': 'marker-15' }}
          >
            <Feature coordinates={[lat, lon]} />
          </Layer>
        </M>
      )}
    </>
  );
};
