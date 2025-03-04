import { Box, Typography } from '@mui/material';
import events from 'assets/locales/calendar';
import CalendarItem from 'components/util/CalendarItem';

function Schedule() {
  const typeKey = {
    HJ: { label: 'Hunter/Jumper', color: 'secondary' },
    EV: { label: 'Eventing', color: 'error' },
    DR: { label: 'Dressage', color: 'success' },
    CL: { label: 'Clinic @ WHF', color: 'warning' }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <Typography textAlign="center" variant="h1">
        2025 Calendar
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {events.map((event, index) => (
          <CalendarItem {...event} color={typeKey[event.type]?.color} key={index} />
        ))}
      </Box>
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
    </Box>
  );
}

export default Schedule;
