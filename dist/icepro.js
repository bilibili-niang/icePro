import { openBlock as h, createElementBlock as m, createElementVNode as G, normalizeClass as _, normalizeStyle as q, unref as f, renderSlot as V, toDisplayString as $, useSlots as Jn, ref as j, watch as In, reactive as Ra, onMounted as Qn, resolveComponent as O, createVNode as E, createCommentVNode as le, isRef as Ga, withCtx as w, createTextVNode as N, onUnmounted as _a, createBlock as re, Transition as wa, isVNode as ea, render as $n, Fragment as ie, renderList as de, computed as ne, nextTick as hn, Teleport as na, pushScopeId as Sa, popScopeId as Ea, withDirectives as Ca, vModelText as Ia, resolveDynamicComponent as za, defineComponent as Da, h as jn, toRefs as Ta } from "vue";
const C = (e, n) => {
  const a = e.__vccOpts || e;
  for (const [t, i] of n)
    a[t] = i;
  return a;
}, Oa = ["title"], $a = {
  name: "iceButton"
}, ja = /* @__PURE__ */ Object.assign($a, {
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
  setup(e, { emit: n }) {
    const a = n, t = e, i = (r) => {
      t.disable || a("click", r);
    };
    return (r, o) => (h(), m("div", {
      class: "ice-button",
      onClick: i
    }, [
      G("div", {
        class: _([[
          e.type ? e.color ? "btn-colors" : e.type : "",
          e.color ? "btn-colors" : "",
          e.fill ? e.fill : "",
          e.round ? "round" : "defaultRound",
          e.block ? "block" : "",
          e.size ? `size-${e.size}` : "size-n",
          e.disable ? "disable" : "pointer",
          e.border ? "border" : ""
        ], "btn btn-time-s text-nowrap ice-row"]),
        style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover }),
        title: e.title ? e.title : ""
      }, [
        V(r.$slots, "default", {}, void 0, !0)
      ], 14, Oa)
    ]));
  }
}), aa = /* @__PURE__ */ C(ja, [["__scopeId", "data-v-b917542f"]]), ta = [
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
], on = ta, Na = localStorage.getItem("mode") ? localStorage.getItem("mode") : null;
on.forEach((e) => {
  on[e.pinyin] = {
    color: e.RGBA,
    hover: e.bleak
  };
});
const F = function(e) {
  return on[e] || !1;
};
const Pa = {
  name: "iceText"
}, La = /* @__PURE__ */ Object.assign(Pa, {
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
    return (n, a) => (h(), m("div", {
      class: _([[
        e.nowrap ? "text-nowrap" : "",
        e.color ? "hoverColor" : "",
        e.size ? "size-" + e.size : "size-n",
        e.underLine ? "underLine" : "",
        e.noselect ? "noselect" : "",
        e.m0 ? "m0" : "",
        e.p0 ? "p0" : ""
      ], "ice-text"]),
      style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover })
    }, [
      V(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), ia = /* @__PURE__ */ C(La, [["__scopeId", "data-v-c01c8afe"]]);
const Ma = {
  name: "iceSplit"
}, Fa = /* @__PURE__ */ Object.assign(Ma, {
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
    return (n, a) => (h(), m("div", {
      class: _([[
        e.type,
        e.dashed ? "dashed" : "",
        "customColor"
      ], "split"]),
      style: q({
        "--color": f(F)(e.color).color
      })
    }, [
      G("div", {
        class: _([[
          e.position
        ], "text"])
      }, $(e.text), 3)
    ], 6));
  }
}), Va = /* @__PURE__ */ C(Fa, [["__scopeId", "data-v-1f75cdf8"]]);
const qa = {
  name: "iceTag"
}, Xa = /* @__PURE__ */ Object.assign(qa, {
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
    return (n, a) => (h(), m("div", {
      class: _([[
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
      style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover })
    }, [
      V(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ya = /* @__PURE__ */ C(Xa, [["__scopeId", "data-v-de446d94"]]);
const Ha = ["href", "target"], Ua = {
  name: "ice-link"
}, Wa = /* @__PURE__ */ Object.assign(Ua, {
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
    return (n, a) => (h(), m("a", {
      class: _([[
        e.size ? "size-" + e.size : "size-n",
        e.color ? "hoverColor" : "defaultColor",
        e.border ? "border" : "no-border"
      ], "ice-link"]),
      href: e.disabled ? null : e.href,
      style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover }),
      target: e.target ? e.target : "_self"
    }, [
      V(n.$slots, "default", {}, void 0, !0)
    ], 14, Ha));
  }
}), ra = /* @__PURE__ */ C(Wa, [["__scopeId", "data-v-e8b795dd"]]), Ka = {
  name: "container"
}, Za = { class: "ice-row flex-wrap" };
function Ja(e, n, a, t, i, r) {
  return h(), m("div", Za, [
    V(e.$slots, "default")
  ]);
}
const Qa = /* @__PURE__ */ C(Ka, [["render", Ja]]);
const et = ["title"], nt = {
  name: "ice-title"
}, at = /* @__PURE__ */ Object.assign(nt, {
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
    return (n, a) => (h(), m("div", {
      class: _(["ice-title", [e.noselect ? "noselect" : "", e.color ? "hoverColor" : "defaultColor"]]),
      title: e.title,
      style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover })
    }, [
      G("h4", {
        class: _(["slot", [e.type, e.size]])
      }, [
        V(n.$slots, "default", {}, void 0, !0)
      ], 2)
    ], 14, et));
  }
}), oa = /* @__PURE__ */ C(at, [["__scopeId", "data-v-f5e6a59d"]]);
const tt = { class: "header ice-row flex-sb" }, it = {
  key: 0,
  class: "body"
}, rt = {
  key: 1,
  class: "bottom"
}, ot = { class: "ice-column content" }, lt = {
  name: "iceCard"
}, st = /* @__PURE__ */ Object.assign(lt, {
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
    },
    buttonText: {
      type: Array,
      default: () => ["收起", "展开"]
    }
  },
  setup(e) {
    const { header: n, body: a, bottom: t } = Jn();
    let i = j(!1);
    const r = j("");
    let o = j("");
    In(
      i,
      (b) => {
        b ? (r.value.style.height = o.value * 1 + "px", r.value.style.opacity = 1) : (r.value.style.height = 0, r.value.style.opacity = 0);
      }
    );
    const s = e;
    let l = Ra({});
    if (s.color) {
      const b = F(s.color);
      l = {
        color: `rgba(${b.RGB[0]},${b.RGB[1]},${b.RGB[2]},1)`,
        hoverColor: `rgba(${b.RGB[0]},${b.RGB[1]},${b.RGB[2]},0.5)`
      };
    }
    const g = () => {
      o.value = r.value.scrollHeight, i.value ? r.value.style.height = o.value * 1 + "px" : (r.value.style.height = 0, r.value.style.opacity = 0);
    };
    return Qn(() => {
      t && g();
    }), (b, c) => {
      const d = O("iceSplit"), v = O("ice-button");
      return f(n) ? (h(), m("div", {
        key: 0,
        class: _([[
          e.size,
          e.color ? e.color : "",
          e.border ? "border" : "noborder"
        ], "ice-card"]),
        style: q({ "--hover-color": f(l).hoverColor, "--color": f(l).color })
      }, [
        G("div", {
          class: _([e.type, "slot"])
        }, [
          G("div", tt, [
            V(b.$slots, "header", {}, void 0, !0)
          ]),
          f(a) ? (h(), m("div", it, [
            E(d, { dashed: "" }),
            V(b.$slots, "body", {}, void 0, !0)
          ])) : le("", !0),
          f(t) ? (h(), m("div", rt, [
            E(d, { dashed: "" }),
            G("div", ot, [
              E(v, {
                onClick: c[0] || (c[0] = (x) => Ga(i) ? i.value = !f(i) : i = !f(i))
              }, {
                default: w(() => [
                  N($(f(i) ? e.buttonText[0] : e.buttonText[1]) + " ", 1),
                  G("div", {
                    class: _([[
                      f(i) ? "down" : "up"
                    ], "tag"])
                  }, "^ ", 2)
                ]),
                _: 1
              }),
              G("div", {
                ref_key: "bottomContent",
                ref: r,
                class: "bottomLim show"
              }, [
                V(b.$slots, "bottom", {}, void 0, !0)
              ], 512)
            ])
          ])) : le("", !0)
        ], 2)
      ], 6)) : le("", !0);
    };
  }
}), gt = /* @__PURE__ */ C(st, [["__scopeId", "data-v-987b1df9"]]);
const bt = {
  name: "iceMessage"
}, ct = /* @__PURE__ */ Object.assign(bt, {
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
  setup(e, { emit: n }) {
    const a = j(!1), t = e, i = n;
    function r() {
      t.duration > 0 && setTimeout(() => {
        a.value && s();
      }, t.duration);
    }
    function o({ code: l }) {
      l === "Escape" ? a.value && s() : r();
    }
    Qn(() => {
      r(), a.value = !0, document.addEventListener("keydown", o);
    }), _a(() => {
      document.removeEventListener("keydown", o);
    });
    function s() {
      a.value = !1, i("close");
    }
    return (l, g) => (h(), re(wa, {
      duration: 300,
      "enter-active-class": "animate__zoomIn",
      "leave-active-class": "animate__zoomOut",
      onBeforeLeave: e.onClose,
      onAfterLeave: g[1] || (g[1] = (b) => l.$emit("destroy"))
    }, {
      default: w(() => [
        a.value ? (h(), m("div", {
          key: 0,
          class: _([[
            e.color ? "message-colors" : e.type ? e.type : ""
          ], "ice-message-lim border-normal"]),
          style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover })
        }, [
          E(ia, {
            color: e.color ? e.color : e.type ? e.type : ""
          }, {
            default: w(() => [
              N($(e.message), 1)
            ]),
            _: 1
          }, 8, ["color"]),
          e.showClose ? (h(), re(f(aa), {
            key: 0,
            color: e.color,
            type: e.type,
            onClick: g[0] || (g[0] = (b) => s())
          }, {
            default: w(() => [
              N("close")
            ]),
            _: 1
          }, 8, ["color", "type"])) : le("", !0)
        ], 6)) : le("", !0)
      ]),
      _: 1
    }, 8, ["onBeforeLeave"]));
  }
});
let ut = 1;
const ht = j(2e3), Nn = [], Pn = function(e = {}) {
  typeof e == "string" && (e = {
    message: e
  });
  let n = e.offset || 20;
  Nn.forEach(({ vm: g }) => {
    var b;
    n += (((b = g.el) == null ? void 0 : b.offsetHeight) || 0) + 70;
  });
  const a = `message_${ut++}`;
  e.onClose;
  const t = {
    message: e.message,
    id: a,
    offset: n,
    zIndex: ht.value++,
    ...e,
    onClose: () => {
      Ln();
    }
  };
  let i = document.body;
  const r = document.createElement("div");
  let o = null;
  document.querySelector(".ice-message-container") ? o = document.querySelector(".ice-message-container") : (o = document.createElement("div"), o.className = "ice-message-container"), e.appendTo instanceof HTMLElement ? i = e.appendTo : typeof e.appendTo == "string" && (i = document.querySelector(e.appendTo)), r.className = `${a} ice-message`;
  const s = t.message, l = E(
    ct,
    // 传入属性
    t,
    ea(t.message) ? { default: () => s } : null
  );
  return l.props.onDestroy = () => {
    $n(null, r);
  }, $n(l, r), Nn.push({ vm: l }), o.appendChild(r), i.appendChild(o), {
    close: () => {
      Ln(), l.component.proxy.visible = !1;
    },
    destroy: () => {
      console.log("destroy");
    }
  };
}, dt = ["success", "info", "warning", "error"];
dt.forEach((e) => {
  Pn[e] = (n = {}) => ((typeof n == "string" || ea(n)) && (n = {
    message: n
  }), Pn({
    ...n,
    type: e
  }));
});
function Ln() {
  setTimeout(function() {
    const e = document.querySelector(".ice-message-container").children;
    for (let n = e.length - 1; n >= 0; n--) {
      const a = e[n];
      a.textContent.trim() === "" && a.remove();
    }
  }, 500);
}
const ft = { class: "list-ul" }, mt = { class: "list-children-ul" }, pt = { key: 1 }, yt = {
  name: "ice-menu"
}, xt = /* @__PURE__ */ Object.assign(yt, {
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
    const n = e, a = j(n.list), t = (i) => {
      n.nofold || (i.isOpen = !i.isOpen);
    };
    return (i, r) => {
      const o = O("ice-text");
      return h(), m("div", {
        class: _(["ice-menu", [
          e.border ? "ice-menu-border" : "",
          e.color ? "colors" : ""
        ]]),
        style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover })
      }, [
        G("ul", ft, [
          (h(!0), m(ie, null, de(a.value, (s) => (h(), m("li", {
            key: s.text,
            style: q({ color: e.color })
          }, [
            s.children ? (h(), m("div", {
              key: 0,
              class: _(["ice-menu-child", [
                s.isOpen ? "showLi" : "hideLi",
                e.nofold ? "showLi" : "hideLi"
              ]])
            }, [
              E(oa, {
                noselect: "",
                onClick: (l) => t(s),
                color: e.color
              }, {
                default: w(() => [
                  N($(s.text), 1)
                ]),
                _: 2
              }, 1032, ["onClick", "color"]),
              G("ul", mt, [
                (h(!0), m(ie, null, de(s.children, (l, g) => (h(), m("li", { key: g }, [
                  l.href ? (h(), re(ra, {
                    key: 0,
                    href: l.href,
                    color: e.color,
                    class: _({ activeLink: e.router === l.href })
                  }, {
                    default: w(() => [
                      N($(l.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["href", "color", "class"])) : (h(), re(o, {
                    key: 1,
                    noselect: "",
                    color: e.color
                  }, {
                    default: w(() => [
                      N($(l.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["color"]))
                ]))), 128))
              ])
            ], 2)) : (h(), m("div", pt, $(s.text), 1))
          ], 4))), 128))
        ])
      ], 6);
    };
  }
}), vt = /* @__PURE__ */ C(xt, [["__scopeId", "data-v-87bbd212"]]), kt = {
  modelValue: {
    type: String,
    default: ""
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
  suffixIcon: {
    type: String
  },
  prefixIcon: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  size: {
    type: String,
    default: "n"
  }
}, At = [
  "update:modelValue",
  "input",
  "clear",
  "blur",
  "focus"
], Bt = (e) => {
  const n = ne(() => e.disabled), a = ne(() => e.placeholder), t = ne(() => e.clearable), i = ne(() => e.showPassword), r = j(!1), o = ne(() => e.readonly), s = ne(() => ({
    "is-disabled": n.value,
    "is-clearable": t.value,
    "show-password": i.value,
    "jw-input-suffix": i.value || t.value || e.suffixIcon,
    "jw-input-prefix": e.prefixIcon
  })), l = ne(
    () => e.modelValue === null || e.modelValue === void 0 ? "" : String(e.modelValue)
  );
  return {
    disabled: n,
    classes: s,
    clearable: t,
    showPassword: i,
    passwordVisible: r,
    placeholder: a,
    suffixIcon: e.suffixIcon,
    prefixIcon: e.prefixIcon,
    readonly: o,
    nativeInputValue: l
  };
};
const Rt = ["disabled", "readonly", "value"], Gt = {
  name: "ice-input"
}, _t = /* @__PURE__ */ Object.assign(Gt, {
  props: kt,
  emits: At,
  setup(e, { expose: n, emit: a }) {
    const t = e, i = a, {
      disabled: r,
      placeholder: o,
      readonly: s,
      nativeInputValue: l,
      size: g
    } = Bt(t), b = document.querySelector("input"), c = document.querySelector("textarea"), d = () => b.value || c.value, v = (S) => {
      const L = S.target.value;
      L !== l.value && (i("update:modelValue", L), i("input", L));
    }, x = (S) => {
      i("blur", S);
    }, k = (S) => {
      i("focus", S);
    };
    return n({
      input: b,
      inputOrTextarea: d,
      textarea: c,
      blur: () => {
        hn(() => {
          var Z;
          (Z = d.value) == null || Z.blur();
          const S = document.getSelection();
          document.createRange().selectNode(d.value), S.removeAllRanges();
        });
      },
      focus: () => {
        hn(() => {
          var S;
          (S = d.value) == null || S.focus();
        });
      },
      select: () => {
        hn(() => {
          var Z;
          (Z = d.value) == null || Z.focus();
          const S = document.getSelection(), L = document.createRange();
          L.selectNode(d.value), S.removeAllRanges(), S.addRange(L);
        });
      }
    }), (S, L) => (h(), m("div", {
      class: _([
        "ice-input",
        f(l) ? "inputNowait" : "",
        "size" + f(g),
        f(r) && "disabled"
      ])
    }, [
      f(o) ? (h(), m("div", {
        key: 0,
        class: _([{ nowait: f(l) }, "wait"])
      }, $(f(o)), 3)) : le("", !0),
      G("input", {
        ref_key: "input",
        ref: b,
        disabled: f(r),
        readonly: f(s),
        value: f(l),
        autocomplete: "off",
        class: "jw-input-inner",
        onBlur: x,
        onFocus: k,
        onInput: v
      }, null, 40, Rt)
    ], 2));
  }
}), wt = /* @__PURE__ */ C(_t, [["__scopeId", "data-v-902a449d"]]);
const St = {
  name: "IceRow"
}, Et = /* @__PURE__ */ Object.assign(St, {
  props: {
    center: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "100%"
    },
    flexWrap: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (n, a) => (h(), m("div", {
      class: _(["ice-row", { center: e.center }, e.flexWrap && "flex-wrap"]),
      style: q({ width: e.width })
    }, [
      V(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Ct = /* @__PURE__ */ C(Et, [["__scopeId", "data-v-c2a34764"]]);
const It = {
  name: "IceColumn"
}, zt = /* @__PURE__ */ Object.assign(It, {
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
    return (n, a) => (h(), m("div", {
      class: _([{ center: e.center }, "ice-column"]),
      style: q({
        width: e.width
      })
    }, [
      V(n.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}), Dt = /* @__PURE__ */ C(zt, [["__scopeId", "data-v-74aace9b"]]);
const Tt = (e) => (Sa("data-v-f0128939"), e = e(), Ea(), e), Ot = /* @__PURE__ */ Tt(() => /* @__PURE__ */ G("br", null, null, -1)), $t = {
  name: "ice-drawer"
}, jt = /* @__PURE__ */ Object.assign($t, {
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
  setup(e, { emit: n }) {
    const a = n, t = e, i = () => {
      a("update:modelValue", !1);
    }, r = ne(() => t.direction === "left" || t.direction === "right" ? {
      width: t.percent
    } : {
      height: t.percent
    }), o = ne(() => t.direction === "left" || t.direction === "right" ? "row" : "column"), s = j(document.querySelector("body"));
    return In(() => t.modelValue, (l) => {
      l ? s.value.classList.value += " showDrawer" : s.value.classList.value = s.value.classList.value.replaceAll(" showDrawer", "");
    }), (l, g) => {
      const b = O("ice-text"), c = O("ice-button");
      return h(), re(na, { to: "body" }, [
        G("div", {
          class: _([[
            e.direction ? e.direction : "left",
            e.modelValue ? "fadeIn" : "fadeOut"
          ], "ice-drawer"]),
          style: q({
            "flex-direction": o.value
          })
        }, [
          G("div", {
            style: q(r.value),
            class: "slotStyle"
          }, [
            E(b, null, {
              default: w(() => [
                N($(r.value), 1)
              ]),
              _: 1
            }),
            V(l.$slots, "default", {}, void 0, !0)
          ], 4),
          G("div", {
            class: "blank",
            onClick: i
          }, [
            E(b, null, {
              default: w(() => [
                N(" modelValue:" + $(e.modelValue), 1)
              ]),
              _: 1
            }),
            Ot,
            E(b, null, {
              default: w(() => [
                N(" direction:" + $(e.direction), 1)
              ]),
              _: 1
            }),
            E(c, {
              color: "honglan",
              onClick: i
            }, {
              default: w(() => [
                N("close")
              ]),
              _: 1
            })
          ])
        ], 6)
      ]);
    };
  }
}), Nt = /* @__PURE__ */ C(jt, [["__scopeId", "data-v-f0128939"]]);
const Pt = { class: "iceSelector" }, Lt = {
  key: 0,
  class: "selectItemLim"
}, Mt = { key: 1 }, Ft = {
  name: "ice-selector"
}, Vt = /* @__PURE__ */ Object.assign(Ft, {
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
  setup(e, { emit: n }) {
    const a = e, t = (l) => {
      r("update:modelValue", l.value), r("itemOnChange", l), i.value = !i.value;
    };
    let i = j(!1);
    const r = n, o = ne(() => {
      if (a.list) {
        const l = a.list.filter((g) => g.value + "" == a.modelValue + "");
        return l.label ? l.label : l[0].label;
      } else
        return "null";
    }), s = () => {
      i.value = !i.value;
    };
    return (l, g) => {
      const b = O("ice-text"), c = O("ice-selectionItem");
      return h(), m("div", Pt, [
        E(b, {
          class: "activeSelection",
          noselect: "",
          onClick: s
        }, {
          default: w(() => [
            N($(o.value), 1)
          ]),
          _: 1
        }),
        G("div", {
          class: _([[
            f(i) ? "showSelection" : "hideSelection"
          ], "selections"])
        }, [
          e.list.length > 0 ? (h(), m("div", Lt, [
            (h(!0), m(ie, null, de(e.list, (d, v) => (h(), m("div", {
              key: v,
              class: "item"
            }, [
              E(c, {
                item: d,
                show: f(i),
                onClicked: t
              }, null, 8, ["item", "show"])
            ]))), 128))
          ])) : (h(), m("div", Mt, [
            E(b, { size: "s" }, {
              default: w(() => [
                N(" 空 ")
              ]),
              _: 1
            })
          ]))
        ], 2)
      ]);
    };
  }
}), qt = /* @__PURE__ */ C(Vt, [["__scopeId", "data-v-b7bdfb46"]]), Xt = {
  name: "selector-group"
}, Yt = { class: "ice-selector-group" };
function Ht(e, n, a, t, i, r) {
  const o = O("ice-text");
  return h(), m("div", Yt, [
    E(o, { color: "guiyuhong" }, {
      default: w(() => [
        N(" 选择器父组件 ")
      ]),
      _: 1
    }),
    V(e.$slots, "default")
  ]);
}
const Ut = /* @__PURE__ */ C(Xt, [["render", Ht]]);
const Wt = ["alt", "src", "title"], Kt = {
  name: "iceAvatar"
}, Zt = /* @__PURE__ */ Object.assign(Kt, {
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
    const n = "/src/assets/png/logo.png";
    let a = (t) => {
      t.target.src = n, a = null;
    };
    return (t, i) => (h(), m("div", {
      class: _([[
        e.round && !e.block ? "" : "background",
        e.round ? "round" : ""
      ], "ice-avatar"])
    }, [
      G("img", {
        alt: e.title,
        class: _([
          "avatar",
          e.size === "default-size" ? "default-size" : "",
          e.round && !e.block ? "round" : "block"
        ]),
        src: e.src,
        style: q({ "object-fit": e.fit, width: e.size + "px", height: e.size + "px" }),
        title: e.title,
        onError: i[0] || (i[0] = (...r) => f(a) && f(a)(...r))
      }, null, 46, Wt)
    ], 2));
  }
}), Jt = /* @__PURE__ */ C(Zt, [["__scopeId", "data-v-38f13cc0"]]);
const Qt = {
  name: "shrinkBar"
}, ei = /* @__PURE__ */ Object.assign(Qt, {
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
    const n = j(!1), a = j();
    let t = j(!1);
    const i = () => {
      t.value = !t.value, t.value ? window.document.body.style.paddingLeft = `${a.value.offsetWidth}px` : window.document.body.style.paddingLeft = 0;
    };
    return window.document.body.style.paddingLeft + "" == "0px" && (t.value = !0), setTimeout(() => {
      window.document.body.style.paddingLeft = 0;
    }), (r, o) => {
      const s = O("ice-button");
      return h(), m(ie, null, [
        G("div", {
          class: _([[
            e.bacColor ? "" : "normalBackgroundColor",
            n.value ? "slotHide" : ""
          ], "alwaysShow"])
        }, [
          V(r.$slots, "show", {}, void 0, !0)
        ], 2),
        G("div", {
          ref_key: "shrinkBar",
          ref: a,
          class: _([
            "shrinkBar",
            "ice-column",
            n.value ? "shrinkBarShow" : "",
            f(t) ? "shrinkBarShow" : ""
          ]),
          onMouseleave: o[0] || (o[0] = (l) => n.value = !1),
          onMouseover: o[1] || (o[1] = (l) => n.value = !0)
        }, [
          E(s, { onClick: i }, {
            default: w(() => [
              N($(f(t) ? "取消固定" : "固定"), 1)
            ]),
            _: 1
          }),
          V(r.$slots, "show", {}, void 0, !0),
          V(r.$slots, "body", {}, void 0, !0)
        ], 34)
      ], 64);
    };
  }
}), ni = /* @__PURE__ */ C(ei, [["__scopeId", "data-v-3da602e6"]]);
const ai = {
  name: "ice-selectionItem"
}, ti = /* @__PURE__ */ Object.assign(ai, {
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
  setup(e, { emit: n }) {
    const a = e, t = n, i = () => {
      t("clicked", a.item);
    };
    return (r, o) => (h(), m("div", {
      class: "ice-selectionItem noselect",
      onClick: i
    }, [
      G("div", {
        class: _([[
          e.show ? "showItem" : "hideItem",
          e.color ? "hoverColor" : ""
        ], "selectionItem"])
      }, $(e.item.label), 3)
    ]));
  }
}), ii = /* @__PURE__ */ C(ti, [["__scopeId", "data-v-7a919d9c"]]), ri = { class: "ice-pagination" }, oi = {
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
  setup(e, { emit: n }) {
    const a = n;
    let t = j(1);
    const i = (b) => {
      t.value = b;
    }, r = (b) => {
      a("update:modelValue", b), a("valueChange", b);
    }, o = e;
    let s = j([1]);
    (() => {
      for (let b = 0; b <= o.total; b++)
        b % o.step === 0 && b !== 0 && s.value.push(b);
    })();
    const g = ne(() => {
      const b = s.value.filter((c) => c === t.value);
      return Array.from({ length: o.step }, (c, d) => d + b[0]);
    });
    return (b, c) => {
      const d = O("ice-tag"), v = O("ice-row");
      return h(), m("div", ri, [
        E(v, null, {
          default: w(() => [
            (h(!0), m(ie, null, de(f(s), (x, k) => (h(), m(ie, { key: k }, [
              x <= e.total ? (h(), re(d, {
                key: 0,
                finger: "",
                noselect: "",
                onClick: (z) => i(x)
              }, {
                default: w(() => [
                  N($(x), 1)
                ]),
                _: 2
              }, 1032, ["onClick"])) : le("", !0),
              g.value[0] === f(s)[k] ? (h(!0), m(ie, { key: 1 }, de(g.value, (z, W) => (h(), m(ie, { key: W }, [
                z <= e.total ? (h(), re(d, {
                  key: 0,
                  color: "yinzhu",
                  finger: "",
                  noselect: "",
                  onClick: (X) => r(z)
                }, {
                  default: w(() => [
                    N($(z), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : le("", !0)
              ], 64))), 128)) : le("", !0)
            ], 64))), 128))
          ]),
          _: 1
        })
      ]);
    };
  }
};
const li = { class: "imgList" }, si = { class: "imgBigCover" }, gi = ["src"], bi = { class: "imageBottomContainer" }, ci = ["onClick"], ui = {
  name: "iceImgPreview"
}, hi = /* @__PURE__ */ Object.assign(ui, {
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
  setup(e, { expose: n }) {
    const a = e;
    let t = j(!1), i = j([]), r = j("");
    const o = () => {
      a.defaultShow && (t.value = !0), i.value = a.imgUrls, r.value = i.value[0];
    }, s = (c) => {
      i.value = c, t.value = !0, r.value = c[0];
    };
    o();
    const l = () => {
      t.value = !1;
    };
    let g = j(0);
    const b = (c, d) => {
      g.value = c, r.value = d;
    };
    return n({
      show: s,
      closePreview: l
    }), (c, d) => {
      const v = O("ice-button"), x = O("ice-avatar");
      return h(), re(na, { to: "body" }, [
        G("div", {
          class: _([[f(t) ? "showPreview" : "hidePreview"], "imgPreview"])
        }, [
          E(v, {
            class: _([[e.closeIconRight ? "right" : "left"], "bacCover noselect"]),
            onClick: l
          }, {
            default: w(() => [
              N("close ")
            ]),
            _: 1
          }, 8, ["class"]),
          G("div", li, [
            G("div", si, [
              G("img", {
                src: f(r),
                alt: ""
              }, null, 8, gi)
            ]),
            G("div", bi, [
              (h(!0), m(ie, null, de(f(i), (k, z) => (h(), m("div", {
                key: z,
                class: "lim"
              }, [
                G("div", {
                  class: "imageLim",
                  onClick: (W) => b(z, k)
                }, [
                  E(x, {
                    size: f(g) === z ? "120" : "100",
                    src: k,
                    block: "",
                    fit: "contain"
                  }, null, 8, ["size", "src"])
                ], 8, ci)
              ]))), 128))
            ])
          ])
        ], 2)
      ]);
    };
  }
}), di = /* @__PURE__ */ C(hi, [["__scopeId", "data-v-8a1d7215"]]);
const fi = {
  name: "iceHeader"
}, mi = /* @__PURE__ */ Object.assign(fi, {
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
    return (n, a) => (h(), m("div", {
      class: _([[
        e.noselect ? "noselect" : "",
        `ice-header-${e.size}`,
        e.color ? "btn-colors" : ""
      ], "ice-header"]),
      style: q({ "--hover-color": f(F)(e.color).color, "--color": f(F)(e.color).hover })
    }, [
      V(n.$slots, "default")
    ], 6));
  }
});
const pi = { class: "ice-textarea" }, yi = ["cols", "disabled", "rows", "value"], xi = {
  name: "ice-textarea"
}, vi = /* @__PURE__ */ Object.assign(xi, {
  props: {
    modelValue: {
      type: [Number, String]
    },
    cols: {
      type: Number,
      default: 33
    },
    rows: {
      type: Number,
      default: 5
    },
    disable: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  emits: [
    "update:modelValue",
    "input",
    "clear",
    "blur",
    "focus"
  ],
  setup(e, { emit: n }) {
    const a = n, t = (i) => {
      const r = i.target.value;
      a("update:modelValue", r), a("input", r);
    };
    return (i, r) => {
      const o = O("ice-header");
      return h(), m("div", pi, [
        e.placeholder.length > 0 ? (h(), re(o, { key: 0 }, {
          default: w(() => [
            N($(e.placeholder), 1)
          ]),
          _: 1
        })) : le("", !0),
        G("textarea", {
          cols: e.cols,
          disabled: e.disable,
          rows: e.rows,
          value: e.modelValue,
          onInput: t
        }, null, 40, yi)
      ]);
    };
  }
}), ki = /* @__PURE__ */ C(vi, [["__scopeId", "data-v-a4db11a5"]]);
const Ai = { class: "colorSelector" }, Bi = {
  key: 0,
  class: "colorLim"
}, Ri = {
  key: 1,
  class: "chineseColors"
}, Gi = ["onClick"], _i = {
  name: "colorSelector"
}, wi = /* @__PURE__ */ Object.assign(_i, {
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    // 是否使用中国传统色
    chinese: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const a = n, t = j(ta), i = e, r = () => {
      a("update:modelValue", o.value);
    }, o = j("#fc8c23");
    (() => {
      i.modelValue ? o.value = i.modelValue : r();
    })();
    const l = j(!1), g = () => {
      l.value = !l.value, a("update:modelValue", o.value);
    };
    return (b, c) => {
      const d = O("ice-tag"), v = O("ice-text"), x = O("ice-row");
      return h(), m("div", Ai, [
        e.chinese ? (h(), m("div", Ri, [
          G("div", {
            class: "selectedColor",
            onClick: g
          }, [
            E(d, {
              style: q({ background: o.value }),
              class: "noselect"
            }, {
              default: w(() => [
                N($(o.value), 1)
              ]),
              _: 1
            }, 8, ["style"])
          ]),
          E(x, {
            class: _([[l.value ? "colorListShow" : "colorList"], "flex-wrap"])
          }, {
            default: w(() => [
              (h(!0), m(ie, null, de(t.value, (k, z) => (h(), m("div", {
                key: z,
                style: q({ background: k.hex }),
                class: "colorItem ice-column w9percent m-bottom-n align-items-center margin-lr-s",
                onClick: (W) => {
                  o.value = k.hex, g();
                }
              }, null, 12, Gi))), 128)),
              E(v)
            ]),
            _: 1
          }, 8, ["class"])
        ])) : (h(), m("div", Bi, [
          Ca(G("input", {
            "onUpdate:modelValue": c[0] || (c[0] = (k) => o.value = k),
            type: "color",
            onBlur: r
          }, null, 544), [
            [Ia, o.value]
          ])
        ]))
      ]);
    };
  }
}), Si = /* @__PURE__ */ C(wi, [["__scopeId", "data-v-94586e1e"]]), Ei = { class: "inlineStyleTransform" }, Ci = {
  name: "inlineStyle"
}, Ii = /* @__PURE__ */ Object.assign(Ci, {
  props: {
    component: Object
  },
  setup(e) {
    return (n, a) => (h(), m("div", Ei, $(e.component), 1));
  }
});
const zi = { class: "tab-item" }, Di = {
  name: "iceTabItem"
}, Ti = /* @__PURE__ */ Object.assign(Di, {
  props: {
    name: {
      type: String,
      default: ""
    },
    // 当前显示的名称
    label: {
      type: String,
      default: ""
    },
    // 当前激活的名称
    activeName: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (n, a) => {
      const t = O("ice-column");
      return h(), m("div", zi, [
        E(t, null, {
          default: w(() => [
            V(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]);
    };
  }
}), la = /* @__PURE__ */ C(Ti, [["__scopeId", "data-v-eb706461"]]);
const Oi = { class: "ice-tabs ice-column" }, $i = { class: "ice-tabItemContainer" }, ji = {
  name: "iceTabs"
}, Ni = /* @__PURE__ */ Object.assign(ji, {
  props: {
    modelValue: {
      type: String,
      default: "1"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const a = e, t = n, i = Jn().default(), r = ne(() => i.find((g) => g.props.label === a.modelValue)), o = ne(() => i.map((g) => g.props)), s = () => {
      i.forEach((g) => {
        if (g.type.name !== la.name)
          throw new Error("iceTabs 子标签必须是iceTabItem");
      });
    }, l = (g) => t("update:modelValue", g);
    return s(), (g, b) => {
      const c = O("ice-tag"), d = O("ice-row");
      return h(), m("div", Oi, [
        E(d, null, {
          default: w(() => [
            (h(!0), m(ie, null, de(o.value, (v, x) => (h(), re(c, {
              key: x,
              onClick: (k) => l(v.label),
              color: v.label === e.modelValue ? "jucheng" : ""
            }, {
              default: w(() => [
                N($(v.name), 1)
              ]),
              _: 2
            }, 1032, ["onClick", "color"]))), 128))
          ]),
          _: 1
        }),
        G("div", $i, [
          r.value ? (h(), re(za(r.value), {
            key: r.value.props.name
          })) : le("", !0)
        ])
      ]);
    };
  }
}), Pi = /* @__PURE__ */ C(Ni, [["__scopeId", "data-v-368fcfb1"]]);
/*!
  * vue-draggable-next v2.2.0
  * (c) 2023 Anish George
  * @license MIT
  */
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Mn(e, n) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    n && (t = t.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function ce(e) {
  for (var n = 1; n < arguments.length; n++) {
    var a = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Mn(Object(a), !0).forEach(function(t) {
      Li(e, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Mn(Object(a)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return e;
}
function Qe(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qe = function(n) {
    return typeof n;
  } : Qe = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qe(e);
}
function Li(e, n, a) {
  return n in e ? Object.defineProperty(e, n, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = a, e;
}
function fe() {
  return fe = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var a = arguments[n];
      for (var t in a)
        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
    }
    return e;
  }, fe.apply(this, arguments);
}
function Mi(e, n) {
  if (e == null)
    return {};
  var a = {}, t = Object.keys(e), i, r;
  for (r = 0; r < t.length; r++)
    i = t[r], !(n.indexOf(i) >= 0) && (a[i] = e[i]);
  return a;
}
function Fi(e, n) {
  if (e == null)
    return {};
  var a = Mi(e, n), t, i;
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    for (i = 0; i < r.length; i++)
      t = r[i], !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t]);
  }
  return a;
}
var Vi = "1.14.0";
function he(e) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(e);
}
var me = he(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ye = he(/Edge/i), Fn = he(/firefox/i), Me = he(/safari/i) && !he(/chrome/i) && !he(/android/i), sa = he(/iP(ad|od|hone)/i), qi = he(/chrome/i) && he(/android/i), ga = {
  capture: !1,
  passive: !1
};
function R(e, n, a) {
  e.addEventListener(n, a, !me && ga);
}
function B(e, n, a) {
  e.removeEventListener(n, a, !me && ga);
}
function ln(e, n) {
  if (n) {
    if (n[0] === ">" && (n = n.substring(1)), e)
      try {
        if (e.matches)
          return e.matches(n);
        if (e.msMatchesSelector)
          return e.msMatchesSelector(n);
        if (e.webkitMatchesSelector)
          return e.webkitMatchesSelector(n);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Xi(e) {
  return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode;
}
function ge(e, n, a, t) {
  if (e) {
    a = a || document;
    do {
      if (n != null && (n[0] === ">" ? e.parentNode === a && ln(e, n) : ln(e, n)) || t && e === a)
        return e;
      if (e === a)
        break;
    } while (e = Xi(e));
  }
  return null;
}
var Vn = /\s+/g;
function Q(e, n, a) {
  if (e && n)
    if (e.classList)
      e.classList[a ? "add" : "remove"](n);
    else {
      var t = (" " + e.className + " ").replace(Vn, " ").replace(" " + n + " ", " ");
      e.className = (t + (a ? " " + n : "")).replace(Vn, " ");
    }
}
function p(e, n, a) {
  var t = e && e.style;
  if (t) {
    if (a === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? a = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (a = e.currentStyle), n === void 0 ? a : a[n];
    !(n in t) && n.indexOf("webkit") === -1 && (n = "-webkit-" + n), t[n] = a + (typeof a == "string" ? "" : "px");
  }
}
function Ie(e, n) {
  var a = "";
  if (typeof e == "string")
    a = e;
  else
    do {
      var t = p(e, "transform");
      t && t !== "none" && (a = t + " " + a);
    } while (!n && (e = e.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(a);
}
function ba(e, n, a) {
  if (e) {
    var t = e.getElementsByTagName(n), i = 0, r = t.length;
    if (a)
      for (; i < r; i++)
        a(t[i], i);
    return t;
  }
  return [];
}
function be() {
  var e = document.scrollingElement;
  return e || document.documentElement;
}
function M(e, n, a, t, i) {
  if (!(!e.getBoundingClientRect && e !== window)) {
    var r, o, s, l, g, b, c;
    if (e !== window && e.parentNode && e !== be() ? (r = e.getBoundingClientRect(), o = r.top, s = r.left, l = r.bottom, g = r.right, b = r.height, c = r.width) : (o = 0, s = 0, l = window.innerHeight, g = window.innerWidth, b = window.innerHeight, c = window.innerWidth), (n || a) && e !== window && (i = i || e.parentNode, !me))
      do
        if (i && i.getBoundingClientRect && (p(i, "transform") !== "none" || a && p(i, "position") !== "static")) {
          var d = i.getBoundingClientRect();
          o -= d.top + parseInt(p(i, "border-top-width")), s -= d.left + parseInt(p(i, "border-left-width")), l = o + r.height, g = s + r.width;
          break;
        }
      while (i = i.parentNode);
    if (t && e !== window) {
      var v = Ie(i || e), x = v && v.a, k = v && v.d;
      v && (o /= k, s /= x, c /= x, b /= k, l = o + b, g = s + c);
    }
    return {
      top: o,
      left: s,
      bottom: l,
      right: g,
      width: c,
      height: b
    };
  }
}
function qn(e, n, a) {
  for (var t = ke(e, !0), i = M(e)[n]; t; ) {
    var r = M(t)[a], o = void 0;
    if (a === "top" || a === "left" ? o = i >= r : o = i <= r, !o)
      return t;
    if (t === be())
      break;
    t = ke(t, !1);
  }
  return !1;
}
function ze(e, n, a, t) {
  for (var i = 0, r = 0, o = e.children; r < o.length; ) {
    if (o[r].style.display !== "none" && o[r] !== y.ghost && (t || o[r] !== y.dragged) && ge(o[r], a.draggable, e, !1)) {
      if (i === n)
        return o[r];
      i++;
    }
    r++;
  }
  return null;
}
function zn(e, n) {
  for (var a = e.lastElementChild; a && (a === y.ghost || p(a, "display") === "none" || n && !ln(a, n)); )
    a = a.previousElementSibling;
  return a || null;
}
function te(e, n) {
  var a = 0;
  if (!e || !e.parentNode)
    return -1;
  for (; e = e.previousElementSibling; )
    e.nodeName.toUpperCase() !== "TEMPLATE" && e !== y.clone && (!n || ln(e, n)) && a++;
  return a;
}
function Xn(e) {
  var n = 0, a = 0, t = be();
  if (e)
    do {
      var i = Ie(e), r = i.a, o = i.d;
      n += e.scrollLeft * r, a += e.scrollTop * o;
    } while (e !== t && (e = e.parentNode));
  return [n, a];
}
function Yi(e, n) {
  for (var a in e)
    if (e.hasOwnProperty(a)) {
      for (var t in n)
        if (n.hasOwnProperty(t) && n[t] === e[a][t])
          return Number(a);
    }
  return -1;
}
function ke(e, n) {
  if (!e || !e.getBoundingClientRect)
    return be();
  var a = e, t = !1;
  do
    if (a.clientWidth < a.scrollWidth || a.clientHeight < a.scrollHeight) {
      var i = p(a);
      if (a.clientWidth < a.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || a.clientHeight < a.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!a.getBoundingClientRect || a === document.body)
          return be();
        if (t || n)
          return a;
        t = !0;
      }
    }
  while (a = a.parentNode);
  return be();
}
function Hi(e, n) {
  if (e && n)
    for (var a in n)
      n.hasOwnProperty(a) && (e[a] = n[a]);
  return e;
}
function dn(e, n) {
  return Math.round(e.top) === Math.round(n.top) && Math.round(e.left) === Math.round(n.left) && Math.round(e.height) === Math.round(n.height) && Math.round(e.width) === Math.round(n.width);
}
var Fe;
function ca(e, n) {
  return function() {
    if (!Fe) {
      var a = arguments, t = this;
      a.length === 1 ? e.call(t, a[0]) : e.apply(t, a), Fe = setTimeout(function() {
        Fe = void 0;
      }, n);
    }
  };
}
function Ui() {
  clearTimeout(Fe), Fe = void 0;
}
function ua(e, n, a) {
  e.scrollLeft += n, e.scrollTop += a;
}
function ha(e) {
  var n = window.Polymer, a = window.jQuery || window.Zepto;
  return n && n.dom ? n.dom(e).cloneNode(!0) : a ? a(e).clone(!0)[0] : e.cloneNode(!0);
}
var ae = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Wi() {
  var e = [], n;
  return {
    captureAnimationState: function() {
      if (e = [], !!this.options.animation) {
        var t = [].slice.call(this.el.children);
        t.forEach(function(i) {
          if (!(p(i, "display") === "none" || i === y.ghost)) {
            e.push({
              target: i,
              rect: M(i)
            });
            var r = ce({}, e[e.length - 1].rect);
            if (i.thisAnimationDuration) {
              var o = Ie(i, !0);
              o && (r.top -= o.f, r.left -= o.e);
            }
            i.fromRect = r;
          }
        });
      }
    },
    addAnimationState: function(t) {
      e.push(t);
    },
    removeAnimationState: function(t) {
      e.splice(Yi(e, {
        target: t
      }), 1);
    },
    animateAll: function(t) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(n), typeof t == "function" && t();
        return;
      }
      var r = !1, o = 0;
      e.forEach(function(s) {
        var l = 0, g = s.target, b = g.fromRect, c = M(g), d = g.prevFromRect, v = g.prevToRect, x = s.rect, k = Ie(g, !0);
        k && (c.top -= k.f, c.left -= k.e), g.toRect = c, g.thisAnimationDuration && dn(d, c) && !dn(b, c) && // Make sure animatingRect is on line between toRect & fromRect
        (x.top - c.top) / (x.left - c.left) === (b.top - c.top) / (b.left - c.left) && (l = Zi(x, d, v, i.options)), dn(c, b) || (g.prevFromRect = b, g.prevToRect = c, l || (l = i.options.animation), i.animate(g, x, c, l)), l && (r = !0, o = Math.max(o, l), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, l), g.thisAnimationDuration = l);
      }), clearTimeout(n), r ? n = setTimeout(function() {
        typeof t == "function" && t();
      }, o) : typeof t == "function" && t(), e = [];
    },
    animate: function(t, i, r, o) {
      if (o) {
        p(t, "transition", ""), p(t, "transform", "");
        var s = Ie(this.el), l = s && s.a, g = s && s.d, b = (i.left - r.left) / (l || 1), c = (i.top - r.top) / (g || 1);
        t.animatingX = !!b, t.animatingY = !!c, p(t, "transform", "translate3d(" + b + "px," + c + "px,0)"), this.forRepaintDummy = Ki(t), p(t, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), p(t, "transform", "translate3d(0,0,0)"), typeof t.animated == "number" && clearTimeout(t.animated), t.animated = setTimeout(function() {
          p(t, "transition", ""), p(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1;
        }, o);
      }
    }
  };
}
function Ki(e) {
  return e.offsetWidth;
}
function Zi(e, n, a, t) {
  return Math.sqrt(Math.pow(n.top - e.top, 2) + Math.pow(n.left - e.left, 2)) / Math.sqrt(Math.pow(n.top - a.top, 2) + Math.pow(n.left - a.left, 2)) * t.animation;
}
var we = [], fn = {
  initializeByDefault: !0
}, He = {
  mount: function(n) {
    for (var a in fn)
      fn.hasOwnProperty(a) && !(a in n) && (n[a] = fn[a]);
    we.forEach(function(t) {
      if (t.pluginName === n.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(n.pluginName, " more than once");
    }), we.push(n);
  },
  pluginEvent: function(n, a, t) {
    var i = this;
    this.eventCanceled = !1, t.cancel = function() {
      i.eventCanceled = !0;
    };
    var r = n + "Global";
    we.forEach(function(o) {
      a[o.pluginName] && (a[o.pluginName][r] && a[o.pluginName][r](ce({
        sortable: a
      }, t)), a.options[o.pluginName] && a[o.pluginName][n] && a[o.pluginName][n](ce({
        sortable: a
      }, t)));
    });
  },
  initializePlugins: function(n, a, t, i) {
    we.forEach(function(s) {
      var l = s.pluginName;
      if (!(!n.options[l] && !s.initializeByDefault)) {
        var g = new s(n, a, n.options);
        g.sortable = n, g.options = n.options, n[l] = g, fe(t, g.defaults);
      }
    });
    for (var r in n.options)
      if (n.options.hasOwnProperty(r)) {
        var o = this.modifyOption(n, r, n.options[r]);
        typeof o < "u" && (n.options[r] = o);
      }
  },
  getEventProperties: function(n, a) {
    var t = {};
    return we.forEach(function(i) {
      typeof i.eventProperties == "function" && fe(t, i.eventProperties.call(a[i.pluginName], n));
    }), t;
  },
  modifyOption: function(n, a, t) {
    var i;
    return we.forEach(function(r) {
      n[r.pluginName] && r.optionListeners && typeof r.optionListeners[a] == "function" && (i = r.optionListeners[a].call(n[r.pluginName], t));
    }), i;
  }
};
function Ji(e) {
  var n = e.sortable, a = e.rootEl, t = e.name, i = e.targetEl, r = e.cloneEl, o = e.toEl, s = e.fromEl, l = e.oldIndex, g = e.newIndex, b = e.oldDraggableIndex, c = e.newDraggableIndex, d = e.originalEvent, v = e.putSortable, x = e.extraEventProperties;
  if (n = n || a && a[ae], !!n) {
    var k, z = n.options, W = "on" + t.charAt(0).toUpperCase() + t.substr(1);
    window.CustomEvent && !me && !Ye ? k = new CustomEvent(t, {
      bubbles: !0,
      cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent(t, !0, !0)), k.to = o || a, k.from = s || a, k.item = i || a, k.clone = r, k.oldIndex = l, k.newIndex = g, k.oldDraggableIndex = b, k.newDraggableIndex = c, k.originalEvent = d, k.pullMode = v ? v.lastPutMode : void 0;
    var X = ce(ce({}, x), He.getEventProperties(t, n));
    for (var S in X)
      k[S] = X[S];
    a && a.dispatchEvent(k), z[W] && z[W].call(n, k);
  }
}
var Qi = ["evt"], K = function(n, a) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = t.evt, r = Fi(t, Qi);
  He.pluginEvent.bind(y)(n, a, ce({
    dragEl: u,
    parentEl: D,
    ghostEl: A,
    rootEl: I,
    nextEl: _e,
    lastDownEl: en,
    cloneEl: T,
    cloneHidden: ve,
    dragStarted: Ne,
    putSortable: Y,
    activeSortable: y.active,
    originalEvent: i,
    oldIndex: Ce,
    oldDraggableIndex: Ve,
    newIndex: ee,
    newDraggableIndex: xe,
    hideGhostForTarget: pa,
    unhideGhostForTarget: ya,
    cloneNowHidden: function() {
      ve = !0;
    },
    cloneNowShown: function() {
      ve = !1;
    },
    dispatchSortableEvent: function(s) {
      U({
        sortable: a,
        name: s,
        originalEvent: i
      });
    }
  }, r));
};
function U(e) {
  Ji(ce({
    putSortable: Y,
    cloneEl: T,
    targetEl: u,
    rootEl: I,
    oldIndex: Ce,
    oldDraggableIndex: Ve,
    newIndex: ee,
    newDraggableIndex: xe
  }, e));
}
var u, D, A, I, _e, en, T, ve, Ce, ee, Ve, xe, We, Y, Ee = !1, sn = !1, gn = [], Re, oe, mn, pn, Yn, Hn, Ne, Se, qe, Xe = !1, Ke = !1, nn, H, yn = [], Gn = !1, bn = [], un = typeof document < "u", Ze = sa, Un = Ye || me ? "cssFloat" : "float", er = un && !qi && !sa && "draggable" in document.createElement("div"), da = function() {
  if (un) {
    if (me)
      return !1;
    var e = document.createElement("x");
    return e.style.cssText = "pointer-events:auto", e.style.pointerEvents === "auto";
  }
}(), fa = function(n, a) {
  var t = p(n), i = parseInt(t.width) - parseInt(t.paddingLeft) - parseInt(t.paddingRight) - parseInt(t.borderLeftWidth) - parseInt(t.borderRightWidth), r = ze(n, 0, a), o = ze(n, 1, a), s = r && p(r), l = o && p(o), g = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + M(r).width, b = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + M(o).width;
  if (t.display === "flex")
    return t.flexDirection === "column" || t.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (t.display === "grid")
    return t.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (r && s.float && s.float !== "none") {
    var c = s.float === "left" ? "left" : "right";
    return o && (l.clear === "both" || l.clear === c) ? "vertical" : "horizontal";
  }
  return r && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || g >= i && t[Un] === "none" || o && t[Un] === "none" && g + b > i) ? "vertical" : "horizontal";
}, nr = function(n, a, t) {
  var i = t ? n.left : n.top, r = t ? n.right : n.bottom, o = t ? n.width : n.height, s = t ? a.left : a.top, l = t ? a.right : a.bottom, g = t ? a.width : a.height;
  return i === s || r === l || i + o / 2 === s + g / 2;
}, ar = function(n, a) {
  var t;
  return gn.some(function(i) {
    var r = i[ae].options.emptyInsertThreshold;
    if (!(!r || zn(i))) {
      var o = M(i), s = n >= o.left - r && n <= o.right + r, l = a >= o.top - r && a <= o.bottom + r;
      if (s && l)
        return t = i;
    }
  }), t;
}, ma = function(n) {
  function a(r, o) {
    return function(s, l, g, b) {
      var c = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (r == null && (o || c))
        return !0;
      if (r == null || r === !1)
        return !1;
      if (o && r === "clone")
        return r;
      if (typeof r == "function")
        return a(r(s, l, g, b), o)(s, l, g, b);
      var d = (o ? s : l).options.group.name;
      return r === !0 || typeof r == "string" && r === d || r.join && r.indexOf(d) > -1;
    };
  }
  var t = {}, i = n.group;
  (!i || Qe(i) != "object") && (i = {
    name: i
  }), t.name = i.name, t.checkPull = a(i.pull, !0), t.checkPut = a(i.put), t.revertClone = i.revertClone, n.group = t;
}, pa = function() {
  !da && A && p(A, "display", "none");
}, ya = function() {
  !da && A && p(A, "display", "");
};
un && document.addEventListener("click", function(e) {
  if (sn)
    return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), sn = !1, !1;
}, !0);
var Ge = function(n) {
  if (u) {
    n = n.touches ? n.touches[0] : n;
    var a = ar(n.clientX, n.clientY);
    if (a) {
      var t = {};
      for (var i in n)
        n.hasOwnProperty(i) && (t[i] = n[i]);
      t.target = t.rootEl = a, t.preventDefault = void 0, t.stopPropagation = void 0, a[ae]._onDragOver(t);
    }
  }
}, tr = function(n) {
  u && u.parentNode[ae]._isOutsideThisEl(n.target);
};
function y(e, n) {
  if (!(e && e.nodeType && e.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
  this.el = e, this.options = n = fe({}, n), e[ae] = this;
  var a = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return fa(e, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(o, s) {
      o.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: y.supportPointer !== !1 && "PointerEvent" in window && !Me,
    emptyInsertThreshold: 5
  };
  He.initializePlugins(this, e, a);
  for (var t in a)
    !(t in n) && (n[t] = a[t]);
  ma(n);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = n.forceFallback ? !1 : er, this.nativeDraggable && (this.options.touchStartThreshold = 1), n.supportPointer ? R(e, "pointerdown", this._onTapStart) : (R(e, "mousedown", this._onTapStart), R(e, "touchstart", this._onTapStart)), this.nativeDraggable && (R(e, "dragover", this), R(e, "dragenter", this)), gn.push(this.el), n.store && n.store.get && this.sort(n.store.get(this) || []), fe(this, Wi());
}
y.prototype = /** @lends Sortable.prototype */
{
  constructor: y,
  _isOutsideThisEl: function(n) {
    !this.el.contains(n) && n !== this.el && (Se = null);
  },
  _getDirection: function(n, a) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, n, a, u) : this.options.direction;
  },
  _onTapStart: function(n) {
    if (n.cancelable) {
      var a = this, t = this.el, i = this.options, r = i.preventOnFilter, o = n.type, s = n.touches && n.touches[0] || n.pointerType && n.pointerType === "touch" && n, l = (s || n).target, g = n.target.shadowRoot && (n.path && n.path[0] || n.composedPath && n.composedPath()[0]) || l, b = i.filter;
      if (cr(t), !u && !(/mousedown|pointerdown/.test(o) && n.button !== 0 || i.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Me && l && l.tagName.toUpperCase() === "SELECT") && (l = ge(l, i.draggable, t, !1), !(l && l.animated) && en !== l)) {
        if (Ce = te(l), Ve = te(l, i.draggable), typeof b == "function") {
          if (b.call(this, n, l, this)) {
            U({
              sortable: a,
              rootEl: g,
              name: "filter",
              targetEl: l,
              toEl: t,
              fromEl: t
            }), K("filter", a, {
              evt: n
            }), r && n.cancelable && n.preventDefault();
            return;
          }
        } else if (b && (b = b.split(",").some(function(c) {
          if (c = ge(g, c.trim(), t, !1), c)
            return U({
              sortable: a,
              rootEl: c,
              name: "filter",
              targetEl: l,
              fromEl: t,
              toEl: t
            }), K("filter", a, {
              evt: n
            }), !0;
        }), b)) {
          r && n.cancelable && n.preventDefault();
          return;
        }
        i.handle && !ge(g, i.handle, t, !1) || this._prepareDragStart(n, s, l);
      }
    }
  },
  _prepareDragStart: function(n, a, t) {
    var i = this, r = i.el, o = i.options, s = r.ownerDocument, l;
    if (t && !u && t.parentNode === r) {
      var g = M(t);
      if (I = r, u = t, D = u.parentNode, _e = u.nextSibling, en = t, We = o.group, y.dragged = u, Re = {
        target: u,
        clientX: (a || n).clientX,
        clientY: (a || n).clientY
      }, Yn = Re.clientX - g.left, Hn = Re.clientY - g.top, this._lastX = (a || n).clientX, this._lastY = (a || n).clientY, u.style["will-change"] = "all", l = function() {
        if (K("delayEnded", i, {
          evt: n
        }), y.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !Fn && i.nativeDraggable && (u.draggable = !0), i._triggerDragStart(n, a), U({
          sortable: i,
          name: "choose",
          originalEvent: n
        }), Q(u, o.chosenClass, !0);
      }, o.ignore.split(",").forEach(function(b) {
        ba(u, b.trim(), xn);
      }), R(s, "dragover", Ge), R(s, "mousemove", Ge), R(s, "touchmove", Ge), R(s, "mouseup", i._onDrop), R(s, "touchend", i._onDrop), R(s, "touchcancel", i._onDrop), Fn && this.nativeDraggable && (this.options.touchStartThreshold = 4, u.draggable = !0), K("delayStart", this, {
        evt: n
      }), o.delay && (!o.delayOnTouchOnly || a) && (!this.nativeDraggable || !(Ye || me))) {
        if (y.eventCanceled) {
          this._onDrop();
          return;
        }
        R(s, "mouseup", i._disableDelayedDrag), R(s, "touchend", i._disableDelayedDrag), R(s, "touchcancel", i._disableDelayedDrag), R(s, "mousemove", i._delayedDragTouchMoveHandler), R(s, "touchmove", i._delayedDragTouchMoveHandler), o.supportPointer && R(s, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(l, o.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(n) {
    var a = n.touches ? n.touches[0] : n;
    Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    u && xn(u), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var n = this.el.ownerDocument;
    B(n, "mouseup", this._disableDelayedDrag), B(n, "touchend", this._disableDelayedDrag), B(n, "touchcancel", this._disableDelayedDrag), B(n, "mousemove", this._delayedDragTouchMoveHandler), B(n, "touchmove", this._delayedDragTouchMoveHandler), B(n, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(n, a) {
    a = a || n.pointerType == "touch" && n, !this.nativeDraggable || a ? this.options.supportPointer ? R(document, "pointermove", this._onTouchMove) : a ? R(document, "touchmove", this._onTouchMove) : R(document, "mousemove", this._onTouchMove) : (R(u, "dragend", this), R(I, "dragstart", this._onDragStart));
    try {
      document.selection ? an(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(n, a) {
    if (Ee = !1, I && u) {
      K("dragStarted", this, {
        evt: a
      }), this.nativeDraggable && R(document, "dragover", tr);
      var t = this.options;
      !n && Q(u, t.dragClass, !1), Q(u, t.ghostClass, !0), y.active = this, n && this._appendGhost(), U({
        sortable: this,
        name: "start",
        originalEvent: a
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (oe) {
      this._lastX = oe.clientX, this._lastY = oe.clientY, pa();
      for (var n = document.elementFromPoint(oe.clientX, oe.clientY), a = n; n && n.shadowRoot && (n = n.shadowRoot.elementFromPoint(oe.clientX, oe.clientY), n !== a); )
        a = n;
      if (u.parentNode[ae]._isOutsideThisEl(n), a)
        do {
          if (a[ae]) {
            var t = void 0;
            if (t = a[ae]._onDragOver({
              clientX: oe.clientX,
              clientY: oe.clientY,
              target: n,
              rootEl: a
            }), t && !this.options.dragoverBubble)
              break;
          }
          n = a;
        } while (a = a.parentNode);
      ya();
    }
  },
  _onTouchMove: function(n) {
    if (Re) {
      var a = this.options, t = a.fallbackTolerance, i = a.fallbackOffset, r = n.touches ? n.touches[0] : n, o = A && Ie(A, !0), s = A && o && o.a, l = A && o && o.d, g = Ze && H && Xn(H), b = (r.clientX - Re.clientX + i.x) / (s || 1) + (g ? g[0] - yn[0] : 0) / (s || 1), c = (r.clientY - Re.clientY + i.y) / (l || 1) + (g ? g[1] - yn[1] : 0) / (l || 1);
      if (!y.active && !Ee) {
        if (t && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < t)
          return;
        this._onDragStart(n, !0);
      }
      if (A) {
        o ? (o.e += b - (mn || 0), o.f += c - (pn || 0)) : o = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: b,
          f: c
        };
        var d = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
        p(A, "webkitTransform", d), p(A, "mozTransform", d), p(A, "msTransform", d), p(A, "transform", d), mn = b, pn = c, oe = r;
      }
      n.cancelable && n.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!A) {
      var n = this.options.fallbackOnBody ? document.body : I, a = M(u, !0, Ze, !0, n), t = this.options;
      if (Ze) {
        for (H = n; p(H, "position") === "static" && p(H, "transform") === "none" && H !== document; )
          H = H.parentNode;
        H !== document.body && H !== document.documentElement ? (H === document && (H = be()), a.top += H.scrollTop, a.left += H.scrollLeft) : H = be(), yn = Xn(H);
      }
      A = u.cloneNode(!0), Q(A, t.ghostClass, !1), Q(A, t.fallbackClass, !0), Q(A, t.dragClass, !0), p(A, "transition", ""), p(A, "transform", ""), p(A, "box-sizing", "border-box"), p(A, "margin", 0), p(A, "top", a.top), p(A, "left", a.left), p(A, "width", a.width), p(A, "height", a.height), p(A, "opacity", "0.8"), p(A, "position", Ze ? "absolute" : "fixed"), p(A, "zIndex", "100000"), p(A, "pointerEvents", "none"), y.ghost = A, n.appendChild(A), p(A, "transform-origin", Yn / parseInt(A.style.width) * 100 + "% " + Hn / parseInt(A.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(n, a) {
    var t = this, i = n.dataTransfer, r = t.options;
    if (K("dragStart", this, {
      evt: n
    }), y.eventCanceled) {
      this._onDrop();
      return;
    }
    K("setupClone", this), y.eventCanceled || (T = ha(u), T.draggable = !1, T.style["will-change"] = "", this._hideClone(), Q(T, this.options.chosenClass, !1), y.clone = T), t.cloneId = an(function() {
      K("clone", t), !y.eventCanceled && (t.options.removeCloneOnHide || I.insertBefore(T, u), t._hideClone(), U({
        sortable: t,
        name: "clone"
      }));
    }), !a && Q(u, r.dragClass, !0), a ? (sn = !0, t._loopId = setInterval(t._emulateDragOver, 50)) : (B(document, "mouseup", t._onDrop), B(document, "touchend", t._onDrop), B(document, "touchcancel", t._onDrop), i && (i.effectAllowed = "move", r.setData && r.setData.call(t, i, u)), R(document, "drop", t), p(u, "transform", "translateZ(0)")), Ee = !0, t._dragStartId = an(t._dragStarted.bind(t, a, n)), R(document, "selectstart", t), Ne = !0, Me && p(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(n) {
    var a = this.el, t = n.target, i, r, o, s = this.options, l = s.group, g = y.active, b = We === l, c = s.sort, d = Y || g, v, x = this, k = !1;
    if (Gn)
      return;
    function z(je, Aa) {
      K(je, x, ce({
        evt: n,
        isOwner: b,
        axis: v ? "vertical" : "horizontal",
        revert: o,
        dragRect: i,
        targetRect: r,
        canSort: c,
        fromSortable: d,
        target: t,
        completed: X,
        onMove: function(On, Ba) {
          return Je(I, a, u, i, On, M(On), n, Ba);
        },
        changed: S
      }, Aa));
    }
    function W() {
      z("dragOverAnimationCapture"), x.captureAnimationState(), x !== d && d.captureAnimationState();
    }
    function X(je) {
      return z("dragOverCompleted", {
        insertion: je
      }), je && (b ? g._hideClone() : g._showClone(x), x !== d && (Q(u, Y ? Y.options.ghostClass : g.options.ghostClass, !1), Q(u, s.ghostClass, !0)), Y !== x && x !== y.active ? Y = x : x === y.active && Y && (Y = null), d === x && (x._ignoreWhileAnimating = t), x.animateAll(function() {
        z("dragOverAnimationComplete"), x._ignoreWhileAnimating = null;
      }), x !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (t === u && !u.animated || t === a && !t.animated) && (Se = null), !s.dragoverBubble && !n.rootEl && t !== document && (u.parentNode[ae]._isOutsideThisEl(n.target), !je && Ge(n)), !s.dragoverBubble && n.stopPropagation && n.stopPropagation(), k = !0;
    }
    function S() {
      ee = te(u), xe = te(u, s.draggable), U({
        sortable: x,
        name: "change",
        toEl: a,
        newIndex: ee,
        newDraggableIndex: xe,
        originalEvent: n
      });
    }
    if (n.preventDefault !== void 0 && n.cancelable && n.preventDefault(), t = ge(t, s.draggable, a, !0), z("dragOver"), y.eventCanceled)
      return k;
    if (u.contains(n.target) || t.animated && t.animatingX && t.animatingY || x._ignoreWhileAnimating === t)
      return X(!1);
    if (sn = !1, g && !s.disabled && (b ? c || (o = D !== I) : Y === this || (this.lastPutMode = We.checkPull(this, g, u, n)) && l.checkPut(this, g, u, n))) {
      if (v = this._getDirection(n, t) === "vertical", i = M(u), z("dragOverValid"), y.eventCanceled)
        return k;
      if (o)
        return D = I, W(), this._hideClone(), z("revert"), y.eventCanceled || (_e ? I.insertBefore(u, _e) : I.appendChild(u)), X(!0);
      var L = zn(a, s.draggable);
      if (!L || lr(n, v, this) && !L.animated) {
        if (L === u)
          return X(!1);
        if (L && a === n.target && (t = L), t && (r = M(t)), Je(I, a, u, i, t, r, n, !!t) !== !1)
          return W(), a.appendChild(u), D = a, S(), X(!0);
      } else if (L && or(n, v, this)) {
        var Z = ze(a, 0, s, !0);
        if (Z === u)
          return X(!1);
        if (t = Z, r = M(t), Je(I, a, u, i, t, r, n, !1) !== !1)
          return W(), a.insertBefore(u, Z), D = a, S(), X(!0);
      } else if (t.parentNode === a) {
        r = M(t);
        var se = 0, Ae, De = u.parentNode !== a, J = !nr(u.animated && u.toRect || i, t.animated && t.toRect || r, v), Te = v ? "top" : "left", pe = qn(t, "top", "top") || qn(u, "top", "top"), Oe = pe ? pe.scrollTop : void 0;
        Se !== t && (Ae = r[Te], Xe = !1, Ke = !J && s.invertSwap || De), se = sr(n, t, r, v, J ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, Ke, Se === t);
        var ue;
        if (se !== 0) {
          var Be = te(u);
          do
            Be -= se, ue = D.children[Be];
          while (ue && (p(ue, "display") === "none" || ue === A));
        }
        if (se === 0 || ue === t)
          return X(!1);
        Se = t, qe = se;
        var $e = t.nextElementSibling, ye = !1;
        ye = se === 1;
        var Ue = Je(I, a, u, i, t, r, n, ye);
        if (Ue !== !1)
          return (Ue === 1 || Ue === -1) && (ye = Ue === 1), Gn = !0, setTimeout(rr, 30), W(), ye && !$e ? a.appendChild(u) : t.parentNode.insertBefore(u, ye ? $e : t), pe && ua(pe, 0, Oe - pe.scrollTop), D = u.parentNode, Ae !== void 0 && !Ke && (nn = Math.abs(Ae - M(t)[Te])), S(), X(!0);
      }
      if (a.contains(u))
        return X(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    B(document, "mousemove", this._onTouchMove), B(document, "touchmove", this._onTouchMove), B(document, "pointermove", this._onTouchMove), B(document, "dragover", Ge), B(document, "mousemove", Ge), B(document, "touchmove", Ge);
  },
  _offUpEvents: function() {
    var n = this.el.ownerDocument;
    B(n, "mouseup", this._onDrop), B(n, "touchend", this._onDrop), B(n, "pointerup", this._onDrop), B(n, "touchcancel", this._onDrop), B(document, "selectstart", this);
  },
  _onDrop: function(n) {
    var a = this.el, t = this.options;
    if (ee = te(u), xe = te(u, t.draggable), K("drop", this, {
      evt: n
    }), D = u && u.parentNode, ee = te(u), xe = te(u, t.draggable), y.eventCanceled) {
      this._nulling();
      return;
    }
    Ee = !1, Ke = !1, Xe = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), _n(this.cloneId), _n(this._dragStartId), this.nativeDraggable && (B(document, "drop", this), B(a, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Me && p(document.body, "user-select", ""), p(u, "transform", ""), n && (Ne && (n.cancelable && n.preventDefault(), !t.dropBubble && n.stopPropagation()), A && A.parentNode && A.parentNode.removeChild(A), (I === D || Y && Y.lastPutMode !== "clone") && T && T.parentNode && T.parentNode.removeChild(T), u && (this.nativeDraggable && B(u, "dragend", this), xn(u), u.style["will-change"] = "", Ne && !Ee && Q(u, Y ? Y.options.ghostClass : this.options.ghostClass, !1), Q(u, this.options.chosenClass, !1), U({
      sortable: this,
      name: "unchoose",
      toEl: D,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: n
    }), I !== D ? (ee >= 0 && (U({
      rootEl: D,
      name: "add",
      toEl: D,
      fromEl: I,
      originalEvent: n
    }), U({
      sortable: this,
      name: "remove",
      toEl: D,
      originalEvent: n
    }), U({
      rootEl: D,
      name: "sort",
      toEl: D,
      fromEl: I,
      originalEvent: n
    }), U({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: n
    })), Y && Y.save()) : ee !== Ce && ee >= 0 && (U({
      sortable: this,
      name: "update",
      toEl: D,
      originalEvent: n
    }), U({
      sortable: this,
      name: "sort",
      toEl: D,
      originalEvent: n
    })), y.active && ((ee == null || ee === -1) && (ee = Ce, xe = Ve), U({
      sortable: this,
      name: "end",
      toEl: D,
      originalEvent: n
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    K("nulling", this), I = u = D = A = _e = T = en = ve = Re = oe = Ne = ee = xe = Ce = Ve = Se = qe = Y = We = y.dragged = y.ghost = y.clone = y.active = null, bn.forEach(function(n) {
      n.checked = !0;
    }), bn.length = mn = pn = 0;
  },
  handleEvent: function(n) {
    switch (n.type) {
      case "drop":
      case "dragend":
        this._onDrop(n);
        break;
      case "dragenter":
      case "dragover":
        u && (this._onDragOver(n), ir(n));
        break;
      case "selectstart":
        n.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var n = [], a, t = this.el.children, i = 0, r = t.length, o = this.options; i < r; i++)
      a = t[i], ge(a, o.draggable, this.el, !1) && n.push(a.getAttribute(o.dataIdAttr) || br(a));
    return n;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(n, a) {
    var t = {}, i = this.el;
    this.toArray().forEach(function(r, o) {
      var s = i.children[o];
      ge(s, this.options.draggable, i, !1) && (t[r] = s);
    }, this), a && this.captureAnimationState(), n.forEach(function(r) {
      t[r] && (i.removeChild(t[r]), i.appendChild(t[r]));
    }), a && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var n = this.options.store;
    n && n.set && n.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(n, a) {
    return ge(n, a || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(n, a) {
    var t = this.options;
    if (a === void 0)
      return t[n];
    var i = He.modifyOption(this, n, a);
    typeof i < "u" ? t[n] = i : t[n] = a, n === "group" && ma(t);
  },
  /**
   * Destroy
   */
  destroy: function() {
    K("destroy", this);
    var n = this.el;
    n[ae] = null, B(n, "mousedown", this._onTapStart), B(n, "touchstart", this._onTapStart), B(n, "pointerdown", this._onTapStart), this.nativeDraggable && (B(n, "dragover", this), B(n, "dragenter", this)), Array.prototype.forEach.call(n.querySelectorAll("[draggable]"), function(a) {
      a.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), gn.splice(gn.indexOf(this.el), 1), this.el = n = null;
  },
  _hideClone: function() {
    if (!ve) {
      if (K("hideClone", this), y.eventCanceled)
        return;
      p(T, "display", "none"), this.options.removeCloneOnHide && T.parentNode && T.parentNode.removeChild(T), ve = !0;
    }
  },
  _showClone: function(n) {
    if (n.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ve) {
      if (K("showClone", this), y.eventCanceled)
        return;
      u.parentNode == I && !this.options.group.revertClone ? I.insertBefore(T, u) : _e ? I.insertBefore(T, _e) : I.appendChild(T), this.options.group.revertClone && this.animate(u, T), p(T, "display", ""), ve = !1;
    }
  }
};
function ir(e) {
  e.dataTransfer && (e.dataTransfer.dropEffect = "move"), e.cancelable && e.preventDefault();
}
function Je(e, n, a, t, i, r, o, s) {
  var l, g = e[ae], b = g.options.onMove, c;
  return window.CustomEvent && !me && !Ye ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = n, l.from = e, l.dragged = a, l.draggedRect = t, l.related = i || n, l.relatedRect = r || M(n), l.willInsertAfter = s, l.originalEvent = o, e.dispatchEvent(l), b && (c = b.call(g, l, o)), c;
}
function xn(e) {
  e.draggable = !1;
}
function rr() {
  Gn = !1;
}
function or(e, n, a) {
  var t = M(ze(a.el, 0, a.options, !0)), i = 10;
  return n ? e.clientX < t.left - i || e.clientY < t.top && e.clientX < t.right : e.clientY < t.top - i || e.clientY < t.bottom && e.clientX < t.left;
}
function lr(e, n, a) {
  var t = M(zn(a.el, a.options.draggable)), i = 10;
  return n ? e.clientX > t.right + i || e.clientX <= t.right && e.clientY > t.bottom && e.clientX >= t.left : e.clientX > t.right && e.clientY > t.top || e.clientX <= t.right && e.clientY > t.bottom + i;
}
function sr(e, n, a, t, i, r, o, s) {
  var l = t ? e.clientY : e.clientX, g = t ? a.height : a.width, b = t ? a.top : a.left, c = t ? a.bottom : a.right, d = !1;
  if (!o) {
    if (s && nn < g * i) {
      if (!Xe && (qe === 1 ? l > b + g * r / 2 : l < c - g * r / 2) && (Xe = !0), Xe)
        d = !0;
      else if (qe === 1 ? l < b + nn : l > c - nn)
        return -qe;
    } else if (l > b + g * (1 - i) / 2 && l < c - g * (1 - i) / 2)
      return gr(n);
  }
  return d = d || o, d && (l < b + g * r / 2 || l > c - g * r / 2) ? l > b + g / 2 ? 1 : -1 : 0;
}
function gr(e) {
  return te(u) < te(e) ? 1 : -1;
}
function br(e) {
  for (var n = e.tagName + e.className + e.src + e.href + e.textContent, a = n.length, t = 0; a--; )
    t += n.charCodeAt(a);
  return t.toString(36);
}
function cr(e) {
  bn.length = 0;
  for (var n = e.getElementsByTagName("input"), a = n.length; a--; ) {
    var t = n[a];
    t.checked && bn.push(t);
  }
}
function an(e) {
  return setTimeout(e, 0);
}
function _n(e) {
  return clearTimeout(e);
}
un && R(document, "touchmove", function(e) {
  (y.active || Ee) && e.cancelable && e.preventDefault();
});
y.utils = {
  on: R,
  off: B,
  css: p,
  find: ba,
  is: function(n, a) {
    return !!ge(n, a, n, !1);
  },
  extend: Hi,
  throttle: ca,
  closest: ge,
  toggleClass: Q,
  clone: ha,
  index: te,
  nextTick: an,
  cancelNextTick: _n,
  detectDirection: fa,
  getChild: ze
};
y.get = function(e) {
  return e[ae];
};
y.mount = function() {
  for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
    n[a] = arguments[a];
  n[0].constructor === Array && (n = n[0]), n.forEach(function(t) {
    if (!t.prototype || !t.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
    t.utils && (y.utils = ce(ce({}, y.utils), t.utils)), He.mount(t);
  });
};
y.create = function(e, n) {
  return new y(e, n);
};
y.version = Vi;
var P = [], Pe, wn, Sn = !1, vn, kn, cn, Le;
function ur() {
  function e() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
  }
  return e.prototype = {
    dragStarted: function(a) {
      var t = a.originalEvent;
      this.sortable.nativeDraggable ? R(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? R(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? R(document, "touchmove", this._handleFallbackAutoScroll) : R(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(a) {
      var t = a.originalEvent;
      !this.options.dragOverBubble && !t.rootEl && this._handleAutoScroll(t);
    },
    drop: function() {
      this.sortable.nativeDraggable ? B(document, "dragover", this._handleAutoScroll) : (B(document, "pointermove", this._handleFallbackAutoScroll), B(document, "touchmove", this._handleFallbackAutoScroll), B(document, "mousemove", this._handleFallbackAutoScroll)), Wn(), tn(), Ui();
    },
    nulling: function() {
      cn = wn = Pe = Sn = Le = vn = kn = null, P.length = 0;
    },
    _handleFallbackAutoScroll: function(a) {
      this._handleAutoScroll(a, !0);
    },
    _handleAutoScroll: function(a, t) {
      var i = this, r = (a.touches ? a.touches[0] : a).clientX, o = (a.touches ? a.touches[0] : a).clientY, s = document.elementFromPoint(r, o);
      if (cn = a, t || this.options.forceAutoScrollFallback || Ye || me || Me) {
        An(a, this.options, s, t);
        var l = ke(s, !0);
        Sn && (!Le || r !== vn || o !== kn) && (Le && Wn(), Le = setInterval(function() {
          var g = ke(document.elementFromPoint(r, o), !0);
          g !== l && (l = g, tn()), An(a, i.options, g, t);
        }, 10), vn = r, kn = o);
      } else {
        if (!this.options.bubbleScroll || ke(s, !0) === be()) {
          tn();
          return;
        }
        An(a, this.options, ke(s, !1), !1);
      }
    }
  }, fe(e, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function tn() {
  P.forEach(function(e) {
    clearInterval(e.pid);
  }), P = [];
}
function Wn() {
  clearInterval(Le);
}
var An = ca(function(e, n, a, t) {
  if (n.scroll) {
    var i = (e.touches ? e.touches[0] : e).clientX, r = (e.touches ? e.touches[0] : e).clientY, o = n.scrollSensitivity, s = n.scrollSpeed, l = be(), g = !1, b;
    wn !== a && (wn = a, tn(), Pe = n.scroll, b = n.scrollFn, Pe === !0 && (Pe = ke(a, !0)));
    var c = 0, d = Pe;
    do {
      var v = d, x = M(v), k = x.top, z = x.bottom, W = x.left, X = x.right, S = x.width, L = x.height, Z = void 0, se = void 0, Ae = v.scrollWidth, De = v.scrollHeight, J = p(v), Te = v.scrollLeft, pe = v.scrollTop;
      v === l ? (Z = S < Ae && (J.overflowX === "auto" || J.overflowX === "scroll" || J.overflowX === "visible"), se = L < De && (J.overflowY === "auto" || J.overflowY === "scroll" || J.overflowY === "visible")) : (Z = S < Ae && (J.overflowX === "auto" || J.overflowX === "scroll"), se = L < De && (J.overflowY === "auto" || J.overflowY === "scroll"));
      var Oe = Z && (Math.abs(X - i) <= o && Te + S < Ae) - (Math.abs(W - i) <= o && !!Te), ue = se && (Math.abs(z - r) <= o && pe + L < De) - (Math.abs(k - r) <= o && !!pe);
      if (!P[c])
        for (var Be = 0; Be <= c; Be++)
          P[Be] || (P[Be] = {});
      (P[c].vx != Oe || P[c].vy != ue || P[c].el !== v) && (P[c].el = v, P[c].vx = Oe, P[c].vy = ue, clearInterval(P[c].pid), (Oe != 0 || ue != 0) && (g = !0, P[c].pid = setInterval((function() {
        t && this.layer === 0 && y.active._onTouchMove(cn);
        var $e = P[this.layer].vy ? P[this.layer].vy * s : 0, ye = P[this.layer].vx ? P[this.layer].vx * s : 0;
        typeof b == "function" && b.call(y.dragged.parentNode[ae], ye, $e, e, cn, P[this.layer].el) !== "continue" || ua(P[this.layer].el, ye, $e);
      }).bind({
        layer: c
      }), 24))), c++;
    } while (n.bubbleScroll && d !== l && (d = ke(d, !1)));
    Sn = g;
  }
}, 30), xa = function(n) {
  var a = n.originalEvent, t = n.putSortable, i = n.dragEl, r = n.activeSortable, o = n.dispatchSortableEvent, s = n.hideGhostForTarget, l = n.unhideGhostForTarget;
  if (a) {
    var g = t || r;
    s();
    var b = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, c = document.elementFromPoint(b.clientX, b.clientY);
    l(), g && !g.el.contains(c) && (o("spill"), this.onSpill({
      dragEl: i,
      putSortable: t
    }));
  }
};
function Dn() {
}
Dn.prototype = {
  startIndex: null,
  dragStart: function(n) {
    var a = n.oldDraggableIndex;
    this.startIndex = a;
  },
  onSpill: function(n) {
    var a = n.dragEl, t = n.putSortable;
    this.sortable.captureAnimationState(), t && t.captureAnimationState();
    var i = ze(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(a, i) : this.sortable.el.appendChild(a), this.sortable.animateAll(), t && t.animateAll();
  },
  drop: xa
};
fe(Dn, {
  pluginName: "revertOnSpill"
});
function Tn() {
}
Tn.prototype = {
  onSpill: function(n) {
    var a = n.dragEl, t = n.putSortable, i = t || this.sortable;
    i.captureAnimationState(), a.parentNode && a.parentNode.removeChild(a), i.animateAll();
  },
  drop: xa
};
fe(Tn, {
  pluginName: "removeOnSpill"
});
y.mount(new ur());
y.mount(Tn, Dn);
function hr() {
  return typeof window < "u" ? window.console : global.console;
}
const dr = hr();
function fr(e) {
  const n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] || (n[t] = e(t));
  };
}
const mr = /-(\w)/g, Kn = fr((e) => e.replace(mr, (n, a) => a ? a.toUpperCase() : ""));
function Bn(e) {
  e.parentElement !== null && e.parentElement.removeChild(e);
}
function Zn(e, n, a) {
  const t = a === 0 ? e.children[0] : e.children[a - 1].nextSibling;
  e.insertBefore(n, t);
}
function pr(e, n) {
  return Object.values(e).indexOf(n);
}
function yr(e, n, a, t) {
  if (!e)
    return [];
  const i = Object.values(e), r = n.length - t;
  return [...n].map((s, l) => l >= r ? i.length : i.indexOf(s));
}
function va(e, n) {
  this.$nextTick(() => this.$emit(e.toLowerCase(), n));
}
function xr(e) {
  return (n) => {
    this.realList !== null && this["onDrag" + e](n), va.call(this, e, n);
  };
}
function vr(e) {
  return ["transition-group", "TransitionGroup"].includes(e);
}
function kr(e) {
  if (!e || e.length !== 1)
    return !1;
  const [{ type: n }] = e;
  return n ? vr(n.name) : !1;
}
function Ar(e, n) {
  return n ? { ...n.props, ...n.attrs } : e;
}
const En = ["Start", "Add", "Remove", "Update", "End"], Cn = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Br = ["Move", ...En, ...Cn].map((e) => "on" + e);
let Rn = null;
const Rr = {
  options: Object,
  list: {
    type: Array,
    required: !1,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: !1
  },
  clone: {
    type: Function,
    default: (e) => e
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  },
  component: {
    type: String,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  }
}, Gr = Da({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...En.map((e) => e.toLowerCase()),
    ...Cn.map((e) => e.toLowerCase())
  ],
  props: Rr,
  data() {
    return {
      transitionMode: !1,
      noneFunctionalComponentMode: !1,
      headerOffset: 0,
      footerOffset: 0,
      _sortable: {},
      visibleIndexes: [],
      context: {}
    };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : null, n = Ar(this.$attrs, this.componentData);
    return e ? (this.transitionMode = kr(e), jn(this.getTag(), n, e)) : jn(this.getTag(), n, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && dr.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const e = {};
    En.forEach((i) => {
      e["on" + i] = xr.call(this, i);
    }), Cn.forEach((i) => {
      e["on" + i] = va.bind(this, i);
    });
    const n = Object.keys(this.$attrs).reduce((i, r) => (i[Kn(r)] = this.$attrs[r], i), {}), a = Object.assign({}, n, e, {
      onMove: (i, r) => this.onDragMove(i, r)
    });
    !("draggable" in a) && (a.draggable = ">*");
    const t = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
    this._sortable = new y(t, a), t.__draggable_component__ = this, this.computeIndexes();
  },
  beforeUnmount() {
    try {
      this._sortable !== void 0 && this._sortable.destroy();
    } catch {
    }
  },
  computed: {
    realList() {
      return this.list ? this.list : this.modelValue;
    }
  },
  watch: {
    $attrs: {
      handler(e) {
        this.updateOptions(e);
      },
      deep: !0
    },
    realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getTag() {
      return this.component ? O(this.component) : this.tag;
    },
    updateOptions(e) {
      for (var n in e) {
        const a = Kn(n);
        Br.indexOf(a) === -1 && this._sortable.option(a, e[n]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = yr(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(e) {
      const n = pr(this.getChildrenNodes() || [], e);
      if (n === -1)
        return null;
      const a = this.realList[n];
      return { index: n, element: a };
    },
    emitChanges(e) {
      this.$nextTick(() => {
        this.$emit("change", e);
      });
    },
    alterList(e) {
      if (this.list) {
        e(this.list);
        return;
      }
      const n = [...this.modelValue];
      e(n), this.$emit("update:modelValue", n);
    },
    spliceList() {
      const e = (n) => n.splice(...arguments);
      this.alterList(e);
    },
    updatePosition(e, n) {
      const a = (t) => t.splice(n, 0, t.splice(e, 1)[0]);
      this.alterList(a);
    },
    getVmIndex(e) {
      const n = this.visibleIndexes, a = n.length;
      return e > a - 1 ? a : n[e];
    },
    getComponent() {
      return this.$slots.default ? (
        //@ts-ignore
        this.$slots.default()[0].componentInstance
      ) : null;
    },
    resetTransitionData(e) {
      if (!this.noTransitionOnDrag || !this.transitionMode)
        return;
      var n = this.getChildrenNodes();
      n[e].data = null;
      const a = this.getComponent();
      a.children = [], a.kept = void 0;
    },
    onDragStart(e) {
      this.computeIndexes(), this.context = this.getUnderlyingVm(e.item), this.context && (e.item._underlying_vm_ = this.clone(this.context.element), Rn = e.item);
    },
    onDragAdd(e) {
      const n = e.item._underlying_vm_;
      if (n === void 0)
        return;
      Bn(e.item);
      const a = this.getVmIndex(e.newIndex);
      this.spliceList(a, 0, n), this.computeIndexes();
      const t = { element: n, newIndex: a };
      this.emitChanges({ added: t });
    },
    onDragRemove(e) {
      if (Zn(this.$el, e.item, e.oldIndex), e.pullMode === "clone") {
        Bn(e.clone);
        return;
      }
      if (!this.context)
        return;
      const n = this.context.index;
      this.spliceList(n, 1);
      const a = { element: this.context.element, oldIndex: n };
      this.resetTransitionData(n), this.emitChanges({ removed: a });
    },
    onDragUpdate(e) {
      Bn(e.item), Zn(e.from, e.item, e.oldIndex);
      const n = this.context.index, a = this.getVmIndex(e.newIndex);
      this.updatePosition(n, a);
      const t = { element: this.context.element, oldIndex: n, newIndex: a };
      this.emitChanges({ moved: t });
    },
    updateProperty(e, n) {
      e.hasOwnProperty(n) && (e[n] += this.headerOffset);
    },
    onDragMove(e, n) {
      const a = this.move;
      if (!a || !this.realList)
        return !0;
      const t = this.getRelatedContextFromMoveEvent(e), i = this.context, r = this.computeFutureIndex(t, e);
      Object.assign(i, { futureIndex: r });
      const o = Object.assign({}, e, {
        relatedContext: t,
        draggedContext: i
      });
      return a(o, n);
    },
    onDragEnd() {
      this.computeIndexes(), Rn = null;
    },
    getTrargetedComponent(e) {
      return e.__draggable_component__;
    },
    getRelatedContextFromMoveEvent({ to: e, related: n }) {
      const a = this.getTrargetedComponent(e);
      if (!a)
        return { component: a };
      const t = a.realList, i = { list: t, component: a };
      if (e !== n && t && a.getUnderlyingVm) {
        const r = a.getUnderlyingVm(n);
        if (r)
          return Object.assign(r, i);
      }
      return i;
    },
    computeFutureIndex(e, n) {
      const a = [...n.to.children].filter((o) => o.style.display !== "none");
      if (a.length === 0)
        return 0;
      const t = a.indexOf(n.related), i = e.component.getVmIndex(t);
      return a.indexOf(Rn) !== -1 || !n.willInsertAfter ? i : i + 1;
    }
  }
});
const _r = { class: "ice-dragger" }, wr = {
  key: 0,
  class: "empty"
}, Sr = {
  name: "iceDragger"
}, Er = /* @__PURE__ */ Object.assign(Sr, {
  props: {
    list: {
      type: Array,
      default: () => [{}]
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    onStart: {
      type: Function,
      default: () => ({})
    },
    onUpdate: {
      type: Function,
      default: () => ({})
    },
    onEnd: {
      type: Function,
      default: () => ({})
    }
  },
  emits: ["update:data"],
  setup(e, { emit: n }) {
    const t = Ta(e), i = n;
    return In(() => t.value, (r) => {
      i("update:data", r);
    }), console.log("data:"), console.log(t.list.value), (r, o) => (h(), m("div", _r, [
      f(t).list.length === 0 ? (h(), m("div", wr, [
        E(f(ka))
      ])) : (h(), re(f(Gr), {
        key: 1,
        ref: "el",
        modelValue: f(t).list,
        "onUpdate:modelValue": o[0] || (o[0] = (s) => f(t).list = s),
        disabled: e.disabled,
        animation: 150,
        ghostClass: "ghost",
        class: "draggable",
        onStart: e.onStart,
        onUpdate: e.onUpdate,
        onEnd: e.onEnd
      }, {
        default: w(() => [
          (h(!0), m(ie, null, de(f(t).list, (s, l) => (h(), m("div", {
            draggable: "",
            key: l,
            class: "cursor-move"
          }, $(s == null ? void 0 : s.name), 1))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "onStart", "onUpdate", "onEnd"]))
    ]));
  }
}), Cr = /* @__PURE__ */ C(Er, [["__scopeId", "data-v-958a4698"]]), Ir = {}, zr = { class: "empty" };
function Dr(e, n) {
  const a = O("ice-text");
  return h(), m("div", zr, [
    E(a, null, {
      default: w(() => [
        N(" 这是空的 ")
      ]),
      _: 1
    })
  ]);
}
const ka = /* @__PURE__ */ C(Ir, [["render", Dr]]);
F.activeColor = "#fba414";
const rn = {
  iceButton: aa,
  iceText: ia,
  iceSplit: Va,
  iceTag: Ya,
  iceLink: ra,
  container: Qa,
  iceTitle: oa,
  iceCard: gt,
  iceMenu: vt,
  iceInput: wt,
  iceRow: Ct,
  iceColumn: Dt,
  iceDrawer: Nt,
  iceSelector: qt,
  iceSelectorGroup: Ut,
  avatar: Jt,
  shrinkBar: ni,
  iceSelectionItem: ii,
  icePagination: oi,
  iceImgPreview: di,
  iceHeader: mi,
  iceTextarea: ki,
  colorSelector: Si,
  inlineStyle: Ii,
  iceTabs: Pi,
  iceTabItem: la,
  iceDragger: Cr,
  empty: ka
};
function Tr(e) {
  const n = Object.keys(rn);
  for (let a = 0; a < n.length; a++)
    e.component(rn[n[a]].name, rn[n[a]]);
}
const Or = {
  version: "1.1.17",
  components: rn
};
Or.install = Tr;
console.log("icepro-----------");
export {
  Jt as avatar,
  Si as colorSelector,
  Qa as container,
  Or as default,
  ka as empty,
  F as findColor,
  aa as iceButton,
  gt as iceCard,
  Dt as iceColumn,
  Cr as iceDragger,
  Nt as iceDrawer,
  mi as iceHeader,
  di as iceImgPreview,
  wt as iceInput,
  ra as iceLink,
  vt as iceMenu,
  Pn as iceMessage,
  oi as icePagination,
  Ct as iceRow,
  qt as iceSelector,
  Ut as iceSelectorGroup,
  Va as iceSplit,
  la as iceTabItem,
  Pi as iceTabs,
  Ya as iceTag,
  ia as iceText,
  ki as iceTextarea,
  oa as iceTitle,
  Ii as inlineStyle,
  ni as shrinkBar
};
