import { Container, Typography } from '@mui/material'
import React from 'react';
import { useTheme, } from '@emotion/react';
import Chart from 'react-apexcharts';


export default function PersonalSkills({ forPrint, size = 100 }) {
  const { palette } = useTheme();
 
  const chartOptions = {
    chart: {
      id: "radar",
      toolbar: {
        show: false
      },
    },
    xaxis: {
      categories: ['Problem Solving', 'Analytical', 'Growth', 'Efficient', 'Compartmental', 'Creative']
    },
    title: {
      text: ''
    },
    colors: [palette.primary.main],
    tooltip: {
      y: {
        formatter: val => (val)
      }
    },
  };

  const chartSeries =  [
    {
      name: "Personal Skills",
      data: [8, 6, 9, 7, 6, 4]
    }
  ];


  return (
    <Container sx={styles.root}>
      <Typography variant='h6'>
        Personal Skills
      </Typography>
      <Container sx={{ 
        height: size * 2, 
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Chart
          type='radar'
          width={forPrint ? size * 3 : size * 4}
          options={chartOptions}
          series={chartSeries}
        />
      </Container>
    </Container>
  )
};

const styles = {
  root: {
  }
}