import { Button, Card, CardActions, CardContent, Grid } from '@mui/material';
import { movies } from '../common/utils';
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
              <CardContent style={{ height: 80 }}>
                <div style={{ fontSize: 18, fontWeight: 500, textAlign: 'center' }}>{data.name}</div>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default AllCollectionMovieList;