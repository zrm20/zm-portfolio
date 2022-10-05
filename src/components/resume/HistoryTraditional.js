import React from 'react';
import { Container, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { traditionalHistory } from '../../assets/data/history';

export default function HistoryTraditional() {

  return (
    <Container sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
      <Typography variant='h5'>History</Typography>
      <Divider />
      <List >
        {
          traditionalHistory.map(el => (
            <ListItem key={el.company} >
              <ListItemAvatar sx={{ color: 'primary.main'}}>
                <el.icon />
              </ListItemAvatar>
              <ListItemText>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography align='left' sx={{ fontSize: '.9rem' }}><b>{el.company}</b> - {el.position}</Typography>
                  <Typography align='left' sx={{ fontSize: '.9rem' }}>
                    {el.startMonth} {el.startYear} to {el.endMonth ? `${el.endMonth} ${el.endYear}` : 'Present'}
                  </Typography>
                </div>
                <Typography 
                  align='left' 
                  color='textSecondary'
                  sx={{ fontSize: '.8rem' }}
                >
                  {el.description}
                </Typography>
              </ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Container>
  )
}
