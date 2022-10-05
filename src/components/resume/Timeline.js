import React from 'react';
import { Container, StepLabel, Typography, Stepper, Step, Tooltip } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import { v4 as uuid } from 'uuid';
import TimelinePopover from './TimelinePopover';
import { topEvents, bottomEvents } from '../../assets/data/history';

export default function Timeline({ numOfYears = 10, multiple = 1, forPrint }) {
  const today = new Date(Date.now());
  const currentYear = today.getFullYear();

  // initialize array with this year as 0
  let years = [currentYear];
  for (let i = 1; i < numOfYears; i++) {
    // populate array of years
    years.push(currentYear - i * multiple)
  };

  function createTimeline(eventArray) {
    const newTimeline = new Array(years.length).fill(null);

    eventArray.forEach(event => {
      const yearIndex = years.indexOf(event.startYear);
      if (yearIndex !== -1) {
        newTimeline[yearIndex] = event;
      }
    });
    return newTimeline.reverse();
  };

  const bottomTimeline = createTimeline(bottomEvents);
  const topTimeline = createTimeline(topEvents);

  function renderTimeline(timeline, flip = false) {
    return (
      <Stepper
        alternativeLabel
        connector={null}
        sx={{

          alignItems: 'flex-end',
          '& .MuiStepLabel-root': {
            flexDirection: 'column-reverse',
            justifyContent: 'flex-end',
          },
        }}
      >
        {
          timeline.map(event => {
            return (
              <Step
                completed
                key={uuid()}
              >
                <Tooltip 
                  disableFocusListener 
                  arrow 
                  title={event ? <TimelinePopover event={event} /> : null}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: flip ? 'column-reverse' : 'column',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}
                  >
                    {
                      event &&
                      <>
                        {event.icon ?
                          < event.icon sx={{ color: 'primary.main' }} /> :
                          <AdjustIcon sx={{ color: 'primary.main' }} />
                        }
                        <Typography
                          sx={{
                            fontSize: '.5rem',
                            mt: 1,
                            mb: 1,
                          }}
                        >
                          {event.event}
                        </Typography>
                      </>
                    }
                  </div>
                </Tooltip>
              </Step>
            )
          })
        }
      </Stepper >
    )
  };

  function YearIcon({ year }) {
    return (
      <Typography>{year}</Typography>
    )
  };

  return (
    <Container sx={styles.root}>
      <Typography variant='h6'>
        History
      </Typography>

      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowX: {
            xs: forPrint ? 'hidden' : 'scroll',
            md: 'hidden'
          }
        }}
      >
        <div>
          {renderTimeline(topTimeline, true)}

          {/* BASE TIMELINE */}
          <Stepper alternativeLabel >
            {
              years.reverse().map(year => (
                <Step key={year} completed >
                  <StepLabel StepIconComponent={() => <YearIcon year={year} />} />
                </Step>
              ))
            }
          </Stepper>

          {renderTimeline(bottomTimeline)}
        </div>

      </Container>

    </Container>
  )
};

const styles = {
  root: {
    '& MuiStepper-root': {
      width: '100%'
    }
  },
}
