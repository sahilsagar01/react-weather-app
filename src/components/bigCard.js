import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Row from 'react-bootstrap/esm/Row';

export default function BigCard(props) {
    const handlepost = () => {
        props.onSave();
    }
  return ( 
  <Row>
    <div className='bigCard'>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={props.image}
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.city} ({props.country})
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Temperature: {props.temperature} °C
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Weather: {props.weather}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Wind speed: {props.windSpeed} km/h
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Humidity: {props.humidity} %
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={handlepost} type='button' size="small">Save</Button>
    </CardActions>
  </Card>
  </div>
  </Row>
  );
}