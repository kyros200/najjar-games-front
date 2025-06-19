import React from 'react';
import './flexList.scss';

export default function FlexList({ items }) {
  return (
    <div className="landing-header">
      {items.map((item, index) => (
        <div className="header-item" key={index}>
          <img src={item.img} alt={`Slide ${index + 1}`} />
          <div className="overlay">{item.text}</div>
        </div>
      ))}
    </div>
  );
}
