import React from "react";
const BoardCard = ({ name, time, ptodTransform, ptocTransform, dtopTransform, dtocTransform, ctopTransform, ctodTransform, type }) => {
  return (
    <li className='card'>
      <div className='card-name'>{name}</div>
      <div className='card-time'>{time}</div>
      <button onClick={() => {
        if(type === 'pending') {
          ptodTransform(name)
        }else if(type === 'doing') {
          dtopTransform(name)
        }else if(type === 'completed') {
          ctopTransform(name)
        }
      }}>第一个</button>
      <button onClick={() => {
        if(type === 'pending') {
          ptocTransform(name)
        }else if(type === 'doing') {
          dtocTransform(name)
        }else if(type === 'completed') {
          ctodTransform(name)
        }
      }}>第二个</button>
    </li>
  );
};
export default BoardCard;