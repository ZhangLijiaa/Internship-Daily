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

  const Toggle = (name, deleteTabOperation, fromTab, addTabOperation, toTab) => {
    //把map里的数据解构赋值
    //删除fromTab的数据
    deleteTabOperation(fromTab.filter((element, index, array) => {
      return element.name !== name
    }))
    //找到fromTab中被点击的那条数据项
    const a = fromTab.find((element, index, array) => {
      return element.name === name
    })
    //const arr1 = toTab
    toTab.push(a)//把被点击的那条数据项添加到toTab中
    addTabOperation(toTab)//将toTab作为addTabOperation的参数，更新对应的值
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
            {pendingList.map(item => <BoardCard key={item.name} {...item} type='pending'  Toggle={Toggle} remove={setPendingList} add1={setDoingList} deleteData={pendingList} addData1={doingList} add2={setCompletedList}  addData2={completedList}/>)}
        </BoardColumn>

        <BoardColumn className="column-doing" name="处理中">
          { doingList.map(item => <BoardCard key={item.name} {...item} type='doing'  Toggle={Toggle} remove={setDoingList} add1={setPendingList} deleteData={doingList} addData1={pendingList} add2={setCompletedList}  addData2={completedList}/>)}
        </BoardColumn>

        <BoardColumn className="column-completed" name="已完成">
          { completedList.map(item => <BoardCard key={item.name} {...item} type='completed' Toggle={Toggle} remove={setCompletedList} add1={setPendingList} deleteData={completedList} addData1={pendingList} add2={setDoingList}  addData2={doingList}/>)}
        </BoardColumn>
      </Board>
    </div >
  );
}

export default App;