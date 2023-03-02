import React from 'react';
import { Typography } from '@mui/material';

import styles from './Layout.styles';

export default function Layout(props: { children?: JSX.Element[] }): JSX.Element {
  // const [anchorAudioNav, setAnchorAudioNav] = useState(null);
  // const [anchorSoftwareNav, setAnchorSoftwareNav] = useState(null);

  // function handleOpenSoftwareMenu(evt: MouseEventHandler<HTMLAnchorElement>): void {
  //   setAnchorSoftwareNav(evt.currentTarget);
  // }

  // function handleOpenAudioMenu(evt: MouseEventHandler<HTMLAnchorElement>) {
  //   setAnchorAudioNav(evt.currentTarget)
  // };

  // function handleCloseSoftwareMenu(evt: MouseEventHandler<HTMLAnchorElement>) {
  //   setAnchorSoftwareNav(null);
  // }

  // function handleCloseAudioMenu(evt: MouseEventHandler<HTMLAnchorElement>) {
  //   setAnchorAudioNav(null)
  // };

  return (
    <main style={styles.root}>
      <section style={styles.content}>
        {props.children}
      </section>

      <footer style={styles.footer}>
        <Typography>{'\u00A9'} Zach McCoy</Typography>
      </footer>
    </main>
  )
};
