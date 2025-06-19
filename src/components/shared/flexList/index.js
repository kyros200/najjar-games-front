import React from 'react';
import './flexList.scss';
import Button from '../Button';

export default function FlexList({ items }) {
  return (
    <div className="landing-header">
      {items.map((item, index) => (
        <div className="header-item" key={index}>
          {/* <div onClick={() => setClicked(true)} className='backdropTeste'/> */}
          <img src={item.img} alt={`Slide ${index + 1}`} />
          {item.buttons ?
          <div className="overlay-buttons-container">
            {item.buttons.map((button) => (
              <Button className="overlay-buttons-content" to={button.to}>
                {button.icon}
                {button.description}
              </Button>
            ))}
          </div>
          : <></>}
          <div className="overlay">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}
