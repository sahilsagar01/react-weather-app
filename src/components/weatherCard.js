import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

export default function WeatherCard(props) {


const handleDelete = async() => {
 try{
  const weatherData = await axios.get("http://localhost:5004/card");
  const mongoId = weatherData.data[props.id]._id
  props.ondelete(mongoId,props.id)
  const DeletedCard = await axios.delete(`http://localhost:5004/card/delete/${mongoId}`);
 }
 catch(error){
  console.log(error)
 }
}


  return (
    <Card sx={{ maxWidth: 250 }}>
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
         Humidity: {props.humidity}%
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} type='button' size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}