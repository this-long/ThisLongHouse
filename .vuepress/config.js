module.exports = {
  "title": "ThisLong的小屋",
  "description": "长顺长安长相依，花开花谢花化泥,纪念我们逝去的时光。",
  "dest": "dist",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    // ['script', {}, `
    //       var _hmt = _hmt || [];
    //       (function() {
    //         var hm = document.createElement("script");
    //         hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
    //         var s = document.getElementsByTagName("script")[0]; 
    //         s.parentNode.insertBefore(hm, s);
    //       })();
    //     `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": false,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "龙宝宝的论坛",
        "desc": "this-long",
        "logo": "https://avatars.githubusercontent.com/u/79734658?v=4&s=120",
        "link": "https://serverless-page-bucket-pzha6s2y-1306362342.cos-website.ap-beijing.myqcloud.com/#/"
      },
      {
        "title": "ARUK",
        "desc": "this-long",
        "logo": "https://avatars.githubusercontent.com/u/79734658?v=4&s=120",
        "link": "https://serverless-page-bucket-a0orx3yb-1306362342.cos-website.ap-beijing.myqcloud.com/home.html"
      }
    ],
    "valineConfig": {//评论系统
      "appId": "OoYcIn38YgADsapx70OiFcCd-gzGzoHsz",// your appId
      "appKey": "BuA9Y9hSGkx4AMXMGzOvgF7q", // your appKey
      "avatar": "", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "一条龙宝宝",
    "authorAvatar": "https://img-blog.csdnimg.cn/bc3f88ce0a9f4b7485596e45792611bd.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_18,color_FFFFFF,t_70,g_se,x_16#pic_center",//作者头像
    // "record": "你的备案号 ", //icp备案
    "startYear": "2020",
    "info": "一条不怎么喜欢动弹的龙宝宝，正在前端的道路上一路散修，希望认识志同道合的小伙伴",
    "socials": {
      "github": "https://github.com/this-long", //github
      "gitlub": false, //gitlub
      "gitee": "https://gitee.com/this_long/", //gitee
      // "jianshu": "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      // "zhihu": "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
      // "toutiao": false, //知乎
      // "juejin": "https://juejin.im/user/2796746683716990", //掘金
      // "segmentfault": "https://segmentfault.com/u/zeal_5eecb699bdb08", //思否
      "csdn": "https://blog.csdn.net/wewewe14?spm=1001.2014.3001.5343", //CSDN
      // "wechat": "13731319326", //微信
      // "qq": "1965892300" //QQ
    },
    "mottos": [{
      "zh": "愿你保持初心和善良,笑里尽是温暖与坦荡。",
      "en": "May you keep your original heart and kindness, and smile with warmth and magnanimity."
    },
    {
      "zh": "年轻就是无限的可能。",
      "en": "Youth means limitless possibilities."
    },
    {
      "zh": "真正的梦就是现实的彼岸。",
      "en": "Real dream is the other shore of reality."
    },
    {
      "zh": "不为模糊不清的未来担忧，只为清清楚楚的现在努力。",
      "en": "Don't worry about the vague future, just strive for the clear present."
    },
    {
      "zh": "与其装腔作势企图影响别人，不如咬牙切齿狠命修理自己。",
      "en": "Rather than pretending to influence others, it's better to grind your teeth and repair yourself."
    }, {
      "zh": "上天是公平的，只要努力就会有收获，否则就是你不够努力。",
      "en": "God is fair, as long as effort will include results, otherwise is you hard enough."
    },
    {
      "zh": "人生没有后悔，我们只能尽力去不让自己后悔。",
      "en": "Life without regret, we can only do our best to not to regret."
    }
    ],
    "covers": [
      'https://img-blog.csdnimg.cn/d2d48f46989946ef88c481de0a8b1116.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center',

      'https://img-blog.csdnimg.cn/98ff9392e9c947bb8ca6431cce5a1548.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center',
      'https://img-blog.csdnimg.cn/53c42d07b1d647599dbcb2fa701abb79.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center',
      'https://img-blog.csdnimg.cn/6ef452e8419148bcab7dd4f02be80a49.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center',
      'https://img-blog.csdnimg.cn/0e03e31ae4104238b56bdf89783581b1.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center',
      'https://img-blog.csdnimg.cn/e3647664c0bc4d64b03bf80a3d8106bd.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center',
      'https://img-blog.csdnimg.cn/6628af3cc39f4cb396cb0e4f9986bcfa.jpg?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAPGRpdiBjbGFzcz0n6b6Z5a6d5a6dJz4=,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center'
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}