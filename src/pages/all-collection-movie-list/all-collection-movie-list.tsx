import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button, Card, CardActions, CardContent } from '@mui/material';
import { movies } from '../common/utils';
import './main-container.css';

const AllCollectionMovieList = () => {

  return (
    <div className="container-wrapper">
      {
        movies.map((data: any) => (
          <div className='container' key={data.name}>
            <Card className='card-wrapper' sx={{
              boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform ease-in-out .25s', borderRadius: 0,
            }}>
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
  );
};

export default AllCollectionMovieList;