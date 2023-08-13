import iceButton from './src/components/button/src/iceButton.vue'
import iceText from './src/components/text/ice-text.vue'
import split from './src/components/tools/split.vue'
import iceTag from './src/components/tools/ice-tag.vue'
import iceLink from './src/components/text/ice-link.vue'
import show from './src/components/tools/show.vue'
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
import './src/assets/common.less'

const components = {
    iceButton,
    iceText,
    split,
    iceTag,
    iceLink,
    show,
    iceTitle,
    iceCard,
    iceMenu,
    iceInput,
    iceRow,
    iceColumn,
    iceDrawer,
    iceSelector,
    iceSelectorGroup
}

export {
    iceButton,
    iceText,
    split,
    iceTag,
    iceLink,
    show,
    iceTitle,
    iceCard,
    iceMessage,
    iceMenu,
    iceInput,
    iceRow,
    iceColumn,
    iceDrawer,
    iceSelector,
    iceSelectorGroup
}

function install (app) {
    const keys = Object.keys(components)
    for (let i = 0; i < keys.length; i ++) {
        app.component(components[keys[i]].name, components[keys[i]])
    }
}

const icepro = {
    version: '1.0.8'
}

// 导出组件
icepro.install = install

export default icepro

