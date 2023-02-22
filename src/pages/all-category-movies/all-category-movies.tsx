import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { movies } from '../common/utils';
import '../all-collection-movie-list/main-container.css';

const list = (movieList: any) => {
  return (
    <div className="container-wrapper">
      {
        movieList.map((data: any) => (
          <div className='container' key={data.name}>
            <Card className='card-wrapper' sx={{
              boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform ease-in-out .25s', borderRadius: 0,
            }}
            >
              <img src={data.img} style={{ width: '100%', height: '300px' }} alt={data.name} />
              <CardContent className='card-container'>
                <div className='card-bottom-title'>{data.name}</div>
                <div className="overlay"></div>
              </CardContent>
              <CardActions className='details'>
                <Button size="small" href={data.download} className="button"><FileDownloadOutlinedIcon className='button-icon' /></Button>
              </CardActions>
            </Card>
          </div>
        ))
      }
    </div>
  )
}
const AllCategoryMovies = () => {
  const location = useLocation()
  const pathName = location.pathname.split('/').filter((x) => x);

  // movie filter a category
  const bollywoodMovieList = movies.filter((data: any) => data.category === 'Bollywood')
  const hollywoodMovieList = movies.filter((data: any) => data.category === 'Hollywood')
  const gujaratiMovieList = movies.filter((data: any) => data.category === 'Gujarati')
  const southMovieList = movies.filter((data: any) => data.category === 'South')

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathName]);

  return (
    <>
      {
        pathName[1] === "bollywood" ? (
          list(bollywoodMovieList)
        ) : (pathName[1] === 'hollywood') ? (
          list(hollywoodMovieList)
        ) : (pathName[1] === 'gujarati') ? (
          list(gujaratiMovieList)
        ) : (pathName[1] === 'south') ? (
          list(southMovieList)
        ) : 'data is not found'
      }
    </>
  );
};

export default AllCategoryMovies;