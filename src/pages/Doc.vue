<template>
  <div class="ice-row wideContainer">
    <div :class="[
        fixed?'positionFix':''
    ]"
         class="ice-column leftContent scrollStyle">
      <!--      <ice-button @click="changePosition" class="fixedBtn">{{ fixed ? '展开' : '收起' }}
            </ice-button>-->
      <ice-button @click="changeMode">{{ dark ? "light" : "dark" }}</ice-button>
      <ice-row v-if="false">
        <input v-model="colorVal" type="color">
        <text :style="{'color':colorVal}">
          {{ colorVal }}
          <ice-button @click="setColor">set</ice-button>
          <ice-button @click="clearColor">clear</ice-button>
        </text>
      </ice-row>
      <docLeft></docLeft>
    </div>
    <div class="ice-column flexFull scrollStyle">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import DocLeft from "@/pages/doc/docLeft.vue";
import {ref} from "vue";

const dark = ref(false);
const changeMode = () => {
  dark.value = Boolean(localStorage.getItem("mode") == "false" ? false : true || null);
  if (dark.value) {
    document.querySelector("html").classList.add("dark");
    document.querySelector("html").classList.remove("light");
  } else {
    document.querySelector("html").classList.add("light");
    document.querySelector("html").classList.remove("dark");
    localStorage.setItem("mode", "true");
  }
  localStorage.setItem("mode", (!dark.value).toString());
};
const fixed = ref(false);
const colorVal = ref("#422929");
const setColor = () => {
  localStorage.setItem("color", colorVal.value);
};
const clearColor = () => {
  localStorage.removeItem("color");
};
</script>

<style lang="less" scoped>
.flexFull{
  padding-left: 1rem;
  padding-bottom: 200px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  overflow-x: hidden;
}

.wideContainer{
  .leftContent{
    padding-top: @padding;
    transition: .5s;
    z-index: 10;
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    overflow-x: hidden;
  }
}

.positionFix{
  position: fixed;
  left: -100% !important;
}

.fixedBtn{
  position: fixed;
  top: 10px;
  left: 0;
}

</style>
