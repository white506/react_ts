import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button: React.FC = () => {
  return (
    <div className="return__container">
      <Link to="/"> 
        <button className="return__button">Return</button>
      </Link>
    </div>
  );
}

export default Button;
