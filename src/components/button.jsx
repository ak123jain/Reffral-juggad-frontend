import React, { useState, useEffect, useRef } from 'react';

const ButtonGroup = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const buttons = [
    "Referral in 15 minutes",
    "Mock Interview",
    "100% Avg Attendance",
    "Most Visited",
    "Service based company expert",
    "Referral in 15 minutes",
    "Mock Interview",
    "100% Avg Attendance",
    "Most Visited",
    "Service based company expert",
    "Referral in 15 minutes",
    "Mock Interview",
    "100% Avg Attendance",
    "Most Visited",
    "Service based company expert",
  ];

  // Measure container and content width on mount and resize
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
        setContentWidth(containerRef.current.scrollWidth);
      }
    };
    
    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  // Scroll animation
  useEffect(() => {
    if (isHovering || containerWidth >= contentWidth) return;
    
    const scrollDistance = contentWidth - containerWidth;
    const scrollSpeed = 30; // Lower is faster
    
    const interval = setInterval(() => {
      setScrollPosition(prev => {
        const newPosition = prev + 1;
        // Reset when we've scrolled all the way
        if (newPosition >= scrollDistance) {
          return 0;
        }
        return newPosition;
      });
    }, scrollSpeed);
    
    return () => clearInterval(interval);
  }, [containerWidth, contentWidth, isHovering]);

  return (
    <div 
      ref={containerRef}
      className="p-6 w-full bg-blue-950 overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div 
        className="flex flex-nowrap gap-4"
        style={{ 
          transform: `translateX(${-scrollPosition}px)`,
          transition: 'transform 0.3s linear'
        }}
      >
        {buttons.map((text, index) => (
          <button
            key={index}
            className="whitespace-nowrap px-6 py-4 text-lg border-2 rounded-full bg-blue-900 text-blue-100 border-blue-800 hover:bg-blue-800 hover:text-white flex-shrink-0"
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;