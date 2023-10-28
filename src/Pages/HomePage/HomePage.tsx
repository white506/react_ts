import React from 'react';
import Card from '../../Components/Card'; 
import "../HomePage/HomePage.css"

const Home: React.FC = () => {
  return (
    <div>
      <div className='cards-container '>
        <Card
          imageUrl="assets/images/image.webp"
          price={9999}
          title="Кресло желтое, IKEA"
        />
      </div>
    </div>
  );
}

export default Home;

