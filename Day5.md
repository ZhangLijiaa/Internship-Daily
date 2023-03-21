今天（3.20）学习了以下内容：

1. 举例将本地项目上传到github

   ```shell
   $ git clone https://github.com/ZhangLijiaa/Internship-Daily.git
   $ git clone git@github.com:ZhangLijiaa/Internship-Daily.git
   code Internship-Daily/
   vsCode-->源代码管理器-->+-->提交
   ```

   ```shell
   $ git add .
   $ git commit -m "提交说明"
   $ git push origin main
   ```

2. Object对象

   - 遍历对象的属性（参数：对象，返回值：数组）
     - Object.keys() —— 只返回可枚举的属性
     - Object.getOwnPropertyNames() —— 不可枚举的属性也返回
   - 实例方法
     - Object.prototype.valueOf() —— 返回当前对象对应的值，默认情况下返回对象本身
     - Object.prototype.toString() —— 返回一个对象的字符串形式，默认情况下返回类型字符串
     - Object.prototype.hasOwnProperty() —— 接受一个字符串作为参数，返回一个布尔值，表示该实例对象自身是否具有该属性

3. Array对象

   - push()，pop()

     > push方法用于**在数组的末端添加一个或多个元素**，并**返回添加新元素后的数组长度**。<u>改变原数组</u>。
     >
     > 形参：要添加的元素。

     > pop方法用于**删除数组的最后一个元素**，并**返回该元素**。<u>改变原数组</u>。
     >
     > 形参：无。

     ```js
     var arr = [1, 3, 2, 4]
     res = arr.push(5)
     console.log(arr) //[1, 3, 2, 4, 5]
     console.log(res) //5
     ```
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.pop()
     console.log(arr) //[1, 3, 2]
     console.log(res) //4
     ```
   
   - shift()，unshift()

     > shift方法用于**删除数组的第一个元素**，并**返回该元素**。<u>改变原数组</u>。
     >
     > 形参：无。
   
     > unshift方法用于**在数组的第一个位置添加元素**，并**返回添加新元素后的数组长度**。<u>改变原数组</u>。
     >
     > 形参：要添加的元素。

     ```js
     var arr = [1, 3, 2, 4]
     res = arr.shift()
     console.log(arr) //[3, 2, 4]
     console.log(res) //1
     ```
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.unshift(6)
     console.log(arr) //[6, 1, 3, 2, 4]
     console.log(res) //5
     ```
   
   - join()

     > join方法用于**指定参数作为分隔符**，并**返回所有数组成员连接成的一个字符串**。<u>不改变原数组</u>。
     >
     > 形参：要连接的分隔符。
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.join("+")
     console.log(arr) //[1, 3, 2, 4]
     console.log(res) //1+3+2+4
     ```
   
   - concat()
   
     > concat方法用于**多个数组的合并**，并**返回一个新数组**。<u>不改变原数组</u>。
     >
     > 形参：要连接的数组。
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.concat(5, 7, 8, "张三")
     console.log(arr) //[1, 3, 2, 4]
     console.log(res) //[1, 3, 2, 4, 5, 7, 8, "张三"]
     ```

   - reverse()

     > reverse方法用于**颠倒排列数组元素**，并**返回改变后的数组**。<u>改变原数组</u>。
     >
     > 形参：无。

     ```js
     var arr = [1, 3, 2, 4]
     res = arr.reverse()
     console.log(arr) //[4, 2, 3, 1]
     console.log(res) //[4, 2, 3, 1]
     ```
   
   - slice()
   
     > slice方法用于**提取目标数组的一部分**，并**返回一个新数组**。<u>不改变原数组</u>。
     >
     > 形参：1、开始提取的下标，2、结束提取的下标。
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.slice(1, 2)
     console.log(arr) //[1, 3, 2, 4]
     console.log(res) //[3]
     ```
   
   - splice()
   
     > splice方法用于**删除原数组的一部分成员，并可以在删除的位置添加新的数组成员**，**返回被删除的元素**。<u>改变原数组</u>。
     >
     > 形参：1、删除的起始位置（从0开始），2、被删除的元素个数。如果后面还有更多的参数，则表示这些就是要被插入数组的新元素。
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.splice(1, 2)
     console.log(arr) //[1, 4]
     console.log(res) //[3, 2]
     ```
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.splice(1, 2, 7, 8)
     console.log(arr) //[1, 7, 8, 4]
     console.log(res) //[3, 2]
     ```
   
   - sort()
   
     > sort方法用于**对数组成员排序**，并**返回改变后的数组**。<u>改变原数组</u>。
     >
     > 形参：无。
   
     ```js
     var arr = [1, 3, 2, 4]
     res = arr.sort()
     console.log(arr) //[1, 2, 3, 4]
     console.log(res) //[1, 2, 3, 4]
     ```
   
   - map()
   
     > map方法**将数组的所有成员依次传入参数函数**，**把每一次的执行结果组成一个新数组返回**。<u>不改变原数组</u>。
     >
     > 形参：函数。
   
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.map(function(item) {
         return item * 10
     })
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     console.log(res) //[10, 30, 20, 40, 30, 30, 70, 80]
     ```
   
   - forEach()
   
     > forEach方法与map方法相似，也是**对数组的所有成员依次执行参数函数**。但是**forEach方法没有返回值**。<u>不改变原数组</u>。
     >
     > 形参：函数。
   
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.forEach(function(item, index, arr) {
         console.log(item, "————", index, "————", arr)
     })
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     ```
   
   - filter()
   
     > filter方法用于**过滤数组成员**，并返回满足条件的成员组成的新数**组**。<u>不改变原数组</u>。
     >
     > 形参：函数。
   
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.filter(function(item) {
         return item > 3
     })
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     console.log(res) //[4, 7, 8]
     ```
   
   - some()，every()
   
     > some方法是**只要一个成员的返回值是true，则整个some方法的返回值就是true，否则返回false**。<u>不改变原数组</u>。
     >
     > 形参：函数。
   
     > every方法是**所有成员的返回值都是true，整个every方法才返回true，否则返回false**。<u>不改变原数组</u>。
     >
     > 形参：函数。
   
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.some(function(item) {
         return item > 3
     })
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     console.log(res) //true
     ```
   
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.every(function(item) {
         return item > 3
     })
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     console.log(res) //false
     ```
   
   - indexOf()，lastIndexOf()
   
     > indexOf方法**返回给定元素在数组中第一次出现的位置，如果没有出现则返回-1**。<u>不改变原数组</u>。
     >
     > 形参：要找的元素。
   
     > lastIndexOf方法**返回给定元素在数组中最后一次出现的位置，如果没有出现则返回-1**。<u>不改变原数组</u>。
     >
     > 形参：要找的元素。
<<<<<<< HEAD
     
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.indexOf(3)
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     console.log(res) //1
     ```
     
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.lastIndexOf(3)
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     console.log(res) //5
     ```
   
   - find()
   
     > find方法**获取数组中满足条件的第一个数据**，**返回满足条件的第一个数据，如果没有则返回undefined**。<u>不改变原数组</u>。
     >
     > 形参：函数。
   
     ```js
     var arr = [1, 3, 2, 4, 3, 3, 7, 8]
     res = arr.find(function(item) {
         return item > 3
     })
     console.log(arr) //[1, 3, 2, 4, 3, 3, 7, 8]
     console.log(res) //4
     ```
=======
>>>>>>> eef307a77512aec16c0d76d4be576f21067cca94
