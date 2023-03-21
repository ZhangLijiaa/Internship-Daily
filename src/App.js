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

  const map1 = {
    pending:{
      deleteTabOperation:setPendingList,
      fromTab:pendingList,
      addTabOperation:setDoingList,
      toTab:doingList
    },
    doing:{
      deleteTabOperation:setDoingList,
      fromTab:doingList,
      addTabOperation:setPendingList,
      toTab:pendingList
    },
    completed:{
      deleteTabOperation:setCompletedList,
      fromTab:completedList,
      addTabOperation:setPendingList,
      toTab:pendingList
    }
  }

  const map2 = {
    pending:{
      deleteTabOperation:setPendingList,
      fromTab:pendingList,
      addTabOperation:setCompletedList,
      toTab:completedList
    },
    doing:{
      deleteTabOperation:setDoingList,
      fromTab:doingList,
      addTabOperation:setCompletedList,
      toTab:completedList
    },
    completed:{
      deleteTabOperation:setCompletedList,
      fromTab:completedList,
      addTabOperation:setDoingList,
      toTab:doingList
    }
  }

  const click = (e) => {
    setShow(true)
  }

  const submit = (name) => {
    setPendingList(nowPendingList => [
      { name, time: new Date().toDateString() }, ...nowPendingList
    ]);
    setShow(false)
  }

  const firstToggle = (type, name) => {
    const {deleteTabOperation, fromTab, addTabOperation, toTab} = map1[type]
    deleteTabOperation(fromTab.filter((element, index, array) => {
      return element.name !== name
    }))
    const a = fromTab.find((element, index, array) => {
      return element.name === name
    })
    const arr1 = toTab
    arr1.push(a)
    addTabOperation(arr1)
  }

  const secondToggle = (type, name) => {
    const {deleteTabOperation, fromTab,addTabOperation, toTab} = map2[type]
    deleteTabOperation(fromTab.filter((element, index, array) => {
      return element.name !== name
    }))
    const b = fromTab.find((element, index, array) => {
      return element.name === name
    })
    const arr2 = toTab
    arr2.push(b)
    addTabOperation(arr2)
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
            {pendingList.map(item => <BoardCard key={item.name} {...item} type='pending'  firstToggle={firstToggle} secondToggle={secondToggle}/>)}
        </BoardColumn>

        <BoardColumn className="column-doing" name="处理中">
          { doingList.map(item => <BoardCard key={item.name} {...item} type='doing'  firstToggle={firstToggle} secondToggle={secondToggle} />) }
        </BoardColumn>

        <BoardColumn className="column-completed" name="已完成">
          { completedList.map(item => <BoardCard key={item.name} {...item} type='completed' firstToggle={firstToggle} secondToggle={secondToggle}/>) }
        </BoardColumn>
      </Board>
    </div >
  );
}

export default App;