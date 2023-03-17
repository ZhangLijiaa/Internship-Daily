今天（3.17）学习了以下内容：

1. react中使用props的两种场景

   - 数据来自父组件
   - 跨组件传数据

2. 关于数组的方法

   - 改变原数组的方法
     - pop、shift、push、unshift、reverse、splice、sort、fill
   - 不改变原数组的方法
     - concat、join、slice、filter、reduce、find、findIndex

3. 有关git的一些操作

   ###### 创建仓库

   ```shell
   1)创建空目录
   $ mkdir xxx
   $ cd xxx
   $ pwd
   显示当前目录
   2)把这个目录变成git可以管理的仓库
   $ git init
   ```

   ###### 把目录下的文件添加到版本库

   ```shell
   1)把文件添加到仓库
   $ git add xxx.txt
   2)把文件提交到仓库
   $ git commit -m "wrote a xxx file"
   例：
   $ git add xxx.txt
   $ git add xxx.txt xxx.txt
   $git commit -m "add 3 files"
   ```

   ###### 删除文件

   ```shell
   $ rm xxx,txt
   ```

   ###### 添加远程库

   ```shell
   1)关联一个远程库
   $ git remote add xxx git@github.com:ZhangLijiaa/xxx.git
   2)第一次推送master分支的所有内容
   $ git push -u origin master
   3)此后，每次本地提交后，只要有必要，推送最新修改
   $ git push origin master
   ```

   ###### 从远程库克隆

   ```shell
   $ git clone git@github.com:ZhangLijiaa/xxx.git
   ```

   ###### 创建与合并分支

   ```shell
   1)查看分支
   $ git branch
   2)创建分支
   $ git branch xxx
   3)切换分支
   $ git checkout xxx 或 $ git switch xxx
   4)创建+切换分支
   $ git checkout -b xxx 或 git switch -c xxx
   5)合并某分支到当前分支
   $ git merge xxx
   6)删除分支
   $git branch -d xxx
   ```