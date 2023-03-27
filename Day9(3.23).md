今天（3.23）学习了以下内容：

1. JavaScript 的 bind() 方法

   > f.bind(obj)可以理解为obj.f()

   - 可以用于改变函数的 this 指向

   - 它接受两个参数

     - 第一个参数是 this 的上下文

     - 第二个参数可以是一个参数数组

       ```js
       function f(y, z) {
           return this.x + y + z 
       }
       var m = f.bind({x:1}, 2)
       console.log(m(3)) //6
       /*
       	因为bind函数第一个参数是{x:1}，所以this指向{x:1}
       	从第二个参数起，会依次传递给原始函数，所以参数2是f函数的y参数
       	最后调用m(3)的时候，参数3就是f函数的z参数
       	所以执行结果为1+2+3=6
       */
       ```

2. input的onchange事件

   - 触发步骤
     - 当input捕获到焦点后，系统储存当前值
     - 当input焦点离开后，判断当前值与之前存储的值是否不等，如果为true，则触发onchange事件。

3. 拖拽事件

   | 拖拽事件  |                             说明                             |
   | :-------: | :----------------------------------------------------------: |
   | dragstart |                    拖拽元素开始拖拽时触发                    |
   |   drag    |                     在拖拽过程中持续触发                     |
   |  dragend  |     拖拽完成后，释放鼠标时触发，一般是拖拽区域绑定该事件     |
   | dragenter |      拖拽刚进入目标区域时触发，一般是目标区域绑定该事件      |
   | dragover  | 拖拽进入目标区域后持续触发，可以给目标区域设置拖拽等视觉效果，一般是目标区域绑定该事件 |
   | dragleave |       拖拽离开目标区域时触发，一般是目标区域绑定该事件       |
   |   drop    | 拖拽完成后，释放鼠标时触发，一般是目标区域绑定该事件。另外触发该事件，需要在先dragover事件阻止默认事件，不然drop事件不会触发。如果从外部拖拽图片等文件，需要阻止默认行为，不然浏览器默认会打开 |

   > 注意：拖拽区域需要设置draggable属性为true，这个属性代表拖拽区域可拖拽，不然无效果。

   - dragstart, drag, dragend事件是拖拽区域绑定

   - dragenter, dragover, dragleave, drop事件是目标区域绑定

   - 拖放元素时，拖放事件发生顺序如下：dragstart--drag--dragenter--dragover--drop--dragend--dragleave

   - dataTransfer属性如下：

     - setData(key, value)

       - 该方法只能在dragstart中调用，其他事件回调中回调无效

       - key：数据的类型或格式（也可以自定义）

         |     名称      |   含义   |
         | :-----------: | :------: |
         |  text/plain   | 文本格式 |
         |   text/html   | html格式 |
         | text/uri-list | 链接格式 |

     - effectAllowed

       - 设置或返回被拖动元素允许的操作行为。通常会与dropEffect结合使用

       - 只能在dragstart中设置，其他事件回调中设置无效

         |   名称   |                         含义                         |
         | :------: | :--------------------------------------------------: |
         |   none   | 不允许拖放，一旦设置了该属性，所有的拖放事件都无效了 |
         |   copy   |                     复制拖动元素                     |
         |   move   |                         移动                         |
         |   link   |                         链接                         |
         | copymove |                     移动或者链接                     |
         | copylink |                     复制或者链接                     |
         | linkMove |                     链接或者移动                     |
         |   all    |                    任何操作都允许                    |

     - dropEffect

       - 设置目标元素上允许的拖放行为
       - 可设置的值有：none copy link move
       - 如果dropEffect的值不在effectAllowed范围内时，拖放操作不会实现。

4. 如果整个页面和程序状态大致不变、而需要非常频繁地读取和比对系统的状态就用react