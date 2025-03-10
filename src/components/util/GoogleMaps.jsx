import { useState } from 'react';
import PropTypes from 'prop-types';
import { ForkRight } from '@mui/icons-material';
import { Box, Link, Typography, useMediaQuery } from '@mui/material';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

function GoogleMaps({ address, directionsUrl, locationUrl, position, title, zoom }) {
  const [loading, setLoading] = useState(true);
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));
  const defaultMapOptions = { fullscreenControl: false, mapTypeControl: isMobile ? false : true, streetViewControl: false };

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onLoad={() => setLoading(false)}>
      {!loading && (
        <Map
          defaultCenter={position}
          defaultZoom={zoom}
          options={defaultMapOptions}
          reuseMaps={true}
          style={{ height: isMobile ? 250 : 500 }}>
          <Marker onClick={() => window.open(locationUrl, '_blank')} position={position} />
          {!isMobile && (
            <Box
              className="place-info"
              sx={{
                display: 'flex',
                gap: 4,
                alignItems: 'center',
                backgroundColor: 'white',
                boxShadow: 1,
                m: 1.25,
                px: 1.5,
                py: 1
              }}>
              <Box>
                <Typography fontSize={14} fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="body2">{address}</Typography>
              </Box>
              <Link
                onClick={() => window.open(directionsUrl, '_blank')}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'google' }}
                variant="body2">
                <ForkRight />
                Directions
              </Link>
            </Box>
          )}
        </Map>
      )}
    </APIProvider>
  );
}

GoogleMaps.propTypes = {
  address: PropTypes.string,
  directionsUrl: PropTypes.string,
  locationUrl: PropTypes.string,
  position: PropTypes.object,
  title: PropTypes.string,
  zoom: PropTypes.number
};

export default GoogleMaps;
