import DownloadIcon from '@mui/icons-material/Download';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Card, CardContent, Grid, IconButton } from '@mui/material';
import '../../assets/css/shared.scss';
import { movies } from '../common/utils';

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
              <Grid container style={{ height: '100px' }}>
                <CardContent style={{ padding: 8, width: '100%' }}>
                  <div style={{ fontSize: 18, fontWeight: 500, textAlign: 'center' }}>{truncate(data.name, 16)}</div>
                </CardContent>
                <Grid item xs={12} style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', paddingBottom: '8px' }}>
                  <IconButton aria-label="play movie" style={{ border: '1px solid #1976d2', right: '4px' }}>
                    <PlayArrowIcon style={{ color: '#1976d2' }} />
                  </IconButton>
                  <IconButton aria-label="download" href={data.download} style={{ border: '1px solid #2e7d32' }}>
                    <DownloadIcon color="success" />
                  </IconButton>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default AllCollectionMovieList;