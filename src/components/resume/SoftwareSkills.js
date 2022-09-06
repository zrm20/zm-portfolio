import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, useTheme } from '@mui/material';
import {ReactComponent as ProToolsIcon} from '../../assets/images/icons/proToolsIcon.svg';
import {ReactComponent as AutoCadIcon} from '../../assets/images/icons/autoCadIcon.svg';
import {ReactComponent as PhotoshopIcon} from '../../assets/images/icons/photoshopIcon.svg';
import {ReactComponent as AbletonIcon} from '../../assets/images/icons/abletonIcon.svg';

const softwareList = [
  {
    name: 'Avid Pro Tools',
    icon: ProToolsIcon
  },
  {
    name: 'Ableton Live',
    icon: AbletonIcon
  },
  {
    name: 'Adobe Photoshop',
   icon: PhotoshopIcon
  },
  {
    name: 'AutoCAD',
    icon: AutoCadIcon
  },
];

export default function SoftwareSkills() {
  const { palette } = useTheme();
  return (
    <Container sx={styles.root}>
      <Typography variant='h6'>
        Software Skills
      </Typography>
      <List sx={styles.list}>
        {
          softwareList.map(el => (
            <ListItem key={el.name} >
              <ListItemAvatar>
                <Avatar>
                  <el.icon width={25} fill={palette.background.paper}/>
                </Avatar>
              </ListItemAvatar>
              <ListItemText >{el.name}</ListItemText>
            </ListItem>
          ))
        }

      </List>
    </Container>
  )
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    p: 0,
    '& .MuiListItem-root': {
      p: 0,
      mb: 1
    }
  }
}