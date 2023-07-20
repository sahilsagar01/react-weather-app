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
        const api = "http://localhost:5004/card";
        const weatherInfo = await axios.get(api);
        console.log("file: createcard.js:59  weatherInfo: ", weatherInfo.data)
       setCollectedCard(weatherInfo.data)
      //  setNewInput({
      //   temperature: ,
      //   weatherth: "",
      //   windSpeed: "",
      //   humidity: "",
      //   country: "",
      //   city: ""
      //  })
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
},[])

  return ( <div>
  
     {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Temprature</Form.Label>
          <Form.Control
            required
            type="text"
            name='temperature'
            placeholder="temperature"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Weather</Form.Label>
          <Form.Control
            required
            type="text"
            name="weather"
            placeholder="weather"
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Wind speed</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              name='windSpeed'
              placeholder="wind"
              aria-describedby="inputGroupPrepend"
              required
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text"
           name='city' 
           placeholder="City" 
           required 
           onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" name='country' placeholder="contry" required onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Humidity</Form.Label>
          <Form.Control type="text" name='humidity' placeholder="humidity" required onChange={handleChange} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form> */}
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