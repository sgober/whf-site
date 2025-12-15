import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import moment from 'moment';
import events from 'assets/locales/calendar';
import CalendarItem from 'components/util/CalendarItem';
import { isBlank } from 'utils/blank';
import { sort } from 'utils/sort';

function Calendar({ classes }) {
  const typeKey = {
    HJ: { label: 'Hunter/Jumper', color: 'success' },
    EV: { label: 'Eventing', color: 'error' },
    DR: { label: 'Dressage', color: 'warning' },
    CL: { label: 'Clinic @ WHF', color: 'info' }
  };

  const sortedEvents = sort(
    events.filter(event => moment(event.end).isSameOrAfter(moment(), 'day')),
    'start',
    (a, b) => moment(a).diff(b)
  );

  return (
    <Box className={classes} sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Typography textAlign="center" variant="h1">
        {/* {moment().year()} */}
        2026 Calendar
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', gap: 5, width: 'fit-content' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {isBlank(sortedEvents) ? (
            <Typography variant="subtitle1">No upcoming events, check back later!</Typography>
          ) : (
            <React.Fragment>
              {sortedEvents.map((event, index) => (
                <CalendarItem {...event} color={typeKey[event.type]?.color} key={index} />
              ))}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Typography variant="subtitle1">Key:</Typography>
                <Box>
                  {Object.values(typeKey).map((value, index) => (
                    <Typography color={value.color} key={index} variant="subtitle1">
                      {value.label}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Box>
    </Box>
  );
}

Calendar.propTypes = {
  classes: PropTypes.string
};

export default Calendar;
