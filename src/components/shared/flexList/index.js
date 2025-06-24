import React, { useEffect, useRef, useState } from 'react';
import './flexList.scss';
import Button from '../Button';

export default function FlexList({ items }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é mobile na primeira renderização
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 1110);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Fecha ao clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setActiveIndex(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <div className="landing-header" ref={containerRef}>
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        const handleClick = () => {
          if (!isMobile) return; // no-op no desktop
          if (!isActive) setActiveIndex(index); // ativa o item no 1º clique
          // se já está ativo, não faz nada (os botões estarão clicáveis)
        };

        return (
          <div
            key={index}
            className={`header-item ${isMobile && isActive ? 'active' : ''}`}
            onClick={handleClick}
          >
            <img src={item.img} alt={`Slide ${index + 1}`} />

            {item.buttons && (
              <div
                className="overlay-buttons-container"
                style={isMobile ? {
                  pointerEvents: isMobile && isActive ? 'auto' : 'none',
                  opacity: isMobile && isActive ? 1 : 0,
                } : {}}
              >
                {item.buttons.map((button, i) => (
                  <Button
                    key={i}
                    className="overlay-buttons-content"
                    to={button.to}
                  >
                    {button.icon}
                    {button.description}
                  </Button>
                ))}
              </div>
            )}

            <div
              className="overlay"
              style={isMobile ? {
                opacity: isMobile && isActive ? 1 : 0,
              } : {}}
            >
              {item.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
