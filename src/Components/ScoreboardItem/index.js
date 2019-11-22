import React from "react";

import "./ScoreboardItem.scss"

const ScoreboardItem = (props) => {
  const {name, image, win} = props.hero

  return (
      <div className={`scoreboard-item d-flex align-items-center ${win ? 'win' : 'loose'} ${props.reverse ? 'flex-row-reverse' : ''}`}>
        <p>{name}</p>
        <img src={image.url} alt={`img of ${name}`}/>
      </div>
  );
}

export default ScoreboardItem;