import{_ as w,o as d,c as f,a,t as B,b as o,w as c,d as _,u,L as m,E as y,N as C,i as k,r as l,F as M,h}from"./index-c6aa0d5d.js";import{P as N}from"./preview-25ff2814.js";const E={class:"message-box"},P={class:y(["message-box-content","min-limted","ice-column"])},S={class:"message-box-top-title-icon-content ice-row"},F={class:"right-title"},T={class:"button-button ice-row"},V={name:"iceMessageBox"},$=Object.assign(V,{props:{text:{type:String,default:""},allowMaskClose:{type:Boolean,default:!0},elementClassName:{type:String,default:""}},setup(e){const n=e,i=()=>{console.log("关闭")};return(t,s)=>(d(),f("div",E,[a("div",P,[a("div",S,[s[0]||(s[0]=a("div",{class:"left-icon"},null,-1)),a("div",F,B(n.text),1)]),a("div",T,[o(u(m),null,{default:c(()=>s[1]||(s[1]=[_(" 确定 ")])),_:1}),o(u(m),{onClick:i,type:"danger"},{default:c(()=>s[2]||(s[2]=[_(" 取消 ")])),_:1})])])]))}}),j=w($,[["__scopeId","data-v-1f3b61dd"]]);let r;r||(r=document.createElement("div"),r.className="ice-message-box-container",document.body.appendChild(r));const q=e=>{const n=r,i=o(j,{text:e});let t=n.querySelector(".ice-message-box");return t||(t=document.createElement("div"),n.appendChild(t)),C(i,t),{destroy:close}},x=k({__name:"iceMessageBox.preview",setup(e){const n=()=>{q("你好啊")};return(i,t)=>{const s=l("ice-text"),g=l("ice-button"),v=l("ice-column"),b=l("container");return d(),f(M,null,[o(s,null,{default:c(()=>t[0]||(t[0]=[_("消息弹窗组件")])),_:1}),o(b,null,{default:c(()=>[o(v,null,{default:c(()=>[o(g,{onClick:n},{default:c(()=>t[1]||(t[1]=[_("看看消息 ")])),_:1})]),_:1})]),_:1})],64)}}});function p(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-button @click="showPreview">看看消息 </ice-button>\r
    </ice-column>\r
  </container>`,e.__sourceCodeTitle=" iceMessageBox ",e.__styleCode=null,e.__script=`<script lang="ts" setup>\r
import iceMessageBox from '../../../components/messageBox'\r
\r
const showPreview = () => {\r
  iceMessageBox('你好啊')\r
}\r
<\/script>`,e}typeof p=="function"&&p(x);const I={__name:"index",setup(e){return(n,i)=>(d(),h(N,{component:x}))}};export{I as default};
