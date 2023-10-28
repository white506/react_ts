import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

interface CardProps {
  imageUrl: string;
  price: number;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, price, title }) => {
  return (
    <div className="card">
      <Link to="/card"> 
        <img src={imageUrl} alt={title} className="card__image" />
      </Link>
      <button className="card__button">Olomouc</button>
      <div className="card__info">
        <div className="card__price">{price.toLocaleString('cs-CZ')} Kč</div>
        <Link to="/card" className="card__title">{title}</Link> 
      </div>
    </div>
  );
}

export default Card;
