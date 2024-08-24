import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sedans-container" id="container">
        <img  src="/images/icon-sedans.svg" alt="luxury"/>
        <h3>Sedans</h3>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for Cruising in the city or on your next road trip. </p>
        <button className='sedans-button'>Learn more</button>
      </div>
      <div className="suvs-container" id="container">
        <img src="/images/icon-suvs.svg" alt="sedans"/>
        <h3>SUVS</h3>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>
        <button className='suvs-button'>Learn More</button>
      </div>
      <div className="luxury-container" id="container">
        <img src="/images/icon-luxury.svg" alt="suvs"/>
        <h3>LUXURY</h3>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>
        <button className='luxury-button'>Learn More</button>
      </div>


    </div>
  );
}

export default App;
