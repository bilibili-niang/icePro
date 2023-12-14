import { openBlock as r, createElementBlock as c, createElementVNode as d, normalizeClass as s, normalizeStyle as _, unref as t, renderSlot as G, toDisplayString as v, useSlots as ae, ref as k, watch as J, reactive as ne, onMounted as K, resolveComponent as z, createVNode as B, createCommentVNode as C, isRef as ie, withCtx as f, createTextVNode as A, onUnmounted as be, createBlock as L, Transition as le, isVNode as Q, render as H, Fragment as I, renderList as T, computed as j, nextTick as F, Teleport as X, pushScopeId as re, popScopeId as ge } from "vue";
const te = [
  {
    hex: "#f9f4dc",
    name: "乳白",
    pinyin: "rubai",
    RGBA: "rgba(249,244,220,1)",
    bleak: "rgba(249,244,220,.5)"
  },
  {
    hex: "#f7e8aa",
    name: "杏仁黄",
    pinyin: "xingrenhuang",
    RGBA: "rgba(249,236,195,1)",
    bleak: "rgba(249,236,195,.5)"
  },
  {
    hex: "#f8df72",
    name: "茉莉黄",
    pinyin: "molihuang",
    RGBA: "rgba(248,223,114,1)",
    bleak: "rgba(248,223,114,.5)"
  },
  {
    hex: "#f8df70",
    name: "麦秆黄",
    pinyin: "maiganhuang",
    RGBA: "rgba(248,223,112,1)",
    bleak: "rgba(248,223,112,.5)"
  },
  {
    hex: "#fbda41",
    name: "油菜花黄",
    pinyin: "youcaihuahuang",
    RGBA: "rgba(251,218,65,1)",
    bleak: "rgba(251,218,65,.5)"
  },
  {
    hex: "#fed71a",
    name: "佛手黄",
    pinyin: "foshouhuang",
    RGBA: "rgba(254,215,26,1)",
    bleak: "rgba(254,215,26,.5)"
  },
  {
    hex: "#f7de98",
    name: "篾黄",
    pinyin: "miehuang",
    RGBA: "rgba(247,222,152,1)",
    bleak: "rgba(247,222,152,.5)"
  },
  {
    hex: "#f8d86a",
    name: "葵扇黄",
    pinyin: "kuishanhuang",
    RGBA: "rgba(248,216,106,1)",
    bleak: "rgba(248,216,106,.5)"
  },
  {
    hex: "#fcd337",
    name: "柠檬黄",
    pinyin: "ningmenghuang",
    RGBA: "rgba(252,211,55,1)",
    bleak: "rgba(252,211,55,.5)"
  },
  {
    hex: "#fcd217",
    name: "金瓜黄",
    pinyin: "jinguahuang",
    RGBA: "rgba(252,210,23,1)",
    bleak: "rgba(252,210,23,.5)"
  },
  {
    hex: "#ffd111",
    name: "藤黄",
    pinyin: "tenghuang",
    RGBA: "rgba(254,209,16,1)",
    bleak: "rgba(254,209,16,.5)"
  },
  {
    hex: "#f6dead",
    name: "酪黄",
    pinyin: "laohuang",
    RGBA: "rgba(246,222,173,1)",
    bleak: "rgba(246,222,173,.5)"
  },
  {
    hex: "#f7da94",
    name: "香水玫瑰黄",
    pinyin: "xiangshuimeiguihuang",
    RGBA: "rgba(247,218,148,1)",
    bleak: "rgba(247,218,148,.5)"
  },
  {
    hex: "#f9d367",
    name: "淡密黄",
    pinyin: "danmihuang",
    RGBA: "rgba(249,211,103,1)",
    bleak: "rgba(249,211,103,.5)"
  },
  {
    hex: "#fbcd31",
    name: "大豆黄",
    pinyin: "dadouhuang",
    RGBA: "rgba(251,205,49,1)",
    bleak: "rgba(251,205,49,.5)"
  },
  {
    hex: "#fccb16",
    name: "素馨黄",
    pinyin: "suxinhuang",
    RGBA: "rgba(252,203,22,1)",
    bleak: "rgba(252,203,22,.5)"
  },
  {
    hex: "#fecc11",
    name: "向日葵黄",
    pinyin: "xiangrikuihuang",
    RGBA: "rgba(254,204,17,1)",
    bleak: "rgba(254,204,17,.5)"
  },
  {
    hex: "#fbc82f",
    name: "雅梨黄",
    pinyin: "yalihuang",
    RGBA: "rgba(251,200,47,1)",
    bleak: "rgba(251,200,47,.5)"
  },
  {
    hex: "#fcc515",
    name: "黄连黄",
    pinyin: "huanglianhuang",
    RGBA: "rgba(252,197,21,1)",
    bleak: "rgba(252,197,21,.5)"
  },
  {
    hex: "#fcc307",
    name: "金盏黄",
    pinyin: "jinzhanhuang",
    RGBA: "rgba(252,195,7,1)",
    bleak: "rgba(252,195,7,.5)"
  },
  {
    hex: "#f8c387",
    name: "蛋壳黄",
    pinyin: "dankehuang",
    RGBA: "rgba(248,195,135,1)",
    bleak: "rgba(248,195,135,.5)"
  },
  {
    hex: "#f7c173",
    name: "肉色",
    pinyin: "rouse",
    RGBA: "rgba(247,193,115,1)",
    bleak: "rgba(247,193,115,.5)"
  },
  {
    hex: "#fbb929",
    name: "鹅掌黄",
    pinyin: "ezhanghuang",
    RGBA: "rgba(251,185,41,1)",
    bleak: "rgba(251,185,41,.5)"
  },
  {
    hex: "#fbb612",
    name: "鸡蛋黄",
    pinyin: "jidanhuang",
    RGBA: "rgba(251,182,18,1)",
    bleak: "rgba(251,182,18,.5)"
  },
  {
    hex: "#fcb70a",
    name: "鼬黄",
    pinyin: "youhuang",
    RGBA: "rgba(252,183,10,1)",
    bleak: "rgba(252,183,10,.5)"
  },
  {
    hex: "#f9a633",
    name: "榴萼黄",
    pinyin: "liuehuang",
    RGBA: "rgba(249,166,51,1)",
    bleak: "rgba(249,166,51,.5)"
  },
  {
    hex: "#fba414",
    name: "淡橘橙",
    pinyin: "danjucheng",
    RGBA: "rgba(251,164,20,1)",
    bleak: "rgba(251,164,20,.5)"
  },
  {
    hex: "#fca106",
    name: "枇杷黄",
    pinyin: "pipahuang",
    RGBA: "rgba(252,161,6,1)",
    bleak: "rgba(252,161,6,.5)"
  },
  {
    hex: "#fca104",
    name: "橙皮黄",
    pinyin: "chengpihuang",
    RGBA: "rgba(252,161,4,1)",
    bleak: "rgba(252,161,4,.5)"
  },
  {
    hex: "#fc8c23",
    name: "北瓜黄",
    pinyin: "beiguahuang",
    RGBA: "rgba(252,140,35,1)",
    bleak: "rgba(252,140,35,.5)"
  },
  {
    hex: "#f28e16",
    name: "杏黄",
    pinyin: "xinghuang",
    RGBA: "rgba(250,142,22,1)",
    bleak: "rgba(250,142,22,.5)"
  },
  {
    hex: "#ff9900",
    name: "雄黄",
    pinyin: "xionghuang",
    RGBA: "rgba(255,153,0,1)",
    bleak: "rgba(255,153,0,.5)"
  },
  {
    hex: "#fb8b05",
    name: "万寿菊黄",
    pinyin: "wanshoujuhuang",
    RGBA: "rgba(251,139,5,1)",
    bleak: "rgba(251,139,5,.5)"
  },
  {
    hex: "#e9ddb6",
    name: "菊蕾白",
    pinyin: "juleibai",
    RGBA: "rgba(233,221,182,1)",
    bleak: "rgba(233,221,182,.5)"
  },
  {
    hex: "#eed045",
    name: "秋葵黄",
    pinyin: "qiukuihuang",
    RGBA: "rgba(238,208,69,1)",
    bleak: "rgba(238,208,69,.5)"
  },
  {
    hex: "#f2ce2b",
    name: "硫华黄",
    pinyin: "liuhuahuang",
    RGBA: "rgba(242,206,43,1)",
    bleak: "rgba(242,206,43,.5)"
  },
  {
    hex: "#f1ca17",
    name: "柚黄",
    pinyin: "youhuang",
    RGBA: "rgba(241,202,23,1)",
    bleak: "rgba(241,202,23,.5)"
  },
  {
    hex: "#ddc871",
    name: "芒果黄",
    pinyin: "mangguohuang",
    RGBA: "rgba(221,200,113,1)",
    bleak: "rgba(221,200,113,.5)"
  },
  {
    hex: "#dfc243",
    name: "蒿黄",
    pinyin: "haohuang",
    RGBA: "rgba(223,194,67,1)",
    bleak: "rgba(223,194,67,.5)"
  },
  {
    hex: "#e2c027",
    name: "姜黄",
    pinyin: "jianghuang",
    RGBA: "rgba(226,192,39,1)",
    bleak: "rgba(226,192,39,.5)"
  },
  {
    hex: "#e4bf11",
    name: "香蕉黄",
    pinyin: "xiangjiaohuang",
    RGBA: "rgba(228,191,17,1)",
    bleak: "rgba(228,191,17,.5)"
  },
  {
    hex: "#d2b42c",
    name: "草黄",
    pinyin: "caohuang",
    RGBA: "rgba(210,180,44,1)",
    bleak: "rgba(210,180,44,.5)"
  },
  {
    hex: "#d2b116",
    name: "新禾绿",
    pinyin: "xinhelv",
    RGBA: "rgba(210,177,22,1)",
    bleak: "rgba(210,177,22,.5)"
  },
  {
    hex: "#b7ae8f",
    name: "月灰",
    pinyin: "yuehui",
    RGBA: "rgba(183,174,143,1)",
    bleak: "rgba(183,174,143,.5)"
  },
  {
    hex: "#ad9e5f",
    name: "淡灰绿",
    pinyin: "danhuilv",
    RGBA: "rgba(173,158,85,1)",
    bleak: "rgba(173,158,85,.5)"
  },
  {
    hex: "#8e804b",
    name: "草灰绿",
    pinyin: "caohuilv",
    RGBA: "rgba(142,128,75,1)",
    bleak: "rgba(142,128,75,.5)"
  },
  {
    hex: "#887322",
    name: "苔绿",
    pinyin: "tailv",
    RGBA: "rgba(136,115,34,1)",
    bleak: "rgba(136,115,34,.5)"
  },
  {
    hex: "#867018",
    name: "碧螺春绿",
    pinyin: "biluochunlv",
    RGBA: "rgba(134,112,24,1)",
    bleak: "rgba(134,112,24,.5)"
  },
  {
    hex: "#685e48",
    name: "燕羽灰",
    pinyin: "yanyuhui",
    RGBA: "rgba(104,94,72,1)",
    bleak: "rgba(104,94,72,.5)"
  },
  {
    hex: "#695e45",
    name: "蟹壳灰",
    pinyin: "xiekehui",
    RGBA: "rgba(105,94,69,1)",
    bleak: "rgba(105,94,69,.5)"
  },
  {
    hex: "#645822",
    name: "潭水绿",
    pinyin: "tanshuilv",
    RGBA: "rgba(100,88,34,1)",
    bleak: "rgba(100,88,34,.5)"
  },
  {
    hex: "#5e5314",
    name: "橄榄绿",
    pinyin: "ganlanlv",
    RGBA: "rgba(94,83,20,1)",
    bleak: "rgba(94,83,20,.5)"
  },
  {
    hex: "#f9f1db",
    name: "蚌肉白",
    pinyin: "bangroubai",
    RGBA: "rgba(249,241,219,1)",
    bleak: "rgba(249,241,219,.5)"
  },
  {
    hex: "#f8e8c1",
    name: "豆汁黄",
    pinyin: "douzhihuang",
    RGBA: "rgba(248,232,193,1)",
    bleak: "rgba(248,232,193,.5)"
  },
  {
    hex: "#f9d770",
    name: "淡茧黄",
    pinyin: "danjianhuang",
    RGBA: "rgba(249,215,112,1)",
    bleak: "rgba(249,215,112,.5)"
  },
  {
    hex: "#ffc90c",
    name: "乳鸭黄",
    pinyin: "ruyahuang",
    RGBA: "rgba(255,201,12,1)",
    bleak: "rgba(255,201,12,.5)"
  },
  {
    hex: "#f2e6ce",
    name: "荔肉白",
    pinyin: "liroubai",
    RGBA: "rgba(242,230,206,1)",
    bleak: "rgba(242,230,206,.5)"
  },
  {
    hex: "#f0d695",
    name: "象牙黄",
    pinyin: "xiangyahuang",
    RGBA: "rgba(240,214,149,1)",
    bleak: "rgba(240,214,149,.5)"
  },
  {
    hex: "#f4ce69",
    name: "炒米黄",
    pinyin: "chaomihuang",
    RGBA: "rgba(244,206,105,1)",
    bleak: "rgba(244,206,105,.5)"
  },
  {
    hex: "#f6c430",
    name: "鹦鹉冠黄",
    pinyin: "yingwuguanhuang",
    RGBA: "rgba(246,196,48,1)",
    bleak: "rgba(246,196,48,.5)"
  },
  {
    hex: "#f9c116",
    name: "木瓜黄",
    pinyin: "muguahuang",
    RGBA: "rgba(249,193,22,1)",
    bleak: "rgba(249,193,22,.5)"
  },
  {
    hex: "#f9bd10",
    name: "浅烙黄",
    pinyin: "qianlaohuang",
    RGBA: "rgba(249,189,16,1)",
    bleak: "rgba(249,189,16,.5)"
  },
  {
    hex: "#e5d3aa",
    name: "莲子白",
    pinyin: "lianzibai",
    RGBA: "rgba(229,211,170,1)",
    bleak: "rgba(229,211,170,.5)"
  },
  {
    hex: "#e8b004",
    name: "谷黄",
    pinyin: "guhuang",
    RGBA: "rgba(232,176,4,1)",
    bleak: "rgba(232,176,4,.5)"
  },
  {
    hex: "#ebb10d",
    name: "栀子黄",
    pinyin: "zhizihuang",
    RGBA: "rgba(235,177,13,1)",
    bleak: "rgba(235,177,13,.5)"
  },
  {
    hex: "#d9a40e",
    name: "芥黄",
    pinyin: "jiehuang",
    RGBA: "rgba(217,164,14,1)",
    bleak: "rgba(217,164,14,.5)"
  },
  {
    hex: "#b5aa90",
    name: "银鼠灰",
    pinyin: "yinshuhui",
    RGBA: "rgba(181,170,144,1)",
    bleak: "rgba(181,170,144,.5)"
  },
  {
    hex: "#b6a476",
    name: "尘灰",
    pinyin: "chenhui",
    RGBA: "rgba(182,164,118,1)",
    bleak: "rgba(182,164,118,.5)"
  },
  {
    hex: "#b78d12",
    name: "枯绿",
    pinyin: "kulv",
    RGBA: "rgba(183,141,18,1)",
    bleak: "rgba(183,141,18,.5)"
  },
  {
    hex: "#87723e",
    name: "鲛青",
    pinyin: "jiaoqing",
    RGBA: "rgba(135,114,62,1)",
    bleak: "rgba(135,114,62,.5)"
  },
  {
    hex: "#876818",
    name: "粽叶绿",
    pinyin: "zongyelv",
    RGBA: "rgba(135,104,24,1)",
    bleak: "rgba(135,104,24,.5)"
  },
  {
    hex: "#8a6913",
    name: "灰绿",
    pinyin: "huilv",
    RGBA: "rgba(138,105,19,1)",
    bleak: "rgba(138,105,19,.5)"
  },
  {
    hex: "#4a4035",
    name: "鹤灰",
    pinyin: "hehui",
    RGBA: "rgba(74,64,53,1)",
    bleak: "rgba(74,64,53,.5)"
  },
  {
    hex: "#4d4030",
    name: "淡松烟",
    pinyin: "dansongyan",
    RGBA: "rgba(77,64,48,1)",
    bleak: "rgba(77,64,48,.5)"
  },
  {
    hex: "#584717",
    name: "暗海水绿",
    pinyin: "anhaishuilv",
    RGBA: "rgba(88,71,23,1)",
    bleak: "rgba(88,71,23,.5)"
  },
  {
    hex: "#5b4913",
    name: "棕榈绿",
    pinyin: "zonglvlv",
    RGBA: "rgba(91,73,19,1)",
    bleak: "rgba(91,73,19,.5)"
  },
  {
    hex: "#f9e9cd",
    name: "米色",
    pinyin: "mise",
    RGBA: "rgba(249,223,205,1)",
    bleak: "rgba(249,223,205,.5)"
  },
  {
    hex: "#f8e0b0",
    name: "淡肉色",
    pinyin: "danrouse",
    RGBA: "rgba(248,224,176,1)",
    bleak: "rgba(248,224,176,.5)"
  },
  {
    hex: "#f9d27d",
    name: "麦芽糖黄",
    pinyin: "maiyatanghuang",
    RGBA: "rgba(249,210,125,1)",
    bleak: "rgba(249,210,125,.5)"
  },
  {
    hex: "#feba07",
    name: "琥珀黄",
    pinyin: "hupohuang",
    RGBA: "rgba(254,186,7,1)",
    bleak: "rgba(254,186,7,.5)"
  },
  {
    hex: "#f3bf4c",
    name: "甘草黄",
    pinyin: "gancaohuang",
    RGBA: "rgba(243,191,76,1)",
    bleak: "rgba(243,191,76,.5)"
  },
  {
    hex: "#f8bc31",
    name: "初熟杏黄",
    pinyin: "chushuxinghuang",
    RGBA: "rgba(248,188,49,1)",
    bleak: "rgba(248,188,49,.5)"
  },
  {
    hex: "#e2c17c",
    name: "浅驼色",
    pinyin: "qiantuose",
    RGBA: "rgba(226,193,124,1)",
    bleak: "rgba(226,193,124,.5)"
  },
  {
    hex: "#e5b751",
    name: "沙石黄",
    pinyin: "shashihuang",
    RGBA: "rgba(229,183,81,1)",
    bleak: "rgba(229,183,81,.5)"
  },
  {
    hex: "#eaad1a",
    name: "虎皮黄",
    pinyin: "hupihuang",
    RGBA: "rgba(234,173,26,1)",
    bleak: "rgba(234,173,26,.5)"
  },
  {
    hex: "#d6a01d",
    name: "土黄",
    pinyin: "tuhuang",
    RGBA: "rgba(214,160,29,1)",
    bleak: "rgba(214,160,29,.5)"
  },
  {
    hex: "#b4a992",
    name: "百灵鸟灰",
    pinyin: "bailingniaohui",
    RGBA: "rgba(180,169,146,1)",
    bleak: "rgba(180,169,146,.5)"
  },
  {
    hex: "#b78b26",
    name: "山鸡黄",
    pinyin: "shanjihuang",
    RGBA: "rgba(183,139,38,1)",
    bleak: "rgba(183,139,38,.5)"
  },
  {
    hex: "#826b48",
    name: "龟背黄",
    pinyin: "guibeihuang",
    RGBA: "rgba(130,107,72,1)",
    bleak: "rgba(130,107,72,.5)"
  },
  {
    hex: "#806332",
    name: "苍黄",
    pinyin: "canghuang",
    RGBA: "rgba(128,99,50,1)",
    bleak: "rgba(128,99,50,.5)"
  },
  {
    hex: "#815f25",
    name: "莱阳梨黄",
    pinyin: "laiyanglihuang",
    RGBA: "rgba(129,95,37,1)",
    bleak: "rgba(129,95,37,.5)"
  },
  {
    hex: "#835e1d",
    name: "蜴蜊绿",
    pinyin: "yililv",
    RGBA: "rgba(131,94,29,1)",
    bleak: "rgba(131,94,29,.5)"
  },
  {
    hex: "#4f4032",
    name: "松鼠灰",
    pinyin: "songshuhui",
    RGBA: "rgba(79,64,50,1)",
    bleak: "rgba(79,64,50,.5)"
  },
  {
    hex: "#503e2a",
    name: "橄榄灰",
    pinyin: "ganlanhui",
    RGBA: "rgba(80,62,42,1)",
    bleak: "rgba(80,62,42,.5)"
  },
  {
    hex: "#513c20",
    name: "蟹壳绿",
    pinyin: "xiekelv",
    RGBA: "rgba(81,60,32,1)",
    bleak: "rgba(81,60,32,.5)"
  },
  {
    hex: "#533c1b",
    name: "古铜绿",
    pinyin: "gutonglv",
    RGBA: "rgba(83,60,27,1)",
    bleak: "rgba(83,60,27,.5)"
  },
  {
    hex: "#553b18",
    name: "焦茶绿",
    pinyin: "jiaochalv",
    RGBA: "rgba(85,59,24,1)",
    bleak: "rgba(85,59,24,.5)"
  },
  {
    hex: "#fbf2e3",
    name: "粉白",
    pinyin: "fenbai",
    RGBA: "rgba(251,242,227,1)",
    bleak: "rgba(251,242,227,.5)"
  },
  {
    hex: "#f9e8d0",
    name: "落英淡粉",
    pinyin: "luoyingdanfen",
    RGBA: "rgba(249,232,208,1)",
    bleak: "rgba(249,232,208,.5)"
  },
  {
    hex: "#f9cb8b",
    name: "瓜瓤粉",
    pinyin: "guarangfen",
    RGBA: "rgba(249,203,139,1)",
    bleak: "rgba(249,203,139,.5)"
  },
  {
    hex: "#fbb957",
    name: "蜜黄",
    pinyin: "mihuang",
    RGBA: "rgba(251,185,87,1)",
    bleak: "rgba(251,185,87,.5)"
  },
  {
    hex: "#ffa60f",
    name: "金叶黄",
    pinyin: "jinyehuang",
    RGBA: "rgba(255,166,15,1)",
    bleak: "rgba(255,166,15,.5)"
  },
  {
    hex: "#f4a83a",
    name: "金莺黄",
    pinyin: "jinyinghuang",
    RGBA: "rgba(244,168,58,1)",
    bleak: "rgba(244,168,58,.5)"
  },
  {
    hex: "#e3bd8d",
    name: "鹿角棕",
    pinyin: "lujiaozong",
    RGBA: "rgba(227,189,141,1)",
    bleak: "rgba(227,189,141,.5)"
  },
  {
    hex: "#e7a23f",
    name: "凋叶棕",
    pinyin: "diaoyezong",
    RGBA: "rgba(231,162,63,1)",
    bleak: "rgba(231,162,63,.5)"
  },
  {
    hex: "#daa45a",
    name: "玳瑁黄",
    pinyin: "daimaohuang",
    RGBA: "rgba(218,164,90,1)",
    bleak: "rgba(218,164,90,.5)"
  },
  {
    hex: "#de9e44",
    name: "软木黄",
    pinyin: "ruanmuhuang",
    RGBA: "rgba(222,158,68,1)",
    bleak: "rgba(222,158,68,.5)"
  },
  {
    hex: "#dc9123",
    name: "风帆黄",
    pinyin: "fengfanhuang",
    RGBA: "rgba(220,145,35,1)",
    bleak: "rgba(220,145,35,.5)"
  },
  {
    hex: "#c09351",
    name: "桂皮淡棕",
    pinyin: "guipidanzong",
    RGBA: "rgba(192,147,81,1)",
    bleak: "rgba(192,147,81,.5)"
  },
  {
    hex: "#97846c",
    name: "猴毛灰",
    pinyin: "houmaohui",
    RGBA: "rgba(151,132,108,1)",
    bleak: "rgba(151,132,108,.5)"
  },
  {
    hex: "#986524",
    name: "山鸡褐",
    pinyin: "shanjihe",
    RGBA: "rgba(152,101,36,1)",
    bleak: "rgba(152,101,36,.5)"
  },
  {
    hex: "#66462a",
    name: "驼色",
    pinyin: "tuose",
    RGBA: "rgba(102,70,42,1)",
    bleak: "rgba(102,70,42,.5)"
  },
  {
    hex: "#5d3d21",
    name: "茶褐",
    pinyin: "chahe",
    RGBA: "rgba(93,61,33,1)",
    bleak: "rgba(93,61,33,.5)"
  },
  {
    hex: "#5c3719",
    name: "古铜褐",
    pinyin: "gutonghe",
    RGBA: "rgba(92,55,25,1)",
    bleak: "rgba(92,55,25,.5)"
  },
  {
    hex: "#fbecde",
    name: "荷花白",
    pinyin: "hehuabai",
    RGBA: "rgba(251,236,222,1)",
    bleak: "rgba(251,236,222,.5)"
  },
  {
    hex: "#f8b37f",
    name: "玫瑰粉",
    pinyin: "meiguifen",
    RGBA: "rgba(248,179,127,1)",
    bleak: "rgba(248,179,127,.5)"
  },
  {
    hex: "#f97d1c",
    name: "橘橙",
    pinyin: "jucheng",
    RGBA: "rgba(249,125,28,1)",
    bleak: "rgba(249,125,28,.5)"
  },
  {
    hex: "#fa7e23",
    name: "美人焦橙",
    pinyin: "meirenjiaocheng",
    RGBA: "rgba(250,126,35,1)",
    bleak: "rgba(250,126,35,.5)"
  },
  {
    hex: "#f7cdbc",
    name: "润红",
    pinyin: "runhong",
    RGBA: "rgba(247,205,188,1)",
    bleak: "rgba(247,205,188,.5)"
  },
  {
    hex: "#f6cec1",
    name: "淡桃红",
    pinyin: "dantaohong",
    RGBA: "rgba(246,206,193,1)",
    bleak: "rgba(246,206,193,.5)"
  },
  {
    hex: "#f0945d",
    name: "海螺橙",
    pinyin: "hailuocheng",
    RGBA: "rgba(240,148,93,1)",
    bleak: "rgba(240,148,93,.5)"
  },
  {
    hex: "#f0ada0",
    name: "桃红",
    pinyin: "taohong",
    RGBA: "rgba(240,173,160,1)",
    bleak: "rgba(240,173,160,.5)"
  },
  {
    hex: "#eeaa9c",
    name: "颊红",
    pinyin: "jiahong",
    RGBA: "rgba(238,170,156,1)",
    bleak: "rgba(238,170,156,.5)"
  },
  {
    hex: "#eea08c",
    name: "淡罂粟红",
    pinyin: "danyingsuhong",
    RGBA: "rgba(238,160,140,1)",
    bleak: "rgba(238,160,140,.5)"
  },
  {
    hex: "#ea8958",
    name: "晨曦红",
    pinyin: "chenxihong",
    RGBA: "rgba(234,137,88,1)",
    bleak: "rgba(234,137,88,.5)"
  },
  {
    hex: "#f27635",
    name: "蟹壳红",
    pinyin: "xiekehong",
    RGBA: "rgba(242,118,53,1)",
    bleak: "rgba(242,118,53,.5)"
  },
  {
    hex: "#f86b1d",
    name: "金莲花橙",
    pinyin: "jinlianhuacheng",
    RGBA: "rgba(248,107,29,1)",
    bleak: "rgba(248,107,29,.5)"
  },
  {
    hex: "#ef6f48",
    name: "草莓红",
    pinyin: "caomeihong",
    RGBA: "rgba(239,111,72,1)",
    bleak: "rgba(239,111,72,.5)"
  },
  {
    hex: "#ef632b",
    name: "龙睛鱼红",
    pinyin: "longjingyuhong",
    RGBA: "rgba(239,99,43,1)",
    bleak: "rgba(239,99,43,.5)"
  },
  {
    hex: "#f1441d",
    name: "蜻蜓红",
    pinyin: "qingtinghong",
    RGBA: "rgba(241,68,29,1)",
    bleak: "rgba(241,68,29,.5)"
  },
  {
    hex: "#f04b22",
    name: "大红",
    pinyin: "dahong",
    RGBA: "rgba(240,75,34,1)",
    bleak: "rgba(240,75,34,.5)"
  },
  {
    hex: "#f2481b",
    name: "柿红",
    pinyin: "shihong",
    RGBA: "rgba(242,72,27,1)",
    bleak: "rgba(242,72,27,.5)"
  },
  {
    hex: "#f34718",
    name: "榴花红",
    pinyin: "liuhuahong",
    RGBA: "rgba(243,71,24,1)",
    bleak: "rgba(243,71,24,.5)"
  },
  {
    hex: "#f43e06",
    name: "银朱",
    pinyin: "yinzhu",
    RGBA: "rgba(244,62,6,1)",
    bleak: "rgba(244,62,6,.5)"
  },
  {
    hex: "#ed5126",
    name: "朱红",
    pinyin: "zhuhong",
    RGBA: "rgba(237,81,38,1)",
    bleak: "rgba(237,81,38,.5)"
  },
  {
    hex: "#f09c5a",
    name: "鲑鱼红",
    pinyin: "guiyuhong",
    RGBA: "rgba(240,156,90,1)",
    bleak: "rgba(240,156,90,.5)"
  },
  {
    hex: "#f26b1f",
    name: "金黄",
    pinyin: "jinhuang",
    RGBA: "rgba(242,123,31,1)",
    bleak: "rgba(242,123,31,.5)"
  },
  {
    hex: "#d99156",
    name: "鹿皮褐",
    pinyin: "lupihe",
    RGBA: "rgba(217,145,86,1)",
    bleak: "rgba(217,145,86,.5)"
  },
  {
    hex: "#db8540",
    name: "醉瓜肉",
    pinyin: "zuiguarou",
    RGBA: "rgba(219,133,64,1)",
    bleak: "rgba(219,133,64,.5)"
  },
  {
    hex: "#de7622",
    name: "麂棕",
    pinyin: "jizong",
    RGBA: "rgba(222,118,34,1)",
    bleak: "rgba(222,118,34,.5)"
  },
  {
    hex: "#c1b2a3",
    name: "淡银灰",
    pinyin: "danyinhui",
    RGBA: "rgba(193,178,163,1)",
    bleak: "rgba(193,178,163,.5)"
  },
  {
    hex: "#be7e4a",
    name: "淡赭",
    pinyin: "danzhe",
    RGBA: "rgba(190,126,74,1)",
    bleak: "rgba(190,126,74,.5)"
  },
  {
    hex: "#c1651a",
    name: "槟榔综",
    pinyin: "binglangzong",
    RGBA: "rgba(193,101,26,1)",
    bleak: "rgba(193,101,26,.5)"
  },
  {
    hex: "#918072",
    name: "银灰",
    pinyin: "yinhui",
    RGBA: "rgba(145,128,114,1)",
    bleak: "rgba(145,128,114,.5)"
  },
  {
    hex: "#9a8878",
    name: "海鸥灰",
    pinyin: "haiouhui",
    RGBA: "rgba(154,136,120,1)",
    bleak: "rgba(154,136,120,.5)"
  },
  {
    hex: "#945833",
    name: "淡咖啡",
    pinyin: "dankafei",
    RGBA: "rgba(148,88,51,1)",
    bleak: "rgba(148,88,51,.5)"
  },
  {
    hex: "#964d22",
    name: "岩石棕",
    pinyin: "yanshizong",
    RGBA: "rgba(150,77,34,1)",
    bleak: "rgba(150,77,34,.5)"
  },
  {
    hex: "#954416",
    name: "芒果棕",
    pinyin: "mangguozong",
    RGBA: "rgba(149,68,22,1)",
    bleak: "rgba(149,68,22,.5)"
  },
  {
    hex: "#624941",
    name: "石板灰",
    pinyin: "shibanhui",
    RGBA: "rgba(98,73,65,1)",
    bleak: "rgba(98,73,65,.5)"
  },
  {
    hex: "#64483d",
    name: "珠母灰",
    pinyin: "zhumuhui",
    RGBA: "rgba(100,72,61,1)",
    bleak: "rgba(100,72,61,.5)"
  },
  {
    hex: "#71361d",
    name: "丁香棕",
    pinyin: "dingxiangzong",
    RGBA: "rgba(113,54,29,1)",
    bleak: "rgba(113,54,29,.5)"
  },
  {
    hex: "#753117",
    name: "咖啡",
    pinyin: "kafei",
    RGBA: "rgba(117,49,23,1)",
    bleak: "rgba(117,49,23,.5)"
  },
  {
    hex: "#732e12",
    name: "筍皮棕",
    pinyin: "sunpizong",
    RGBA: "rgba(115,46,18,1)",
    bleak: "rgba(115,46,18,.5)"
  },
  {
    hex: "#fc6315",
    name: "燕颔红",
    pinyin: "yanhanhong",
    RGBA: "rgba(252,99,21,1)",
    bleak: "rgba(252,99,21,.5)"
  },
  {
    hex: "#e8b49a",
    name: "玉粉红",
    pinyin: "yufenhong",
    RGBA: "rgba(232,180,154,1)",
    bleak: "rgba(232,180,154,.5)"
  },
  {
    hex: "#e46828",
    name: "金驼",
    pinyin: "jintuo",
    RGBA: "rgba(228,104,40,1)",
    bleak: "rgba(228,104,40,.5)"
  },
  {
    hex: "#d85916",
    name: "铁棕",
    pinyin: "tiezong",
    RGBA: "rgba(216,89,22,1)",
    bleak: "rgba(216,89,22,.5)"
  },
  {
    hex: "#b7a091",
    name: "蛛网灰",
    pinyin: "zhuwanghui",
    RGBA: "rgba(183,160,145,1)",
    bleak: "rgba(183,160,145,.5)"
  },
  {
    hex: "#b7511d",
    name: "淡可可棕",
    pinyin: "dankekezong",
    RGBA: "rgba(183,81,29,1)",
    bleak: "rgba(183,81,29,.5)"
  },
  {
    hex: "#8b614d",
    name: "中红灰",
    pinyin: "zhonghonghui",
    RGBA: "rgba(139,97,77,1)",
    bleak: "rgba(139,97,77,.5)"
  },
  {
    hex: "#8c4b31",
    name: "淡土黄",
    pinyin: "dantuhuang",
    RGBA: "rgba(140,75,49,1)",
    bleak: "rgba(140,75,49,.5)"
  },
  {
    hex: "#873d24",
    name: "淡豆沙",
    pinyin: "dandousha",
    RGBA: "rgba(135,61,36,1)",
    bleak: "rgba(135,61,36,.5)"
  },
  {
    hex: "#883a1e",
    name: "椰壳棕",
    pinyin: "yekezong",
    RGBA: "rgba(136,58,30,1)",
    bleak: "rgba(136,58,30,.5)"
  },
  {
    hex: "#5b423a",
    name: "淡铁灰",
    pinyin: "dantiehui",
    RGBA: "rgba(91,66,58,1)",
    bleak: "rgba(91,66,58,.5)"
  },
  {
    hex: "#603d30",
    name: "中灰驼",
    pinyin: "zhonghuituo",
    RGBA: "rgba(96,61,48,1)",
    bleak: "rgba(96,61,48,.5)"
  },
  {
    hex: "#673424",
    name: "淡栗棕",
    pinyin: "danlizong",
    RGBA: "rgba(103,52,36,1)",
    bleak: "rgba(103,52,36,.5)"
  },
  {
    hex: "#652b1c",
    name: "可可棕",
    pinyin: "kekezong",
    RGBA: "rgba(101,43,28,1)",
    bleak: "rgba(101,43,28,.5)"
  },
  {
    hex: "#692a1b",
    name: "柞叶棕",
    pinyin: "zhayezong",
    RGBA: "rgba(105,42,27,1)",
    bleak: "rgba(105,42,27,.5)"
  },
  {
    hex: "#fb9968",
    name: "野蔷薇红",
    pinyin: "yeqiangweihong",
    RGBA: "rgba(251,153,104,1)",
    bleak: "rgba(251,153,104,.5)"
  },
  {
    hex: "#fc7930",
    name: "菠萝红",
    pinyin: "boluohong",
    RGBA: "rgba(252,121,48,1)",
    bleak: "rgba(252,121,48,.5)"
  },
  {
    hex: "#edc3ae",
    name: "藕荷",
    pinyin: "ouhe",
    RGBA: "rgba(237,195,174,1)",
    bleak: "rgba(237,195,174,.5)"
  },
  {
    hex: "#e16723",
    name: "陶瓷红",
    pinyin: "taocihong",
    RGBA: "rgba(225,103,35,1)",
    bleak: "rgba(225,103,35,.5)"
  },
  {
    hex: "#d4c4b7",
    name: "晓灰",
    pinyin: "xiaohui",
    RGBA: "rgba(212,196,183,1)",
    bleak: "rgba(212,196,183,.5)"
  },
  {
    hex: "#cf7543",
    name: "余烬红",
    pinyin: "yujinhong",
    RGBA: "rgba(207,117,67,1)",
    bleak: "rgba(207,117,67,.5)"
  },
  {
    hex: "#cd6227",
    name: "火砖红",
    pinyin: "huozhuanhong",
    RGBA: "rgba(205,98,39,1)",
    bleak: "rgba(205,98,39,.5)"
  },
  {
    hex: "#aa6a4c",
    name: "火泥棕",
    pinyin: "huonizong",
    RGBA: "rgba(170,106,76,1)",
    bleak: "rgba(170,106,76,.5)"
  },
  {
    hex: "#a6522c",
    name: "绀红",
    pinyin: "ganhong",
    RGBA: "rgba(166,82,44,1)",
    bleak: "rgba(166,82,44,.5)"
  },
  {
    hex: "#773d31",
    name: "橡树棕",
    pinyin: "xiangshuzong",
    RGBA: "rgba(119,61,49,1)",
    bleak: "rgba(119,61,49,.5)"
  },
  {
    hex: "#483332",
    name: "海报灰",
    pinyin: "haibaohui",
    RGBA: "rgba(72,51,50,1)",
    bleak: "rgba(72,51,50,.5)"
  },
  {
    hex: "#4b2e2b",
    name: "玫瑰灰",
    pinyin: "meiguihui",
    RGBA: "rgba(175,46,43,1)",
    bleak: "rgba(175,46,43,.5)"
  },
  {
    hex: "#482522",
    name: "火山棕",
    pinyin: "huoshanzong",
    RGBA: "rgba(72,37,34,1)",
    bleak: "rgba(72,37,34,.5)"
  },
  {
    hex: "#481e1c",
    name: "豆沙",
    pinyin: "dousha",
    RGBA: "rgba(72,30,28,1)",
    bleak: "rgba(72,30,28,.5)"
  },
  {
    hex: "#fbeee2",
    name: "淡米粉",
    pinyin: "danmifen",
    RGBA: "rgba(251,238,226,1)",
    bleak: "rgba(251,238,226,.5)"
  },
  {
    hex: "#f6dcce",
    name: "初桃粉红",
    pinyin: "chutaofenhong",
    RGBA: "rgba(246,220,206,1)",
    bleak: "rgba(246,220,206,.5)"
  },
  {
    hex: "#f7cfba",
    name: "介壳淡粉红",
    pinyin: "jieqiaodanfenhong",
    RGBA: "rgba(247,207,186,1)",
    bleak: "rgba(247,207,186,.5)"
  },
  {
    hex: "#f6ad8f",
    name: "淡藏花红",
    pinyin: "dancanghuahong",
    RGBA: "rgba(246,173,143,1)",
    bleak: "rgba(246,173,143,.5)"
  },
  {
    hex: "#f68c60",
    name: "瓜瓤红",
    pinyin: "guaranghong",
    RGBA: "rgba(246,140,96,1)",
    bleak: "rgba(246,140,96,.5)"
  },
  {
    hex: "#f9723d",
    name: "芙蓉红",
    pinyin: "furonghong",
    RGBA: "rgba(249,114,61,1)",
    bleak: "rgba(249,114,61,.5)"
  },
  {
    hex: "#fa5d19",
    name: "莓酱红",
    pinyin: "meijianghong",
    RGBA: "rgba(250,93,25,1)",
    bleak: "rgba(250,93,25,.5)"
  },
  {
    hex: "#ee8055",
    name: "法螺红",
    pinyin: "faluohong",
    RGBA: "rgba(238,128,85,1)",
    bleak: "rgba(238,128,85,.5)"
  },
  {
    hex: "#cf4813",
    name: "落霞红",
    pinyin: "luoxiahong",
    RGBA: "rgba(207,72,19,1)",
    bleak: "rgba(207,72,19,.5)"
  },
  {
    hex: "#b89485",
    name: "淡玫瑰灰",
    pinyin: "danmeiguihui",
    RGBA: "rgba(184,148,133,1)",
    bleak: "rgba(184,148,133,.5)"
  },
  {
    hex: "#b14b28",
    name: "蟹蝥红",
    pinyin: "xiemaohong",
    RGBA: "rgba(177,75,40,1)",
    bleak: "rgba(177,75,40,.5)"
  },
  {
    hex: "#863020",
    name: "火岩棕",
    pinyin: "huoyanzong",
    RGBA: "rgba(134,48,32,1)",
    bleak: "rgba(134,48,32,.5)"
  },
  {
    hex: "#862617",
    name: "赭石",
    pinyin: "zheshi",
    RGBA: "rgba(134,38,23,1)",
    bleak: "rgba(134,38,23,.5)"
  },
  {
    hex: "#592620",
    name: "暗驼棕",
    pinyin: "antuozong",
    RGBA: "rgba(89,38,32,1)",
    bleak: "rgba(89,38,32,.5)"
  },
  {
    hex: "#5a1f1b",
    name: "酱棕",
    pinyin: "jiangzong",
    RGBA: "rgba(90,31,27,1)",
    bleak: "rgba(90,31,27,.5)"
  },
  {
    hex: "#5c1e19",
    name: "栗棕",
    pinyin: "lizong",
    RGBA: "rgba(92,30,25,1)",
    bleak: "rgba(92,30,25,.5)"
  },
  {
    hex: "#f4c7ba",
    name: "洋水仙红",
    pinyin: "yangshuixianhong",
    RGBA: "rgba(244,199,186,1)",
    bleak: "rgba(244,199,186,.5)"
  },
  {
    hex: "#f17666",
    name: "谷鞘红",
    pinyin: "guqiaohong",
    RGBA: "rgba(241,118,102,1)",
    bleak: "rgba(241,118,102,.5)"
  },
  {
    hex: "#f15642",
    name: "苹果红",
    pinyin: "pingguohong",
    RGBA: "rgba(241,86,66,1)",
    bleak: "rgba(241,86,66,.5)"
  },
  {
    hex: "#f5391c",
    name: "铁水红",
    pinyin: "tieshuihong",
    RGBA: "rgba(245,57,28,1)",
    bleak: "rgba(245,57,28,.5)"
  },
  {
    hex: "#f25a47",
    name: "桂红",
    pinyin: "guihong",
    RGBA: "rgba(242,90,71,1)",
    bleak: "rgba(242,90,71,.5)"
  },
  {
    hex: "#f33b1f",
    name: "极光红",
    pinyin: "jiguanghong",
    RGBA: "rgba(243,59,31,1)",
    bleak: "rgba(243,59,31,.5)"
  },
  {
    hex: "#f2b9b2",
    name: "粉红",
    pinyin: "fenhong",
    RGBA: "rgba(242,185,178,1)",
    bleak: "rgba(242,185,178,.5)"
  },
  {
    hex: "#f19790",
    name: "舌红",
    pinyin: "shehong",
    RGBA: "rgba(241,151,144,1)",
    bleak: "rgba(241,151,144,.5)"
  },
  {
    hex: "#f05a46",
    name: "曲红",
    pinyin: "quhong",
    RGBA: "rgba(240,90,70,1)",
    bleak: "rgba(240,90,70,.5)"
  },
  {
    hex: "#f23e23",
    name: "红汞红",
    pinyin: "honggonghong",
    RGBA: "rgba(242,62,35,1)",
    bleak: "rgba(242,62,35,.5)"
  },
  {
    hex: "#f2cac9",
    name: "淡绯",
    pinyin: "danfei",
    RGBA: "rgba(242,202,201,1)",
    bleak: "rgba(242,202,201,.5)"
  },
  {
    hex: "#efafad",
    name: "无花果红",
    pinyin: "wuhuaguohong",
    RGBA: "rgba(239,175,173,1)",
    bleak: "rgba(239,175,173,.5)"
  },
  {
    hex: "#f1908c",
    name: "榴子红",
    pinyin: "liuzihong",
    RGBA: "rgba(241,144,140,1)",
    bleak: "rgba(241,144,140,.5)"
  },
  {
    hex: "#f03f24",
    name: "胭脂红",
    pinyin: "yanzhihong",
    RGBA: "rgba(240,63,36,1)",
    bleak: "rgba(240,63,36,.5)"
  },
  {
    hex: "#f0a1a8",
    name: "合欢红",
    pinyin: "hehuanhong",
    RGBA: "rgba(240,161,168,1)",
    bleak: "rgba(240,161,168,.5)"
  },
  {
    hex: "#f1939c",
    name: "春梅红",
    pinyin: "chunmeihong",
    RGBA: "rgba(241,147,156,1)",
    bleak: "rgba(241,147,156,.5)"
  },
  {
    hex: "#f07c82",
    name: "香叶红",
    pinyin: "xiangyehong",
    RGBA: "rgba(240,124,130,1)",
    bleak: "rgba(240,124,130,.5)"
  },
  {
    hex: "#f04a3a",
    name: "珊瑚红",
    pinyin: "shanhuhong",
    RGBA: "rgba(240,74,58,1)",
    bleak: "rgba(240,74,58,.5)"
  },
  {
    hex: "#f13c22",
    name: "萝卜红",
    pinyin: "luobohong",
    RGBA: "rgba(241,60,34,1)",
    bleak: "rgba(241,60,34,.5)"
  },
  {
    hex: "#e77c8e",
    name: "淡茜红",
    pinyin: "danqianhong",
    RGBA: "rgba(231,124,142,1)",
    bleak: "rgba(231,124,142,.5)"
  },
  {
    hex: "#ed5a65",
    name: "艳红",
    pinyin: "yanhong",
    RGBA: "rgba(237,90,101,1)",
    bleak: "rgba(237,90,101,.5)"
  },
  {
    hex: "#ed4845",
    name: "淡菽红",
    pinyin: "danshuhong",
    RGBA: "rgba(237,72,69,1)",
    bleak: "rgba(237,72,69,.5)"
  },
  {
    hex: "#ed3b2f",
    name: "鱼鳃红",
    pinyin: "yusaihong",
    RGBA: "rgba(237,59,47,1)",
    bleak: "rgba(237,59,47,.5)"
  },
  {
    hex: "#ed3321",
    name: "樱桃红",
    pinyin: "yingtaohong",
    RGBA: "rgba(237,51,33,1)",
    bleak: "rgba(237,51,33,.5)"
  },
  {
    hex: "#ee4866",
    name: "淡蕊香红",
    pinyin: "danruixianghong",
    RGBA: "rgba(238,72,102,1)",
    bleak: "rgba(238,72,102,.5)"
  },
  {
    hex: "#ee4863",
    name: "石竹红",
    pinyin: "shizhuhong",
    RGBA: "rgba(238,72,99,1)",
    bleak: "rgba(238,72,99,.5)"
  },
  {
    hex: "#ef475d",
    name: "草茉莉红",
    pinyin: "caomolihong",
    RGBA: "rgba(239,71,93,1)",
    bleak: "rgba(239,71,93,.5)"
  },
  {
    hex: "#ee3f4d",
    name: "茶花红",
    pinyin: "chahuahong",
    RGBA: "rgba(238,63,77,1)",
    bleak: "rgba(238,63,77,.5)"
  },
  {
    hex: "#ed3333",
    name: "枸枢红",
    pinyin: "goushuhong",
    RGBA: "rgba(237,51,51,1)",
    bleak: "rgba(237,51,51,.5)"
  },
  {
    hex: "#ec2b24",
    name: "秋海棠红",
    pinyin: "qiuhaitanghong",
    RGBA: "rgba(236,43,36,1)",
    bleak: "rgba(236,43,36,.5)"
  },
  {
    hex: "#eb261a",
    name: "丽春红",
    pinyin: "lichunhong",
    RGBA: "rgba(235,38,26,1)",
    bleak: "rgba(235,38,26,.5)"
  },
  {
    hex: "#de2a18",
    name: "夕阳红",
    pinyin: "xiyanghong",
    RGBA: "rgba(222,42,24,1)",
    bleak: "rgba(222,42,24,.5)"
  },
  {
    hex: "#d42517",
    name: "鹤顶红",
    pinyin: "hedinghong",
    RGBA: "rgba(212,37,23,1)",
    bleak: "rgba(212,37,23,.5)"
  },
  {
    hex: "#ab372f",
    name: "鹅血石红",
    pinyin: "exueshihong",
    RGBA: "rgba(171,55,47,1)",
    bleak: "rgba(171,55,47,.5)"
  },
  {
    hex: "#ac1f18",
    name: "覆盆子红",
    pinyin: "fupenzihong",
    RGBA: "rgba(172,31,24,1)",
    bleak: "rgba(172,31,24,.5)"
  },
  {
    hex: "#5d3131",
    name: "貂紫",
    pinyin: "diaozi",
    RGBA: "rgba(93,49,49,1)",
    bleak: "rgba(93,49,49,.5)"
  },
  {
    hex: "#5c2223",
    name: "暗玉紫",
    pinyin: "anyuzi",
    RGBA: "rgba(92,34,35,1)",
    bleak: "rgba(92,34,35,.5)"
  },
  {
    hex: "#5a191b",
    name: "栗紫",
    pinyin: "lizi",
    RGBA: "rgba(90,25,27,1)",
    bleak: "rgba(90,25,27,.5)"
  },
  {
    hex: "#5a1216",
    name: "葡萄酱紫",
    pinyin: "putaojiangzi",
    RGBA: "rgba(90,18,22,1)",
    bleak: "rgba(90,18,22,.5)"
  },
  {
    hex: "#eea2a4",
    name: "牡丹粉红",
    pinyin: "mudanfenhong",
    RGBA: "rgba(238,162,164,1)",
    bleak: "rgba(238,162,164,.5)"
  },
  {
    hex: "#ed556a",
    name: "山茶红",
    pinyin: "shanchahong",
    RGBA: "rgba(237,85,106,1)",
    bleak: "rgba(237,85,106,.5)"
  },
  {
    hex: "#f03752",
    name: "海棠红",
    pinyin: "haitanghong",
    RGBA: "rgba(240,55,82,1)",
    bleak: "rgba(240,55,82,.5)"
  },
  {
    hex: "#c04851",
    name: "玉红",
    pinyin: "yuhong",
    RGBA: "rgba(192,72,81,1)",
    bleak: "rgba(192,72,81,.5)"
  },
  {
    hex: "#c02c38",
    name: "高粱红",
    pinyin: "gaolianghong",
    RGBA: "rgba(192,44,56,1)",
    bleak: "rgba(192,44,56,.5)"
  },
  {
    hex: "#a7535a",
    name: "满江红",
    pinyin: "manjianghong",
    RGBA: "rgba(167,83,90,1)",
    bleak: "rgba(167,83,90,.5)"
  },
  {
    hex: "#7c1823",
    name: "枣红",
    pinyin: "zaohong",
    RGBA: "rgba(124,24,35,1)",
    bleak: "rgba(124,24,35,.5)"
  },
  {
    hex: "#4c1f24",
    name: "葡萄紫",
    pinyin: "putaozi",
    RGBA: "rgba(76,31,36,1)",
    bleak: "rgba(76,31,36,.5)"
  },
  {
    hex: "#4d1018",
    name: "酱紫",
    pinyin: "jiangzi",
    RGBA: "rgba(77,16,24,1)",
    bleak: "rgba(77,16,24,.5)"
  },
  {
    hex: "#ee2746",
    name: "淡曙红",
    pinyin: "danshuhong",
    RGBA: "rgba(238,39,70,1)",
    bleak: "rgba(238,39,70,.5)"
  },
  {
    hex: "#de1c31",
    name: "唐菖蒲红",
    pinyin: "tangchangpuhong",
    RGBA: "rgba(222,28,49,1)",
    bleak: "rgba(222,28,49,.5)"
  },
  {
    hex: "#d11a2d",
    name: "鹅冠红",
    pinyin: "eguanhong",
    RGBA: "rgba(209,26,45,1)",
    bleak: "rgba(209,26,45,.5)"
  },
  {
    hex: "#c45a65",
    name: "莓红",
    pinyin: "meihong",
    RGBA: "rgba(196,90,101,1)",
    bleak: "rgba(196,90,101,.5)"
  },
  {
    hex: "#c21f30",
    name: "枫叶红",
    pinyin: "fengyehong",
    RGBA: "rgba(194,31,48,1)",
    bleak: "rgba(194,31,48,.5)"
  },
  {
    hex: "#a61b29",
    name: "苋菜红",
    pinyin: "xiancaihong",
    RGBA: "rgba(166,27,41,1)",
    bleak: "rgba(166,27,41,.5)"
  },
  {
    hex: "#894e54",
    name: "烟红",
    pinyin: "yanhong",
    RGBA: "rgba(137,78,84,1)",
    bleak: "rgba(137,78,84,.5)"
  },
  {
    hex: "#82202b",
    name: "暗紫苑红",
    pinyin: "anziyuanhong",
    RGBA: "rgba(130,32,43,1)",
    bleak: "rgba(130,32,43,.5)"
  },
  {
    hex: "#82111f",
    name: "殷红",
    pinyin: "yanhong",
    RGBA: "rgba(130,17,31,1)",
    bleak: "rgba(130,17,31,.5)"
  },
  {
    hex: "#541e24",
    name: "猪肝紫",
    pinyin: "zhuganzi",
    RGBA: "rgba(84,30,36,1)",
    bleak: "rgba(84,30,36,.5)"
  },
  {
    hex: "#500a16",
    name: "金鱼紫",
    pinyin: "jinyuzi",
    RGBA: "rgba(80,10,22,1)",
    bleak: "rgba(80,10,22,.5)"
  },
  {
    hex: "#f8ebe6",
    name: "草珠红",
    pinyin: "caozhuhong",
    RGBA: "rgba(248,235,230,1)",
    bleak: "rgba(248,235,230,.5)"
  },
  {
    hex: "#ec7696",
    name: "淡绛红",
    pinyin: "danjianghong",
    RGBA: "rgba(236,118,150,1)",
    bleak: "rgba(236,118,150,.5)"
  },
  {
    hex: "#ef3473",
    name: "品红",
    pinyin: "pinhong",
    RGBA: "rgba(239,52,115,1)",
    bleak: "rgba(239,52,115,.5)"
  },
  {
    hex: "#ea7293",
    name: "凤仙花红",
    pinyin: "fengxianhuahong",
    RGBA: "rgba(234,114,147,1)",
    bleak: "rgba(234,114,147,.5)"
  },
  {
    hex: "#ec9bad",
    name: "粉团花红",
    pinyin: "fentuanhuahong",
    RGBA: "rgba(236,155,173,1)",
    bleak: "rgba(236,155,173,.5)"
  },
  {
    hex: "#eb507e",
    name: "夹竹桃红",
    pinyin: "jiazhutaohong",
    RGBA: "rgba(235,80,126,1)",
    bleak: "rgba(235,80,126,.5)"
  },
  {
    hex: "#ed2f6a",
    name: "榲桲红",
    pinyin: "wenpohong",
    RGBA: "rgba(237,47,106,1)",
    bleak: "rgba(237,47,106,.5)"
  },
  {
    hex: "#eeb8c3",
    name: "姜红",
    pinyin: "jianghong",
    RGBA: "rgba(238,184,195,1)",
    bleak: "rgba(238,184,195,.5)"
  },
  {
    hex: "#ea517f",
    name: "莲瓣红",
    pinyin: "lianbanhong",
    RGBA: "rgba(234,81,127,1)",
    bleak: "rgba(234,81,127,.5)"
  },
  {
    hex: "#f1c4cd",
    name: "水红",
    pinyin: "shuihong",
    RGBA: "rgba(241,196,205,1)",
    bleak: "rgba(241,196,205,.5)"
  },
  {
    hex: "#ec8aa4",
    name: "报春红",
    pinyin: "baochunhong",
    RGBA: "rgba(236,138,164,1)",
    bleak: "rgba(236,138,164,.5)"
  },
  {
    hex: "#ce5777",
    name: "月季红",
    pinyin: "yuejihong",
    RGBA: "rgba(206,87,109,1)",
    bleak: "rgba(206,87,109,.5)"
  },
  {
    hex: "#ed9db2",
    name: "豇豆红",
    pinyin: "jiangdouhong",
    RGBA: "rgba(237,157,178,1)",
    bleak: "rgba(237,157,178,.5)"
  },
  {
    hex: "#ef82a0",
    name: "霞光红",
    pinyin: "xiaguanghong",
    RGBA: "rgba(239,130,160,1)",
    bleak: "rgba(239,130,160,.5)"
  },
  {
    hex: "#eb3c70",
    name: "松叶牡丹红",
    pinyin: "songyemudanhong",
    RGBA: "rgba(235,60,112,1)",
    bleak: "rgba(235,60,112,.5)"
  },
  {
    hex: "#ec2c64",
    name: "喜蛋红",
    pinyin: "xidanhong",
    RGBA: "rgba(236,44,100,1)",
    bleak: "rgba(236,44,100,.5)"
  },
  {
    hex: "#e3b4b8",
    name: "鼠鼻红",
    pinyin: "shubihong",
    RGBA: "rgba(227,180,184,1)",
    bleak: "rgba(227,180,184,.5)"
  },
  {
    hex: "#cc163a",
    name: "尖晶玉红",
    pinyin: "jianjingyuhong",
    RGBA: "rgba(204,22,58,1)",
    bleak: "rgba(204,22,58,.5)"
  },
  {
    hex: "#c27c88",
    name: "山黎豆红",
    pinyin: "shanlidouhong",
    RGBA: "rgba(194,124,136,1)",
    bleak: "rgba(194,124,136,.5)"
  },
  {
    hex: "#bf3553",
    name: "锦葵红",
    pinyin: "jinkuihong",
    RGBA: "rgba(191,53,83,1)",
    bleak: "rgba(191,53,83,.5)"
  },
  {
    hex: "#73575c",
    name: "鼠背灰",
    pinyin: "shubeihui",
    RGBA: "rgba(115,87,92,1)",
    bleak: "rgba(115,87,92,.5)"
  },
  {
    hex: "#621624",
    name: "甘蔗紫",
    pinyin: "ganzhezi",
    RGBA: "rgba(98,22,36,1)",
    bleak: "rgba(98,22,36,.5)"
  },
  {
    hex: "#63071c",
    name: "石竹紫",
    pinyin: "shizhuzi",
    RGBA: "rgba(99,7,28,1)",
    bleak: "rgba(99,7,28,.5)"
  },
  {
    hex: "#36282b",
    name: "苍蝇灰",
    pinyin: "cangyinghui",
    RGBA: "rgba(54,40,43,1)",
    bleak: "rgba(54,40,43,.5)"
  },
  {
    hex: "#30161c",
    name: "卵石紫",
    pinyin: "luanshizi",
    RGBA: "rgba(48,22,28,1)",
    bleak: "rgba(48,22,28,.5)"
  },
  {
    hex: "#2b1216",
    name: "李紫",
    pinyin: "lizi",
    RGBA: "rgba(43,18,22,1)",
    bleak: "rgba(43,18,22,.5)"
  },
  {
    hex: "#2d0c13",
    name: "茄皮紫",
    pinyin: "qiepizi",
    RGBA: "rgba(45,12,19,1)",
    bleak: "rgba(45,12,19,.5)"
  },
  {
    hex: "#ce5e8a",
    name: "吊钟花红",
    pinyin: "diaozhonghuahong",
    RGBA: "rgba(206,94,138,1)",
    bleak: "rgba(206,94,138,.5)"
  },
  {
    hex: "#ec4e8a",
    name: "兔眼红",
    pinyin: "tuyanhong",
    RGBA: "rgba(236,78,138,1)",
    bleak: "rgba(236,78,138,.5)"
  },
  {
    hex: "#ee2c79",
    name: "紫荆红",
    pinyin: "zijinghong",
    RGBA: "rgba(238,44,121,1)",
    bleak: "rgba(238,44,121,.5)"
  },
  {
    hex: "#951c48",
    name: "菜头紫",
    pinyin: "caitouzi",
    RGBA: "rgba(149,28,72,1)",
    bleak: "rgba(149,28,72,.5)"
  },
  {
    hex: "#621d34",
    name: "鹞冠紫",
    pinyin: "yaoguanzi",
    RGBA: "rgba(98,29,52,1)",
    bleak: "rgba(98,29,52,.5)"
  },
  {
    hex: "#62102e",
    name: "葡萄酒红",
    pinyin: "putaojiuhong",
    RGBA: "rgba(98,16,46,1)",
    bleak: "rgba(98,16,46,.5)"
  },
  {
    hex: "#382129",
    name: "磨石紫",
    pinyin: "moshizi",
    RGBA: "rgba(56,33,41,1)",
    bleak: "rgba(56,33,41,.5)"
  },
  {
    hex: "#381924",
    name: "檀紫",
    pinyin: "tanzi",
    RGBA: "rgba(56,25,36,1)",
    bleak: "rgba(56,25,36,.5)"
  },
  {
    hex: "#33141e",
    name: "火鹅紫",
    pinyin: "huoezi",
    RGBA: "rgba(51,20,30,1)",
    bleak: "rgba(51,20,30,.5)"
  },
  {
    hex: "#310f1b",
    name: "墨紫",
    pinyin: "mozi",
    RGBA: "rgba(49,15,27,1)",
    bleak: "rgba(49,15,27,.5)"
  },
  {
    hex: "#eea6b7",
    name: "晶红",
    pinyin: "jinghong",
    RGBA: "rgba(238,166,183,1)",
    bleak: "rgba(238,166,183,.5)"
  },
  {
    hex: "#ef498b",
    name: "扁豆花红",
    pinyin: "biandouhuahong",
    RGBA: "rgba(239,73,139,1)",
    bleak: "rgba(239,73,139,.5)"
  },
  {
    hex: "#de7897",
    name: "白芨红",
    pinyin: "baijihong",
    RGBA: "rgba(222,120,151,1)",
    bleak: "rgba(222,120,151,.5)"
  },
  {
    hex: "#de3f7c",
    name: "嫩菱红",
    pinyin: "nenlinghong",
    RGBA: "rgba(222,63,124,1)",
    bleak: "rgba(222,63,124,.5)"
  },
  {
    hex: "#d13c74",
    name: "菠根红",
    pinyin: "bogenhong",
    RGBA: "rgba(209,60,116,1)",
    bleak: "rgba(209,60,116,.5)"
  },
  {
    hex: "#c5708b",
    name: "酢酱草红",
    pinyin: "cujiangcaohong",
    RGBA: "rgba(197,112,139,1)",
    bleak: "rgba(197,112,139,.5)"
  },
  {
    hex: "#a8456b",
    name: "洋葱紫",
    pinyin: "yangcongzi",
    RGBA: "rgba(168,69,107,1)",
    bleak: "rgba(168,69,107,.5)"
  },
  {
    hex: "#4b1e2f",
    name: "海象紫",
    pinyin: "haixiangzi",
    RGBA: "rgba(75,30,47,1)",
    bleak: "rgba(75,30,47,.5)"
  },
  {
    hex: "#461629",
    name: "绀紫",
    pinyin: "ganzi",
    RGBA: "rgba(70,22,41,1)",
    bleak: "rgba(70,22,41,.5)"
  },
  {
    hex: "#440e25",
    name: "古铜紫",
    pinyin: "gutongzi",
    RGBA: "rgba(68,14,37,1)",
    bleak: "rgba(68,14,37,.5)"
  },
  {
    hex: "#f0c9cf",
    name: "石蕊红",
    pinyin: "shiruihong",
    RGBA: "rgba(240,201,207,1)",
    bleak: "rgba(240,201,207,.5)"
  },
  {
    hex: "#eba0b3",
    name: "芍药耕红",
    pinyin: "shaoyaogenghong",
    RGBA: "rgba(235,160,179,1)",
    bleak: "rgba(235,160,179,.5)"
  },
  {
    hex: "#ec2d7a",
    name: "藏花红",
    pinyin: "canghuahong",
    RGBA: "rgba(236,45,122,1)",
    bleak: "rgba(236,45,122,.5)"
  },
  {
    hex: "#e16c96",
    name: "初荷红",
    pinyin: "chuhehong",
    RGBA: "rgba(225,108,150,1)",
    bleak: "rgba(225,108,150,.5)"
  },
  {
    hex: "#ede3e7",
    name: "马鞭草紫",
    pinyin: "mabiancaozi",
    RGBA: "rgba(237,227,231,1)",
    bleak: "rgba(237,227,231,.5)"
  },
  {
    hex: "#e9d7df",
    name: "丁香淡紫",
    pinyin: "dingxiangdanzi",
    RGBA: "rgba(233,215,223,1)",
    bleak: "rgba(233,215,223,.5)"
  },
  {
    hex: "#d2568c",
    name: "丹紫红",
    pinyin: "danzihong",
    RGBA: "rgba(210,86,140,1)",
    bleak: "rgba(210,86,140,.5)"
  },
  {
    hex: "#d2357d",
    name: "玫瑰红",
    pinyin: "meiguihong",
    RGBA: "rgba(210,53,125,1)",
    bleak: "rgba(210,53,125,.5)"
  },
  {
    hex: "#d1c2d3",
    name: "淡牵牛紫",
    pinyin: "danqianniuzi",
    RGBA: "rgba(209,194,211,1)",
    bleak: "rgba(209,194,211,.5)"
  },
  {
    hex: "#c8adc4",
    name: "凤信紫",
    pinyin: "fengxinzi",
    RGBA: "rgba(200,173,196,1)",
    bleak: "rgba(200,173,196,.5)"
  },
  {
    hex: "#c08eaf",
    name: "萝兰紫",
    pinyin: "luolanzi",
    RGBA: "rgba(192,142,175,1)",
    bleak: "rgba(192,142,175,.5)"
  },
  {
    hex: "#ba2f7b",
    name: "玫瑰紫",
    pinyin: "meiguizi",
    RGBA: "rgba(186,47,123,1)",
    bleak: "rgba(186,47,123,.5)"
  },
  {
    hex: "#8076a3",
    name: "藤萝紫",
    pinyin: "tengluozi",
    RGBA: "rgba(128,118,163,1)",
    bleak: "rgba(128,118,163,.5)"
  },
  {
    hex: "#806d9e",
    name: "槿紫",
    pinyin: "jinzi",
    RGBA: "rgba(128,109,158,1)",
    bleak: "rgba(128,109,158,.5)"
  },
  {
    hex: "#815c94",
    name: "蕈紫",
    pinyin: "xunzi",
    RGBA: "rgba(129,92,148,1)",
    bleak: "rgba(129,92,148,.5)"
  },
  {
    hex: "#813c85",
    name: "桔梗紫",
    pinyin: "jiegengzi",
    RGBA: "rgba(129,60,133,1)",
    bleak: "rgba(129,60,133,.5)"
  },
  {
    hex: "#7e1671",
    name: "魏紫",
    pinyin: "weizi",
    RGBA: "rgba(126,22,113,1)",
    bleak: "rgba(126,22,113,.5)"
  },
  {
    hex: "#e9ccd3",
    name: "芝兰紫",
    pinyin: "zhilanzi",
    RGBA: "rgba(233,204,211,1)",
    bleak: "rgba(233,204,211,.5)"
  },
  {
    hex: "#d276a3",
    name: "菱锰红",
    pinyin: "lingmenghong",
    RGBA: "rgba(210,118,163,1)",
    bleak: "rgba(210,118,163,.5)"
  },
  {
    hex: "#cc5595",
    name: "龙须红",
    pinyin: "longxuhong",
    RGBA: "rgba(204,85,149,1)",
    bleak: "rgba(204,85,149,.5)"
  },
  {
    hex: "#e6d2d5",
    name: "蓟粉红",
    pinyin: "jifenhong",
    RGBA: "rgba(230,210,213,1)",
    bleak: "rgba(230,210,213,.5)"
  },
  {
    hex: "#c35691",
    name: "电气石红",
    pinyin: "dianqishihong",
    RGBA: "rgba(195,86,145,1)",
    bleak: "rgba(195,86,145,.5)"
  },
  {
    hex: "#c06f98",
    name: "樱草紫",
    pinyin: "yingcaozi",
    RGBA: "rgba(192,111,152,1)",
    bleak: "rgba(192,111,152,.5)"
  },
  {
    hex: "#bdaead",
    name: "芦穗灰",
    pinyin: "lusuihui",
    RGBA: "rgba(189,174,173,1)",
    bleak: "rgba(189,174,173,.5)"
  },
  {
    hex: "#b598a1",
    name: "隐红灰",
    pinyin: "yinhonghui",
    RGBA: "rgba(181,152,161,1)",
    bleak: "rgba(181,152,161,.5)"
  },
  {
    hex: "#9b1e64",
    name: "苋菜紫",
    pinyin: "xiancaizi",
    RGBA: "rgba(155,30,100,1)",
    bleak: "rgba(155,30,100,.5)"
  },
  {
    hex: "#856d72",
    name: "芦灰",
    pinyin: "luhui",
    RGBA: "rgba(133,109,114,1)",
    bleak: "rgba(133,109,114,.5)"
  },
  {
    hex: "#4f383e",
    name: "暮云灰",
    pinyin: "muyunhui",
    RGBA: "rgba(79,56,62,1)",
    bleak: "rgba(79,56,62,.5)"
  },
  {
    hex: "#482936",
    name: "斑鸠灰",
    pinyin: "banjiuhui",
    RGBA: "rgba(72,41,54,1)",
    bleak: "rgba(72,41,54,.5)"
  },
  {
    hex: "#f2e7e5",
    name: "淡藤萝紫",
    pinyin: "dantengluozi",
    RGBA: "rgba(242,231,229,1)",
    bleak: "rgba(242,231,229,.5)"
  },
  {
    hex: "#e0c8d1",
    name: "淡青紫",
    pinyin: "danqingzi",
    RGBA: "rgba(224,200,209,1)",
    bleak: "rgba(224,200,209,.5)"
  },
  {
    hex: "#bc84a8",
    name: "青蛤壳紫",
    pinyin: "qinghakezi",
    RGBA: "rgba(188,132,168,1)",
    bleak: "rgba(188,132,168,.5)"
  },
  {
    hex: "#ad6598",
    name: "豆蔻紫",
    pinyin: "doukouzi",
    RGBA: "rgba(173,101,152,1)",
    bleak: "rgba(173,101,152,.5)"
  },
  {
    hex: "#a35c8f",
    name: "扁豆紫",
    pinyin: "biandouzi",
    RGBA: "rgba(163,92,143,1)",
    bleak: "rgba(163,92,143,.5)"
  },
  {
    hex: "#983680",
    name: "芥花紫",
    pinyin: "jiehuazi",
    RGBA: "rgba(152,54,128,1)",
    bleak: "rgba(152,54,128,.5)"
  },
  {
    hex: "#8b2671",
    name: "青莲",
    pinyin: "qinglian",
    RGBA: "rgba(139,38,113,1)",
    bleak: "rgba(139,38,113,.5)"
  },
  {
    hex: "#894276",
    name: "芓紫",
    pinyin: "zizi",
    RGBA: "rgba(137,66,118,1)",
    bleak: "rgba(137,66,118,.5)"
  },
  {
    hex: "#7e2065",
    name: "葛巾紫",
    pinyin: "gejinzi",
    RGBA: "rgba(126,32,101,1)",
    bleak: "rgba(126,32,101,.5)"
  },
  {
    hex: "#681752",
    name: "牵牛紫",
    pinyin: "qianniuzi",
    RGBA: "rgba(104,23,82,1)",
    bleak: "rgba(104,23,82,.5)"
  },
  {
    hex: "#5d3f51",
    name: "紫灰",
    pinyin: "zihui",
    RGBA: "rgba(93,63,81,1)",
    bleak: "rgba(93,63,81,.5)"
  },
  {
    hex: "#4e2a40",
    name: "龙睛鱼紫",
    pinyin: "longjingyuzi",
    RGBA: "rgba(78,42,64,1)",
    bleak: "rgba(78,42,64,.5)"
  },
  {
    hex: "#411c35",
    name: "荸荠紫",
    pinyin: "biqizi",
    RGBA: "rgba(65,28,53,1)",
    bleak: "rgba(65,28,53,.5)"
  },
  {
    hex: "#36292f",
    name: "古鼎灰",
    pinyin: "gudinghui",
    RGBA: "rgba(54,41,47,1)",
    bleak: "rgba(54,41,47,.5)"
  },
  {
    hex: "#1e131d",
    name: "乌梅紫",
    pinyin: "wumeizi",
    RGBA: "rgba(30,19,29,1)",
    bleak: "rgba(30,19,29,.5)"
  },
  {
    hex: "#1c0d1a",
    name: "深牵牛紫",
    pinyin: "shenqianniuzi",
    RGBA: "rgba(28,13,26,1)",
    bleak: "rgba(28,13,26,.5)"
  },
  {
    hex: "#f1f0ed",
    name: "银白",
    pinyin: "yinbai",
    RGBA: "rgba(241,240,237,1)",
    bleak: "rgba(241,240,237,.5)"
  },
  {
    hex: "#e2e1e4",
    name: "芡食白",
    pinyin: "qianshibai",
    RGBA: "rgba(226,225,228,1)",
    bleak: "rgba(226,225,228,.5)"
  },
  {
    hex: "#ccccd6",
    name: "远山紫",
    pinyin: "yuanshanzi",
    RGBA: "rgba(204,204,214,1)",
    bleak: "rgba(204,204,214,.5)"
  },
  {
    hex: "#a7a8bd",
    name: "淡蓝紫",
    pinyin: "danlanzi",
    RGBA: "rgba(167,168,189,1)",
    bleak: "rgba(167,168,189,.5)"
  },
  {
    hex: "#61649f",
    name: "山梗紫",
    pinyin: "shangengzi",
    RGBA: "rgba(97,100,159,1)",
    bleak: "rgba(97,100,159,.5)"
  },
  {
    hex: "#74759b",
    name: "螺甸紫",
    pinyin: "luodianzi",
    RGBA: "rgba(116,117,155,1)",
    bleak: "rgba(116,117,155,.5)"
  },
  {
    hex: "#cfccc9",
    name: "玛瑙灰",
    pinyin: "manaohui",
    RGBA: "rgba(207,204,201,1)",
    bleak: "rgba(207,204,201,.5)"
  },
  {
    hex: "#525288",
    name: "野菊紫",
    pinyin: "yejuzi",
    RGBA: "rgba(82,82,136,1)",
    bleak: "rgba(82,82,136,.5)"
  },
  {
    hex: "#2e317c",
    name: "满天星紫",
    pinyin: "mantianxingzi",
    RGBA: "rgba(46,49,124,1)",
    bleak: "rgba(46,49,124,.5)"
  },
  {
    hex: "#7a7374",
    name: "锌灰",
    pinyin: "xinhui",
    RGBA: "rgba(122,115,116,1)",
    bleak: "rgba(122,115,116,.5)"
  },
  {
    hex: "#302f4b",
    name: "野葡萄紫",
    pinyin: "yeputaozi",
    RGBA: "rgba(48,47,75,1)",
    bleak: "rgba(48,47,75,.5)"
  },
  {
    hex: "#3e3841",
    name: "剑锋紫",
    pinyin: "jianfengzi",
    RGBA: "rgba(62,56,65,1)",
    bleak: "rgba(62,56,65,.5)"
  },
  {
    hex: "#322f3b",
    name: "龙葵紫",
    pinyin: "longkuizi",
    RGBA: "rgba(50,47,59,1)",
    bleak: "rgba(50,47,59,.5)"
  },
  {
    hex: "#22202e",
    name: "暗龙胆紫",
    pinyin: "anlongdanzi",
    RGBA: "rgba(34,32,46,1)",
    bleak: "rgba(34,32,46,.5)"
  },
  {
    hex: "#1f2040",
    name: "晶石紫",
    pinyin: "jingshizi",
    RGBA: "rgba(31,32,64,1)",
    bleak: "rgba(31,32,64,.5)"
  },
  {
    hex: "#131124",
    name: "暗蓝紫",
    pinyin: "anlanzi",
    RGBA: "rgba(19,17,36,1)",
    bleak: "rgba(19,17,36,.5)"
  },
  {
    hex: "#2775b6",
    name: "景泰蓝",
    pinyin: "jingtailan",
    RGBA: "rgba(39,117,182,1)",
    bleak: "rgba(39,117,182,.5)"
  },
  {
    hex: "#2474b5",
    name: "尼罗蓝",
    pinyin: "niluolan",
    RGBA: "rgba(36,116,181,1)",
    bleak: "rgba(36,116,181,.5)"
  },
  {
    hex: "#d0dfe6",
    name: "远天蓝",
    pinyin: "yuantianlan",
    RGBA: "rgba(208,223,230,1)",
    bleak: "rgba(208,223,230,.5)"
  },
  {
    hex: "#93b5cf",
    name: "星蓝",
    pinyin: "xinglan",
    RGBA: "rgba(147,181,207,1)",
    bleak: "rgba(147,181,207,.5)"
  },
  {
    hex: "#619ac3",
    name: "羽扇豆蓝",
    pinyin: "yushandoulan",
    RGBA: "rgba(97,154,195,1)",
    bleak: "rgba(97,154,195,.5)"
  },
  {
    hex: "#2376b7",
    name: "花青",
    pinyin: "huaqing",
    RGBA: "rgba(35,118,183,1)",
    bleak: "rgba(35,118,183,.5)"
  },
  {
    hex: "#5698c3",
    name: "睛蓝",
    pinyin: "jinglan",
    RGBA: "rgba(86,152,195,1)",
    bleak: "rgba(86,152,195,.5)"
  },
  {
    hex: "#2177b8",
    name: "虹蓝",
    pinyin: "honglan",
    RGBA: "rgba(33,119,184,1)",
    bleak: "rgba(33,119,184,.5)"
  },
  {
    hex: "#b0d5df",
    name: "湖水蓝",
    pinyin: "hushuilan",
    RGBA: "rgba(176,213,223,1)",
    bleak: "rgba(176,213,223,.5)"
  },
  {
    hex: "#8abcd1",
    name: "秋波蓝",
    pinyin: "qiubolan",
    RGBA: "rgba(138,188,209,1)",
    bleak: "rgba(138,188,209,.5)"
  },
  {
    hex: "#66a9c9",
    name: "涧石蓝",
    pinyin: "jianshilan",
    RGBA: "rgba(102,169,201,1)",
    bleak: "rgba(102,169,201,.5)"
  },
  {
    hex: "#2983bb",
    name: "潮蓝",
    pinyin: "chaolan",
    RGBA: "rgba(41,131,187,1)",
    bleak: "rgba(41,131,187,.5)"
  },
  {
    hex: "#1772b4",
    name: "群青",
    pinyin: "qunqing",
    RGBA: "rgba(23,114,180,1)",
    bleak: "rgba(23,114,180,.5)"
  },
  {
    hex: "#63bbd0",
    name: "霁青",
    pinyin: "jiqing",
    RGBA: "rgba(99,187,208,1)",
    bleak: "rgba(99,187,208,.5)"
  },
  {
    hex: "#5cb3cc",
    name: "碧青",
    pinyin: "biqing",
    RGBA: "rgba(92,179,204,1)",
    bleak: "rgba(92,179,204,.5)"
  },
  {
    hex: "#2486b9",
    name: "宝石蓝",
    pinyin: "baoshilan",
    RGBA: "rgba(36,134,185,1)",
    bleak: "rgba(36,134,185,.5)"
  },
  {
    hex: "#1677b3",
    name: "天蓝",
    pinyin: "tianlan",
    RGBA: "rgba(22,119,179,1)",
    bleak: "rgba(22,119,179,.5)"
  },
  {
    hex: "#126bae",
    name: "柏林蓝",
    pinyin: "bolinlan",
    RGBA: "rgba(18,107,174,1)",
    bleak: "rgba(18,107,174,.5)"
  },
  {
    hex: "#22a2c3",
    name: "海青",
    pinyin: "haiqing",
    RGBA: "rgba(34,162,195,1)",
    bleak: "rgba(34,162,195,.5)"
  },
  {
    hex: "#1a94bc",
    name: "钴蓝",
    pinyin: "gulan",
    RGBA: "rgba(26,148,188,1)",
    bleak: "rgba(26,148,188,.5)"
  },
  {
    hex: "#158bb8",
    name: "鸢尾蓝",
    pinyin: "yuanweilan",
    RGBA: "rgba(21,139,184,1)",
    bleak: "rgba(21,139,184,.5)"
  },
  {
    hex: "#1177b0",
    name: "牵牛花蓝",
    pinyin: "qianniuhualan",
    RGBA: "rgba(17,119,176,1)",
    bleak: "rgba(17,119,176,.5)"
  },
  {
    hex: "#0f59a4",
    name: "飞燕草蓝",
    pinyin: "feiyancaolan",
    RGBA: "rgba(15,89,164,1)",
    bleak: "rgba(15,89,164,.5)"
  },
  {
    hex: "#2b73af",
    name: "品蓝",
    pinyin: "pinlan",
    RGBA: "rgba(43,115,175,1)",
    bleak: "rgba(43,115,175,.5)"
  },
  {
    hex: "#cdd1d3",
    name: "银鱼白",
    pinyin: "yinyubai",
    RGBA: "rgba(205,209,211,1)",
    bleak: "rgba(205,209,211,.5)"
  },
  {
    hex: "#3170a7",
    name: "安安蓝",
    pinyin: "ananlan",
    RGBA: "rgba(49,112,167,1)",
    bleak: "rgba(49,112,167,.5)"
  },
  {
    hex: "#5e616d",
    name: "鱼尾灰",
    pinyin: "yuweihui",
    RGBA: "rgba(94,97,109,1)",
    bleak: "rgba(94,97,109,.5)"
  },
  {
    hex: "#475164",
    name: "鲸鱼灰",
    pinyin: "jingyuhui",
    RGBA: "rgba(71,81,100,1)",
    bleak: "rgba(71,81,100,.5)"
  },
  {
    hex: "#fffefa",
    name: "海参灰",
    pinyin: "haishenhui",
    RGBA: "rgba(255,254,250,1)",
    bleak: "rgba(255,254,250,.5)"
  },
  {
    hex: "#35333c",
    name: "沙鱼灰",
    pinyin: "shayuhui",
    RGBA: "rgba(53,51,60,1)",
    bleak: "rgba(53,51,60,.5)"
  },
  {
    hex: "#0f1423",
    name: "钢蓝",
    pinyin: "ganglan",
    RGBA: "rgba(15,20,35,1)",
    bleak: "rgba(15,20,35,.5)"
  },
  {
    hex: "#baccd9",
    name: "云水蓝",
    pinyin: "yunshuilan",
    RGBA: "rgba(186,204,217,1)",
    bleak: "rgba(186,204,217,.5)"
  },
  {
    hex: "#8fb2c9",
    name: "晴山蓝",
    pinyin: "qingshanlan",
    RGBA: "rgba(143,178,201,1)",
    bleak: "rgba(143,178,201,.5)"
  },
  {
    hex: "#1661ab",
    name: "靛青",
    pinyin: "dianqing",
    RGBA: "rgba(22,97,171,1)",
    bleak: "rgba(22,97,171,.5)"
  },
  {
    hex: "#c4cbcf",
    name: "大理石灰",
    pinyin: "dalishihui",
    RGBA: "rgba(196,203,207,1)",
    bleak: "rgba(196,203,207,.5)"
  },
  {
    hex: "#15559a",
    name: "海涛蓝",
    pinyin: "haitaolan",
    RGBA: "rgba(21,85,154,1)",
    bleak: "rgba(21,85,154,.5)"
  },
  {
    hex: "#4e7ca1",
    name: "蝶翅蓝",
    pinyin: "diechilan",
    RGBA: "rgba(78,124,161,1)",
    bleak: "rgba(78,124,161,.5)"
  },
  {
    hex: "#346c9c",
    name: "海军蓝",
    pinyin: "haijunlan",
    RGBA: "rgba(52,108,156,1)",
    bleak: "rgba(52,108,156,.5)"
  },
  {
    hex: "#2f2f35",
    name: "水牛灰",
    pinyin: "shuiniuhui",
    RGBA: "rgba(47,47,53,1)",
    bleak: "rgba(47,47,53,.5)"
  },
  {
    hex: "#2d2e36",
    name: "牛角灰",
    pinyin: "niujiaohui",
    RGBA: "rgba(45,46,54,1)",
    bleak: "rgba(45,46,54,.5)"
  },
  {
    hex: "#131824",
    name: "燕颔蓝",
    pinyin: "yanhanlan",
    RGBA: "rgba(19,24,36,1)",
    bleak: "rgba(19,24,36,.5)"
  },
  {
    hex: "#d8e3e7",
    name: "云峰白",
    pinyin: "yunfengbai",
    RGBA: "rgba(216,227,231,1)",
    bleak: "rgba(216,227,231,.5)"
  },
  {
    hex: "#c3d7df",
    name: "井天蓝",
    pinyin: "jingtianlan",
    RGBA: "rgba(195,215,223,1)",
    bleak: "rgba(195,215,223,.5)"
  },
  {
    hex: "#2f90b9",
    name: "云山蓝",
    pinyin: "yunshanlan",
    RGBA: "rgba(47,144,185,1)",
    bleak: "rgba(47,144,185,.5)"
  },
  {
    hex: "#1781b5",
    name: "釉蓝",
    pinyin: "youlan",
    RGBA: "rgba(23,129,181,1)",
    bleak: "rgba(23,129,181,.5)"
  },
  {
    hex: "#c7d2d4",
    name: "鸥蓝",
    pinyin: "oulan",
    RGBA: "rgba(199,210,212,1)",
    bleak: "rgba(199,210,212,.5)"
  },
  {
    hex: "#11659a",
    name: "搪磁蓝",
    pinyin: "tangcilan",
    RGBA: "rgba(17,101,154,1)",
    bleak: "rgba(17,101,154,.5)"
  },
  {
    hex: "#c0c4c3",
    name: "月影白",
    pinyin: "yueyingbai",
    RGBA: "rgba(192,196,195,1)",
    bleak: "rgba(192,196,195,.5)"
  },
  {
    hex: "#b2bbbe",
    name: "星灰",
    pinyin: "xinghui",
    RGBA: "rgba(178,187,190,1)",
    bleak: "rgba(178,187,190,.5)"
  },
  {
    hex: "#5e7987",
    name: "淡蓝灰",
    pinyin: "danlanhui",
    RGBA: "rgba(94,121,135,1)",
    bleak: "rgba(94,121,135,.5)"
  },
  {
    hex: "#144a74",
    name: "鷃蓝",
    pinyin: "yanlan",
    RGBA: "rgba(20,74,116,1)",
    bleak: "rgba(20,74,116,.5)"
  },
  {
    hex: "#74787a",
    name: "嫩灰",
    pinyin: "nenhui",
    RGBA: "rgba(116,120,122,1)",
    bleak: "rgba(116,120,122,.5)"
  },
  {
    hex: "#495c69",
    name: "战舰灰",
    pinyin: "zhanjianhui",
    RGBA: "rgba(73,92,105,1)",
    bleak: "rgba(73,92,105,.5)"
  },
  {
    hex: "#47484c",
    name: "瓦罐灰",
    pinyin: "waguanhui",
    RGBA: "rgba(71,72,76,1)",
    bleak: "rgba(71,72,76,.5)"
  },
  {
    hex: "#2b333e",
    name: "青灰",
    pinyin: "qinghui",
    RGBA: "rgba(43,51,62,1)",
    bleak: "rgba(43,51,62,.5)"
  },
  {
    hex: "#1c2938",
    name: "鸽蓝",
    pinyin: "gelan",
    RGBA: "rgba(28,41,56,1)",
    bleak: "rgba(28,41,56,.5)"
  },
  {
    hex: "#142334",
    name: "钢青",
    pinyin: "gangqing",
    RGBA: "rgba(20,35,52,1)",
    bleak: "rgba(20,35,52,.5)"
  },
  {
    hex: "#101f30",
    name: "暗蓝",
    pinyin: "anlan",
    RGBA: "rgba(16,31,48,1)",
    bleak: "rgba(16,31,48,.5)"
  },
  {
    hex: "#eef7f2",
    name: "月白",
    pinyin: "yuebai",
    RGBA: "rgba(238,247,242,1)",
    bleak: "rgba(238,247,242,.5)"
  },
  {
    hex: "#c6e6e8",
    name: "海天蓝",
    pinyin: "haitianlan",
    RGBA: "rgba(198,230,232,1)",
    bleak: "rgba(198,230,232,.5)"
  },
  {
    hex: "#93d5dc",
    name: "清水蓝",
    pinyin: "qingshuilan",
    RGBA: "rgba(147,213,220,1)",
    bleak: "rgba(147,213,220,.5)"
  },
  {
    hex: "#51c4d3",
    name: "瀑布蓝",
    pinyin: "pubulan",
    RGBA: "rgba(81,196,211,1)",
    bleak: "rgba(81,196,211,.5)"
  },
  {
    hex: "#29b7cb",
    name: "蔚蓝",
    pinyin: "weilan",
    RGBA: "rgba(41,183,203,1)",
    bleak: "rgba(41,183,203,.5)"
  },
  {
    hex: "#0eb0c9",
    name: "孔雀蓝",
    pinyin: "kongquelan",
    RGBA: "rgba(14,176,201,1)",
    bleak: "rgba(14,176,201,.5)"
  },
  {
    hex: "#10aec2",
    name: "甸子蓝",
    pinyin: "dianzilan",
    RGBA: "rgba(16,174,194,1)",
    bleak: "rgba(16,174,194,.5)"
  },
  {
    hex: "#57c3c2",
    name: "石绿",
    pinyin: "shilv",
    RGBA: "rgba(87,195,194,1)",
    bleak: "rgba(87,195,194,.5)"
  },
  {
    hex: "#b9dec9",
    name: "竹篁绿",
    pinyin: "zhuhuanglv",
    RGBA: "rgba(185,222,201,1)",
    bleak: "rgba(185,222,201,.5)"
  },
  {
    hex: "#83cbac",
    name: "粉绿",
    pinyin: "fenlv",
    RGBA: "rgba(131,203,172,1)",
    bleak: "rgba(131,203,172,.5)"
  },
  {
    hex: "#12aa9c",
    name: "美蝶绿",
    pinyin: "meidielv",
    RGBA: "rgba(18,170,156,1)",
    bleak: "rgba(18,170,156,.5)"
  },
  {
    hex: "#66c18c",
    name: "毛绿",
    pinyin: "maolv",
    RGBA: "rgba(102,193,140,1)",
    bleak: "rgba(102,193,140,.5)"
  },
  {
    hex: "#5dbe8a",
    name: "蔻梢绿",
    pinyin: "koushaolv",
    RGBA: "rgba(93,190,138,1)",
    bleak: "rgba(93,190,138,.5)"
  },
  {
    hex: "#55bb8a",
    name: "麦苗绿",
    pinyin: "maimiaolv",
    RGBA: "rgba(85,187,138,1)",
    bleak: "rgba(85,187,138,.5)"
  },
  {
    hex: "#45b787",
    name: "蛙绿",
    pinyin: "walv",
    RGBA: "rgba(69,183,135,1)",
    bleak: "rgba(69,183,135,.5)"
  },
  {
    hex: "#2bae85",
    name: "铜绿",
    pinyin: "tonglv",
    RGBA: "rgba(43,174,133,1)",
    bleak: "rgba(43,174,133,.5)"
  },
  {
    hex: "#1ba784",
    name: "竹绿",
    pinyin: "zhulv",
    RGBA: "rgba(27,167,132,1)",
    bleak: "rgba(27,167,132,.5)"
  },
  {
    hex: "#12a182",
    name: "蓝绿",
    pinyin: "lanlv",
    RGBA: "rgba(18,161,130,1)",
    bleak: "rgba(18,161,130,.5)"
  },
  {
    hex: "#c4d7d6",
    name: "穹灰",
    pinyin: "qionghui",
    RGBA: "rgba(196,215,214,1)",
    bleak: "rgba(196,215,214,.5)"
  },
  {
    hex: "#1e9eb3",
    name: "翠蓝",
    pinyin: "cuilan",
    RGBA: "rgba(30,158,179,1)",
    bleak: "rgba(30,158,179,.5)"
  },
  {
    hex: "#0f95b0",
    name: "胆矾蓝",
    pinyin: "danfanlan",
    RGBA: "rgba(15,149,176,1)",
    bleak: "rgba(15,149,176,.5)"
  },
  {
    hex: "#1491a8",
    name: "樫鸟蓝",
    pinyin: "jianniaolan",
    RGBA: "rgba(20,145,168,1)",
    bleak: "rgba(20,145,168,.5)"
  },
  {
    hex: "#7cabb1",
    name: "闪蓝",
    pinyin: "shanlan",
    RGBA: "rgba(124,171,177,1)",
    bleak: "rgba(124,171,177,.5)"
  },
  {
    hex: "#a4aca7",
    name: "冰山蓝",
    pinyin: "bingshanlan",
    RGBA: "rgba(164,172,167,1)",
    bleak: "rgba(164,172,167,.5)"
  },
  {
    hex: "#869d9d",
    name: "虾壳青",
    pinyin: "xiakeqing",
    RGBA: "rgba(134,157,157,1)",
    bleak: "rgba(134,157,157,.5)"
  },
  {
    hex: "#648e93",
    name: "晚波蓝",
    pinyin: "wanbolan",
    RGBA: "rgba(100,142,147,1)",
    bleak: "rgba(100,142,147,.5)"
  },
  {
    hex: "#3b818c",
    name: "蜻蜓蓝",
    pinyin: "qingtinglan",
    RGBA: "rgba(59,129,140,1)",
    bleak: "rgba(59,129,140,.5)"
  },
  {
    hex: "#126e82",
    name: "玉鈫蓝",
    pinyin: "yuqinlan",
    RGBA: "rgba(18,110,130,1)",
    bleak: "rgba(18,110,130,.5)"
  },
  {
    hex: "#737c7b",
    name: "垩灰",
    pinyin: "ehui",
    RGBA: "rgba(115,124,123,1)",
    bleak: "rgba(115,124,123,.5)"
  },
  {
    hex: "#617172",
    name: "夏云灰",
    pinyin: "xiayunhui",
    RGBA: "rgba(97,113,114,1)",
    bleak: "rgba(97,113,114,.5)"
  },
  {
    hex: "#134857",
    name: "苍蓝",
    pinyin: "canglan",
    RGBA: "rgba(19,72,87,1)",
    bleak: "rgba(19,72,87,.5)"
  },
  {
    hex: "#474b4c",
    name: "黄昏灰",
    pinyin: "huanghunhui",
    RGBA: "rgba(71,75,76,1)",
    bleak: "rgba(71,75,76,.5)"
  },
  {
    hex: "#21373d",
    name: "灰蓝",
    pinyin: "huilan",
    RGBA: "rgba(33,55,61,1)",
    bleak: "rgba(33,55,61,.5)"
  },
  {
    hex: "#132c33",
    name: "深灰蓝",
    pinyin: "shenhuilan",
    RGBA: "rgba(19,44,51,1)",
    bleak: "rgba(19,44,51,.5)"
  },
  {
    hex: "#a4cab6",
    name: "玉簪绿",
    pinyin: "yuzanlv",
    RGBA: "rgba(164,202,182,1)",
    bleak: "rgba(164,202,182,.5)"
  },
  {
    hex: "#2c9678",
    name: "青矾绿",
    pinyin: "qingfanlv",
    RGBA: "rgba(44,150,120,1)",
    bleak: "rgba(44,150,120,.5)"
  },
  {
    hex: "#9abeaf",
    name: "草原远绿",
    pinyin: "caoyuanyuanlv",
    RGBA: "rgba(154,190,175,1)",
    bleak: "rgba(154,190,175,.5)"
  },
  {
    hex: "#69a794",
    name: "梧枝绿",
    pinyin: "wuzhilv",
    RGBA: "rgba(105,167,148,1)",
    bleak: "rgba(105,167,148,.5)"
  },
  {
    hex: "#92b3a5",
    name: "浪花绿",
    pinyin: "langhualv",
    RGBA: "rgba(146,179,165,1)",
    bleak: "rgba(146,179,165,.5)"
  },
  {
    hex: "#248067",
    name: "海王绿",
    pinyin: "haiwanglv",
    RGBA: "rgba(36,128,103,1)",
    bleak: "rgba(36,128,103,.5)"
  },
  {
    hex: "#428675",
    name: "亚丁绿",
    pinyin: "yadinglv",
    RGBA: "rgba(66,134,117,1)",
    bleak: "rgba(66,134,117,.5)"
  },
  {
    hex: "#9fa39a",
    name: "镍灰",
    pinyin: "niehui",
    RGBA: "rgba(159,163,154,1)",
    bleak: "rgba(159,163,154,.5)"
  },
  {
    hex: "#8a988e",
    name: "明灰",
    pinyin: "minghui",
    RGBA: "rgba(138,152,142,1)",
    bleak: "rgba(138,152,142,.5)"
  },
  {
    hex: "#70887d",
    name: "淡绿灰",
    pinyin: "danlvhui",
    RGBA: "rgba(112,136,125,1)",
    bleak: "rgba(112,136,125,.5)"
  },
  {
    hex: "#497568",
    name: "飞泉绿",
    pinyin: "feiquanlv",
    RGBA: "rgba(73,117,104,1)",
    bleak: "rgba(73,117,104,.5)"
  },
  {
    hex: "#5d655f",
    name: "狼烟灰",
    pinyin: "langyanhui",
    RGBA: "rgba(93,101,95,1)",
    bleak: "rgba(93,101,95,.5)"
  },
  {
    hex: "#314a43",
    name: "绿灰",
    pinyin: "lvhui",
    RGBA: "rgba(49,74,67,1)",
    bleak: "rgba(49,74,67,.5)"
  },
  {
    hex: "#223e36",
    name: "苍绿",
    pinyin: "canglv",
    RGBA: "rgba(34,62,54,1)",
    bleak: "rgba(34,62,54,.5)"
  },
  {
    hex: "#1a3b32",
    name: "深海绿",
    pinyin: "shenhailv",
    RGBA: "rgba(26,59,50,1)",
    bleak: "rgba(26,59,50,.5)"
  },
  {
    hex: "#363433",
    name: "长石灰",
    pinyin: "changshihui",
    RGBA: "rgba(54,52,51,1)",
    bleak: "rgba(54,52,51,.5)"
  },
  {
    hex: "#1f2623",
    name: "苷蓝绿",
    pinyin: "ganlanlv",
    RGBA: "rgba(31,38,35,1)",
    bleak: "rgba(31,38,35,.5)"
  },
  {
    hex: "#141e1b",
    name: "莽丛绿",
    pinyin: "mangconglv",
    RGBA: "rgba(20,30,27,1)",
    bleak: "rgba(20,30,27,.5)"
  },
  {
    hex: "#c6dfc8",
    name: "淡翠绿",
    pinyin: "dancuilv",
    RGBA: "rgba(198,223,200,1)",
    bleak: "rgba(198,223,200,.5)"
  },
  {
    hex: "#9eccab",
    name: "明绿",
    pinyin: "minglv",
    RGBA: "rgba(158,204,171,1)",
    bleak: "rgba(158,204,171,.5)"
  },
  {
    hex: "#68b88e",
    name: "田园绿",
    pinyin: "tianyuanlv",
    RGBA: "rgba(104,184,142,1)",
    bleak: "rgba(104,184,142,.5)"
  },
  {
    hex: "#20a162",
    name: "翠绿",
    pinyin: "cuilv",
    RGBA: "rgba(32,161,98,1)",
    bleak: "rgba(32,161,98,.5)"
  },
  {
    hex: "#61ac85",
    name: "淡绿",
    pinyin: "danlv",
    RGBA: "rgba(97,172,133,1)",
    bleak: "rgba(97,172,133,.5)"
  },
  {
    hex: "#40a070",
    name: "葱绿",
    pinyin: "conglv",
    RGBA: "rgba(64,160,112,1)",
    bleak: "rgba(64,160,112,.5)"
  },
  {
    hex: "#229453",
    name: "孔雀绿",
    pinyin: "kongquelv",
    RGBA: "rgba(34,148,83,1)",
    bleak: "rgba(34,148,83,.5)"
  },
  {
    hex: "#cad3c3",
    name: "艾绿",
    pinyin: "ailv",
    RGBA: "rgba(202,211,195,1)",
    bleak: "rgba(202,211,195,.5)"
  },
  {
    hex: "#3c9566",
    name: "蟾绿",
    pinyin: "chanlv",
    RGBA: "rgba(60,149,102,1)",
    bleak: "rgba(60,149,102,.5)"
  },
  {
    hex: "#20894d",
    name: "宫殿绿",
    pinyin: "gongdianlv",
    RGBA: "rgba(32,137,77,1)",
    bleak: "rgba(32,137,77,.5)"
  },
  {
    hex: "#83a78d",
    name: "松霜绿",
    pinyin: "songshuanglv",
    RGBA: "rgba(131,167,141,1)",
    bleak: "rgba(131,167,141,.5)"
  },
  {
    hex: "#579572",
    name: "蛋白石绿",
    pinyin: "danbaishilv",
    RGBA: "rgba(87,149,114,1)",
    bleak: "rgba(87,149,114,.5)"
  },
  {
    hex: "#207f4c",
    name: "薄荷绿",
    pinyin: "bohelv",
    RGBA: "rgba(32,127,76,1)",
    bleak: "rgba(32,127,76,.5)"
  },
  {
    hex: "#6e8b74",
    name: "瓦松绿",
    pinyin: "wasonglv",
    RGBA: "rgba(110,139,116,1)",
    bleak: "rgba(110,139,116,.5)"
  },
  {
    hex: "#1a6840",
    name: "荷叶绿",
    pinyin: "heyelv",
    RGBA: "rgba(26,104,64,1)",
    bleak: "rgba(26,104,64,.5)"
  },
  {
    hex: "#5e665b",
    name: "田螺绿",
    pinyin: "tianluolv",
    RGBA: "rgba(94,102,91,1)",
    bleak: "rgba(94,102,91,.5)"
  },
  {
    hex: "#485b4d",
    name: "白屈菜绿",
    pinyin: "baiqucailv",
    RGBA: "rgba(72,91,77,1)",
    bleak: "rgba(72,91,77,.5)"
  },
  {
    hex: "#393733",
    name: "河豚灰",
    pinyin: "hetunhui",
    RGBA: "rgba(57,55,51,1)",
    bleak: "rgba(57,55,51,.5)"
  },
  {
    hex: "#373834",
    name: "蒽油绿",
    pinyin: "enyoulv",
    RGBA: "rgba(55,56,52,1)",
    bleak: "rgba(55,56,52,.5)"
  },
  {
    hex: "#2b312c",
    name: "槲寄生绿",
    pinyin: "hujishenglv",
    RGBA: "rgba(43,49,44,1)",
    bleak: "rgba(43,49,44,.5)"
  },
  {
    hex: "#15231b",
    name: "云杉绿",
    pinyin: "yunshanlv",
    RGBA: "rgba(21,35,27,1)",
    bleak: "rgba(21,35,27,.5)"
  },
  {
    hex: "#f0f5e5",
    name: "嫩菊绿",
    pinyin: "nenjulv",
    RGBA: "rgba(240,245,229,1)",
    bleak: "rgba(240,245,229,.5)"
  },
  {
    hex: "#dfecd5",
    name: "艾背绿",
    pinyin: "aibeilv",
    RGBA: "rgba(223,236,213,1)",
    bleak: "rgba(223,236,213,.5)"
  },
  {
    hex: "#add5a2",
    name: "嘉陵水绿",
    pinyin: "jialingshuilv",
    RGBA: "rgba(173,213,162,1)",
    bleak: "rgba(173,213,162,.5)"
  },
  {
    hex: "#41b349",
    name: "玉髓绿",
    pinyin: "yusuilv",
    RGBA: "rgba(65,179,73,1)",
    bleak: "rgba(65,179,73,.5)"
  },
  {
    hex: "#43b244",
    name: "鲜绿",
    pinyin: "xianlv",
    RGBA: "rgba(67,178,68,1)",
    bleak: "rgba(67,178,68,.5)"
  },
  {
    hex: "#41ae3c",
    name: "宝石绿",
    pinyin: "baoshilv",
    RGBA: "rgba(65,174,60,1)",
    bleak: "rgba(65,174,60,.5)"
  },
  {
    hex: "#e2e7bf",
    name: "海沬绿",
    pinyin: "haimeilv",
    RGBA: "rgba(226,231,191,1)",
    bleak: "rgba(226,231,191,.5)"
  },
  {
    hex: "#d0deaa",
    name: "姚黄",
    pinyin: "yaohuang",
    RGBA: "rgba(208,222,170,1)",
    bleak: "rgba(208,222,170,.5)"
  },
  {
    hex: "#b2cf87",
    name: "橄榄石绿",
    pinyin: "ganlanshilv",
    RGBA: "rgba(178,207,135,1)",
    bleak: "rgba(178,207,135,.5)"
  },
  {
    hex: "#8cc269",
    name: "水绿",
    pinyin: "shuilv",
    RGBA: "rgba(140,194,105,1)",
    bleak: "rgba(140,194,105,.5)"
  },
  {
    hex: "#b7d07a",
    name: "芦苇绿",
    pinyin: "luweilv",
    RGBA: "rgba(183,208,122,1)",
    bleak: "rgba(183,208,122,.5)"
  },
  {
    hex: "#d2d97a",
    name: "槐花黄绿",
    pinyin: "huaihuahuanglv",
    RGBA: "rgba(210,217,122,1)",
    bleak: "rgba(210,217,122,.5)"
  },
  {
    hex: "#bacf65",
    name: "苹果绿",
    pinyin: "pingguolv",
    RGBA: "rgba(186,207,101,1)",
    bleak: "rgba(186,207,101,.5)"
  },
  {
    hex: "#96c24e",
    name: "芽绿",
    pinyin: "yalv",
    RGBA: "rgba(150,194,78,1)",
    bleak: "rgba(150,194,78,.5)"
  },
  {
    hex: "#e2d849",
    name: "蝶黄",
    pinyin: "diehuang",
    RGBA: "rgba(226,216,73,1)",
    bleak: "rgba(226,216,73,.5)"
  },
  {
    hex: "#bec936",
    name: "橄榄黄绿",
    pinyin: "ganlanhuanglv",
    RGBA: "rgba(190,201,54,1)",
    bleak: "rgba(190,201,54,.5)"
  },
  {
    hex: "#5bae23",
    name: "鹦鹉绿",
    pinyin: "yingwulv",
    RGBA: "rgba(91,174,35,1)",
    bleak: "rgba(91,174,35,.5)"
  },
  {
    hex: "#253d24",
    name: "油绿",
    pinyin: "youlv",
    RGBA: "rgba(37,61,36,1)",
    bleak: "rgba(37,61,36,.5)"
  },
  {
    hex: "#fffef8",
    name: "象牙白",
    pinyin: "xiangyabai",
    RGBA: "rgba(255,254,248,1)",
    bleak: "rgba(255,254,248,.5)"
  },
  {
    hex: "#f8f4ed",
    name: "汉白玉",
    pinyin: "hanbaiyu",
    RGBA: "rgba(248,244,237,1)",
    bleak: "rgba(248,244,237,.5)"
  },
  {
    hex: "#fffef9",
    name: "雪白",
    pinyin: "xuebai",
    RGBA: "rgba(255,254,249,1)",
    bleak: "rgba(255,254,249,.5)"
  },
  {
    hex: "#f7f4ed",
    name: "鱼肚白",
    pinyin: "yudubai",
    RGBA: "rgba(247,244,237,1)",
    bleak: "rgba(247,244,237,.5)"
  },
  {
    hex: "#e4dfd7",
    name: "珍珠灰",
    pinyin: "zhenzhuhui",
    RGBA: "rgba(228,223,215,1)",
    bleak: "rgba(228,223,215,.5)"
  },
  {
    hex: "#dad4cb",
    name: "浅灰",
    pinyin: "qianhui",
    RGBA: "rgba(218,212,203,1)",
    bleak: "rgba(218,212,203,.5)"
  },
  {
    hex: "#bbb5ac",
    name: "铅灰",
    pinyin: "qianhui",
    RGBA: "rgba(187,181,172,1)",
    bleak: "rgba(187,181,172,.5)"
  },
  {
    hex: "#bbb5ac",
    name: "中灰",
    pinyin: "zhonghui",
    RGBA: "rgba(187,181,172,1)",
    bleak: "rgba(187,181,172,.5)"
  },
  {
    hex: "#867e76",
    name: "瓦灰",
    pinyin: "wahui",
    RGBA: "rgba(134,126,118,1)",
    bleak: "rgba(134,126,118,.5)"
  },
  {
    hex: "#847c74",
    name: "夜灰",
    pinyin: "yehui",
    RGBA: "rgba(132,124,116,1)",
    bleak: "rgba(132,124,116,.5)"
  },
  {
    hex: "#80766e",
    name: "雁灰",
    pinyin: "yanhui",
    RGBA: "rgba(128,118,110,1)",
    bleak: "rgba(128,118,110,.5)"
  },
  {
    hex: "#81776e",
    name: "深灰",
    pinyin: "shenhui",
    RGBA: "rgba(129,119,110,1)",
    bleak: "rgba(129,119,110,.5)"
  },
  {
    hex: "#C21F30FF",
    name: "危险",
    pinyin: "danger",
    RGBA: "rgba(194, 31, 48, 1)",
    bleak: "rgba(194, 31, 48, .5)"
  },
  {
    hex: "#12aa9c",
    name: "成功",
    pinyin: "success",
    RGBA: "rgba(18, 170, 156, 1)",
    bleak: "rgba(18, 170, 156, .5)"
  },
  {
    hex: "#93b5cf",
    name: "准备",
    pinyin: "ready",
    RGBA: "rgba(22, 97, 171, 1)",
    bleak: "rgba(22, 97, 171, .5)"
  }
], E = te, oe = localStorage.getItem("mode") ? localStorage.getItem("mode") : null;
localStorage.getItem("color") && localStorage.getItem("color");
E.forEach((e) => {
  E[e.pinyin] = {
    color: e.RGBA,
    hover: e.bleak
  };
});
const R = function(e) {
  return E[e] || !1;
};
const x = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [b, i] of a)
    n[b] = i;
  return n;
}, ce = ["title"], he = {
  name: "iceButton"
}, ue = /* @__PURE__ */ Object.assign(he, {
  props: {
    type: {
      type: String,
      default: "primary"
    },
    hover: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String
    },
    color: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    fill: {
      type: String,
      default: ""
    },
    round: {
      type: Boolean,
      default: !1
    },
    block: {
      type: Boolean,
      default: !1
    },
    disable: {
      type: Boolean,
      default: !1
    },
    border: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click"],
  setup(e, { emit: a }) {
    const n = a, b = e, i = (l) => {
      b.disable || n("click", l);
    };
    return (l, h) => (r(), c("div", {
      class: "ice-button",
      onClick: i
    }, [
      d("div", {
        class: s([[
          e.type ? e.color ? "btn-colors" : e.type : "",
          e.color ? "btn-colors" : "",
          e.fill ? e.fill : "",
          e.round ? "round" : "defaultRound",
          e.block ? "block" : "",
          e.size ? `size-${e.size}` : "size-n",
          e.disable ? "disable" : "pointer",
          e.border ? "border" : ""
        ], "btn btn-time-s text-nowrap ice-row"]),
        style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover }),
        title: e.title ? e.title : ""
      }, [
        G(l.$slots, "default", {}, void 0, !0)
      ], 14, ce)
    ]));
  }
}), se = /* @__PURE__ */ x(ue, [["__scopeId", "data-v-4397857a"]]);
const ye = {
  name: "iceText"
}, de = /* @__PURE__ */ Object.assign(ye, {
  props: {
    nowrap: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: ""
    },
    underLine: {
      type: Boolean,
      default: !1
    },
    noselect: {
      type: Boolean,
      default: !1
    },
    m0: {
      type: Boolean,
      default: !1
    },
    p0: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (a, n) => (r(), c("div", {
      class: s([[
        e.nowrap ? "text-nowrap" : "",
        e.color ? "hoverColor" : "",
        e.size ? "size-" + e.size : "size-n",
        e.underLine ? "underLine" : "",
        e.noselect ? "noselect" : "",
        e.m0 ? "m0" : "",
        e.p0 ? "p0" : ""
      ], "ice-text"]),
      style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover })
    }, [
      G(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), me = /* @__PURE__ */ x(de, [["__scopeId", "data-v-45a99355"]]);
const pe = {
  name: "iceSplit"
}, fe = /* @__PURE__ */ Object.assign(pe, {
  props: {
    type: {
      type: String,
      default: "landscape"
    },
    dashed: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    // 文字位置
    position: {
      type: String,
      default: "center"
    }
  },
  setup(e) {
    return (a, n) => (r(), c("div", {
      class: s([[
        e.type,
        e.dashed ? "dashed" : "",
        "customColor"
      ], "split"]),
      style: _({
        "--color": t(R)(e.color).color
      })
    }, [
      d("div", {
        class: s([[
          e.position
        ], "text"])
      }, v(e.text), 3)
    ], 6));
  }
}), xe = /* @__PURE__ */ x(fe, [["__scopeId", "data-v-592aa18a"]]);
const ke = {
  name: "iceTag"
}, Be = /* @__PURE__ */ Object.assign(ke, {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    round: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    href: {
      type: String,
      default: ""
    },
    // 是可以选中
    noselect: {
      type: Boolean,
      default: !1
    },
    finger: {
      type: Boolean,
      default: !1
    },
    pointer: {
      type: Boolean,
      default: !1
    },
    m0: {
      type: Boolean,
      default: !1
    },
    p0: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (a, n) => (r(), c("div", {
      class: s([[
        e.type,
        e.round ? "round" : "defaultRound",
        e.color ? "btn-colors" : "default-color",
        e.size ? `size-${e.size}` : "size-normal",
        e.noselect ? "noselect" : "",
        e.finger ? "finger" : "",
        e.pointer ? "pointer" : "",
        e.m0 ? "m0" : "",
        e.p0 ? "p0" : ""
      ], "ice-tag noSelect"]),
      style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover })
    }, [
      G(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Re = /* @__PURE__ */ x(Be, [["__scopeId", "data-v-44db5f67"]]);
const Ae = ["href", "target"], Ge = {
  name: "ice-link"
}, ve = /* @__PURE__ */ Object.assign(Ge, {
  props: {
    size: {
      type: String,
      default: ""
    },
    href: {
      type: String,
      default: ""
    },
    params: {
      type: Object
    },
    color: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: "_self"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    border: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    return (a, n) => (r(), c("a", {
      class: s([[
        e.size ? "size-" + e.size : "size-n",
        e.color ? "hoverColor" : "defaultColor",
        e.border ? "border" : "no-border"
      ], "ice-link"]),
      href: e.disabled ? null : e.href,
      style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover }),
      target: e.target ? e.target : "_self"
    }, [
      G(a.$slots, "default", {}, void 0, !0)
    ], 14, Ae));
  }
}), Y = /* @__PURE__ */ x(ve, [["__scopeId", "data-v-1bf9edee"]]), _e = {
  name: "container"
}, ze = { class: "ice-row flex-wrap" };
function we(e, a, n, b, i, l) {
  return r(), c("div", ze, [
    G(e.$slots, "default")
  ]);
}
const je = /* @__PURE__ */ x(_e, [["render", we]]);
const $e = ["title"], Se = {
  name: "ice-title"
}, Ie = /* @__PURE__ */ Object.assign(Se, {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    size: {
      type: String,
      default: "n"
    },
    title: {
      type: String,
      default: ""
    },
    noselect: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: "defaultColor"
    }
  },
  setup(e) {
    return (a, n) => (r(), c("div", {
      class: s(["ice-title", [e.noselect ? "noselect" : "", e.color ? "hoverColor" : "defaultColor"]]),
      title: e.title,
      style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover })
    }, [
      d("h4", {
        class: s(["slot", [e.type, e.size]])
      }, [
        G(a.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 14, $e));
  }
}), Z = /* @__PURE__ */ x(Ie, [["__scopeId", "data-v-d3192d71"]]);
const Ce = { class: "header ice-row flex-sb" }, qe = {
  key: 0,
  class: "body"
}, Oe = {
  key: 1,
  class: "bottom"
}, Le = { class: "ice-column content" }, Ve = {
  name: "iceCard"
}, Te = /* @__PURE__ */ Object.assign(Ve, {
  props: {
    type: {
      type: String,
      default: "normal"
    },
    size: {
      type: String,
      default: "n"
    },
    color: {
      type: String,
      default: ""
    },
    border: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const { header: a, body: n, bottom: b } = ae();
    let i = k(!1);
    const l = k("");
    let h = k("");
    J(
      i,
      (g) => {
        g ? (l.value.style.height = h.value * 1 + "px", l.value.style.opacity = 1) : (l.value.style.height = 0, l.value.style.opacity = 0);
      }
    );
    const u = e;
    let o = ne({});
    if (u.color) {
      const g = R(u.color);
      o = {
        color: `rgba(${g.RGB[0]},${g.RGB[1]},${g.RGB[2]},1)`,
        hoverColor: `rgba(${g.RGB[0]},${g.RGB[1]},${g.RGB[2]},0.5)`
      };
    }
    const y = () => {
      h.value = l.value.scrollHeight, i.value ? l.value.style.height = h.value * 1 + "px" : (l.value.style.height = 0, l.value.style.opacity = 0);
    };
    return K(() => {
      b && y();
    }), (g, m) => {
      const p = z("iceSplit"), $ = z("ice-button");
      return t(a) ? (r(), c("div", {
        key: 0,
        class: s([[
          e.size,
          e.color ? e.color : "",
          e.border ? "border" : "noborder"
        ], "ice-card"]),
        style: _({ "--hover-color": t(o).hoverColor, "--color": t(o).color })
      }, [
        d("div", {
          class: s([e.type, "slot"])
        }, [
          d("div", Ce, [
            G(g.$slots, "header", {}, void 0, !0)
          ]),
          t(n) ? (r(), c("div", qe, [
            B(p, { dashed: "" }),
            G(g.$slots, "body", {}, void 0, !0)
          ])) : C("", !0),
          t(b) ? (r(), c("div", Oe, [
            B(p, { dashed: "" }),
            d("div", Le, [
              B($, {
                onClick: m[0] || (m[0] = (q) => ie(i) ? i.value = !t(i) : i = !t(i))
              }, {
                default: f(() => [
                  A(v(t(i) ? "收起" : "展开") + " ", 1),
                  d("div", {
                    class: s([[
                      t(i) ? "down" : "up"
                    ], "tag"])
                  }, "^ ", 2)
                ]),
                _: 1
              }),
              d("div", {
                ref_key: "bottomContent",
                ref: l,
                class: "bottomLim show"
              }, [
                G(g.$slots, "bottom", {}, void 0, !0)
              ], 512)
            ])
          ])) : C("", !0)
        ], 2)
      ], 6)) : C("", !0);
    };
  }
}), Ne = /* @__PURE__ */ x(Te, [["__scopeId", "data-v-b47adb83"]]);
const Pe = {
  name: "iceMessage"
}, Ee = /* @__PURE__ */ Object.assign(Pe, {
  props: {
    duration: {
      type: Number,
      default: 2e3
    },
    id: {
      type: String,
      default: ""
    },
    offset: {
      type: Number,
      default: 100
    },
    zIndex: {
      type: Number,
      default: 0
    },
    onClose: {
      type: Function,
      required: !1
    },
    type: {
      type: String,
      default: "info"
    },
    message: {
      type: [String, Object],
      default: ""
    },
    showClose: {
      type: Boolean,
      default: !0
    },
    center: {
      type: Boolean,
      default: !1
    },
    color: {
      type: String,
      default: ""
    }
  },
  emits: ["destroy", "close"],
  setup(e, { emit: a }) {
    const n = k(!1), b = e, i = a;
    function l() {
      b.duration > 0 && setTimeout(() => {
        n.value && u();
      }, b.duration);
    }
    function h({ code: o }) {
      o === "Escape" ? n.value && u() : l();
    }
    K(() => {
      l(), n.value = !0, document.addEventListener("keydown", h);
    }), be(() => {
      document.removeEventListener("keydown", h);
    });
    function u() {
      n.value = !1, i("close");
    }
    return (o, y) => {
      const g = z("ice-text"), m = z("ice-button");
      return r(), L(le, {
        duration: 300,
        "enter-active-class": "animate__zoomIn",
        "leave-active-class": "animate__zoomOut",
        onBeforeLeave: e.onClose,
        onAfterLeave: y[1] || (y[1] = (p) => o.$emit("destroy"))
      }, {
        default: f(() => [
          n.value ? (r(), c("div", {
            key: 0,
            class: s([[
              e.color ? "message-colors" : e.type ? e.type : ""
            ], "ice-message-lim border-normal"]),
            style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover })
          }, [
            B(g, {
              color: e.color ? e.color : e.type ? e.type : ""
            }, {
              default: f(() => [
                A(v(e.message), 1)
              ]),
              _: 1
            }, 8, ["color"]),
            e.showClose ? (r(), L(m, {
              key: 0,
              color: e.color,
              type: e.type,
              onClick: y[0] || (y[0] = (p) => u())
            }, {
              default: f(() => [
                A("close")
              ]),
              _: 1
            }, 8, ["color", "type"])) : C("", !0)
          ], 6)) : C("", !0)
        ]),
        _: 1
      }, 8, ["onBeforeLeave"]);
    };
  }
});
let Me = 1;
const Fe = k(2e3), D = [], U = function(e = {}) {
  typeof e == "string" && (e = {
    message: e
  });
  let a = e.offset || 20;
  D.forEach(({ vm: y }) => {
    var g;
    a += (((g = y.el) == null ? void 0 : g.offsetHeight) || 0) + 70;
  });
  const n = `message_${Me++}`;
  e.onClose;
  const b = {
    message: e.message,
    id: n,
    offset: a,
    zIndex: Fe.value++,
    ...e,
    onClose: () => {
      W();
    }
  };
  let i = document.body;
  const l = document.createElement("div");
  let h = null;
  document.querySelector(".ice-message-container") ? h = document.querySelector(".ice-message-container") : (h = document.createElement("div"), h.className = "ice-message-container"), e.appendTo instanceof HTMLElement ? i = e.appendTo : typeof e.appendTo == "string" && (i = document.querySelector(e.appendTo)), l.className = `${n} ice-message`;
  const u = b.message, o = B(
    Ee,
    // 传入属性
    b,
    Q(b.message) ? { default: () => u } : null
  );
  return o.props.onDestroy = () => {
    H(null, l);
  }, H(o, l), D.push({ vm: o }), h.appendChild(l), i.appendChild(h), {
    close: () => {
      console.log("调用了emit的close--->"), W(), o.component.proxy.visible = !1;
    },
    destroy: () => {
      console.log("destroy");
    }
  };
}, He = ["success", "info", "warning", "error"];
He.forEach((e) => {
  U[e] = (a = {}) => ((typeof a == "string" || Q(a)) && (a = {
    message: a
  }), U({
    ...a,
    type: e
  }));
});
function W(e, a) {
  setTimeout(function() {
    const n = document.querySelector(".ice-message-container").children;
    for (let b = n.length - 1; b >= 0; b--) {
      const i = n[b];
      i.textContent.trim() === "" && i.remove();
    }
  }, 500);
}
const De = { class: "list-ul" }, Ue = { class: "list-children-ul" }, We = { key: 1 }, Je = {
  name: "ice-menu"
}, Ke = /* @__PURE__ */ Object.assign(Je, {
  props: {
    list: {
      type: Array,
      required: !0
    },
    color: {
      type: String,
      default: ""
    },
    // 当前比对的字符串
    router: {
      type: String,
      required: ""
    },
    // 菜单是否显示border
    border: {
      type: Boolean,
      default: !1
    },
    // 是否折叠,默认折叠面板
    nofold: {
      type: Boolean,
      default: !1
    },
    // 布局方向
    direction: {
      type: String,
      default: "column"
    }
  },
  setup(e) {
    const a = e, n = k(a.list), b = (i) => {
      a.nofold || (i.isOpen = !i.isOpen);
    };
    return (i, l) => {
      const h = z("ice-text");
      return r(), c("div", {
        class: s(["ice-menu", [
          e.border ? "ice-menu-border" : "",
          e.color ? "colors" : ""
        ]]),
        style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover })
      }, [
        d("ul", De, [
          (r(!0), c(I, null, T(n.value, (u) => (r(), c("li", {
            key: u.text,
            style: _({ color: e.color })
          }, [
            u.children ? (r(), c("div", {
              key: 0,
              class: s(["ice-menu-child", [
                u.isOpen ? "showLi" : "hideLi",
                e.nofold ? "showLi" : "hideLi"
              ]])
            }, [
              B(Z, {
                noselect: "",
                onClick: (o) => b(u),
                color: e.color
              }, {
                default: f(() => [
                  A(v(u.text), 1)
                ]),
                _: 2
              }, 1032, ["onClick", "color"]),
              d("ul", Ue, [
                (r(!0), c(I, null, T(u.children, (o, y) => (r(), c("li", { key: y }, [
                  o.href ? (r(), L(Y, {
                    key: 0,
                    href: o.href,
                    color: e.color,
                    class: s({ activeLink: e.router === o.href })
                  }, {
                    default: f(() => [
                      A(v(o.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "color", "class"])) : (r(), L(h, {
                    key: 1,
                    noselect: "",
                    color: e.color
                  }, {
                    default: f(() => [
                      A(v(o.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]))
                ]))), 128))
              ])
            ], 2)) : (r(), c("div", We, v(u.text), 1))
          ], 4))), 128))
        ])
      ], 6);
    };
  }
}), Qe = /* @__PURE__ */ x(Ke, [["__scopeId", "data-v-5a7734aa"]]), Xe = {
  modelValue: {
    type: [Number, String]
  },
  placeholder: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  type: {
    type: String,
    default: "text"
  },
  suffixIcon: {
    type: [String, Object]
  },
  prefixIcon: {
    type: [String, Object]
  },
  readonly: {
    type: Boolean,
    default: !1
  }
}, Ye = [
  "update:modelValue",
  "input",
  "clear",
  "blur",
  "focus"
], Ze = (e, a) => {
  const n = j(() => e.disabled), b = j(() => e.placeholder), i = j(() => e.clearable), l = j(() => e.showPassword), h = k(!1), u = j(() => e.readonly), o = j(() => l.value ? h.value ? "text" : "password" : e.type), y = j(() => ({
    "is-disabled": n.value,
    "is-clearable": i.value,
    "show-password": l.value,
    "jw-input": o.value !== "textarea",
    "jw-textarea": o.value === "textarea",
    "jw-input-suffix": l.value || i.value || e.suffixIcon,
    "jw-input-prefix": e.prefixIcon
  })), g = j(
    () => e.modelValue === null || e.modelValue === void 0 ? "" : String(e.modelValue)
  );
  return {
    disabled: n,
    classes: y,
    clearable: i,
    showPassword: l,
    type: o,
    passwordVisible: h,
    placeholder: b,
    suffixIcon: e.suffixIcon,
    prefixIcon: e.prefixIcon,
    readonly: u,
    nativeInputValue: g
  };
};
const ea = ["disabled", "readonly", "type", "value"], aa = {
  name: "ice-input"
}, na = /* @__PURE__ */ Object.assign(aa, {
  props: Xe,
  emits: Ye,
  setup(e, { expose: a, emit: n }) {
    const b = e, i = n, {
      disabled: l,
      type: h,
      placeholder: u,
      readonly: o,
      nativeInputValue: y
    } = Ze(b), g = document.querySelector("input"), m = document.querySelector("textarea"), p = () => g.value || m.value, $ = (w) => {
      const O = w.target.value;
      O !== y.value && (i("update:modelValue", O), i("input", O));
    }, q = (w) => {
      i("blur", w);
    }, V = (w) => {
      i("focus", w);
    };
    return a({
      input: g,
      inputOrTextarea: p,
      textarea: m,
      blur: () => {
        F(() => {
          var N;
          (N = p.value) == null || N.blur();
          const w = document.getSelection();
          document.createRange().selectNode(p.value), w.removeAllRanges();
        });
      },
      focus: () => {
        F(() => {
          var w;
          (w = p.value) == null || w.focus();
        });
      },
      select: () => {
        F(() => {
          var N;
          (N = p.value) == null || N.focus();
          const w = document.getSelection(), O = document.createRange();
          O.selectNode(p.value), w.removeAllRanges(), w.addRange(O);
        });
      }
    }), (w, O) => (r(), c("div", {
      class: s([{ inputNowait: t(y) }, "ice-input"])
    }, [
      t(u) ? (r(), c("div", {
        key: 0,
        class: s([{ nowait: t(y) }, "wait"])
      }, v(t(u)), 3)) : C("", !0),
      d("input", {
        ref_key: "input",
        ref: g,
        disabled: t(l),
        readonly: t(o),
        type: t(h),
        value: t(y),
        autocomplete: "off",
        class: "jw-input-inner",
        onBlur: q,
        onFocus: V,
        onInput: $
      }, null, 40, ea)
    ], 2));
  }
}), ia = /* @__PURE__ */ x(na, [["__scopeId", "data-v-442bf3b4"]]);
const ba = {
  name: "IceRow"
}, la = /* @__PURE__ */ Object.assign(ba, {
  props: {
    center: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return (a, n) => (r(), c("div", {
      class: s([{ center: e.center }, "ice-row"]),
      style: _({
        width: e.width
      })
    }, [
      G(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ra = /* @__PURE__ */ x(la, [["__scopeId", "data-v-769915c3"]]);
const ga = {
  name: "IceColumn"
}, ta = /* @__PURE__ */ Object.assign(ga, {
  props: {
    center: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "100%"
    }
  },
  setup(e) {
    return (a, n) => (r(), c("div", {
      class: s([{ center: e.center }, "ice-column"]),
      style: _({
        width: e.width
      })
    }, [
      G(a.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), oa = /* @__PURE__ */ x(ta, [["__scopeId", "data-v-91225757"]]);
const ca = (e) => (re("data-v-8ff34f9c"), e = e(), ge(), e), ha = /* @__PURE__ */ ca(() => /* @__PURE__ */ d("br", null, null, -1)), ua = {
  name: "ice-drawer"
}, sa = /* @__PURE__ */ Object.assign(ua, {
  props: {
    // 如果不定义绑定的值的名称，默认为modelValue
    modelValue: Boolean,
    // 指定值的名称为value
    value: String,
    width: {
      type: String,
      default: "10rem"
    },
    direction: {
      type: String,
      default: "left"
    },
    percent: {
      type: String,
      default: "20%"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: a }) {
    const n = a, b = e, i = () => {
      n("update:modelValue", !1);
    }, l = j(() => b.direction === "left" || b.direction === "right" ? {
      width: b.percent
    } : {
      height: b.percent
    }), h = j(() => b.direction === "left" || b.direction === "right" ? "row" : "column"), u = k(document.querySelector("body"));
    return J(() => b.modelValue, (o) => {
      o ? u.value.classList.value += " showDrawer" : u.value.classList.value = u.value.classList.value.replaceAll(" showDrawer", "");
    }), (o, y) => {
      const g = z("ice-text"), m = z("ice-button");
      return r(), L(X, { to: "body" }, [
        d("div", {
          class: s([[
            e.direction ? e.direction : "left",
            e.modelValue ? "fadeIn" : "fadeOut"
          ], "ice-drawer"]),
          style: _({
            "flex-direction": h.value
          })
        }, [
          d("div", {
            style: _(l.value),
            class: "slotStyle"
          }, [
            B(g, null, {
              default: f(() => [
                A(v(l.value), 1)
              ]),
              _: 1
            }),
            G(o.$slots, "default", {}, void 0, !0)
          ], 4),
          d("div", {
            class: "blank",
            onClick: i
          }, [
            B(g, null, {
              default: f(() => [
                A(" modelValue:" + v(e.modelValue), 1)
              ]),
              _: 1
            }),
            ha,
            B(g, null, {
              default: f(() => [
                A(" direction:" + v(e.direction), 1)
              ]),
              _: 1
            }),
            B(m, {
              color: "honglan",
              onClick: i
            }, {
              default: f(() => [
                A("close")
              ]),
              _: 1
            })
          ])
        ], 6)
      ]);
    };
  }
}), ya = /* @__PURE__ */ x(sa, [["__scopeId", "data-v-8ff34f9c"]]);
const da = { class: "iceSelector" }, ma = {
  key: 0,
  class: "selectItemLim"
}, pa = { key: 1 }, fa = {
  name: "ice-selector"
}, xa = /* @__PURE__ */ Object.assign(fa, {
  props: {
    modelValue: {
      type: [String, Number]
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue", "itemOnChange"],
  setup(e, { emit: a }) {
    const n = e, b = (o) => {
      l("update:modelValue", o.value), l("itemOnChange", o), i.value = !i.value;
    };
    let i = k(!1);
    const l = a, h = j(() => {
      if (n.list) {
        const o = n.list.filter((y) => y.value + "" == n.modelValue + "");
        return o.label ? o.label : o[0].label;
      } else
        return "null";
    }), u = () => {
      i.value = !i.value;
    };
    return (o, y) => {
      const g = z("ice-text"), m = z("ice-selectionItem");
      return r(), c("div", da, [
        B(g, {
          class: "activeSelection",
          noselect: "",
          onClick: u
        }, {
          default: f(() => [
            A(v(h.value), 1)
          ]),
          _: 1
        }),
        d("div", {
          class: s([[
            t(i) ? "showSelection" : "hideSelection"
          ], "selections"])
        }, [
          e.list.length > 0 ? (r(), c("div", ma, [
            (r(!0), c(I, null, T(e.list, (p, $) => (r(), c("div", {
              key: $,
              class: "item"
            }, [
              B(m, {
                item: p,
                show: t(i),
                onClicked: b
              }, null, 8, ["item", "show"])
            ]))), 128))
          ])) : (r(), c("div", pa, [
            B(g, { size: "s" }, {
              default: f(() => [
                A(" 空 ")
              ]),
              _: 1
            })
          ]))
        ], 2)
      ]);
    };
  }
}), ka = /* @__PURE__ */ x(xa, [["__scopeId", "data-v-c832cacb"]]), Ba = {
  name: "selector-group"
}, Ra = { class: "ice-selector-group" };
function Aa(e, a, n, b, i, l) {
  const h = z("ice-text");
  return r(), c("div", Ra, [
    B(h, { color: "guiyuhong" }, {
      default: f(() => [
        A(" 选择器父组件 ")
      ]),
      _: 1
    }),
    G(e.$slots, "default")
  ]);
}
const Ga = /* @__PURE__ */ x(Ba, [["render", Aa]]);
const va = ["alt", "src", "title"], _a = {
  name: "iceAvatar"
}, za = /* @__PURE__ */ Object.assign(_a, {
  props: {
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "default-size"
    },
    round: {
      type: Boolean,
      default: !0
    },
    block: {
      type: Boolean,
      default: !1
    },
    fit: {
      type: String,
      default: "fill"
    }
  },
  setup(e) {
    const a = "/src/assets/png/logo.png", n = (b) => {
      b.target.src = a;
    };
    return (b, i) => (r(), c("div", {
      class: s([[
        e.round && !e.block ? "" : "background",
        e.round ? "round" : ""
      ], "ice-avatar"])
    }, [
      d("img", {
        alt: e.title,
        class: s([
          "avatar",
          e.size === "default-size" ? "default-size" : "",
          e.round && !e.block ? "round" : "block"
        ]),
        src: e.src,
        style: _({ "object-fit": e.fit, width: e.size + "px", height: e.size + "px" }),
        title: e.title,
        onError: n
      }, null, 46, va)
    ], 2));
  }
}), wa = /* @__PURE__ */ x(za, [["__scopeId", "data-v-2c75cc4e"]]);
const ja = {
  name: "shrinkBar"
}, $a = /* @__PURE__ */ Object.assign(ja, {
  props: {
    // 需要收缩的方向
    direction: {
      type: String,
      default: "left"
    },
    bacColor: {
      type: String
    }
  },
  setup(e) {
    const a = k(!1), n = k();
    let b = k(!1);
    const i = () => {
      b.value = !b.value, b.value ? window.document.body.style.paddingLeft = `${n.value.offsetWidth}px` : window.document.body.style.paddingLeft = 0;
    };
    return window.document.body.style.paddingLeft + "" == "0px" && (b.value = !0), setTimeout(() => {
      window.document.body.style.paddingLeft = 0;
    }), (l, h) => {
      const u = z("ice-button");
      return r(), c(I, null, [
        d("div", {
          class: s([[
            e.bacColor ? "" : "normalBackgroundColor",
            a.value ? "slotHide" : ""
          ], "alwaysShow"])
        }, [
          G(l.$slots, "show", {}, void 0, !0)
        ], 2),
        d("div", {
          ref_key: "shrinkBar",
          ref: n,
          class: s([
            "shrinkBar",
            "ice-column",
            a.value ? "shrinkBarShow" : "",
            t(b) ? "shrinkBarShow" : ""
          ]),
          onMouseleave: h[0] || (h[0] = (o) => a.value = !1),
          onMouseover: h[1] || (h[1] = (o) => a.value = !0)
        }, [
          B(u, { onClick: i }, {
            default: f(() => [
              A(v(t(b) ? "取消固定" : "固定"), 1)
            ]),
            _: 1
          }),
          G(l.$slots, "show", {}, void 0, !0),
          G(l.$slots, "body", {}, void 0, !0)
        ], 34)
      ], 64);
    };
  }
}), Sa = /* @__PURE__ */ x($a, [["__scopeId", "data-v-f76aec90"]]);
const Ia = {
  name: "ice-selectionItem"
}, Ca = /* @__PURE__ */ Object.assign(Ia, {
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    item: {
      type: Object,
      default: () => {
      }
    },
    color: {
      type: String,
      default: ""
    }
  },
  emits: ["clicked"],
  setup(e, { emit: a }) {
    const n = e, b = a, i = () => {
      b("clicked", n.item);
    };
    return (l, h) => (r(), c("div", {
      class: "ice-selectionItem noselect",
      onClick: i
    }, [
      d("div", {
        class: s([[
          e.show ? "showItem" : "hideItem",
          e.color ? "hoverColor" : ""
        ], "selectionItem"])
      }, v(e.item.label), 3)
    ]));
  }
}), qa = /* @__PURE__ */ x(Ca, [["__scopeId", "data-v-5efddeef"]]), Oa = { class: "ice-pagination" }, La = {
  __name: "ice-pagination",
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    step: {
      type: Number,
      default: 20
    },
    prev: {
      type: Boolean,
      default: !1
    },
    next: {
      type: Boolean,
      default: !1
    },
    pageStep: {
      type: Number,
      default: 5
    }
  },
  emits: ["update:modelValue", "input", "blur", "focus", "valueChange"],
  setup(e, { emit: a }) {
    const n = a;
    let b = k(1);
    const i = (g) => {
      b.value = g;
    }, l = (g) => {
      n("update:modelValue", g), n("valueChange", g);
    }, h = e;
    let u = k([1]);
    (() => {
      for (let g = 0; g <= h.total; g++)
        g % h.step === 0 && g !== 0 && u.value.push(g);
    })();
    const y = j(() => {
      const g = u.value.filter((m) => m === b.value);
      return Array.from({ length: h.step }, (m, p) => p + g[0]);
    });
    return (g, m) => {
      const p = z("ice-tag"), $ = z("ice-row");
      return r(), c("div", Oa, [
        B($, null, {
          default: f(() => [
            (r(!0), c(I, null, T(t(u), (q, V) => (r(), c(I, { key: V }, [
              q <= e.total ? (r(), L(p, {
                key: 0,
                finger: "",
                noselect: "",
                onClick: (S) => i(q)
              }, {
                default: f(() => [
                  A(v(q), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : C("", !0),
              y.value[0] === t(u)[V] ? (r(!0), c(I, { key: 1 }, T(y.value, (S, M) => (r(), c(I, { key: M }, [
                S <= e.total ? (r(), L(p, {
                  key: 0,
                  color: "yinzhu",
                  finger: "",
                  noselect: "",
                  onClick: (ee) => l(S)
                }, {
                  default: f(() => [
                    A(v(S), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : C("", !0)
              ], 64))), 128)) : C("", !0)
            ], 64))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
};
const Va = { class: "imgList" }, Ta = { class: "imgBigCover" }, Na = ["src"], Pa = { class: "imageBottomContainer" }, Ea = ["onClick"], Ma = {
  name: "iceImgPreview"
}, Fa = /* @__PURE__ */ Object.assign(Ma, {
  props: {
    imgUrls: {
      type: Array,
      default: () => ["http://blog.icestone.work/default.png"]
    },
    // 是否默认展示 默认不展示
    defaultShow: {
      type: Boolean,
      default: !1
    },
    // 关闭按钮是否展示在右侧
    closeIconRight: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: a }) {
    const n = e;
    let b = k(!1), i = k([]), l = k("");
    const h = () => {
      n.defaultShow && (b.value = !0), i.value = n.imgUrls, l.value = i.value[0];
    }, u = (m) => {
      i.value = m, b.value = !0, l.value = m[0];
    };
    h();
    const o = () => {
      b.value = !1;
    };
    let y = k(0);
    const g = (m, p) => {
      y.value = m, l.value = p;
    };
    return a({
      show: u,
      closePreview: o
    }), (m, p) => {
      const $ = z("ice-button"), q = z("ice-avatar");
      return r(), L(X, { to: "body" }, [
        d("div", {
          class: s([[t(b) ? "showPreview" : "hidePreview"], "imgPreview"])
        }, [
          B($, {
            class: s([[e.closeIconRight ? "right" : "left"], "bacCover noselect"]),
            onClick: o
          }, {
            default: f(() => [
              A("close ")
            ]),
            _: 1
          }, 8, ["class"]),
          d("div", Va, [
            d("div", Ta, [
              d("img", {
                src: t(l),
                alt: ""
              }, null, 8, Na)
            ]),
            d("div", Pa, [
              (r(!0), c(I, null, T(t(i), (V, S) => (r(), c("div", {
                key: S,
                class: "lim"
              }, [
                d("div", {
                  class: "imageLim",
                  onClick: (M) => g(S, V)
                }, [
                  B(q, {
                    size: t(y) === S ? "120" : "100",
                    src: V,
                    block: "",
                    fit: "contain"
                  }, null, 8, ["size", "src"])
                ], 8, Ea)
              ]))), 128))
            ])
          ])
        ], 2)
      ]);
    };
  }
}), Ha = /* @__PURE__ */ x(Fa, [["__scopeId", "data-v-c06d035a"]]);
const Da = {
  name: "iceHeader"
}, Ua = /* @__PURE__ */ Object.assign(Da, {
  props: {
    // 大小
    size: {
      type: String,
      default: "n"
    },
    color: {
      type: String,
      default: ""
    },
    noselect: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (a, n) => (r(), c("div", {
      class: s([[
        e.noselect ? "noselect" : "",
        `ice-header-${e.size}`,
        e.color ? "btn-colors" : ""
      ], "ice-header"]),
      style: _({ "--hover-color": t(R)(e.color).color, "--color": t(R)(e.color).hover })
    }, [
      G(a.$slots, "default")
    ], 6));
  }
}), P = {
  iceButton: se,
  iceText: me,
  iceSplit: xe,
  iceTag: Re,
  iceLink: Y,
  container: je,
  iceTitle: Z,
  iceCard: Ne,
  iceMenu: Qe,
  iceInput: ia,
  iceRow: ra,
  iceColumn: oa,
  iceDrawer: ya,
  iceSelector: ka,
  iceSelectorGroup: Ga,
  avatar: wa,
  shrinkBar: Sa,
  iceSelectionItem: qa,
  icePagination: La,
  iceImgPreview: Ha,
  iceHeader: Ua
};
function Wa(e) {
  const a = Object.keys(P);
  for (let n = 0; n < a.length; n++)
    e.component(P[a[n]].name, P[a[n]]);
}
const Ja = {
  version: "1.0.8",
  components: P
};
Ja.install = Wa;
export {
  wa as avatar,
  je as container,
  Ja as default,
  se as iceButton,
  Ne as iceCard,
  oa as iceColumn,
  ya as iceDrawer,
  Ua as iceHeader,
  Ha as iceImgPreview,
  ia as iceInput,
  Y as iceLink,
  Qe as iceMenu,
  U as iceMessage,
  La as icePagination,
  ra as iceRow,
  ka as iceSelector,
  Ga as iceSelectorGroup,
  xe as iceSplit,
  Re as iceTag,
  me as iceText,
  Z as iceTitle,
  Sa as shrinkBar
};
