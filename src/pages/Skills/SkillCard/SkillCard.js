import React from 'react';
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
    // console.log(`isActive: ${isActive}, onClick: ${onClick}`);
    return (
        <div className={`skill-card${isActive ? "active" : ""}`} 
        onClick={() => onClick()}>

            <div className='skill-icon'>
                {/* <p>{title} </p> */}
                <img src={iconUrl} alt={title} />
            </div>
            <span>{title}</span>

        </div>
    );
}

export default SkillCard;
