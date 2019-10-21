import React, { useState } from 'react';
import MapGL, { GeolocateControl } from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import styles from './App.module.css';

const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

function App() {
  const [viewport, setViewPort] = useState({
    width: '100%',
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2
  });

  return (
    <div className={styles.container}>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={viewport => setViewPort({ ...viewport })}
      >
        <GeolocateControl
          className={styles.geolocate_button}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  );
}

export default App;
