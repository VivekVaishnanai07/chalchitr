const colors = [
  'D3BCC0',
  'A5668B',
  '508CA4',
  '0A8754',
  'E29578',
  '006D77',
  'FFE0B5',
  '8A6552',
  '0D0630',
  '18314F',
  '77567A',
  '087F8C',
  '23B5D3',
  '5C4D7D',
  '2b9348',
  '4C956C',
  'A47E1B',
  '532C1E',
  '00264F',
];

const getRandomColor = () => {
  return `#${colors[Math.floor(Math.random() * colors.length)]}`;
};

export { getRandomColor };

interface Movies {
  img: string;
  name: string;
  download: string;
  category: string;
}

export const movies: Movies[] = [
  {
    img: 'https://m.media-amazon.com/images/M/MV5BYTYwYmI0NGItYmFkYi00NzViLWIwMGEtNGNjYjQwYjY1NTQ1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    name: 'Mission Majnu',
    download: 'http://surl.li/fdwzz',
    category: 'Bollywood'
  },
  {
    img: 'https://stat4.bollywoodhungama.in/wp-content/uploads/2022/10/Ram-Setu-2.jpeg',
    name: 'Ram Setu',
    download: 'http://surl.li/fdxaz',
    category: 'Bollywood'
  },
  {
    img: 'https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/10/raksha-bandhan-zee5-global-announces-the-world-digital-premiere-of-akshay-kumar-starrer-on-october-5-002.jpg',
    name: 'Raksha Bandhan',
    download: 'http://surl.li/fdxbe',
    category: 'Bollywood'
  },
  {
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSRBJByC1HOmy5OR4ZpUEPadlh8feYGBFiFKNnKL-JEdqX8yDq5',
    name: 'Salaam Venky',
    download: 'http://surl.li/fdxbg',
    category: 'Bollywood'
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQa0Zi2WnzZuxqkxu4nVyblAV2BKWvBbPHFkcfhXeZ5-gbKdCfB',
    name: 'An Action Hero',
    download: 'http://surl.li/fdxbp',
    category: 'Bollywood'
  },
  {
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSzNzI5w3iKM-KdasCDvlOEUgD2ojlf7IW5b-e3tqFmhW2JRSCz',
    name: 'Black Panther Wakanda Forever',
    download: 'http://surl.li/fdxcq',
    category: 'Hollywood'
  },
  {
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNSOjcSmrXYIZ517jTKmCDxBwIJU4_ojFweUDLI1Dssn2UfTsx',
    name: 'Black Adam',
    download: 'https://t.ly/YAME',
    category: 'Hollywood'
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLeDZOOOe39EylZoDSJteMkbX8lqS4JT-SvEZ8W2M6s1DRBZMd',
    name: 'Top Gun: Maverick',
    download: 'https://t.ly/0Uif',
    category: 'Hollywood'
  },
  {
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlqKqkW0oljnsL6r__e2RL1bJbPc6J_BYu2S8jbqTmvfVY4rtZ',
    name: 'Morbius',
    download: 'https://t.ly/-SPQ',
    category: 'Hollywood'
  },
  {
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBkxgl2A2PhE_6tklFLT0bxn5NLhvhsnpXGhmXBt_zotrlVHmo',
    name: 'The Batman',
    download: 'https://t.ly/kZ2T',
    category: 'Hollywood'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrfKZsq4tcvjm0omU509m0e1FVD0HvULaDJ-l6g4UtEe-GUTH',
    name: 'Kutch Express',
    download: 'https://t.ly/G7rw',
    category: 'Gujarati'
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BODcwNjY5ZTUtMjc1ZC00ZGJhLWE0N2YtMmU3OTM3ZWY1NDBhXkEyXkFqcGdeQXVyMTM5MDA4NDEz._V1_FMjpg_UX1000_.jpg',
    name: 'Vickida No Varghodo',
    download: 'https://t.ly/w277N',
    category: 'Gujarati'
  },
  {
    img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/veer-isha-nu-seemant-et00337908-1663311182.jpg',
    name: 'Veer Isha Nu Seemant',
    download: 'https://t.ly/XVuY',
    category: 'Gujarati'
  },
  {
    img: 'https://rajhanscinemas.com/MovieImages/gajab.jpg',
    name: 'Gajab Thai Gayo!',
    download: 'https://t.ly/k_Yf',
    category: 'Gujarati'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPOi_7Psmgp_gaNOwLIfqKHwjqLPbQI7n79QtwsbSzh5Y1YWad',
    name: 'Fakt Mahilao Maate',
    download: 'https://t.ly/X6zW',
    category: 'Gujarati'
  },
  {
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSyWwOs-p9xzXUkgeGuWpAyuI3_tGIN33TzvSUrp2hTa-32OLFG',
    name: 'Varisu',
    download: 'https://t.ly/QmjA',
    category: 'South'
  }
]