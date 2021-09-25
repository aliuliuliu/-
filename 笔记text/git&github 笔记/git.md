# Git

### 1.简介

​	

##### 版本控制的重要性

　没有版本控制系统的话，代码可能被别人或自己不小心覆盖或遗失、也不知道是谁因为什么原因改了这段代码、也没办法可以复原回前几天的修改。有了版本控制系统，开发人员只要将每次程式码的变更都纪录（Commit）起来，并且透过版本控制系统中进行更新。

##### 版本控制的目的

1. 将所有东西都放进版本控制系统

   ​		包括源代码、测试程序、文件、设定档、各种自动化脚本等。

   ​		除了新成员可以很容易拉出最新的版本马上开始工作之外，我们也希望在测试环境、正式环境中，也可以随时更新到我们所指定的版本，因此将所有变更的纪录保存起来，包括数据库的变更和服务器版本和环境的配置

2. .频繁且适当大小的递交

   ​		频繁的递交可以帮助团队开发进度的透明化，减少多人开发时的代码冲突。

   ​		我们可以非常轻易的做代码的复原或移植，假设上述的新功能A有问题，我们可以只复原A而不影响修好的Bug，或是只挑选修Bug的移植到不同分支去。

3. 良好的递交信息

   ​	每一次的递交程序员都必须附上一段解释信息，说明修改的内容和原因。这除了可以帮助团队合作之外，更重要的是让软件有更好的维护性，以便将来备查，以下的场景相信开发者都不陌生：

##### Git简历

​	

<img src="../../Typora/image/image-20201204163240888.png" alt="image-20201204163240888" style="zoom:150%;" />

logo：

![image-20201204163434797](../../Typora/image/image-20201204163434797.png)

##### Git的优势

- 大部分操作在本地完成，不需要联网
- 完整性保证（hash）
- 尽可能添加数据而不是删除或修改数据
- 分支操作非常快捷流畅
- 与linux命令全面兼容

### 2.Git安装

1. Git-2.24.0.2-64-bit.exe
2. 双击下一步，选择全英文路径
3. ![image-20201204170358596](../../Typora/image/image-20201204170358596.png)

![image-20201204170413446](../../Typora/image/image-20201204170413446.png)

![image-20201204170432623](../../Typora/image/image-20201204170432623.png)

![image-20201204170652576](../../Typora/image/image-20201204170652576.png)

![image-20201204170857789](../../Typora/image/image-20201204170857789.png)

![image-20201204171029291](../../Typora/image/image-20201204171029291.png)

![image-20201204171143723](../../Typora/image/image-20201204171143723.png)

点击install，在任何目录下Git Bash Here可以打开Git的终端

### 3.Gitj结构

![image-20201207105625337](../../Typora/image/image-20201207105625337.png)

### 4.Git和代码托管中心

​	代码托管中心的任务：维护远程库

- 局域网环境
  - GitLab服务器。可以自己搭建一个GitLab服务器**
- 外网环境
  - GitHub
  - 码云

### 5.本地库和远程库的关系

##### 5.1团队内协作的关系

![image-20201207110957739](../../Typora/image/image-20201207110957739.png)

##### 5.2跨团队合作

![image-20201207111756373](../../Typora/image/image-20201207111756373.png)

### 6.Git命令行操作

##### 	6.1本地库初始化

`git init`
`注意：生成的 .git 目录中存放的是本地库相关文件，不要删除`

![image-20201207113517711](../../Typora/image/image-20201207113517711.png)

![image-20201207113600120](../../Typora/image/image-20201207113600120.png)

##### 6.2设置签名

- ​	用户名：lusutao

- ​	Email地址：805634005@qq.com(可以为空)	
  - 作用：区分不同开发人员的身份
  - 辨析：这里设置的签名和登录远程库（代码托管中心）的账号 密码没有任何关系
  - 命令
    - 系统级别/仓库级别（仅在当前本地库范围内有效）
      - git config user.name lusutao
      - git config user.email 805634005@qq.com
      - 信息保存的位置  ./git/config 文件
      - ![image-20201207122149993](../../Typora/image/image-20201207122149993.png)
    - 系统用户级别：登录当前操作系统的用户范围
      - git config ==--global== user.name lusutao
      - git config ==--global== user.email 805634005@qq.com
      - 信息保存的位置  .是用户家目录下面的 。==~==/.gitconfig 文件
      - ![image-20201207122615281](../../Typora/image/image-20201207122615281.png)
    - 系统优先级
      - 就近原则：项目级别优先于系统用户级别，二者都有时采用项目级别的签名
      - 如果只有系统用户级别的签名，就以系统用户级别的签名为准
      - 二者都没有不允许

![image-20201207122132300](../../Typora/image/image-20201207122132300.png)

##### 6.3git基本操作

###### 6.3.1 添加提交以及查看状态操作

​	![image-20201207135938343](../../Typora/image/image-20201207135938343.png)

`输入 git status会显示该信息，此时 使用vim hello.txt命令创建文件，（按i进入编辑，再ESC+ZZ保存并关闭vim）`



![image-20201207140307824](../../Typora/image/image-20201207140307824.png)

`git add hello.txt`

![image-20201207140708003](../../Typora/image/image-20201207140708003.png)

输入`git add`命令的以后再次输入 `git status`

![image-20201207140752853](../../Typora/image/image-20201207140752853.png)

文件显示绿色，此时文件被放入暂存区（使用`git rm --cached hello.txt`将文件从暂存区中取消）

![image-20201207141135095](../../Typora/image/image-20201207141135095.png)

此时文件名再次为红色

然后输入 git commit

![image-20201207141625358](../../Typora/image/image-20201207141625358.png)

进入vim模式，可以进行编辑，对此次commit进行注释

![image-20201207141828574](../../Typora/image/image-20201207141828574.png)

保存退出

![image-20201207142030699](../../Typora/image/image-20201207142030699.png)此时暂存区为空，工作区也没有新建

​	==再次vim 修改文件以后 查询==



![image-20201207142209090](../../Typora/image/image-20201207142209090.png)

==此时可以add也可以直接commit==

![image-20201207142541287](../../Typora/image/image-20201207142541287.png)

如果使用`git commit -m "第二次修改后的文件" good.txt`可以不通过vim直接commint

![image-20201207142932286](../../Typora/image/image-20201207142932286.png)



命令小结：

- ​	状态查看

  - `git status`

- ​	添加操作

  - `git add [file name]`

- ​	提交操作

  - `git commit -m "第二次修改后的文件" good.txt`或者`git commit [file name]`

    ![image-20201207105625337](../../Typora/image/image-20201207105625337.png)

    

    



######  6.3.2 查看版本

​	`git log`

![image-20201207143614254](../../Typora/image/image-20201207143614254.png)

如果版本过多，可以空格往下翻页。b向上翻页。q推出

`$ git log --pretty=oneline`简洁显示

![image-20201207144005856](../../Typora/image/image-20201207144005856.png)

`$ git log --oneline`更为简洁，hash值也只显示一部分

![image-20201207144132969](../../Typora/image/image-20201207144132969.png)

`git reflog` Head@{移动到当前版本需要多少步}

![image-20201207144351783](../../Typora/image/image-20201207144351783.png)

###### 6.3.3版本前进后退

- 基于索引值操作（推荐使用）

  ​	`git reset --hard [局部哈希值]`

  ![image-20201207145147303](../../Typora/image/image-20201207145147303.png)

  再次查询

  ![image-20201207145239463](../../Typora/image/image-20201207145239463.png)

  此时指针移动完成，此时文件变为该版本的内容

  ![image-20201207145430173](../../Typora/image/image-20201207145430173.png)



- 使用^符号（了解）

  - 只能往后退，不能前进`git reset --hard HEAD ^^^`几个^符号回退几个版本

    

- 使用~符号（了解）

  - 再很多版本时，不适合使用^，这时使用~符号
  - `git reset --hard HEAD~ 2`2则是回退的版本数

###### 6.3.4 hard 和soft以及mixed参数对比

​	`git help reset`可以打开本地的帮助文档

- ​	--soft

  - 仅仅是再本地库移动head指针

  Does not touch the index file or the working tree at all (but resets the head to `<commit>`, just like all modes do). This leaves all your changed files "Changes to be committed", as `git status` would put it.

- ​	--mixed

  - 再本地库移动head指针
  - 重置暂存区

  Resets the index but not the working tree (i.e., the changed files are preserved but not marked for commit) and reports what has not been updated. This is the default action.

  If `-N` is specified, removed paths are marked as intent-to-add (see [git-add(1)](file:///D:/Git/mingw64/share/doc/git-doc/git-add.html)).

- ​	--hard

  - 再本地库移动head指针
  - 重置暂存区
  - 重置工作区

  Resets the index and working tree. Any changes to tracked files in the working tree since `<commit>` are discarded.

###### 6.3.4 文件的删除并找回

​	先创建文件a.txt,将其提交到暂存区中，使用`rm a.txt`命令，再删除后，只是文件会删除，而删除文件的操作还在。![image-20201207153514001](../../Typora/image/image-20201207153514001.png)

此时只需要更换版本就可以找回文件

![image-20201207153612201](../../Typora/image/image-20201207153612201.png)

如何将删除的文件找回：

- ​	前提：删除前，文件存在时候的版本提交到了本地库
- ​	操作：git reset --hard[指针位置]
  - 删除操作已经提交到本地库：指针位置指向历史记录
  - 删除操作尚未提交到本地库（还在暂存区）：指针位置使用Head命令

###### 6.3.5 比较文件

`git diff [file name]`再修改本地文件后，文件还没有进行add或者commin时使用

![image-20201207155226168](../../Typora/image/image-20201207155226168.png)

如果使用add添加到暂存区，则没有任何变化，说明diff命令是和暂存区文件相比较的

![image-20201207155402976](../../Typora/image/image-20201207155402976.png)

此时如果使用`git diff HEAD a.txt`则又会出现不同，这时是将工作区的文件和本地库历史记录比较

小结

- ​	git diff[文件名]

  - 将工作区文件和暂存区文件相比较的

- ​	git diff 【本地库的历史版本】【文件名】

  - 将工作区文件和本地库文件进行比较

- 不带文件名可以比较多个文件

  - 会将当前工作区文件的所有文件进行比较

    

### 7.分支

![image-20201207161059617](../../Typora/image/image-20201207161059617.png)

##### 7.1分支的好处

- ​	同时并行推进多个功能开发，提高开发效率	
- 各个分支再开发过程中，如果一个分支开发失败，不会对其他分支有任何影响，失败的分支删除重新开始即可

##### 7.2分支操作

- 创建分支

~~~
git branch 分支名
~~~

- 查看分支

~~~
git branch
git branch -v 
~~~

- 切换分支

~~~
git checkout 分支名
git checkout -b 分支名   #创建分支并直接切换到该分支
~~~

- 合并分支`相当于把修改了的文件拉过来`
  - 第一步：切换到接受修改的分支（被合并，增加到新内容上）
  - 第二部：执行merge【分支名】将需要合并的分支连接到所在的分支上

~~~
git merge xxx
注意：合并分支的时候要明确谁谁合并
	我在a分支里面修改了。要合并到master，就先切换到master，然后合并b
~~~

- 删除分支

~~~
git branch -d 分支名
~~~

##### 7.3.冲突

再多个分支都修改了同一文件后进行合并时，便会产生冲突

![image-20201208091706209](../../Typora/image/image-20201208091706209.png)

此时合并失败，需要去手动去解决

分支的表现：

![image-20201208092133581](../../Typora/image/image-20201208092133581.png)

如何解决？

![image-20201208093335491](../../Typora/image/image-20201208093335491.png)

在冲突后，需要自己去编辑文件，将其中的==== 》》》》 《《《《《等特殊符号删除，在经过协商后将文件修改到满意的程度，保存退出。 然后进行`get add【文件名】` ，再 `git commit -m"注释" `命令，注意：`在此时commit时是不能带文件名的，否则会报错`

##### 7.4分支管理

git分支管理的本质就是创建和移动指针

### 8.创建远程库

#### 	8.1首先创建本地库

![image-20201208101927231](../../Typora/image/image-20201208101927231.png)

#### 	8.2首先创建本地库

#### 	8.3创建远程库

​		登陆GitHub

​		![image-20201208102517274](../../Typora/image/image-20201208102517274.png)

#### 	8.4通过push推送本地库文件

​			可以使用`git remote add lst https://github.com/lusutao/huashan.git  `来给地址取别名为lst

![image-20201208102941766](../../Typora/image/image-20201208102941766.png)

接着进行`git push lst master`操作，此时需要验证，第一次填写GitHub的邮箱，第二次填写GitHub的密码



push以后的弹窗

![image-20201208103952942](../../Typora/image/image-20201208103952942.png)

![image-20201208104020259](../../Typora/image/image-20201208104020259.png)

![image-20201208104026942](../../Typora/image/image-20201208104026942.png)

![image-20201208104041347](../../Typora/image/image-20201208104041347.png)

此时则push完成

#### 	8.5	克隆

​	`git clone[远程地址]`



![image-20201208110241139](../../Typora/image/image-20201208110241139.png)



克隆的三个效果

- 完整的吧远程库下载到本地
- 替我们创建roigin远程地址别名
- 初始化本地库

#### 	8.6 邀请另一个用户加入团队

在创建远程库的账号中查找新用户账号，进行邀请，并复制链接

![image-20201208111528174](../../Typora/image/image-20201208111528174.png)

然后登陆新用户的GitHub账号

直接在该用户下访问复制的链接![image-20201208111608898](../../Typora/image/image-20201208111608898.png)

点击同意

此时便和可以push

![image-20201208114035079](../../Typora/image/image-20201208114035079.png)

此时新用户便有了push的权限

#### 	8.7远程数据库的拉取

​	在一个用户提交修改后的文件后，另一个用户需要拉取的操作。

![image-20201208141959236](../../Typora/image/image-20201208141959236.png)

![image-20201208142029827](../../Typora/image/image-20201208142029827.png)

此时另一个用户的文件也修改为新的文件，即拉取完成



这是将本地文件也进行了修改，此时本地huashan文件夹和huashan_lhc文件夹的hsjf.txt内容一致

![image-20201208142349189](../../Typora/image/image-20201208142349189.png)

拉取小结：

pull=fetch+merge

- git fetch【远程地址别名】【远程分支名】
- git merge【远程地址别名/远程分支名】

#### 8.8 解决冲突

要点

- 如果不是基于github远程库的最新版所做的修改，而是和最新版有冲突的话，不能推送，需要先拉取
- 拉取下来后会进入冲突状态，按照“分支冲突解决”操作解决即可

### 9.跨团队

![image-20201207111756373](../../Typora/image/image-20201207111756373.png)