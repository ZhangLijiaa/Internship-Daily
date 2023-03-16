import './App.css';
import React, {useState, useEffect, useRef} from 'react';

const Board = ({children}) => (
  <main className="board">{children}</main>
);

const BoardColumn = ({
  children, className, name,
  setDragFrom = () => {},
  setDragTo = () => {},
  onDrop
}) => {
  return (
    <section 
      className = {`board-column ${className}`}
      onDragStart = {
        () => setDragFrom(true)
      }
      onDragOver={
        (e) => {
          e.preventDefault()
          e.dataTransfer.dropEffect = 'move'
          setDragTo(true)
        }
      }
      onDrop={
        (e) => {
          e.preventDefault()
          onDrop && onDrop(e)
        }
      }
      onDragLeave={
        (e) => {
          e.preventDefault()
          e.dataTransfer.dropEffect = 'none'
          setDragTo(false)
      }}
      onDragEnd={(e) => {
        e.preventDefault()
        setDragFrom(false)
        setDragTo(false)
      }
    }
    >
      <h3>{name}</h3>
      <ul>{children}</ul>
    </section>
  );
};


const BoardCard = ({name, time}) => {
  return (
    <li className='card'>
      <div className='card-name'>{name}</div>
      <div className='card-time'>{time}</div>
    </li>
  );
};

const AddBoardCard = ({onSubmit}) => {
  const [name, setName] = useState('')
  const change = (e) => {
    setName(e.target.value)
  }
  const keyDown = (e) => {
    if(e.key === 'Enter') {
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
        <input type="text" value={name} ref={inputElem}  onChange={change} onKeyDown={keyDown}></input>
      </div>
    </li>
  )
}

function App() {
  const [show, setShow] = useState(false)
  const [pendingList, setPendingList] = useState([
    { name: '开发任务-3', time: '22-05-22 18:11' },
    { name: '开发任务-5', time: '22-05-22 18:11' },
    { name: '测试任务-1', time: '22-05-22 18:11' }
  ]);
  const [doingList, setDoingList] = useState([
    { name: '开发任务-2', time: '22-05-22 18:11' },
    { name: '开发任务-4', time: '22-05-22 18:11' }
  ]);
  const [completedList, setCompletedList] = useState([
    { name: '开发任务-1', time: '22-05-22 18:11' }
  ]);
  const click = (e) => {
    setShow(true)
  }
  const submit = (name) => {
    setPendingList(nowPendingList => [
      { name, time: new Date().toDateString() },...nowPendingList
    ]);
    setShow(false)
  }

  return (
    <div className='App'>
      <header className="App-header">
        <h2>我的看板</h2>
      </header>  
      <Board>
        <BoardColumn className="column-pending" name={
          <>
            待处理<button onClick={click} disabled={show}>+</button>
          </>
        }>
          { show ? <AddBoardCard onSubmit={submit} /> : ''}
          { pendingList.map(props => <BoardCard key={props.name} {...props} />) }
        </BoardColumn>

        <BoardColumn className="column-doing" name="进行中">
          { doingList.map(props => <BoardCard key={props.name} {...props} />) }
        </BoardColumn>

        <BoardColumn className="column-completed" name="已完成">
          { completedList.map(props => <BoardCard key={props.name} {...props} />) }
        </BoardColumn>
      </Board>
    </div>
  );
}

export default App;
