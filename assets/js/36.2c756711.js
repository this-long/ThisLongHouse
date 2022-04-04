(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{546:function(t,e,n){"use strict";n.r(e);var _=n(4),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"企业微信生成第三方应用测试安装链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#企业微信生成第三方应用测试安装链接"}},[t._v("#")]),t._v(" 企业微信生成第三方应用测试安装链接")]),t._v(" "),n("h2",{attrs:{id:"一、简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、简介"}},[t._v("#")]),t._v(" 一、简介")]),t._v(" "),n("h2",{attrs:{id:"二、get-请求验证-url-有效性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、get-请求验证-url-有效性"}},[t._v("#")]),t._v(" 二、Get 请求验证 URL 有效性")]),t._v(" "),n("h3",{attrs:{id:"_1-为什么要搭建回调服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要搭建回调服务"}},[t._v("#")]),t._v(" 1.为什么要搭建回调服务")]),t._v(" "),n("p",[t._v("在集成企业微信与内部系统时，搭建一个回调服务可以获取到用户通过企业微信发送给应用的消息：")]),t._v(" "),n("ul",[n("li",[t._v("自定义丰富的服务行为。比如，用户向应用发消息时，识别消息关键词，回复不同的消息内容；")]),t._v(" "),n("li",[t._v("用户点击应用菜单时，转化为指令，执行自动化任务。")]),t._v(" "),n("li",[t._v("可以及时获取到状态变化。比如，通讯录发生变化时，不需要定时去拉取通讯录对比，而是实时地获取到变化的通讯录结点，进行同步。")])]),t._v(" "),n("h3",{attrs:{id:"_2-验证-url-的有效性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-验证-url-的有效性"}},[t._v("#")]),t._v(" 2.验证 url 的有效性")]),t._v(" "),n("p",[t._v("回调服务的 url 是由第三方应用的开发商所提供的，在我们将配置好的 url 填入到回调配置的内容里，点击【确定】按钮时会调用一个 Get 请求来验证我们提供的这个 url 的有效性，下面向大家展示如何使验证通过。")]),t._v(" "),n("div",{staticStyle:{padding:"30px 0"},attrs:{align:"center"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/c264881f71f6458197e87628d09aaf21.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_11,color_FFFFFF,t_70,g_se,x_16#pic_center"}})]),t._v(" "),n("p",[t._v("验证流程：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("我们将 url 填入后点击【确定】，企业微信会发送一条 Get 请求携带签名以及密文到 url 服务上。(每次点击确定都会发送这个 get 请求)")])]),t._v(" "),n("li",[n("p",[t._v("我们的 url 收到请求后需要接收四个参数：")]),t._v(" "),n("ul",[n("li",[t._v("msg_signature String 企业微信加密签名")]),t._v(" "),n("li",[t._v("timestamp Integer 时间戳。与 nonce 结合使用，用于防止请求重放攻击。")]),t._v(" "),n("li",[t._v("nonce String 随机数。与 timestamp 结合使用，用于防止请求重放攻击。")]),t._v(" "),n("li",[t._v("echostr String 加密的字符串。需要解密得到消息内容明文，解密后有 random、msg_len、msg、receiveid 四个字段，其中 msg 即为消息内容明文，receiveid 应该与企业 ID 相同，会在验证时进行比对。")])])]),t._v(" "),n("li",[n("p",[t._v("将接收的参数传递到企微提供的解密的方法 wxcpt.VerifyURL 里可以进行解密，返回解密后的明文字符串，也就是 msg。如果返回的明文是正确的，则验证通过")])]),t._v(" "),n("li",[n("p",[t._v("整个过程需要在 1s 内完成，而且返回的字符串不可以添加引号、空格、换行符等")])]),t._v(" "),n("li",[n("p",[t._v("验证通过后我们就可以通过一个 post 请求获取到 Ticket")])])]),t._v(" "),n("h2",{attrs:{id:"三、post-请求接收业务数据-完成测试安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、post-请求接收业务数据-完成测试安装"}},[t._v("#")]),t._v(" 三、Post 请求接收业务数据，完成测试安装")]),t._v(" "),n("p",[t._v("当有企业安装了我们的应用，可以通过这个请求获取到到企业的一些信息。")]),t._v(" "),n("h3",{attrs:{id:"_1-接收请求传递的参数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-接收请求传递的参数"}},[t._v("#")]),t._v(" 1.接收请求传递的参数")]),t._v(" "),n("p",[n("strong",[t._v("a.")]),t._v(" 请求在发送时会携带三个参数在 url 中,以及一个 xml 字符串在 body 中：")]),t._v(" "),n("ul",[n("li",[t._v("msg_signature String 企业微信加密签名，msg_signature 结合了企业填写的 token、请求中的 timestamp、nonce 参数、加密的消息体")]),t._v(" "),n("li",[t._v("timestamp Integer 时间戳。与 nonce 结合使用，用于防止请求重放攻击。")]),t._v(" "),n("li",[t._v("nonce String 随机数。与 timestamp 结合使用，用于防止请求重放攻击。")]),t._v(" "),n("li",[t._v("xml 字符串包括\n"),n("ul",[n("li",[t._v("SuiteId 第三方应用的 SuiteId")]),t._v(" "),n("li",[t._v("AuthCode 临时授权码,最长为 512 字节。用于获取企业永久授权码。10 分钟内有效，特别重要")]),t._v(" "),n("li",[t._v("InfoType create_auth")]),t._v(" "),n("li",[t._v("TimeStamp 时间戳")]),t._v(" "),n("li",[t._v("State 构造授权链接指定的 state 参数")])])])]),t._v(" "),n("p",[n("strong",[t._v("b.")]),t._v(" 在第三方回调事件中使用加解密算法，receiveid 的内容为 suiteid，所以我们需要使用 suiteid 进行解密，这个与 Get 请求 url 验证的方法是不同的，需要区分。")]),t._v(" "),n("p",[n("strong",[t._v("c.")]),t._v(" 通过 wxcpt.DecryptMsg()方法传递解密传递过来的 msg_signature、timestamp、nonce、body 四个参数，解密后我们就可以获取使用 body 里面的 SuiteId 、AuthCode、InfoType、TimeStamp 、State 这几个参数了。")]),t._v(" "),n("p",[n("strong",[t._v("d.")]),t._v(" 最后需要在 1s 内返回一个字符串“success”否者会被企业微信当中错误的消息，其他 POST 请求的解密方法基本都相同。")]),t._v(" "),n("h2",{attrs:{id:"四、获取生成预授权码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、获取生成预授权码"}},[t._v("#")]),t._v(" 四、获取生成预授权码")]),t._v(" "),n("p",[t._v("当用户在第三方服务商的网站安装应用时，需要先获取到临时授权码(预授权码)才可以进行后面的安装操作。")]),t._v(" "),n("p",[t._v("获取预授权码流程：")]),t._v(" "),n("ul",[n("li",[t._v("获取 suite_ticket")]),t._v(" "),n("li",[t._v("通过 suite_ticket 获取第三方应用凭证")]),t._v(" "),n("li",[t._v("通过第三方应用凭证获取预授权码")])]),t._v(" "),n("h3",{attrs:{id:"_1-获取接收-suite-ticket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取接收-suite-ticket"}},[t._v("#")]),t._v(" 1.获取接收 suite_ticket")]),t._v(" "),n("p",[t._v("获取 suite_ticket 流程：")]),t._v(" "),n("ul",[n("li",[t._v("企业微信会通过一个 POST 请求每十分钟向我们的应用推送一个 suite_ticket，仅三十分钟有效")]),t._v(" "),n("li",[t._v("获取到 ticket 后我们将这个 ticket 保存下来去通过它获取第三方应用凭证")]),t._v(" "),n("li",[t._v("如果我们需要立即获取到 ticket 的话，可以在服务商官网，在第三方应用详情-回调配置，手动刷新 ticket 推送。")])]),t._v(" "),n("h3",{attrs:{id:"_2-获取第三方应用凭证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取第三方应用凭证"}},[t._v("#")]),t._v(" 2.获取第三方应用凭证")]),t._v(" "),n("p",[t._v("获取第三方应用凭证流程：")]),t._v(" "),n("ul",[n("li",[t._v("通过一个 POST 请求来获取凭证")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('请求类型: POST\n\n请求url:https://qyapi.weixin.qq.com/cgi-bin/service/get_suite_token\n\nbody:\n{\n    "suite_id":"wwddddccc7775555aaa" ,\n    "suite_secret": "ldAE_H9anCRN21GKXVfdAAAAAAAAAAAAAAAAAA",\n    "suite_ticket": "Cfp0_givEagXcYJIztF6sfbdmIZCmpaR8ZBsvJEFFNBrWmnD5-CGYJ3_NhYexMyw"\n}\n\n参数介绍:\nsuite_id\t必填\t以ww或wx开头的应用id（对应于旧的以tj开头的套件id）\nsuite_secret\t必填\t应用的secret\nsuite_ticket\t必填\t企业微信后台推送的ticket\n')])])]),n("p",[t._v("在服务商后台，应用管理，应用详情里可以查看 suite_id 与 suite_secret，如下图")]),t._v(" "),n("div",{staticStyle:{padding:"30px 0"},attrs:{align:"center"}},[n("img",{attrs:{src:"https://img-blog.csdnimg.cn/ea4050da77ec4bab8c351f6ef650aa5e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_18,color_FFFFFF,t_70,g_se,x_16#pic_center"}})]),t._v(" "),n("ul",[n("li",[t._v("信息填写正确后就可以得到返回值，suite_access_token 包含在返回结果内，接下来通过 suite_access_token 来获取预授权码")])]),t._v(" "),n("p",[t._v("返回结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "errcode":0 ,\n    "errmsg":"ok" ,\n    "suite_access_token":"61W3mEpU66027wgNZ_MhGHNQDHnFATkDa9-2llMBjUwxRSNPbVsMmyD-yq8wZETSoE5NQgecigDrSHkPtIYA",\n    "expires_in":7200\n}\n')])])]),n("h3",{attrs:{id:"_3-获取预授权码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-获取预授权码"}},[t._v("#")]),t._v(" 3.获取预授权码")]),t._v(" "),n("p",[t._v("获取获取预授权码流程：")]),t._v(" "),n("ul",[n("li",[t._v("获取预授权码需要向企微发送一个 GET 请求")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("请求类型: GET\n\n请求url:https://qyapi.weixin.qq.com/cgi-bin/service/get_pre_auth_code?suite_access_token=SUITE_ACCESS_TOKEN\n\n请求参数：suite_access_token\t必填\t刚刚获取到的第三方应用access_token,最长为512字节\n")])])]),n("ul",[n("li",[t._v("当请求成功后可以得到返回值，预授权码在返回值内")])]),t._v(" "),n("p",[t._v("返回结果：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n    "errcode":0 ,\n    "errmsg":"ok" ,\n    "pre_auth_code":"Cx_Dk6qiBE0Dmx4EmlT3oRfArPvwSQ-oa3NL_fwHM7VI08r52wazoZX2Rhpz1dEw",\n    "expires_in":1200\n}\n\n参数介绍：\npre_auth_code\t预授权码,最长为512字节\nexpires_in\t有效期（秒）\n')])])]),n("h2",{attrs:{id:"五、生成应用授权安装链接并进行安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、生成应用授权安装链接并进行安装"}},[t._v("#")]),t._v(" 五、生成应用授权安装链接并进行安装")]),t._v(" "),n("p",[t._v("获取预授权码后我们就可以生成我们自己的授权链接，用户进入我们的网站点击后确认后返回临时授权码、过期时间以及 state 参数。第三方服务商据此获得临时授权码，临时授权码 10 分钟后会失效，我们可以使用临时授权码换取永久授权码及授权信息。进而调用企业微信相关 API 为授权企业提供服务。")]),t._v(" "),n("h3",{attrs:{id:"_1-设置安装链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-设置安装链接"}},[t._v("#")]),t._v(" 1.设置安装链接")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("链接地址：\nhttps://open.work.weixin.qq.com/3rdapp/install?suite_id=SUITE_ID&pre_auth_code=PRE_AUTH_CODE&redirect_uri=REDIRECT_URI&state=STATE\n\n链接参数：\nsuite_id 企业的suiteID\npre_auth_code 上一步获取的预授权码\nredirect_uri 授权完成后的回调网址，redirect_uri需要经过一次urlencode作为参数\nstate 可填a-zA-Z0-9的参数值（不超过128个字节），用于第三方自行校验session，防止跨域攻击。\n")])])]),n("h3",{attrs:{id:"_2-设置授权配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-设置授权配置"}},[t._v("#")]),t._v(" 2.设置授权配置")]),t._v(" "),n("p",[t._v("如果我们直接点击上面的测试安装链接会提示该应用已下线，这是以为我们的应用还在测试阶段，我们需要先调用一个设置授权配置的 POST 请求来讲应用改为测试应用，请求详情如下")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('请求方式：POST（HTTPS）\n\n请求地址： https://qyapi.weixin.qq.com/cgi-bin/service/set_session_info?suite_access_token=SUITE_ACCESS_TOKEN\n\nbody:\n{\n    "pre_auth_code":"xxxxx",\n    "session_info":\n    {\n        "appid":[1,2,3],\n        "auth_type":1\n    }\n}\n\n参数说明：\nsuite_access_token\t必填\t第三方应用access_token\npre_auth_code\t必填\t预授权码\nsession_info\t必填\t本次授权过程中需要用到的会话信息\nappid\t非必填\t允许进行授权的应用id，如1、2、3， 不填或者填空数组都表示允许授权套件内所有应用（仅旧的多应用套件可传此参数，新开发者可忽略）\nauth_type\t非必填\t授权类型：0 正式授权， 1 测试授权。 默认值为0。(在发布后记得改为正式授权)\n\n返回结果：\n{\n    "errcode": 0,\n    "errmsg": "ok"\n}\n')])])]),n("h3",{attrs:{id:"_3-获取永久授权码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-获取永久授权码"}},[t._v("#")]),t._v(" 3.获取永久授权码")]),t._v(" "),n("p",[t._v("用户点击我们的安装链接并确认后会跳回，在跳回的 url 里会携带 auth_code(临时授权码)，通过临时授权码我们可以发送一个 POST 请求来获取永久授权码。")]),t._v(" "),n("p",[t._v("永久授权码非常重要，临时授权码一次有效。我们获取永久授权码时会一并讲安装我们应用的公司的详细信息返回给我们，其中的 corpid(授权方企业微信 id)以及 permanent_code( 企业微信永久授权码,最长为 512 字节)是执行后面功能性接口的基础，非常重要，需要妥善保管。")]),t._v(" "),n("p",[t._v("请求详情如下：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('请求方式：POST（HTTPS）\n\n请求地址： https://qyapi.weixin.qq.com/cgi-bin/service/get_permanent_code?suite_access_token=SUITE_ACCESS_TOKEN\n\nbody：\n{\n    "auth_code": "auth_code_value"\n}\n\n参数说明：auth_code\t必填\t临时授权码，会在授权成功时附加在redirect_uri中跳转回第三方服务商网站\n\n返回结果：\n{\n    "errcode":0 ,\n    "errmsg":"ok" ,\n    "access_token": "xxxxxx",\n    "expires_in": 7200,\n    "permanent_code": "xxxx",\n    "dealer_corp_info":\n    {\n        "corpid": "xxxx",\n        "corp_name": "name"\n    },\n    "auth_corp_info":\n    {\n        "corpid": "xxxx",\n        "corp_name": "name",\n        "corp_type": "verified",\n        "corp_square_logo_url": "yyyyy",\n        "corp_user_max": 50,\n        "corp_agent_max": 30,\n        "corp_full_name":"full_name",\n        "verified_end_time":1431775834,\n        "subject_type": 1,\n        "corp_wxqrcode": "zzzzz",\n        "corp_scale": "1-50人",\n        "corp_industry": "IT服务",\n        "corp_sub_industry": "计算机软件/硬件/信息服务"\n    },\n    "auth_info":\n    {\n        "agent" :\n        [\n            {\n                "agentid":1,\n                "name":"NAME",\n                "round_logo_url":"xxxxxx",\n                "square_logo_url":"yyyyyy",\n                "appid":1,\n                "auth_mode":1,\n                "is_customized_app":false,\n                "privilege":\n                {\n                    "level":1,\n                    "allow_party":[1,2,3],\n                    "allow_user":["zhansan","lisi"],\n                    "allow_tag":[1,2,3],\n                    "extra_party":[4,5,6],\n                    "extra_user":["wangwu"],\n                    "extra_tag":[4,5,6]\n                },\n                "shared_from":\n                {\n                    "corpid":"wwyyyyy"\n                }\n            },\n            {\n                "agentid":2,\n                "name":"NAME2",\n                "round_logo_url":"xxxxxx",\n                "square_logo_url":"yyyyyy",\n                "appid":5,\n                "shared_from":\n                {\n                    "corpid":"wwyyyyy"\n                }\n            }\n        ]\n    },\n    "auth_user_info":\n    {\n        "userid":"aa",\n        "open_userid":"xxxxxx",\n        "name":"xxx",\n        "avatar":"http://xxx"\n    },\n    "register_code_info":\n    {\n        "register_code":"1111",\n        "template_id":"tpl111",\n        "state":"state001"\n    }\n}\n\n返回结果参数说明：\n\naccess_token  授权方（企业）access_token,最长为512字节\nexpires_in\t授权方（企业）access_token超时时间（秒）\npermanent_code\t企业微信永久授权码,最长为512字节\nauth_corp_info\t授权方企业信息\nauth_corp_info.corpid\t授权方企业微信id\nauth_corp_info.corp_name\t授权方企业名称，即企业简称\nauth_corp_info.corp_type\t授权方企业类型，认证号：verified, 注册号：unverified\nauth_corp_info.corp_square_logo_url\t授权方企业方形头像\nauth_corp_info.corp_user_max\t授权方企业用户规模\nauth_corp_info.corp_agent_max\t授权方企业应用数上限\nauth_corp_info.corp_full_name\t授权方企业的主体名称(仅认证或验证过的企业有)，即企业全称。\nauth_corp_info.subject_type\t企业类型，1. 企业; 2. 政府以及事业单位; 3. 其他组织, 4.团队号\nauth_corp_info.verified_end_time\t认证到期时间\nauth_corp_info.corp_wxqrcode\t授权企业在微工作台（原企业号）的二维码，可用于关注微工作台\nauth_corp_info.corp_scale\t企业规模。当企业未设置该属性时，值为空\nauth_corp_info.corp_industry\t企业所属行业。当企业未设置该属性时，值为空\nauth_corp_info.corp_sub_industry\t企业所属子行业。当企业未设置该属性时，值为空\nauth_info\t授权信息。如果是通讯录应用，且没开启实体应用，是没有该项的。通讯录应用拥有企业通讯录的全部信息读写权限\nauth_info.agent\t授权的应用信息，注意是一个数组，但仅旧的多应用套件授权时会返回多个agent，对新的单应用授权，永远只返回一个agent\nauth_info.agent.agentid\t授权方应用id\nauth_info.agent.name\t授权方应用名字\nauth_info.agent.square_logo_url\t授权方应用方形头像\nauth_info.agent.round_logo_url\t授权方应用圆形头像\nauth_info.agent.appid\t旧的多应用套件中的对应应用id，新开发者请忽略\nauth_info.agent.auth_mode\t授权模式，0为管理员授权；1为成员授权\nauth_info.agent.is_customized_app\t是否为代开发自建应用\nauth_info.agent.privilege\t应用对应的权限\nauth_info.agent.privilege.allow_party\t应用可见范围（部门）\nauth_info.agent.privilege.allow_tag\t应用可见范围（标签）\nauth_info.agent.privilege.allow_user\t应用可见范围（成员）\nauth_info.agent.privilege.extra_party\t额外通讯录（部门）\nauth_info.agent.privilege.extra_user\t额外通讯录（成员）\nauth_info.agent.privilege.extra_tag\t额外通讯录（标签）\nauth_info.agent.privilege.level\t权限等级。\n1:通讯录基本信息只读\n2:通讯录全部信息只读\n3:通讯录全部信息读写\n4:单个基本信息只读\n5:通讯录全部信息只写\nauth_info.agent.shared_from\t共享了应用的互联企业信息，仅当由互联的企业共享应用触发的安装时才返回\nauth_info.agent.shared_from.corpid\t共享了应用的互联企业信息，仅当由互联的企业共享应用触发的安装时才返回\nauth_user_info\t授权管理员的信息，可能不返回（企业互联由上级企业共享第三方应用给下级时，不返回授权的管理员信息）\nauth_user_info.userid\t授权管理员的userid，可能为空（企业互联由上级企业共享第三方应用给下级时，不返回授权的管理员信息）\nauth_user_info.open_userid\t授权管理员的open_userid，可能为空（企业互联由上级企业共享第三方应用给下级时，不返回授权的管理员信息）\nauth_user_info.name\t授权管理员的name，可能为空（企业互联由上级企业共享第三方应用给下级时，不返回授权的管理员信息）\nauth_user_info.avatar\t授权管理员的头像url，可能为空（企业互联由上级企业共享第三方应用给下级时，不返回授权的管理员信息）\ndealer_corp_info\t代理服务商企业信息。应用被代理后才有该信息\ndealer_corp_info.corpid\t代理服务商企业微信id\ndealer_corp_info.corp_name\t代理服务商企业微信名称\nregister_code_info\t推广二维码安装相关信息，扫推广二维码安装时返回。（注：无论企业是否新注册，只要通过扫推广二维码安装，都会返回该字段）\nregister_code_info.register_code\t注册码\nregister_code_info.template_id\t推广包ID\nregister_code_info.state\t仅当获取注册码指定该字段时才返回\n\n')])])])])}),[],!1,null,null,null);e.default=a.exports}}]);