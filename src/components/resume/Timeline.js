import React from 'react';
import { Container, StepLabel, Typography, Stepper, Step, Tooltip } from '@mui/material';
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
import TimelinePopover from './TimelinePopover';

const bottomEvents = [
  {
    year: 2011,
    event: 'Enrolled at Belmont',
    icon: LocalLibraryIcon,
    popover: {
    }
  },
  {
    year: 2014,
    event: 'Graduated from Belmont',
    icon: School,
    popover: {
      content: "I graduated in Decemeber of 2014 from Belmont University with a degree in Audio Engineering Technology. In my 3.5 semesters at Belmont I maintained a 3.5 GPA and took part in multiple extra curricular activities, particularly the Showcase Series. Showcase was a series of concerts put on entirely by students. As a junior in college, I held a leadership role in 4 out of the 5 concerts that year."
    }
  },
  {
    year: 2020,
    event: 'Started Pursing Software',
    icon: CodeIcon,
    popover: {
      content: "The pandemic was a difficult time for the music industry. I had lost my income as a touring sound engineer and there was no indication of when it might return, or how it would return. Rather than take the time to seek temporary work, I decided to put my efforts towards starting a new career in software development."
    }
  },
  {
    year: 2021,
    event: 'Udemy Bootcamps and Classes',
    icon: CastForEducationIcon,
    popover: {
      content: "By 2021 I had fully committed to pursuing software and decided to take an organized approach to learning. Traditional education like Nashville Software School was difficult due to the cost, so I spent the year replicating the curriclum of their bootcamp through Udemy online courses."
    }
  },
  {
    year: 2022,
    event: 'Nomi Travel: Software Developer',
    icon: DeveloperModeIcon,
    popover: {
      content: "In 2022 I was hired for my first software role with a Nashville start-up called Nomi Travel. I worked part time at Nomi while continuing my full time touring job with Justin Moore. At Nomi I was responsible for building their web-app as well as an internal database management app."
    }
  }
];

const topEvents = [
  {
    year: 2013,
    event: 'Justin Moore: Audio Tech',
    icon: MicExternalOnIcon,
    popover: {
      content: "In 2013 I was first hired in May as a summer intern for country music artist Justin Moore. In August I went back to school, but in October ended up being called back and hired as a paid audio tech. As the audio tech I was responsible for setting up monitor equipment, routing the stage patch, and troubleshooting signal flow problems."
    }
  },
  {
    year: 2015,
    event: 'Justin Moore: Monitor Engineer',
    icon: SettingsInputComponentIcon,
    popover: {
      content: "In 2015, after graduating from college, I was promoted to monitor engineer for Justin Moore. As the monitor engineer I was responsible for coordinating wireless frequencies and mixing the show for the artist and band. I controlled 6-10 mixes per night. From 2015-2018 I mixed on an Avid Profile, and from 2018 forward on an Avid S6L 32-D"
    }
  },
  {
    year: 2018,
    event: 'Justin Moore: Stage Manager',
    icon: AssignmentIndIcon,
    popover: {
      content: "In 2018, my 5th year working for Justin Moore I was promoted to Stage Manager. As the stage manager I coordinated load-in and load-out for 3-5 departments with 12-30 local crew workers. During the summers I was responsible for 1 semi truck and during arena tours I was responsible for 3-4 trucks."
    }
  },
  {
    year: 2019,
    event: 'Special Event Services: Festival Audio',
    icon: FestivalIcon,
    popover: {
      content: "In June of 2019 I was hired as the monitor engineer for Carolina Country Fest. Special Event Services was the company that contracted me and for this event I was responsible for on-the-fly monitor mixes with IEM's and wedges for the 3 day festival."
    }
  },
  {
    year: 2020,
    event: 'Orange Thread Media: Corporate Events',
    icon: LocalActivityIcon,
    popover: {
      content: "In 2020/2021 I picked up a lot of contract work with Orange Thread Media handling audio for corporate events such as the Southern Baptist Convention. Most often I held the role of FOH engineer but also handled patch, RF, and general production responsibilities."
    }
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
