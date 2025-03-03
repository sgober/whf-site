import PropTypes from 'prop-types';
import { Box, ButtonBase, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PhotoLink({ description, image, link, title }) {
  const navigate = useNavigate();
  return (
    <ButtonBase onClick={() => navigate(link)} sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
      {image && (
        <img
          src={image}
          style={{ borderRadius: '50%', maxWidth: 400, width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }}
        />
      )}
      <Box>
        {title && <Typography variant="h2">{title}</Typography>}
        {description && <Typography>{description}</Typography>}
      </Box>
    </ButtonBase>
  );
}

PhotoLink.propTypes = {
  description: PropTypes.string,
  image: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string
};

export default PhotoLink;
