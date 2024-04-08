import React, { useState, useEffect } from 'react';
import "./AutoTyping.css"
const AutoTypingAnimation = ({ text, subtext }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(prevText => prevText +  text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 120); // Adjust typing speed here (milliseconds)
    
    return () => clearInterval(typingInterval);
  }, [text, currentIndex]);

  return (
    <div className="auto-typing-container">
      <span className='am-text'>{subtext} </span>
      <span className="auto-typing-text">{displayText}</span>
    </div>
  );
};

export default AutoTypingAnimation;
