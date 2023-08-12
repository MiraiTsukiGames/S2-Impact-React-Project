import React from 'react'
import Button from '../components/button/Button';

const Home = () => {
  return (
<div className="Banner">
      <h1>Welcome to My App</h1>
      <p>This is the home page of my app.</p>
      <Button onClick={() => window.location.href = '/timer'} text="Get started"/>
    </div>
  );
};

export default Home
