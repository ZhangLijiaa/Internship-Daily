import React from "react";
const BoardCard = ({ name, time, firstToggle, type, map1, map2 }) => {
  return (
    <li className='card'>
      <div className='card-name'>{name}</div>
      <div className='card-time'>{time}</div>
      <button onClick={() => {
          firstToggle(type, name, map1)
      }}>第一个</button>
      <button onClick={() => {
          firstToggle(type, name, map2)
      }}>第二个</button>
    </li>
  );
};
export default BoardCard;