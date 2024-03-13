import React from 'react';
import "./CustomArrow.css"

const CustomArrow = ({ direction, onClick }) => {
  return (
    <div className={`custom-arrow ${direction}`} onClick={onClick}>
     
      <span className="material-symbols-outlined">
        {direction === 'left' ? 'chevron_left' : 'chevron_right'}
      </span>
    </div>
  );
};

export default CustomArrow;
