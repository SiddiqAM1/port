import React from 'react';
import './YourComponent.css'; // Import your CSS file

function YourComponent() {
  return (
    <div className="hero-image">
      <img src={require('./SiddiqImage.jpg').default} alt="Your Image" />
    </div>
  );
}

export default YourComponent;




