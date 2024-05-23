<template>
  <div class="iceSelector">
    <!--当前选中的值-->
    <ice-text class="activeSelection" noselect @click="showAllSelections">
      {{ selectVal }}
    </ice-text>
    <div
        :class="[
        showSelectionFlag?'showSelection':'hideSelection'
    ]"
        class="selections"
    >
      <div v-if="list.length>0" class="selectItemLim">
        <div v-for="(item,index) in list" :key="index" class="item">
          <ice-selectionItem :item="item" :show="showSelectionFlag" @clicked="activeValue"/>
        </div>
      </div>
      <div v-else>
        <ice-text size="s">
          空
        </ice-text>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue"

const props = defineProps({
  modelValue: {
    type: [String, Number]
  },
  list: {
    type: Array,
    default: () => {
      return []
    }
  }
})
const activeValue = (e) => {
  emits("update:modelValue", e.value)
  // 支持返回整个改变对象的 Objet
  emits("itemOnChange", e)
  // 收起
  showSelectionFlag.value = !showSelectionFlag.value
}

let showSelectionFlag = ref(false)

const emits = defineEmits(["update:modelValue", "itemOnChange"])


const selectVal = computed(() => {
  if (props.list) {
    const res = props.list.filter(item => item.value + "" === props.modelValue + "")
    return res.label ? res.label : res[0].label
  } else {
    return "null"
  }
})

// 点击展开所有选项
const showAllSelections = () => {
  showSelectionFlag.value = !showSelectionFlag.value
}

</script>

<script>
export default {
  name: "ice-selector"
}
</script>

<style lang="less" scoped>
@import '../../../assets/variables.less';
.iceSelector{
  z-index: 10;

  .activeSelection{
    border: @themeActiveColor 1px solid;
    border-radius: @radio-l;
    margin-bottom: @m-normal;
    transition-duration: @time-n;
    color: @fontColor;

    &:hover{
      color: @fontColor-bleak;
      border-color: @fontColor-bleak;
    }

  }

  .selections{
    position: relative;

    .selectItemLim{
      background: @bac;
      border-radius: @radio-n;
      position: absolute;
      //top: @lineHeight-s;
      top: @m-normal;
      width: 100%;
    }
  }

  .showSelection{

    .selectItemLim{
      .item{
        height: fit-content;
      }
    }
  }

  .hideSelection{
    .selectItemLim{
      .item{
        line-height: 0;
      }
    }

  }

}
</style>
