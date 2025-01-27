// 导入样式，可以通过 import 'icepro/src/styles' 单独引入
import './src/styles/index.less'

import iceButton from './src/components/button/index.js'
import iceText from './src/components/text/ice-text.vue'
import iceSplit from './src/components/tools/ice-split.vue'
import iceTag from './src/components/tag/src/ice-tag.vue'
import iceLink from './src/components/text/ice-link.vue'
import container from './src/components/tools/container.vue'
import iceTitle from './src/components/text/ice-title.vue'
import iceCard from './src/components/card/ice-card.vue'
import iceMessage from './src/components/message/index'
import iceMenu from './src/components/menu/ice-menu.vue'
import iceInput from './src/components/input/index'
import iceRow from './src/components/layout/ice-row.vue'
import iceColumn from './src/components/layout/ice-column.vue'
import iceDrawer from './src/components/drawer/index.js'
import iceSelector from './src/components/selector/index.js'
import iceSelectorGroup from './src/components/selector-group/index.js'
import avatar from './src/components/avatar/src/iceAvatar.vue'
import shrinkBar from './src/components/layout/shrinkBar.vue'
import iceSelectionItem from './src/components/selectorItem/src/ice-selectionItem.vue'
import icePagination from './src/components/pagination/index.ts'
import iceImgPreview from './src/components/imgPreview/index.js'
import iceHeader from './src/components/header/index.js'
import iceTextarea from './src/components/textarea/index.js'
import colorSelector from './src/components/colorSelector/index.js'
import inlineStyle from './src/components/editor/inlineStyle.vue'
import iceTabs from './src/components/tabs/index.js'
import iceTabItem from './src/components/tabItem'
import { findColor } from './src/utils/tools.js'

findColor.activeColor = '#fba414'

const components = {
  iceButton,
  iceText,
  iceSplit,
  iceTag,
  iceLink,
  container,
  iceTitle,
  iceCard,
  iceMenu,
  iceInput,
  iceRow,
  iceColumn,
  iceDrawer,
  iceSelector,
  iceSelectorGroup,
  avatar,
  shrinkBar,
  iceSelectionItem,
  icePagination,
  iceImgPreview,
  iceHeader,
  iceTextarea,
  colorSelector,
  inlineStyle,
  iceTabs,
  iceTabItem
}

export {
  iceButton,
  iceText,
  iceSplit,
  iceTag,
  iceLink,
  container,
  iceTitle,
  iceCard,
  iceMessage,
  iceMenu,
  iceInput,
  iceRow,
  iceColumn,
  iceDrawer,
  iceSelector,
  iceSelectorGroup,
  avatar,
  shrinkBar,
  icePagination,
  iceImgPreview,
  iceHeader,
  iceTextarea,
  colorSelector,
  inlineStyle,
  iceTabs,
  iceTabItem
}

function install(app) {
  const keys = Object.keys(components)
  for (let i = 0; i < keys.length; i++) {
    app.component(components[keys[i]].name, components[keys[i]])
  }
}

const icepro = {
  version: '1.1.17',
  components
}

// 导出组件
icepro.install = install

export default icepro

// 工具

export { findColor }

// 导出全局状态
export * from './src/store'
