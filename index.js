import iceButton from './src/components/button/normal/iceButton.vue'
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

const components = [
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
    iceColumn
]

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
    iceColumn
}

function registerUi (app) {
    components.map(item => {
        app.component(item.name, item)
    })
}

export default registerUi
