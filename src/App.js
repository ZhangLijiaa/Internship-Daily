import './App.css';
import React, {useState} from 'react';
import Board from './Board';
import BoardColumn from './BoardColumn';
import BoardCard from './BoardCard';
import AddBoardCard from './AddBoardCard';

function App() {
  const [show, setShow] = useState(false)
  
  const [pendingList, setPendingList] = useState([
    { name: '开发任务-3', time: '22-05-22 18:11' },
    { name: '开发任务-6', time: '22-05-22 18:11' },
    { name: '测试任务-1', time: '22-05-22 18:11' }
  ]);
  
  const [doingList, setDoingList] = useState([
    { name: '开发任务-2', time: '22-05-22 18:11' },
    { name: '开发任务-4', time: '22-05-22 18:11' }
  ]);

  const [completedList, setCompletedList] = useState([
    { name: '开发任务-5', time: '22-05-22 18:11' }
  ]);

  const click = (e) => {
    setShow(true)
  }

  const submit = (name) => {
    setPendingList(nowPendingList => [
      { name, time: new Date().toDateString() }, ...nowPendingList
    ]);
    setShow(false)
  }

  const ptodTransform = (name) => {
    setPendingList(pendingList.filter((element, index, array) => {
      return element.name !== name
    }))
    const a = pendingList.find((element, index, array) => {
      return element.name === name
    })
    const arr1 = doingList
    arr1.push(a)
    setDoingList(arr1)
  }
  
  const ptocTransform = (name) => {
    setPendingList(pendingList.filter((element, index, array) => {
      return element.name !== name
    }))
    const b = pendingList.find((element, index, array) => {
      return element.name === name
    })
    const arr2 = completedList
    arr2.push(b)
    setCompletedList(arr2)
  }

  const dtopTransform = (name) => {
    setDoingList(doingList.filter((element, index, array) => {
      return element.name !== name
    }))
    const c = doingList.find((element, index, array) => {
      return element.name === name
    })
    const arr3 = pendingList
    arr3.push(c)
    setPendingList(arr3)
  }

  const dtocTransform = (name) => {
    setDoingList(doingList.filter((element, index, array) => {
      return element.name !== name
    }))
    const d = doingList.find((element, index, array) => {
      return element.name === name
    })
    const arr4 = completedList
    arr4.push(d)
    setCompletedList(arr4)
  }
  
  const ctopTransform = (name) => {
    setCompletedList(completedList.filter((element, index, array) => {
      return element.name !== name
    }))
    const e = completedList.find((element, index, array) => {
      return element.name === name
    })
    const arr5 = pendingList
    arr5.push(e)
    setPendingList(arr5)
  }

  const ctodTransform = (name) => {
    setCompletedList(completedList.filter((element, index, array) => {
      return element.name !== name
    }))
    const f = completedList.find((element, index, array) => {
      return element.name === name
    })
    const arr6 = doingList
    arr6.push(f)
    setDoingList(arr6)
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
            {pendingList.map(item => <BoardCard key={item.name} {...item} type='pending'  ptodTransform={ptodTransform} ptocTransform={ptocTransform}/>)}
        </BoardColumn>

        <BoardColumn className="column-doing" name="处理中">
          { doingList.map(item => <BoardCard key={item.name} {...item} type='doing'  dtopTransform={dtopTransform} dtocTransform={dtocTransform} />) }
        </BoardColumn>

        <BoardColumn className="column-completed" name="已完成">
          { completedList.map(item => <BoardCard key={item.name} {...item} type='completed' ctopTransform={ctopTransform} ctodTransform={ctodTransform}/>) }
        </BoardColumn>
      </Board>
    </div >
  );
}

export default App;