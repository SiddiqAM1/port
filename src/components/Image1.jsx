import React from 'react';
import './YourComponent.css'; // Import your CSS file

function YourComponent() {
  return (
    <div className="hero-image">
      <img src={require('./your-image.jpg').default} alt="Your Image" />
    </div>
  );
}

export default YourComponent;
And in your CSS file (YourComponent.css):

css
Copy code
/* YourComponent.css */
.hero-image {
  width: 200px;
  height: 200px;
  border-radius: 50%; /* This creates the rounded effect */
  overflow: hidden; /* Ensure the image stays within the rounded container */
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover the container */
}
Replace './your-image.jpg' with the actual path to your image. This code will create a rounded image in your React component.





