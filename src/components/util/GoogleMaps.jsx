import { useState } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function GoogleMaps({ position, url, zoom }) {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onLoad={() => setLoading(false)}>
      {!loading && (
        // TODO: add place info
        <Map center={position} style={{ height: isMobile ? 250 : 500 }} zoom={zoom}>
          <Marker onClick={() => window.open(url, '_blank')} position={position} />
        </Map>
      )}
    </APIProvider>
  );
}

GoogleMaps.propTypes = {
  position: PropTypes.object,
  url: PropTypes.string,
  zoom: PropTypes.number
};

export default GoogleMaps;
