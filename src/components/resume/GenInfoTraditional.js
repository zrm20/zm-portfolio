import React from 'react';
import { Container, Typography, Divider, List, ListItem } from '@mui/material';
import genInfo from '../../assets/data/genInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GeneralInfoTraditional({ attributes = [], forPrint }) {
  const filteredInfo = genInfo.filter(el => el.includeInTraditional === true);

  return (
    <Container
      sx={{
        mb: 1,
      }}
    >
      <Typography variant='h5' gutterBottom>General Info</Typography>
      <Divider />
      <List>
        {
          filteredInfo.map(el => (
            <ListItem key={el.title}>
              <Container sx={{ mb: 1, '& svg': { color: 'primary.main'} }} >
                <FontAwesomeIcon icon={el.icon}/>
                <Typography variant='h6'>{el.title}</Typography>
                <Typography 
                  sx={{ 
                    fontSize: '.9rem',
                    color: 'text.secondary'
                  }}
                >
                  {el.value}
                </Typography>
              </Container>
            </ListItem>
          ))
        }
      </List>
    </Container>
  )
};
