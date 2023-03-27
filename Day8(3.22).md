今天（3.22）学习了以下内容：

1. 第三方库——immer

   > 将todos的第二条标记成完成（isComplete改变为true）
   >

   ```js
   //当state的数据结构比较简单时，可以使用扩展运算符
   const [todos, setTodos] = useState([
       {
         id: "4646DGEGN",
         title:"烧开水",
         isComplete: true
       },
       {
         id: "ETET12412",
         title:"抓蚯蚓",
         isComplete: false
       },
       {
         id: "464635235fe",
         title:"晾干",
         isComplete: false
       }
     ])
     setTodos([
         ...todos.slice(0, 1),
         //数组内的对象同样应该是不可变的，所以必须新建一个对象
         {...todos[1], isComplete: true},
         ...todos.slice(2)
     ])
   ```

   ```js
   //当state的数据结构比较复杂时，可以使用immer
   //使用之前通过npm install -S immer安装一下
   import produce from 'immer'
   const [todos, setTodos] = useState([
       {
         id: "4646DGEGN",
         title:"烧开水",
         status: {
           isComplete: true,
           isDelayed: false
         }
       },
       {
         id: "ETET12412",
         title:"抓蚯蚓",
         status: {
           isComplete: false,
           isDelayed: false
         }
       },
       {
         id: "464635235fe",
         title:"晾干",
         status: {
           isComplete: false,
           isDelayed: false
         }
       },
     ])
     //可以直接修改，immer会为我们生成一个新的实例draft，直接set就好
     const newTodos = produce(todos, draft => {
       draft[1].status.isComplete = true
     })
     setTodos(newTodos)
   ```

2. 关于demo代码优化

   > 观察程序中相似代码的六个函数，根据功能的具体实现，找出解决问题的相同思路，抽成一个函数。
   >
   > 因为这六个函数所实现的整体功能都是从源tab栏中找到被点击的数据项进行删除操作，接着将这一条数据项添加到目的tab栏中。
   >
   > 所以定义一个函数Toggle，有了以下两种方案

   1. 定义map对象，整体共三个对象（为了区分而定义的type值：pending、doing、completed），每个对象里面的内容如下：

      - key值为根据功能所划分的四个项：

        1. 删除操作deleteTabOperation——对应setXxxingList（XxxList为源tab栏）函数
        2. 源tab栏fromTab——对应xxxingList
        3. 添加操作addTabOperation——对应setXxxingList（XxxList为目的tab栏）函数
        4. 目的tab栏toTab——对应xxxingList

      - value值为每项具体的值，在函数中使用map时通过解构赋值把map中的key解构出来即可

      - 这时，函数只需要type和name两个参数，并且因为考虑到一个源tab栏两个按钮会对应两个不同的目的tab栏，所以定义了两个map（map1、map2）和两个函数（firstToggle、secondToggle），具体实现如下：

        ```js
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
        ```

      - 但是如上发现map1和map2只有toTab不同，所以有了下面第二种方法

   2. 不额外定义对象（map1、map2），直接把根据功能所划分的四个项（deleteTabOperation, fromTab, addTabOperation, toTab）添加到函数的形参中。

      - 函数的定义

        ```js
          const Toggle = (name, deleteTabOperation, fromTab, addTabOperation, toTab) =>   {
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
        ```

      - 在BoardCard中

        ```js
        const BoardCard = ({ name, time, Toggle, remove, add1, deleteData, addData1, add2, addData2 }) => {
          return (
            <li className='card'>
              <div className='card-name'>{name}</div>
              <div className='card-time'>{time}</div>
              <button onClick={() => {
                  Toggle(name, remove, deleteData, add1, addData1)
              }}>第一个</button>
              <button onClick={() => {
                  Toggle(name, remove, deleteData, add2, addData2)
              }}>第二个</button>
            </li>
          );
        };
        ```

      - 在使用函数的时候将具体的值作为实参传过去就好了

        ```js
        //函数使用以pendingList举例如下：
          {pendingList.map(item => <BoardCard key={item.name} 
        	{...item} 
        	type='pending'  
        	Toggle={Toggle} 
        	remove={setPendingList} 
        	add1={setDoingList} 
        	deleteData={pendingList} 
        	addData1={doingList} 
        	add2={setCompletedList}  
        	addData2={completedList}/>
          )}
        ```
