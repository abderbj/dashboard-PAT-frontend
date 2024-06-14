// import React from 'react';
// import EventCard from './EventCard';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// // import './EventList.css';

// const EventList = ({ events }) => {
//   return (
//     <div className="event-list-container">
//       <Typography variant="h4">Calendrier</Typography>
//       <Button variant="contained" color="primary" className="add-action-button">
//         + Ajouter une Action
//       </Button>
//       <Typography variant="h5">Action à venir</Typography>
//       <div className="event-list">
//         {events.map(event => (
//           <EventCard key={event.id} event={event} />
//         ))}
//       </div>
//       <Button variant="outlined" className="view-more-button">
//         Voir plus
//       </Button>
//     </div>
//   );
// };

// export default EventList;

import React from 'react';
import EventCard from './EventCard';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const EventList = ({ events }) => {
  return (
    <Box 
      sx={{
        maxWidth: 400,
        padding: 2,
        backgroundColor: '#f4f6f8',
        borderRadius: 2,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2 , fontFamily: 'Nunito Sans, sans-serif' ,  }}>Calendrier</Typography>
      <Button
        variant="contained"
        
        fullWidth
        sx={{ marginBottom: 2,
              fontSize: 16,
              fontFamily: 'Nunito Sans, sans-serif' ,
              textTransform: 'none',  
              backgroundColor: '#019add',
            }}
      >
        + Ajouter une Action
      </Button>
      <Typography variant="h5" 
        sx={{ marginBottom: 2 ,
              fontFamily: 'Nunito Sans, sans-serif',
              textAlign: 'left',
              fontWeight: 600,
              color: '#202224',
              fontSize: 22,
            }}>Action à venir
      </Typography>
      <Box
        sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Box>
      <Button
        variant="text"
        
        sx={{
          marginTop: 2,
          padding: '10px 20px',
          fontSize: 16,
          backgroundColor: 'rgba(226, 234, 248, 1)',
          color: '#202224',
          textTransform: 'none',  
          fontFamily: 'Nunito Sans, sans-serif',
        }}
      >
        Voir plus
      </Button>
    </Box>
  );
};

export default EventList;
