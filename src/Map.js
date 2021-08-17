import { useContext } from 'react';
import ReactMapboxGl, { Layer, Feature, LngLat } from 'react-mapbox-gl';
import { GlobalContext } from './utils/GlobalState';
import 'mapbox-gl/dist/mapbox-gl.css';

const M = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoianJqYWNrc28iLCJhIjoiY2s5ZzFvMmN2MGV0dzNtbzN4dGlqaGc1dCJ9.vUi9VvVM7kb2AoPYLVW89w',
});

export const Map = () => {
  const {
    state: { location },
  } = useContext(GlobalContext);
  const lat = location.coords?.lat;
  const lon = location.coords?.lon;
  return (
    <>
      {lat && lon && (
        <M
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '90vh',
            width: '100%',
            border: '1px solid black',
            marginTop: '1rem',
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
