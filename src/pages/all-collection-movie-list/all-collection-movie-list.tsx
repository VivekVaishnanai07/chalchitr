import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button, Card, CardActions, CardContent, Grid } from '@mui/material';
import { movies } from '../common/utils';
import './main-container.css';

const AllCollectionMovieList = () => {

  return (
    <Grid container spacing={{ xs: 1 }} columns={{ xs: 4, sm: 7, md: 12 }} style={{ padding: 8 }}>
      {
        movies.map((data: any) => (
          <Grid item xs={2} sm={2} md={2} key={data.name}>
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
          </Grid>
        ))}
    </Grid>
  );
};

export default AllCollectionMovieList;