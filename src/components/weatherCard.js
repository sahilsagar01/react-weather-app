import * as React from 'react';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

export default function WeatherCard(props) {


const handleDelete = async() => {
 try{
  const weatherData = await axios.get("http://18.222.255.205:5004/card");
  const mongoId = weatherData.data[props.id]._id
  props.ondelete(mongoId,props.id)
  const DeletedCard = await axios.delete(`http://18.222.255.205:5004/card/delete/${mongoId}`)
 }
 catch(error){
  console.log(error)
 }
}


  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 150 }}
        image={props.image}
        title="weather img"
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
        <Typography variant="body2" color="text.secondary">
         Date & Time: {props.time}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleDelete} type='button' size="small">
        <Tooltip title="Delete">
         <DeleteIcon color="warning" />
         </Tooltip>
        </Button>
      </CardActions>
    </Card>
    
  );
}