import React, {useState, useEffect, useRef} from "react";

const AddBoardCard = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const change = (e) => {
    setName(e.target.value)
  }
  const keyDown = (e) => {
    if (e.key === 'Enter') {
      onSubmit(name)
    }
  }
  const inputElem = useRef(null);
  useEffect(() => {
    inputElem.current.focus();
  }, []);

  return (
    <li className='card'>
      <h4>添加</h4>
      <div className='card-name'>
        <input type="text" value={name} ref={inputElem} onChange={change} onKeyDown={keyDown}></input>
      </div>
    </li>
  );
};
export default AddBoardCard;