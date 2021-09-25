## 1.Git 命令操作

### 1.1本地初始化

- 命令:`git add`

- 效果：![image-20210908101510587](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908101511133.png)

  - 注意：.git目录中存放的是本地库相关的子目录和文件 不要删除 也不要胡乱的修改。

  ### 1.2设置签名

  - 形式

    - 用户名：tom
    - Email地址：goodmorning@atguigu.com

  - 作用：区分不同人员的身份

  - 辨析：这里设置的签名和登录远程库（代码托管中心）的账号，密码没有任何关系

  - 命令

    - 项目级别/仓库级别：仅在当前本地库范围内有效
      - git config user.name tom_pro
      - git config user.email goodMorning_pro@atguigu.com
      - 信息保存位置：./.git/config 文件

    ![image-20210908103938576](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908103938576.png)

    - 系统用户级别：登录当前操作系统的用户范围
      - git config --global user.name tom_glb
      - git config --global  user.email goodMorning_glb@atguigu.com
      - 信息保存位置:~/.gitconfig 文件
    - ![image-20210908105813858](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908105813858.png)
    - 优先级
      - 就近原则：项目级别优先于系统用户级别 二者都是时采用项目级别的签名
      - 如果只有系统用户级别的签名 就以系统用户级别的签名为准
      - 二者都没有不允许

### 1.3基本操作

- 状态参看操作

  - `git status`

    查看工作区，暂存区状态

- 添加操作

  - `git add [file name]`

    将工作区的"新建/修改"添加到暂存区

- 提交操作

  - `git commit -m "commot message" [file name]`

    将暂存区的内容提交到本地库

- 查看历史记录

  - `git log`、

    - ![image-20210908134827255](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908134827255.png)
    - 多屏显示控制方式： 空格向下翻页  b向上翻页   q 退出

  - `git log --pretty=oneline`

    - ![image-20210908135138933](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908135138933.png)

  - git log --oneline

    - ![image-20210908135448154](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908135448154.png)

  - git reflog

    - ![image-20210908135424184](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908135424184.png)

      ​                          HEAD@{移动到当前版本需要多少步}

### 1.4前进后退 

- 本质
  - ![image-20210908135904476](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908135904476.png)

- 基于索引值操作[推荐]
  - `git reset --head [局部索引值]`
  - `git reset --hard 6601980`
- 使用^符号: 只能后退 
  - `git reset --hard HEAD^ `
  - 住：一个^表示后退一步 n个表示后退n步
- 使用~符号：只能后退
  - `git reset --hard HEAD~n`
  - 住：表示后退 n 步

### 1.5reset命令的三个参数对比

- --soft 参数
  - 仅仅在本地库移动HEAD指针
- --mixed参数
  - 在本地库移动HEAD指针
- --hard 参数
  - 在本地库移动HEAD指针
  - 重置暂存区
  - 重置工作区

### 1.6删除文件并找回

- 前提：删除前文件存在的状态提交到了本地仓库
- 操作：`git reset --hard [指针位置]`
  - 删除操作已经提交到本地库 指针位置指向历史记录
  - 删除操作尚未提交到本地库：指针位置使用HEAD

### 1.7比较文件差异

- `git diff[文件名]`
  - 将工作区中的文件和暂存区进行比较
- `git diff[本地库中历史版本][文件名]`
  - 将工作区中的文件和本地库历史记录比较
- 不带文件名比较多个文件

## 2.分支管理

### 2.1什么是分支

- 在版本控制过程中 使用多条线同时推进多个任务.

### 2..2分支的好处？

- 同时并行推进多个功能开大，提高开发效率
- 各个分支在开发过程中如果某一个分支 开发失败 不会对其他分支头任何影响 失败的分支删除重新开始即可

### 2.3分支操作

- 创建分支
  - `git branch[分支名]`
- 参看分支
  - `git branch -v`
- 切换分支
  - `git checkout [分支名]`
- 合并分支
  - 第一步:切换到接收修改的分支上（被合并.增加新的内容）
    - `git chechout[被合并分支名]`
  - 第二步：执行 merge 命令
    - `gitt merge[有心内容分支名]`
- 解决冲突
  - 冲突的表现
    - ![image-20210908155117846](C:\Users\阿六\AppData\Roaming\Typora\typora-user-images\image-20210908155117846.png)
  - 冲突的解决
    - 第一步：编辑文件，删除特殊符号
    - 第二步:把文件修改到满意的程度 保存退出
    - 第三部：`git add [文件名]`
    - 第四部：`git commit -m "日志信息"`
      - 注意：此时 commit  一定不能带具体文件名

