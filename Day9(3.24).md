今天（3.24）学习了以下内容：

1. bind方法返回一个函数，并可以改变this指向

2. 解决react中返回值含\n显示不换行问题的方法

   - 把返回值中\n替换符号

     ```js
     replace(/\\n/g, '<br/>')
     ```

   - 添加样式

     ```css
     <div style={{whiteSpace:'pre-wrap'}}></div>
     ```

3. 用js实现模糊查询的几种方法

   - split方法

     ```js
       /**
        * 使用spilt方法实现模糊查询
        * @param  {Array}  list     进行查询的数组
        * @param  {String} keyWord  查询的关键词
        * @return {Array}           查询的结果
        */
       function search(list, keyWord) {
         var arr = [];
         for (var i = 0; i < list.length; i++) {
           if (list[i].split(keyWord).length > 1) {
             arr.push(list[i]);
           }
         }
         return arr;
       }
     ```

   - match方法

     ```js
       /**
        * 使用match方法实现模糊查询
        * @param  {Array}  list     进行查询的数组
        * @param  {String} keyWord  查询的关键词
        * @return {Array}           查询的结果
        */
       function search(list, keyWord) {
         var arr = [];
         for (var i = 0; i < list.length; i++) {
           if (list[i].match(keyWord) != null) {
             arr.push(list[i]);
           }
         }
         return arr;
       }
     ```

   - indexof方法

     ```js
       /**
        * 使用indexof方法实现模糊查询
        * @param  {Array}  list     进行查询的数组
        * @param  {String} keyWord  查询的关键词
        * @return {Array}           查询的结果
        */
       function search(list, keyWord) {
         var arr = [];
         for (var i = 0; i < list.length; i++) {
           if (list[i].indexOf(keyWord) >= 0) {
             arr.push(list[i]);
           }
         }
         return arr;
       }
     ```

   - test方法（正则匹配）

     ```js
       /**
        * 使用test方法实现模糊查询
        * @param  {Array}  list     原数组
        * @param  {String} keyWord  查询的关键词
        * @return {Array}           查询的结果
        */
       function fuzzyQuery(list, keyWord) {
         var reg =  new RegExp(keyWord);
         var arr = [];
         for (var i = 0; i < list.length; i++) {
           if (reg.test(list[i])) {
             arr.push(list[i]);
           }
         }
         return arr;
       }
     ```

4. css设置悬浮效果的方法

   - 首先给元素添加“position: fixed;”样式，固定元素的位置，让元素悬浮在页面中，不随浏览器窗口的滚动条滚动而变化；
   - 然后使用top、bottom、left、right属性设置元素的悬浮位置即可。

5. js判断是否为数组的方法

   - instanceof

     ```js
     var arr = [1, 2 ,3]
     console.log(arr instanceof Array) // true
     ```

   - 原型链（constructor）

     ```js
     var arr = [1, 2, 3]
     console.log(arr.__proto__.constructor === Array) // true
     console.log(arr.constructor === Array) // true
     ```

   - Object.prototype.toString

     ```js
     function isArray(arr) {
       return Object.prototype.toString.call(arr) === '[object Array]'
     }
     ```

   - Array.isArray

     ```js
     function isArray(arr) {
       return Array.isArray(arr)
     }
     ```

6. js合并数组的方法

   - for

     ```js
     let arr1 = [1, 2]
     let arr2 = [3, 4]
     for (let i = 0; i < arr2.length; i++) {
     	arr1.push(arr2[i])
     }
     console.log(arr1)// [1, 2, 3, 4]
     ```

   - arr1.concat(arr2)

     ```js
     let arr1 = [1, 2]
     let arr2 = [3, 4]
     arr1 = arr1.concat(arr2)
     console.log(arr1)// [1, 2, 3, 4]
     ```

   - arr1.push.apply(arr1, arr2)

     ```js
     let arr1 = [1, 2]
     let arr2 = [3, 4]
     arr1.push.apply(arr1, arr2)
     console.log(arr1)// [1, 2, 3, 4]
     ```

   - [...arr1, ...arr2]

     ```js
     let arr1 = [1, 2]
     let arr2 = [3, 4]
     arr1 = [...arr1, ...arr2]
     console.log(arr1)// [1, 2, 3, 4]
     ```

   - push(...arr1)

     ```js
     let arr1 = [1, 2]
     let arr2 = [3, 4]
     arr1.push(...arr2)
     console.log(arr1)// [1, 2, 3, 4]
     ```