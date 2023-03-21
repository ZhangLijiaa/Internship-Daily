import React from "react";
const BoardCard = ({ name, time, firstToggle, type, remove, add1, deleteData, addData1, add2, addData2 }) => {
  return (
    <li className='card'>
      <div className='card-name'>{name}</div>
      <div className='card-time'>{time}</div>
      <button onClick={() => {
          firstToggle(type, name, remove, deleteData, add1, addData1)
      }}>第一个</button>
      <button onClick={() => {
          firstToggle(type, name, remove, deleteData, add2, addData2)
      }}>第二个</button>
    </li>
  );
};
export default BoardCard;