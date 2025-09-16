import React, { useState, useEffect } from 'react';
import '../App.css';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
        setPosition({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY });
      };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-follower"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
    </div>
  );
};

export default MouseFollower;
