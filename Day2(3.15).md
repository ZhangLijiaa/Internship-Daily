今天（3.15）学习了以下内容：

1. context的使用方法

   ```js
   //1）创建Context容器对象：
   	const XxxContext = React.createContext()
   //2）渲染子组件时，外面包裹XxxContext.Provider，通过value属性给后代组件传递数据：
   	<XxxContext.Provider value={数据}>
           子组件
       </XxxContext.Provider>
   //3）后代组件读取数据：
   	//第一种方式：仅适用于类组件
   	static contextType = XxxContext //声明接收context
   	this.context //读取context中的value数据
   	//第二种方式：函数组件与类组件都可以
   	<XxxContext.Consumer>
           {
           	value => ( //value就是context中的value数据
           		要显示的内容
           	)
       	}
   	</XxxContext.Consumer>
   ```

2. ref

   - 回调形式的ref，<input ref = {c => this.input1 = c }/> const {input1} = this
   - React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点，该容器是“专人专用”的，myRef = React.createRef() <input ref = {this.myRef}/>

3. State Hook

   - State Hook让函数组件也可以有state状态，并进行状态数据的读写操作
   - 语法：const [xxx, setXxx] = React.useState(initValue)
   - useState()说明：
     - 参数：第一次初始化指定的值在内部作缓存
     - 返回值：包含两个元素的数组，第一个为内部当前状态值，第二个为更新状态值的函数
   - setXxx()两种写法：
     - setXxx(newValue)：参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
     - setXxx(value => newValue)：参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

4. Effect Hook

   - Effect Hook可以让你在函数组件中执行副作用操作（用于模拟类组件中的生命周期钩子）

   - React中的副作用操作：

     - 发ajax请求数据获取
     - 设置订阅 / 启动定时器
     - 手动更改真实DOM

   - 语法和说明：

     ```js
     useEffect(() => {
         //在此可以执行任何带副作用操作
         return() => {
             //在此做一些收尾工作，比如清楚定时器/取消订阅等
         } [stateValue] //如果指定的是[]，回调函数只会在第一次render()后执行
     })
     ```

   - 可以把useEffect Hook看做如下三个函数的组合

     - componentDidMount()
     - componentDidUpdate()
     - componentWillUnmount()

5. Ref Hook

   - Ref Hook可以在函数组件中存储/查找组件内的标签或任意其他数据
   - 语法：const refcontainer = useRef()
   - 作用：保存标签对象，功能与React.createRef()一样

6. demo把整体的样式写好了，实现了每个卡片添加任务的功能，但是三个卡片之间的关联还没有处理好，明天再看一下吧。