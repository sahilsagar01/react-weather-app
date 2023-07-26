import { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import WeatherCard from './weatherCard';
import axios from 'axios';


function CreatCard(props) {
  const {collectedCard, setCollectedCard} = props;
// const handleChange = (e) => {
//   const {name, value} = e.target;
//   setNewInput(pV => {
//     return {
//       ...pV, 
//       [name]: value
//     }
//   })
// }
  // const [validated, setValidated] = useState(false);

const handledelete = async (mongoId,id) => {
  try{
    setCollectedCard(pV => {
      return pV.filter((item, index) => {
        return index !== id
      })
    })
  }
  catch(error){
    console.log(error)
  }
  
}
useEffect(() => {
  const fetchInfo = async () => {
      try {
        const api = "http://3.26.208.5:5004/card";
        const weatherInfo = await axios.get(api);
        /* console.log("file: createcard.js:59  weatherInfo: ", weatherInfo.data) */
       setCollectedCard(weatherInfo.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
},[])

  return ( <div>
    <Row className='smallCard'>
    {collectedCard.map((item,i) =>{
      return <WeatherCard 
      key={i}
      id={i}
        temperature={item.temperature}
        weather={item.weather}
        windSpeed={item.windSpeed}
        humidity={item.humidity}
        city={item.city}
        country={item.country}
        image={item.image}
        time={item.createdAt}
        ondelete={handledelete}
      />
    })}
    </Row>
  </div>
  );
}

export default CreatCard;