import React from "react";
const BoardCard = ({ name, time, firstToggle, secondToggle, type }) => {
  return (
    <li className='card'>
      <div className='card-name'>{name}</div>
      <div className='card-time'>{time}</div>
      <button onClick={() => {
          firstToggle(type, name)
      }}>第一个</button>
      <button onClick={() => {
          secondToggle(type, name)
      }}>第二个</button>
    </li>
  );
};
export default BoardCard;