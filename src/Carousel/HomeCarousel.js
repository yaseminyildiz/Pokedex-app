import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

let imgs = [
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg',
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',
  'https://res.cloudinary.com/stealthman22/image/upload/v1586308023/new-portfolio/hero/two-cargo-ships-sailing-near-city-2144905.jpg',

];

const data = [
  {
   caption:"Caption",
   description:"Description Here"
  },
  {
    
    caption:"Caption",
    description:"Description Here"
   },
   {
   
    caption:"Caption",
    description:"Description Here"
   } 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={8000} pause={false}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item>        
          <img
            className="d-block w-100"
            src={imgs[i]}
            alt="slider image"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
        </div>
      </div>
    </div>
    
  );
}
export default HomeCarousel;
