今天（3.21）学习了以下内容：

1. String对象

   - String.prototype.charAt()

     > 找到指定位置的字符
     >
     > 参数：从0开始编号的位置
     >
     > 返回值：指定位置的字符
     >
     > 如果参数为负数或大于等于字符串的长度，返回空字符串。

     ```js
     var s = new String('zhang')
     s.charAt(1) //"h"
     s.charAt(-1) //""
     s.charAt(5) //""
     ```

   - String.prototype.concat()

     > 连接两个字符串
     >
     > 参数：字符串，可接受多个参数
     >
     > 返回值：字符串
     >
     > 如果参数不是字符串，会将其先转为字符串，然后再连接。

     ```js
     var one = 1
     var two = 2
     var three = '3'
     ''.concat(one, two, three) // "123"
     ```

   - String.prototype.slice()

     > 从原串中取出子串
     >
     > 参数：开始截取的位置，截取结束的位置（不含该位置）。
     >
     > 返回值：字符串

     ```js
     'abcdefgh'.slice(0, 5) //"abcde"
     //如果省略第二个参数，则表示子字符串一直到源字符串结束。
     'abcdefgh'.slice(5) //"fgh"
     //如果参数是负值，该负值需要加上字符串的长度。
     'abcdefgh'.slice(-5) //"defgh"
     'abcdefgh'.slice(0, -5) //"abc"
     'abcdefgh'.slice(-2, -1) //"g"
     //如果第一个参数大于第二个参数（正数情况下），返回一个空字符串。
     'abcdefgh'.slice(2, 1) //""
     ```

   - String.prototype.substring()

     > 作用和slice相同，使用区别如下：

     ```js
     //如果第一个参数大于第二个参数，会自动更换两个参数的位置
     'abcdefgh'.substring(2, 1) //"b"
     //如果参数是负数，会自动将负数转为0
     'abcdefgh'.substring(-3) //"abcdefgh"
     ```

   - String.prototype.substr()

     > 作用和slice及substring相同，使用区别如下：
     >
     > 参数：开始截取的位置，截取的长度。
     >
     > 返回值：字符串

     ```js
     'abcdefgh'.substr(5, 3) //"fgh"
     //如果第一个参数是负数，表示倒数计算的字符位置
     'abcdefgh'.substr(-3) //"fgh"
     //如果第二个参数是负数，将被自动转为0，因此会返回空字符串
     'abcdefgh'.substr(5, -1) //""
     ```

   - String.prototype.indexOf()，String.prototype.lastIndexOf()

     > 和数组的这两个方法类似，可以接受第二个参数：
     >
     > indexOf的第二个参数，表示从该位置开始向后匹配。
     >
     > lastIndexOf的第二个参数，表示从该位置起向前匹配。

     ```js
     "hello world".indexOf('o', 6) //7
     "hello world".lastIndexOf('o', 6) //4
     ```

   - String.prototype.split()

     > 分割字符串
     >
     > 参数：分隔符
     >
     > 返回值：由分割出来的子字符串组成的数组

     ```js
     'a|b|c'.split('|') // ["a", "b", "c"]
     //还可以接受第二个参数，限定返回数组的最大成员数
     'a|b|c'.split('|', 2) // ["a", "b"]
     ```

2. JSON对象

   - JSON.stringify()
     - 将一个值转为JSON字符串
     - 第二个参数
       - 可以为一个数组，指定参数对象的哪些属性需要转成字符串
       - 可以为一个函数，用来更改JSON.stringify()的返回值
   - JSON.parse()
     - 将JSON字符串转成相应的值
     - 第二个参数可以接受一个处理函数

   - ```js
     JSON.stringify([1, 2, "张三"]) //'[1, 2, "张三"]'
     JSON.parse('[1, 2, "张三"]') //[1, 2, "张三"]
     ```

3. ES6

   - 扩展运算符

     - 对象的扩展

       > 用于**取出参数对象中的所有可遍历属性**，**拷贝到当前对象中**。

       ```js
       //基本用法
       var json = {a:1, b:2, c:3}
       var json2 = {...json, d:4}
       console.log(json2) //{a:1, b:2, c:3, d:4}
       //合并对象
       var name = {"name":"张三"}
       var age = {"age":18}
       var person = {...name, ...age}
       console.log(person) //{"name":"张三", "age":18}
       ```
       
     - 数组的扩展
     
       > 像是剩余参数的逆运算，**将一个数组转为用逗号分隔的参数系列**
     
       
       ```js
       //解构赋值
       console.log(...[1, 2, 3]) //1 2 3
       console.log([1, ...[2, 3, 4], 5]) //[1, 2, 3, 4, 5]
       //合并数组
       console.log([...[1, 2], ...[3, 4]]) //[1, 2, 3, 4]
       ```
     
     - 函数的扩展
     
       ```js
       //基本用法
       function add(x, y, z) {
           return x + y + z
       }
       var numbers = [1, 2, 3, 4]
       add(...numbers) //6
       ```
   
   - 解构赋值
   
     - 数组解构
   
       ```js
       //基本用法
       let color = ["red", "orange", "yellow"]
       let [firstColor, secondColor] = color
       console.log(firstColor) //"red"
       console.log(secondColor) //"orange"
       //剩余运算符
       let [a, ...b] = [1, 2, 3] //a = 1 b = [2, 3]
       ```
   
   
     - 对象解构
   
       ```js
       //基本用法
       let person = {name:"张三", age:18, sex:"男"}
       let {name, age, sex} = person
       console.log(name) //"张三"
       console.log(age) //18
       console.log(sex) //"男"
       //剩余运算符
       let {a, b, ...rest} = {a:1, b:2, c:3, d:4} //a = 1 b = 2 rest = {c:3, d:4}
       ```

4. 关于demo代码优化

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

      - 在使用函数的时候将具体的值作为实参传过去就好了

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