import React from 'react';
import { Container, StepLabel, Typography, Stepper, Step } from '@mui/material';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import School from '@mui/icons-material/School';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import FestivalIcon from '@mui/icons-material/Festival';
import AdjustIcon from '@mui/icons-material/Adjust';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import { v4 as uuid } from 'uuid';

const bottomEvents = [
  {
    year: 2011,
    event: 'Enrolled at Belmont',
    icon: LocalLibraryIcon
  },
  {
    year: 2014,
    event: 'Graduated from Belmont',
    icon: School
  },
  {
    year: 2020,
    event: 'Started Pursing Software',
    icon: CodeIcon
  },
  {
    year: 2021,
    event: 'Udemy Bootcamps and Classes',
    icon: CastForEducationIcon
  },
  {
    year: 2022,
    event: 'Nomi Travel: Software Developer',
    icon: DeveloperModeIcon
  }
];

const topEvents = [
  {
    year: 2013,
    event: 'Justin Moore: Audio Tech',
    icon: MicExternalOnIcon
  },
  {
    year: 2015,
    event: 'Justin Moore: Monitor Engineer',
    icon: SettingsInputComponentIcon
  },
  {
    year: 2018,
    event: 'Justin Moore: Stage Manager',
    icon: AssignmentIndIcon
  },
  {
    year: 2019,
    event: 'Special Event Services: Festival Audio',
    icon: FestivalIcon
  },
  {
    year: 2020,
    event: 'Orange Thread Media: Corporate Events',
    icon: LocalActivityIcon
  }
]

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
      const yearIndex = years.indexOf(event.year);
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
                        { event.icon ?
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

              </Step>
            )
          })
        }
      </Stepper>
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
