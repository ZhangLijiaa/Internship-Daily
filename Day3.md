今天（3.16）学习了以下内容：

1. hook——useMemo

   - 用来缓存一个无副作用的因变量，需要显式的指定该因变量依赖的自变量

   - ```js
     const y = useMemo(() => 2 * x + 1, [x])
     ```

2. hook——useCallback

   - 用来缓存一个无副作用的函数类型的因变量，需要显式的指定该因变量依赖的自变量

   - ```js
     const changeX = useCallback(() => setX(x + 1), [x])
     ```

3. hook——useContext

   - 在第一级组件通过createContext创建context后，在第四级组件通过useContext可以直接消费一级组件创建的context
   - 使跨层级的传递自变量变得很简单

4. 关于对react的认识

   - fn(data)——UI

   - props是组件对外的接口，state是组件对内的接口

     - props定义一个子组件，在父组件使用该子组件的时候，在组件标签中添加多个自定义属性和相应的值，子组件的参数名称与刚刚所说的自定义属性一致，props还可以传递函数

       ```js
       子：
       const Title = ({title}) => {
           return <h2>{title}</h2>
       }
       父：
       function App() {
           return(
           	<Title title = {'我的看板'}/>
           )
       }
       ```

     - state

       ```js
       function App() {
           const[title2, setTitle2] = useState('test1')
       }
       ```

5. 关于demo实现点击改变状态

   - 点击按钮，清除待完成所有项

     ```js
     const BoardCard = ({ name, time, transform}) => {
       return (
         <li className='card'>
           <div className='card-name'>{name}</div>
           <div className='card-time'>{time}</div>
           <button onClick={() => {
             transform()
           }}>+</button>
         </li>
       )
     }
     const transform = () => {
         setPendingList([])
     }
     ```

   - 点击按钮，清除待完成所点击项

     ```js
     const BoardCard = ({ name, time, transform}) => {
       return (
         <li className='card'>
           <div className='card-name'>{name}</div>
           <div className='card-time'>{time}</div>
           <button onClick={() => {
             transform(name)
           }}>+</button>
         </li>
       )
     }
     const transform = (name) => {
         setPendingList(pendingList.filter((element, index, array) => {
           return element.name !== name
         }))
     }
     ```

   - 点击按钮，将所点击项转移到进行中

     ```js
     const BoardCard = ({ name, time, transform }) => {
       return (
         <li className='card'>
           <div className='card-name'>{name}</div>
           <div className='card-time'>{time}</div>
           <button onClick={() => {
             transform(name)
           }}>+</button>
         </li>
       );
     };
     const transform = (name) => {
         setPendingList(pendingList.filter((element, index, array) => {
           return element.name !== name
         }))
         const a = pendingList.find((element, index, array) => {
           return element.name === name
         })
         const arr = doingList
         arr.push(a)
         setDoingList(arr)
     }
     ```
