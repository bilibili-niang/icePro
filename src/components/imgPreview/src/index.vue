<script>
export default {
  name: "iceImgPreview"
};
</script>
<script setup>
import {
  ref,
  defineProps
} from "vue";

const props = defineProps({
  imgUrls: {
    type: Array,
    default: () => {
      return ["http://blog.icestone.work/default.png"];
    }
  },
  // 是否默认展示 默认不展示
  defaultShow: {
    type: Boolean,
    default: false
  },
  // 关闭按钮是否展示在右侧
  closeIconRight: {
    type: Boolean,
    default: false
  }
});
let showImgList = ref(false);
let imgList = ref([]);
let activeItem = ref("");
const init = () => {
  // 如果传递来默认展示了
  if (props.defaultShow) {
    showImgList.value = true;
  }
  imgList.value = props.imgUrls;
  activeItem.value = imgList.value[0];
};

const show = (list) => {
  imgList.value = list;
  showImgList.value = true;
  activeItem.value = list[0];
};
init();
/**
 * 关闭方法
 */
const closePreview = () => {
  showImgList.value = false;
};

// 默认激活index
let activeIndex = ref(0);
const changeActiveImg = (index, item) => {
  activeIndex.value = index;
  activeItem.value = item;
};

defineExpose({
  show,
  closePreview
});

</script>
<template>
  <teleport to="body">
    <div :class="[showImgList?'showPreview':'hidePreview']" class="imgPreview">
      <ice-button :class="[ closeIconRight?'right':'left' ]" class="bacCover noselect" @click="closePreview">close
      </ice-button>
      <div class="imgList">
        <div class="imgBigCover">
          <img :src="activeItem" alt="">
        </div>
        <div class="imageBottomContainer">
          <div v-for="(item,index) in imgList" :key="index" class="lim">
            <div class="imageLim" @click="changeActiveImg(index,item)">
              <ice-avatar :size="activeIndex===index?'120':'100'" :src="item" block fit="contain"></ice-avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="less" scoped>
@import "../../../assets/variables.less";
.hidePreview{
  opacity: 0;
  top: -100%;
}
.showPreview{
  opacity: 1;
  top: 0;
}

.imgPreview{
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 10;
  background: @themeBackgroundColor;
  transition-duration: @time-n;

  .bacCover{
    position: absolute;
    top: 1rem;
    z-index: 14;
  }

  .left{
    left: 1rem;
  }

  .right{
    right: 1rem;
  }

  .imgList{
    position: relative;
    height: 100%;
    width: 100%;

    .imgBigCover{
      position: absolute;
      top: 1rem;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;

      img{
        display: flex;
        height: 100%;
        min-width: 200px;
        max-width: 80%;
        max-height: 75vh;
      }
    }

    .imageBottomContainer{
      justify-content: center;
      align-items: flex-end;
      position: absolute;
      bottom: 1rem;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: row;
    }
  }
}

</style>