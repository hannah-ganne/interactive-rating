import { useState } from 'react'

import './App.css'
import RoundBtn from './components/RoundBtn'
import starIcon from './assets/icon-star.svg'
import MainBtn from './components/MainBtn'
import thankyou from './assets/illustration-thank-you.svg'

function App() {
  const [rating, setRating] = useState(null);
  const [isRated, setIsRated] = useState(false);
  
  function handleClick(e) {
    setRating(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsRated(true);
  }
  
  console.log(rating, isRated);
  
  return (
    <>
      {isRated ?
      (<div className="thankyou-container">
        <img src={thankyou} alt="illustration showing gratitude" />
        <div className="rating">You selected {rating} out of 5</div>
        <h2>Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>)
        :
        (<div className="container">
          <RoundBtn>
            <img src={starIcon} alt="star shaped icon image" />
          </RoundBtn>

          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        
          <div className="rating-container">
            <RoundBtn value="1" onClick={handleClick}>1</RoundBtn>
            <RoundBtn value="2" onClick={handleClick}>2</RoundBtn>
            <RoundBtn value="3" onClick={handleClick}>3</RoundBtn>
            <RoundBtn value="4" onClick={handleClick}>4</RoundBtn>
            <RoundBtn value="5" onClick={handleClick}>5</RoundBtn>
          </div>
        
          <MainBtn onClick={handleSubmit}>Submit</MainBtn>
        
        </div>)}
      
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/lanomade">Hannah Ganne</a>
      </div>
    </>
)
}

export default App;
