(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{531:function(v,_,t){"use strict";t.r(_);var i=t(4),e=Object(i.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("介绍")]),v._v(" "),t("p",[v._v("使用 git 实现对 GitHub 实现代码的拉取、上传、更新，还可以发布到 GitHub 的免费服务器上"),t("br")])]),v._v(" "),t("h1",{attrs:{id:"git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[v._v("#")]),v._v(" Git")]),v._v(" "),t("p",[v._v("Git 是一个软件，对 GitHub 进行操作，实现代码托管。可以支持团队合作，但在国内网速是他的一大短板经常会出现加载不出网站的情况，对应的出现了一些国内网站 gitlab 码云等，但仍然不能取代 GitHub 的位置")]),v._v(" "),t("h2",{attrs:{id:"github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[v._v("#")]),v._v(" GitHub")]),v._v(" "),t("p",[v._v("功能：代码托管、免费服务器、查看开源项目源码\n同时支持代码编辑的撤销，可以撤回到以前的版本"),t("br"),v._v(" "),t("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("官方网站"),t("OutboundLink")],1)]),v._v(" "),t("h2",{attrs:{id:"使用本地-git-工具-操控-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用本地-git-工具-操控-github"}},[v._v("#")]),v._v(" 使用本地 Git 工具 操控 GitHub")]),v._v(" "),t("p",[v._v("命令行查看是否有 git "),t("code",[v._v("git --version")]),v._v("\n命令行查看 vue "),t("code",[v._v("vue --version")]),v._v("\n拥有上面的工具才可以对 GitHub 进行操控")]),v._v(" "),t("h3",{attrs:{id:"一、仓库介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、仓库介绍"}},[v._v("#")]),v._v(" 一、仓库介绍")]),v._v(" "),t("p",[v._v("当我们进入一个仓库，可以看到仓库的导航条，下面几个是仓库的常用项")]),v._v(" "),t("ul",[t("li",[v._v("code 根目录，仓库代码")]),v._v(" "),t("li",[v._v("settings 设置（可以删除仓库，重命名仓库）")]),v._v(" "),t("li",[v._v("insights 工作记录")]),v._v(" "),t("li",[v._v("Wiki 仓库笔记以及介绍")]),v._v(" "),t("li",[v._v("Issues 读者提问反馈 bug")])]),v._v(" "),t("h3",{attrs:{id:"二、网上创建新的有内容的仓库并克隆到本地去更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、网上创建新的有内容的仓库并克隆到本地去更新"}},[v._v("#")]),v._v(" 二、网上创建新的有内容的仓库并克隆到本地去更新")]),v._v(" "),t("p",[v._v("new ---\x3e 仓库名（注意不要重复）---\x3e description（项目描述）---\x3e 设置公有还是私密---\x3e readme file 初始化仓库---\x3e 创建")]),v._v(" "),t("p",[v._v("本地更新网上（远端）的仓库（第一次操作需要验证用户身份信息）")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("使用"),t("code",[v._v("git clone 地址")]),v._v("将远端仓库克隆到本地使用")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("远端地址分为两种 1.http 地址 2. ssh 地址（默认没有 ssh 地址需要手动添加） 在 code 里查看并复制 注意：仓库不能嵌套仓库\n"),t("code",[v._v("https://github.com/this-long/infiniteLoop.git")]),v._v(" 显示 done 则成功")]),v._v(" "),t("p",[v._v("（运行一个项目，先查看 package.json 里面的版本以及运行的命令。）")])])])]),v._v(" "),t("li",[t("p",[v._v("在克隆好的项目内创建 index.html")])]),v._v(" "),t("li",[t("p",[v._v("将更新提交到远端")]),v._v(" "),t("ul",[t("li",[v._v("在仓库内打开命令行（仓库下才可以执行仓库命令）")]),v._v(" "),t("li",[t("code",[v._v("git add .")]),v._v(" 将对仓库的修改让远端记录 '.' 表示所有更改。")]),v._v(" "),t("li",[t("code",[v._v("git commit -m'更新信息，对这次更新的描述，可以写中文'")]),v._v(" 更新信息指的就是这次的，首次执行该命令会失败。会提示 who are you\n执行以下：\n"),t("code",[v._v('git config --global user.email "你的邮箱地址"')]),v._v(" "),t("code",[v._v('git config --global user.name "this-long"')])]),v._v(" "),t("li",[v._v("重新执行 git commit 命令，添加成功。")]),v._v(" "),t("li",[v._v("执行"),t("code",[v._v("git push")]),v._v(" 弹出用户密码弹窗。切记不可输错密码，为了避免不必要的麻烦（错误的话需要在凭据管理器操作，删掉 web 密码。）。 提示 main->main 则成功。\n提示 CONNECT 表示提交失败，一般为网络问题")]),v._v(" "),t("li",[v._v("一般操作一次后浏览器可以记住密码，成功后网上就更新成功了，以后再操作只需要执行三部曲就好。\n("),t("code",[v._v("git add .")]),v._v(" "),t("code",[v._v("git commit -m'留言'")]),v._v(" "),t("code",[v._v("git push")]),v._v(")")])])])]),v._v(" "),t("h3",{attrs:{id:"三、网上创建好空仓库-将本地项目更新到网上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、网上创建好空仓库-将本地项目更新到网上"}},[v._v("#")]),v._v(" 三、网上创建好空仓库，将本地项目更新到网上")]),v._v(" "),t("p",[v._v("与上一个的区别是上一个先将仓库在本地映射好了在仓库里写项目，这个可以先单独写好项目，再创建仓库并导入项目。")]),v._v(" "),t("ul",[t("li",[v._v("网上创建空仓库，默认不选任何配置（与本地项目重名方便记忆）")]),v._v(" "),t("li",[v._v("在本地项目内一般需要创建 README.md 文件，里面是项目的介绍和用法等。")]),v._v(" "),t("li",[v._v("在本地项目根目录内打开命令行工具，将本地项目制作成 git 仓库"),t("code",[v._v("git init")]),v._v("\n记录第一次项目，第一次是一次大更新。")]),v._v(" "),t("li",[v._v("初始化项目后"),t("code",[v._v("git add .")])]),v._v(" "),t("li",[v._v("制作版本 "),t("code",[v._v("git commit -m'留言'")])]),v._v(" "),t("li",[v._v("接下来建立本地仓库与网络仓库的联系（从网络上拷贝下来的仓库没有这些操作）\n"),t("code",[v._v("git branch -M main")]),v._v("将仓库分支标识改为 main 默认叫 master\n"),t("code",[v._v("git remote add origin https://github.com/this-long/0510_test.git")]),v._v("给仓库添加远端地址，这里已经建立了联系。仓库地址在网上仓库介绍内复制。\n"),t("code",[v._v("git push -u origin main")]),v._v("由于是第一次提交，push 命令需要携带 地址 和 分支 名。提示 main 就成功了。以后再次操作就和情况一相同了，这时候这个项目文件夹已经和拷贝下来的无异。再次更新执行三部曲就好。")])]),v._v(" "),t("h3",{attrs:{id:"四、添加-ssh-密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、添加-ssh-密钥"}},[v._v("#")]),v._v(" 四、添加 ssh 密钥")]),v._v(" "),t("ul",[t("li",[t("p",[t("code",[v._v("ssh-keygen")]),v._v(" 任意处打开命令行工具创建密钥，执行回车到出现加密图案。生成公钥和私钥")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("cd ~/.ssh")]),v._v("在根目录下找到密钥的位置，可以看到公钥和私钥")])]),v._v(" "),t("li",[t("p",[t("code",[v._v("cat id_rsa.pub")]),v._v("查看公钥并复制，切记复制不可多空格。")])]),v._v(" "),t("li",[t("p",[v._v("头像 setting -》SSH and GPG keys->new SSH key->输入密码")])]),v._v(" "),t("li",[t("p",[v._v("以后下载上传都不需要输入密码了")])]),v._v(" "),t("li",[t("p",[v._v("使用 ssh 克隆一个仓库:和 http 克隆方式一样，只不过途中会省略输入用户名密码的过程")])]),v._v(" "),t("li",[t("p",[v._v("强制删除文件夹"),t("code",[v._v("rm -rf git-hub-class/")]),v._v("在跟目录打开命令行，并执行以上，可以删除 git-hub-class 文件夹。（在删除 git 仓库文件夹时可能会出现意外的错误，可能会需要通过命令行工具去删除。）")])])]),v._v(" "),t("h3",{attrs:{id:"五、常见项目流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、常见项目流程"}},[v._v("#")]),v._v(" 五、常见项目流程")]),v._v(" "),t("ul",[t("li",[v._v("克隆公司项目，（如果多人维护一个 分支\\房间 时可能会在克隆时遇到问题）")]),v._v(" "),t("li",[v._v("本地编写克隆下来的项目")]),v._v(" "),t("li",[v._v("上传到网上更新网上的项目")])]),v._v(" "),t("h3",{attrs:{id:"六、多个用户操作同一分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、多个用户操作同一分支"}},[v._v("#")]),v._v(" 六、多个用户操作同一分支")]),v._v(" "),t("ol",[t("li",[v._v("操控不是同一文件：")])]),v._v(" "),t("p",[v._v("当项目文件更新，你的本地是旧版本的文件夹，远端包含了本地没有的文件（此时这个文件本地项目里是没有的），本地的 push 提交被拒绝。")]),v._v(" "),t("ul",[t("li",[t("code",[v._v("git pull")]),v._v("需要将本地不存在的远端的版本拉去下来，同步本地文件。才可以继续上传。")]),v._v(" "),t("li",[t("code",[v._v("shift+zz")]),v._v(" 在新页面内输入，网上与本地的文件间没有冲突，会自动合并一个版本，弹出的编辑器是用来提交版本留言的，不需要填写，保存并退出。")]),v._v(" "),t("li",[t("code",[v._v("git push")]),v._v(" 继续完成之前没有完成的 push 命令。不需要 add commit 等命令了。")])]),v._v(" "),t("p",[v._v("添加一个管理员\n在项目的 setting 内点击 Manage access 可以添加一个管理员。")]),v._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[v._v("操控了同一文件：")])]),v._v(" "),t("ul",[t("li",[t("code",[v._v("git pull")])]),v._v(" "),t("li",[v._v("在 pull 后不会自动合并，需要在文件内手动选择性的合并文件，保留需要的部分，删除有冲突的部分。一般工作上不会有冲突，所以都保留居多。")]),v._v(" "),t("li",[v._v("重新执行三部曲。"),t("code",[v._v("git add .")]),v._v(" "),t("code",[v._v("git commit -m'留言'")]),v._v(" "),t("code",[v._v("git push")])]),v._v(" "),t("li",[v._v("与上一情况基本相同，只是需要自己合并文件并重新制作版本。")])]),v._v(" "),t("h3",{attrs:{id:"七、git-分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、git-分支"}},[v._v("#")]),v._v(" 七、git 分支")]),v._v(" "),t("p",[v._v("一个 git 仓库可以拥有多个分支，默认只有一个 main 分支。")]),v._v(" "),t("ul",[t("li",[v._v("创建好空仓库，最好携带 readme 并克隆到本地（只克隆了 main 分支的内容）。")]),v._v(" "),t("li",[t("code",[v._v("git branch newMain")]),v._v("在本地仓库内打开命令行，创建一个新分支("),t("code",[v._v("git branch")]),v._v("查看所有的本地分支列表，带*的是当前所处的分支)新创建的分支里面的内容默认和 当前所在 分支里的内容一样。")]),v._v(" "),t("li",[v._v("使用"),t("code",[v._v("git checkout 分支名")]),v._v(" 切换分支。切换后以后的操作都是在新分支内进行，与 main 已经没有了关系。\n"),t("code",[v._v("git checkout -b 分支名")]),v._v("新建分支并切换")]),v._v(" "),t("li",[v._v("第一次在新分支内 push 时需要先在网上创建这个分支。"),t("code",[v._v("git push --set-upstream origin newMain")]),v._v("创建并上传。创建好没有东西可以通过这个在网上先创建分支。\n本地克隆的一个文件夹只能代表项目内的某一个分支。分支切换时文件夹的内容会自动改变为相应内容的分支内容（简直不要太神奇。）\n在不同分支间来回干活为了规避不必要的问题记得及时上传。")])]),v._v(" "),t("h3",{attrs:{id:"八、gh-pages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、gh-pages"}},[v._v("#")]),v._v(" 八、gh-pages")]),v._v(" "),t("p",[t("code",[v._v("git checkout -b gh-pages")]),v._v("\n一个特殊的分支 ，是 github 提供的免费服务器\n"),t("code",[v._v("用户名.github.io/仓库名/")]),v._v("\n可以访问 gh-pages 分支内的内容，默认访问 index.html\n"),t("code",[v._v("用户名.github.io/仓库名/文件名.html")]),v._v(" 可以访问非 index 命名的一些页面。很方便。")]),v._v(" "),t("h3",{attrs:{id:"九、分支的团队合作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、分支的团队合作"}},[v._v("#")]),v._v(" 九、分支的团队合作")]),v._v(" "),t("p",[v._v("一人有一个分支")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("创建相互重名的网上和本地仓库")])]),v._v(" "),t("li",[t("p",[v._v("创建 vue 项目时一般不默认生成仓库，删除 .git 文件夹")]),v._v(" "),t("ul",[t("li",[v._v("vue 项目自带 .gitignore 文件，里面是文件和文件夹的名字，这是 git 忽略上传文件名单（很好用有没有）node_modules 首当其冲.")])])]),v._v(" "),t("li",[t("p",[v._v("进入项目，打开命令行，制作成仓库，上传。\n"),t("code",[v._v("git init")]),v._v(" "),t("code",[v._v("git breach -M main")]),v._v(" "),t("code",[v._v("去网上页面里复制地址代码在命令行里执行")]),v._v("\n上传完成。接下来创建分支。\n"),t("code",[v._v("git checkout -b a")]),v._v(" "),t("code",[v._v("git push --set-upstream origin a")])]),v._v(" "),t("ul",[t("li",[v._v("打开一个项目：第一步先 npm i 装包，有一些包会报错，注意查看 package.json 包版本单独安装。")]),v._v(" "),t("li",[v._v("运行项目：查看 package.json 内的 scripts 内的 serve 字段。运行项目。")])])]),v._v(" "),t("li",[t("p",[v._v("克隆好项目，安装好环境，运行项目，干活，然后上传干的活。")])]),v._v(" "),t("li",[t("p",[v._v("不同分支间上传内容互不干扰。")])]),v._v(" "),t("li",[t("p",[v._v("项目完成需要将不同分支的内容合并到 main 分支。\n"),t("code",[v._v("git merge 分支名")]),v._v(" 将对应的分支合并到当前分支。所以合并前需要先切换到要合并的主分支内。\n"),t("code",[v._v("git status")]),v._v("查看当前状态，某种程度上可以提示你干活干到哪一步了。\n"),t("code",[v._v("git push")]),v._v(" 将合并的分支上传到网络,中途不需要 add 以及 commit")]),v._v(" "),t("ul",[t("li",[v._v("在多人合并时如果修改了同一文件(如 element.js)会涉及到文件的修改。需要手动解决冲突。修改完文件后重新执行三步曲。同一文件间出现了冲突需要重新执行三步，否者这直接 git push 就好")])])]),v._v(" "),t("li",[t("p",[t("code",[v._v("git pull origin main")]),v._v("项目将 main 的内容拉取到 a\n分支里,这是 a 与 main 内容相同，可以看到页面的整体效果。可以进行顾全大局的开发。")])])]),v._v(" "),t("h2",{attrs:{id:"使用其他平台托管代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用其他平台托管代码"}},[v._v("#")]),v._v(" 使用其他平台托管代码")]),v._v(" "),t("h3",{attrs:{id:"腾讯云开发者平台"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云开发者平台"}},[v._v("#")]),v._v(" 腾讯云开发者平台")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://coding.net/",target:"_blank",rel:"noopener noreferrer"}},[v._v("腾讯云开发者平台"),t("OutboundLink")],1)]),v._v(" "),t("ul",[t("li",[v._v("添加 ssh 公钥:个人账户设置-》ssh 公钥-》新增公钥")])]),v._v(" "),t("p",[v._v("如过在 github 时已经设置过了的话，那么下面的操作就可以满足需求"),t("br"),v._v("\n打开命令行 ---\x3e\n"),t("code",[v._v("cd ~/.ssh/")]),v._v(" "),t("br"),v._v(" "),t("code",[v._v("ls")]),t("br"),v._v(" "),t("code",[v._v("cat id_rsa.pub")]),v._v(" "),t("br"),v._v("\n将公钥黏贴就好,后续会在其他文章编写关于使用如何使用腾讯云开发者平台")])])}),[],!1,null,null,null);_.default=e.exports}}]);