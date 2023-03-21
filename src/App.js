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
    pending:{//操作标识符
      deleteTabOperation:setPendingList,//删除数据列表
      fromTab:pendingList,//要被删除的数据来源
      addTabOperation:setCompletedList,//添加数据列表
      toTab:completedList//要被添加的数据列表
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

  const firstToggle = (type, name, map) => {
    //把map里的数据解构赋值
    const {deleteTabOperation, fromTab, addTabOperation, toTab} = map[type]
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
            {pendingList.map(item => <BoardCard key={item.name} {...item} type='pending'  firstToggle={firstToggle} map1={map1} map2={map2}/>)}
        </BoardColumn>

        <BoardColumn className="column-doing" name="处理中">
          { doingList.map(item => <BoardCard key={item.name} {...item} type='doing'  firstToggle={firstToggle} map1={map1} map2={map2}/>) }
        </BoardColumn>

        <BoardColumn className="column-completed" name="已完成">
          { completedList.map(item => <BoardCard key={item.name} {...item} type='completed' firstToggle={firstToggle} map1={map1} map2={map2}/>) }
        </BoardColumn>
      </Board>
    </div >
  );
}

export default App;