import PostSectionDisplay from './components/Posts/Posts';
import ThreadDiscussion from './components/Posts/PostsComponent';
import React, { useState, useEffect } from 'react';
import MainHeader from './components/MainPageHeader/MainHeader';
import NetflixMainScreen from './components/NetflixMainScreen/NetflixMainScreen';
import NetflixMovieScroll from './components/NetflixMainScreen/NetflixMovieScroll';
import MoviePage from "./Pages/MoviePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UploadMovie from "./Pages/UploadMovie";
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from "./Pages/Account";
import TVShowPage from './Pages/TVShowPage';
import TVShowDetails from './Pages/TVShowDetails';
import MoviesPage from './Pages/MoviesPage';



const AppLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw', // Full viewport width
    height: '100vh', // Full viewport height
    margin: 0, // Remove any default margins
    padding: 0,
    backgroundColor: '#000', // Black background
    boxSizing: 'border-box', // Include padding and border in dimensions
    overflow: 'hidden', // Prevent content overflow
  };

//DD - set the initial movieId state as empty so that we can fetch the general tweets
const [selectedMovieId, setSelectedMovieId] = useState("");


//DD - Added the function for reverse routing from video page to parent page and then to post page
  const handleMovieSelect = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const contentContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '98%', // Slight margin inside the parent container
    height: 'calc(100% - 60px)', // Subtract header height to avoid overflow
    marginTop: '1rem',
    gap: '1rem', // Add spacing between main sections
  };

  const netflixColumn = {
    display: 'flex',
    flexDirection: 'column',
    flex: 3, // Allocate more space to Netflix section
    gap: '1rem', // Add spacing between the two Netflix components
    overflowY: 'auto',
  };

  const postsSection = {
    flex: 1, // Allocate smaller space to Twitter section
    marginLeft: '0rem', // Adds spacing between columns
   // overflowY: 'auto', // Allow scrolling if content overflows
  };


const movies = [
            { contentId: 1,
              //title: 'Die Hard',
              genre: 'Action',
              rating: 'R',
              cast: 'Bruce Willis, Alan Rickman',
              releaseYear: '1988',
              length: '132 minutes',
              description: 'A New York City police officer tries to save his estranged wife and several others taken hostage by terrorists during a christmas party at the Nakatomi Plaza in Los Angeles',
              thumbnail: '/video-thumbnails/Die Hard.png',
              videoUrl: '/Trailers/Die Hard.mp4'
            },
            { contentId: 2,
              //title: '30 Days of Night',
              genre: 'Horror',
              rating: 'R',
              cast: 'Josh Hartnett, Danny Huston',
              releaseYear: '2007',
              length: '114 minutes',
              description: 'After an Alaskan town is plunged into darkness for a month, it is attacked by a bloodthirsty gang of vampires.',
              thumbnail: '/video-thumbnails/30 Days of Night.png',
              videoUrl: '/Trailers/30 Days of Night.mp4'
            },
            { contentId: 3,
              //title: 'Back to the Future',
              genre: 'Sci-fi',
              rating: 'PG',
              cast: 'Michael J. Fox, Christopher Lloyd',
              releaseYear: '1985',
              length: '116 minutes',
              description: 'Marty Mcfly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.',
              thumbnail: '/video-thumbnails/Back to the Future.png',
              videoUrl: '/Trailers/Back to the Future.mp4'
            },
            { contentId: 4,
              //title: 'the Iron Giant',
              genre: 'Animation',
              rating: 'PG',
              cast: 'Vin Diesel, Jennifer Aniston',
              releaseDate: '1999',
              length: '87 minutes',
              description: 'A young boy befriends a giant robot from outer space that a paranoid government agent wants to destroy.  ',
              thumbnail: '/video-thumbnails/the Iron Giant.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 5,
              //title: 'Interstellar',
              genre: 'Sci-fi',
              rating: 'PG-13',
              cast: 'Mathew McConaughey, Anne Hathaway',
              releaseYear: '2014',
              length: '169 minutes',
              description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
              thumbnail: '/video-thumbnails/Interstellar.png',
              videoUrl: '/Trailers/Interstellar.mp4'
            },
            { contentId: 6,
              //title: 'Toy Story',
              genre: 'Animation',
              rating: 'G',
              cast: 'Tom Hanks, Tim Allen',
              releaseYear: '1995',
              length: '81 minutes',
              description: 'A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as the top toy in a boy’s bedroom.',
              thumbnail: '/video-thumbnails/Toy Story.png',
              videoUrl: '/Trailers/Toy Story.mp4'
            },
            { contentId: 7,
              //title: 'Toy Story 2',
              genre: 'Animation',
              rating: 'G',
              cast: 'Tom Hanks, Tim Allen',
              releaseYear: '1999',
              length: '92 minutes',
              description: 'When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.',
              thumbnail: '/video-thumbnails/Toy Story 2.png',
              videoUrl: '/Trailers/Toy Story 2.mp4'
            },
            { contentId: 8,
              //title: 'Toy Story 3',
              genre: 'Animation',
              rating: 'G',
              cast: 'Tom Hanks, Tim Allen',
              releaseDate: '2010',
              length: '103 minutes',
              description: 'The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it;s up to Woody to convince the other toys that they weren’t abandoned and to return home.',
              thumbnail: '/video-thumbnails/Toy Story 3.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 9,
              //title: 'Lord of the Rings',
              genre: 'Action',
              rating: 'PG-13',
              cast: 'Elijah Wood, Ian Mckellen',
              releaseDate: '2001',
              length: '178 minutes',
              description: 'A meek Hobbit from the shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
              thumbnail: '/video-thumbnails/Lord of the Rings.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 10,
              //title: 'Lord of the Rings 2',
              genre: 'Action',
              rating: 'PG-13',
              cast: 'Elijah Wood, Ian Mckellen',
              releaseDate: '2002',
              length: '179 minutes',
              description: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron’s new ally, Saruman, and his hordes of Isengard. ',
              thumbnail: '/video-thumbnails/Lord of the Rings 2.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 11,
              //title: 'Lord of the Rings 3',
              genre: 'Action',
              rating: 'PG-13',
              cast: 'Elijah Wood, Ian Mckellen',
              releaseDate: '2003',
              length: '201 minutes',
              description: 'Gandalf and Aragorn lead the World of Men against Sauron’s army to draw his gaze from Froso and Sam as they approach Mount Doom with the One Ring.',
              thumbnail: '/video-thumbnails/Lord of the Rings 3.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 12,
              //title: 'Small Soldiers',
              genre: 'Action',
              rating: 'PG-13',
              cast: 'Kirsten Dunst, Tommy Lee Jones',
              releaseDate: '1998',
              length: '108 minutes',
              description: 'When missile technology is used to enhance toy action figures, the toys soon begin to take their battle programming too seriously.',
              thumbnail: '/video-thumbnails/Small Soldiers.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 13,
              //title: 'the Prince of Egypt',
              genre: 'Animation',
              rating: 'PG',
              cast: 'Val Kilmer, Ralph Fiennes',
              releaseDate: '1998',
              length: '99 minutes',
              description: 'Egyptian Prince Moses learns of his identity as a Hebrew and his destiny to become the chosen deliverer of his people.',
              thumbnail: '/video-thumbnails/The Prince Of Egypt.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 14,
              //title: 'The Thing',
              genre: 'Sci-fi',
              rating: 'R',
              cast: 'Kurt Russell, Keith David',
              releaseDate: '1982',
              length: '109 minutes',
              description: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
              thumbnail: '/video-thumbnails/The Thing.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 15,
              //title: 'Everything Everywhere All at Once',
              genre: 'Sci-fi',
              rating: 'R',
              cast: 'Michelle Yeoh, Ke Huy Quan',
              releaseDate: '2022',
              length: '139 minutes',
              description: 'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
              thumbnail: '/video-thumbnails/Everything Everywhere All At Once.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
            { contentId: 16,
              //title: 'Unbreakable',
              genre: 'Sci-fi',
              rating: 'PG-13',
              cast: 'Bruce Willis, Samuel L. Jackson',
              releaseDate: '2000',
              length: '106 minutes',
              description: 'A man learns something extraordinary about himself after a devastating accident.',
              thumbnail: '/video-thumbnails/Unbreakable.png',
              videoUrl: '/Trailers/the Iron Giant.mp4'
            },
                  ];


const tvShows = [
  { 
    contentId: 1,
    title: 'Breaking Bad', 
    genre: 'Drama', 
    rating: 'TV-MA',
    cast: 'Bryan Cranston, Aaron Paul',
    releaseYear: '2008',
    seasons: '5',
    thumbnail: '/video-thumbnails/Breaking Bad.png',
    videoUrl: '/Trailers/Breaking Bad.mp4',
    description: 'A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family\'s financial future as he battles terminal lung cancer.'
  },
  { 
    contentId: 2,
    title: 'YellowStone', 
    genre: 'Drama', 
    rating: 'TV-MA',
    cast: 'Kevin Costner, Luke Grimes',
    releaseYear: '2018',
    seasons: '5',
    thumbnail: '/video-thumbnails/YellowStone.png', 
    videoUrl: '/Trailers/YellowStone.mp4',
    description: 'A ranching family in Montana faces off against others encroaching on their land. '
  },
  { 
    contentId: 3,
    title: 'The Office', 
    genre: 'Comedy', 
    rating: 'TV-14',
    cast: 'Steve Carell, Rainn Wilson',
    releaseYear: '2005',
    seasons: '9',
    thumbnail: '/video-thumbnails/The Office.png',
    videoUrl: '/Trailers/The Office.mp4',
    description: 'A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.'
  },
  { 
    contentId: 4,
    title: 'The Sopranos', 
    genre: 'Drama', 
    rating: 'TV-MA',
    cast: 'James Gandolfini, Lorraine Bracco',
    releaseYear: '1999',
    seasons: '6',
    thumbnail: '/video-thumbnails/The Sopranos.png',
    videoUrl: '/Trailers/The Sopranos.mp4',
    description: 'New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling. '
  },
  { 
    contentId: 5,
    title: 'Friends', 
    genre: 'Comedy', 
    rating: 'TV-14',
    cast: 'Jennifer Anistion, Courteney Cox',
    releaseYear: '2008',
    seasons: '10',
    thumbnail: '/video-thumbnails/Friends.png', 
    videoUrl: '/Trailers/Friends.mp4',
    description: 'Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City'
  },
  { 
    contentId: 6,
    title: 'Law and Order', 
    genre: 'Drama', 
    rating: 'TV-14',
    cast: 'Sam Waterston, Jerry Orbach',
    releaseYear: '1990',
    seasons: '24',
    thumbnail: '/video-thumbnails/Law and Order.png',
    videoUrl: '/Trailers/',
    description: 'Two part drama which focuses on the New York criminal justice system showing a violent crime investigated by the police detectives and then the trial of the accused in court by the prosecutors. '
  },
  { 
    contentId: 7,
    title: 'Band of Brothers', 
    genre: 'Drama', 
    rating: 'TV-MA',
    cast: 'Scott Grimes, Damian Lewis',
    releaseYear: '2001',
    seasons: '1',
    thumbnail: '/video-thumbnails/Band of Brothers.png',
    videoUrl: '/Trailers/',
    description: 'The story of Easy Company of the U.S Army 101st Airborne Division and their mission in World War 2 Europe, from Operation Overlord to V-J Day.'
  },
  { 
    contentId: 8,
    title: 'Chernobyl', 
    genre: 'Drama', 
    rating: 'TV-MA',
    cast: 'Jessie Buckley, Jared Harris',
    releaseYear: '2019',
    seasons: '1',
    thumbnail: '/video-thumbnails/Chernobyl.png', 
    videoUrl: '/Trailers/Chernobyl.mp4',
    description: 'In April 1986, the city of Chernobyl in the Soviet Union suffers one of the worst nuclear disasters in the history of mankind. Consequently, many heroes put their lives on the line in the following days, weeks and months.'
  },
  {
    contentId: 9,
    title: 'Modern Family',
    genre: 'Comedy',
    rating: 'TV-PG',
    cast: 'Ty Burrell, Sofia Vergara',
    releaseYear: '2009',
    seasons: '11',
    thumbnail: '/video-thumbnails/Modern Family.png',
    videoUrl: '/Trailers/',
    description: 'Three different, but related, families face trials and tribulations in their own uniquely comedic ways.'
  },
  {
    contentId: 10,
    title: 'Community',
    genre: 'Comedy',
    rating: 'TV-14',
    cast: 'Joel McHale, Donald Glover',
    releaseYear: '2009',
    seasons: '6',
    thumbnail: '/video-thumbnails/Community.png',
    videoUrl: '/Trailers/',
    description: 'A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.'
  },
  {
    contentId: 11,
    title: 'The Simpsons',
    genre: 'Comedy',
    rating: 'TV-14',
    cast: 'Dan Castellaneta, Nancy Cartwright',
    releaseYear: '1989',
    seasons: '32',
    thumbnail: '/video-thumbnails/The Simpsons.png',
    videoUrl: '/Trailers/',
    description: 'The satiric half-hour adventures of a working-class family in the misfit city of Springfield.'
  },
  {
    contentId: 12,
    title: 'Stranger Things',
    genre: 'Sci-fi',
    rating: 'TV-14',
    cast: 'Winona Ryder, Millie Bobby Brown',
    releaseYear: '2016',
    seasons: '4',
    thumbnail: '/video-thumbnails/Stranger Things.png',
    videoUrl: '/Trailers/',
    description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries. '
  },
  {
    contentId: 13,
    title: 'The Mandalorian',
    genre: 'Sci-fi',
    rating: 'TV-MA',
    cast: 'Pedro Pascal, Chris Bartlett',
    releaseYear: '2019',
    seasons: '3',
    thumbnail: '/video-thumbnails/The Mandalorian.png',
    videoUrl: '/Trailers/',
    description: 'The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.'
  },
  {
    contentId: 14,
    title: 'X-Files',
    genre: 'Sci-fi',
    rating: 'TV-14',
    cast: 'David Duchovny, Gillian Anderson',
    releaseYear: '1993',
    seasons: '11',
    thumbnail: '/video-thumbnails/The X-Files.png',
    videoUrl: '/Trailers/',
    description: 'Two F.B.I. Agents, Fox Mulder the believer and Dana Scully the skeptic, investigate the strange and unexplained, while hidden forces work to impede their efforts.'
  },
  {
    contentId: 15,
    title: 'Star Trek',
    genre: 'Sci-fi',
    rating: 'TV-PG',
    cast: 'William Shatner, Leonard Nimoy',
    releaseYear: '1996',
    seasons: '3',
    thumbnail: '/video-thumbnails/Star Trek.png',
    videoUrl: '/Trailers/',
    description: 'In the 23rd Century, Captain James T. Kirk and the crew of the U.S.S. Enterprise explore the galaxy and defend the united Federation of Planets.'
  },
  {
    contentId: 16,
    title: 'Firefly',
    genre: 'Sci-fi',
    rating: 'TV-14',
    cast: 'Nathan Fillion, Gina Torres',
    releaseYear: '2002',
    seasons: '1',
    thumbnail: '/video-thumbnails/Firefly.png',
    videoUrl: '/Trailers/',
    description: 'Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them. '
  },

];


  return (
    <Router>
    <div style={layoutStyle}>
      <MainHeader onMovieSelect={handleMovieSelect}/>
        <div style={contentContainer}>
          {/* Netflix Column */}
          <div style={netflixColumn}>
            <Routes>
              {/* Netflix Main Screen */}
              <Route path="/" element={<NetflixMainScreen onMovieSelect={handleMovieSelect}/>} />
              {/* Movie Page */}
              <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
              <Route path="/upload-movie" element={<UploadMovie />} />
              <Route path="/my-profile" element={<Account />} />
              <Route path="/tvshows" element={<TVShowPage tvShows={tvShows} />} />
              <Route path="/tvshow/:id" element={<TVShowDetails tvShows={tvShows} />} />
              <Route path="/movies" element={<MoviesPage movies={movies} />} />
          </Routes>
        </div>
        <div style={postsSection}>
          <PostSectionDisplay movieId={selectedMovieId} />
        </div>
      </div>
    </div>
  </Router>
);
};

export default AppLayout;