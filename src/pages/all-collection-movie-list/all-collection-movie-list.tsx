import { Button, Card, CardActions, CardContent, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import { movies } from '../common/utils';
import '../../assets/css/shared.scss'

const AllCollectionMovieList = () => {
  const truncate = (source: any, size: number) => {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }

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
              <CardContent style={{ padding: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 500, textAlign: 'center' }}>{truncate(data.name, 20)}</div>
              </CardContent>
              <CardActions style={{ textAlign: 'center' }}>
                <Grid item xs={6} md={6} style={{ fontSize: 14, fontWeight: 500, marginLeft: '-16px' }}>
                  <Button variant="outlined" style={{ color: '#1976d2', borderColor: '#1976d2' }} startIcon={<PlayArrowIcon style={{ color: '#1976d2' }} />} size='small'>Play</Button>
                </Grid>
                <Grid item xs={6} md={6}>
                  <Button variant="outlined" color="success" size='small' href={data.download}><DownloadIcon />Download</Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default AllCollectionMovieList;