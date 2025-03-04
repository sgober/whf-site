import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, useMediaQuery } from '@mui/material';
import moment from 'moment';

function CalendarItem({ color = 'text', end, farm, location, name, start }) {
  const startDate = moment(start);
  const endDate = moment(end);
  const isMobile = useMediaQuery(theme => theme.breakpoints.only('mobile'));

  const formatDateRange = () => {
    let dateRangeString = startDate.format('MMMM');
    dateRangeString += ' ';
    dateRangeString += startDate.format('D');

    if (!startDate.isSame(endDate)) {
      if (startDate.month() !== endDate.month()) {
        dateRangeString += ' - ';
        dateRangeString += endDate.format('MMMM');
        dateRangeString += ' ';
      } else {
        dateRangeString += '-';
      }
      dateRangeString += endDate.format('D');
    }

    dateRangeString += ', ';
    dateRangeString += startDate.format('YYYY');
    return dateRangeString;
  };

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Box
        sx={{
          borderColor: `${color}.main`,
          borderStyle: 'solid',
          borderWidth: isMobile ? 1 : 2,
          alignSelf: 'start',
          px: 2,
          py: 1,
          minWidth: 45
        }}>
        <Typography color={color} sx={{ fontFamily: 'tenorSans', fontSize: 28, textAlign: 'center' }}>
          {startDate.format('DD')}
        </Typography>
        <Typography color={color} sx={{ fontFamily: 'tenorSans', fontSize: 18, textAlign: 'center' }}>
          {startDate.format('MMM')}
        </Typography>
      </Box>
      <Box sx={{ alignSelf: 'center' }}>
        <Typography color={color} sx={{ fontWeight: 'bold' }} variant="subtitle1">
          {name}
        </Typography>
        {isMobile ? (
          <React.Fragment>
            <Typography>{formatDateRange()}</Typography>
            <Typography>{farm}</Typography>
            <Typography>{location}</Typography>
          </React.Fragment>
        ) : (
          <Typography>
            {formatDateRange()} | {farm} | {location}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

CalendarItem.propTypes = {
  color: PropTypes.string,
  end: PropTypes.string,
  farm: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  start: PropTypes.string
};

export default CalendarItem;
