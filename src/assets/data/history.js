import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import School from '@mui/icons-material/School';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import FestivalIcon from '@mui/icons-material/Festival';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

const events = [
  {
    id: 1,
    startYear: 2011,
    startMonth: 'August',
    endYear: 2014,
    endMonth: 'December',
    bottom: true,
    event: 'Enrolled at Belmont',
    icon: LocalLibraryIcon,
    popover: {
    },
  },
  {
    id: 2,
    startYear: 2014,
    bottom: true,
    event: 'Graduated from Belmont',
    icon: School,
    popover: {
      content: "I graduated in Decemeber of 2014 from Belmont University with a degree in Audio Engineering Technology. In my 3.5 semesters at Belmont I maintained a 3.5 GPA and took part in multiple extra curricular activities, particularly the Showcase Series. Showcase was a series of concerts put on entirely by students. As a junior in college, I held a leadership role in 4 out of the 5 concerts that year."
    }
  },
  {
    id: 3,
    startYear: 2020,
    startMonth: 'April',
    bottom: true,
    event: 'Started Pursing Software',
    icon: CodeIcon,
    popover: {
      content: "The pandemic was a difficult time for the music industry. I had lost my income as a touring sound engineer and there was no indication of when it might return, or how it would return. Rather than take the time to seek temporary work, I decided to put my efforts towards starting a new career in software development."
    }
  },
  {
    id: 4,
    startYear: 2021,
    startMonth: 'January',
    bottom: true,
    event: 'Udemy Bootcamps and Classes',
    icon: CastForEducationIcon,
    popover: {
      content: "By 2021 I had fully committed to pursuing software and decided to take an organized approach to learning. Traditional education like Nashville Software School was difficult due to the cost, so I spent the year replicating the curriclum of their bootcamp through Udemy online courses."
    }
  },
  {
    id: 5,
    startYear: 2022,
    startMonth: 'May',
    endYear: 2022,
    endMonth: 'September',
    bottom: true,
    event: 'Nomi Travel: Software Developer',
    company: 'Nomi Travel',
    position: 'Software Developer',
    description: 'Nomi Travel was a start up tech company in Nashville and my first software development position. At Nomi I was responsible for building the web app using React, as well as back-end REST services for the web app. I also built an internal database management app using a full MERN stack that managed database CRUD operations for 3 environments. I also gained experience in test driven developement, CI/CD, Heroku deployment and Git actions. Nomi was an excellent start-up with tremendous potential. The company is currently on hold, awaiting further capital.',
    icon: DeveloperModeIcon,
    popover: {
      content: "In 2022 I was hired for my first software role with a Nashville start-up called Nomi Travel. I worked part time at Nomi while continuing my full time touring job with Justin Moore. At Nomi I was responsible for building their web-app as well as an internal database management app."
    },
    includeInTraditional: true
  },
  {
    id: 6,
    startYear: 2013,
    startMonth: '',
    endYear: 2020,
    endMonth: '',
    bottom: false,
    event: 'Justin Moore: Audio Tech',
    icon: MicExternalOnIcon,
    popover: {
      content: "In 2013 I was first hired in May as a summer intern for country music artist Justin Moore. In August I went back to school, but in October ended up being called back and hired as a paid audio tech. As the audio tech I was responsible for setting up monitor equipment, routing the stage patch, and troubleshooting signal flow problems."
    }
  },
  {
    id: 7,
    startYear: 2015,
    startMonth: '',
    endYear: 2020,
    endMonth: '',
    bottom: false,
    event: 'Justin Moore: Monitor Engineer',
    icon: SettingsInputComponentIcon,
    popover: {
      content: "In 2015, after graduating from college, I was promoted to monitor engineer for Justin Moore. As the monitor engineer I was responsible for coordinating wireless frequencies and mixing the show for the artist and band. I controlled 6-10 mixes per night. From 2015-2018 I mixed on an Avid Profile, and from 2018 forward on an Avid S6L 32-D"
    }
  },
  {
    id: 8,
    startYear: 2018,
    startMonth: '',
    endYear: 2020,
    endMonth: '',
    bottom: false,
    event: 'Justin Moore: Stage Manager',
    icon: AssignmentIndIcon,
    popover: {
      content: "In 2018, my 5th year working for Justin Moore I was promoted to Stage Manager. As the stage manager I coordinated load-in and load-out for 3-5 departments with 12-30 local crew workers. During the summers I was responsible for 1 semi truck and during arena tours I was responsible for 3-4 trucks."
    }
  },
  {
    id: 9,
    startYear: 2019,
    startMonth: '',
    endYear: 2020,
    endMonth: '',
    bottom: false,
    event: 'Special Event Services: Festival Audio',
    icon: FestivalIcon,
    popover: {
      content: "In June of 2019 I was hired as the monitor engineer for Carolina Country Fest. Special Event Services was the company that contracted me and for this event I was responsible for on-the-fly monitor mixes with IEM's and wedges for the 3 day festival."
    }
  },
  {
    id: 10,
    startYear: 2020,
    startMonth: '',
    endYear: 2020,
    endMonth: '',
    bottom: false,
    event: 'Orange Thread Media: Corporate Events',
    icon: LocalActivityIcon,
    popover: {
      content: "In 2020/2021 I picked up a lot of contract work with Orange Thread Media handling audio for corporate events such as the Southern Baptist Convention. Most often I held the role of FOH engineer but also handled patch, RF, and general production responsibilities."
    }
  }
];

const topEvents = events.filter(el => el.bottom === false);
const bottomEvents = events.filter(el => el.bottom === true);
const traditionalHistory = events.filter(el => el.includeInTraditional === true);

traditionalHistory.push(
  {
    startYear: 2013,
    startMonth: 'May',
    endYear: 'Present',
    endMonth: '',
    event: 'Justin Moore: Stage Manager',
    company: 'Justin Moore',
    position: 'Stage Manager, Monitor Engineer',
    icon: MicExternalOnIcon,
    description: "I started working for country artist Justin Moore as an intern in 2013 and was later hired on as an audio tech. In 2015 I was promoted to monitor engineer. As the monitor enginer I was responsible for RF coordination, stage patch and mixing IEM's for band, artist and guests. In 2018 I was promoted to stage manager where I managed a crew of 5-12 people and coordinated with local labor unions of up to 30. I was responsible for the day-to-day operations of loading in and out 1-4 semi trucks to the stage.",
  }
);

traditionalHistory.push(
  {
    startYear: 2011,
    startMonth: 'September',
    company: 'Freelance',
    position: 'Audio Engineer',
    icon: SettingsInputComponentIcon,
    description: "In my freelance work as an audio engineer, I have been contracted through many companies including CTS Audio, Special Event Services, OrangeThread Media and more. Most commonly my role has been either FOH engineer or monitor engineer but I have also been hired for patch, systems and RF coordination. With CTS and SES I have worked various concerts, festivals and other musical events. With OrangeThread I have worked many corporate events both in Nashville and in surrounding areas."
  }
);

export default events;
export { topEvents, bottomEvents, traditionalHistory };