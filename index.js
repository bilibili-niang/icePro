import iceButton from './src/components/button/normal/iceButton.vue'
import iceText from './src/components/text/ice-text.vue'
import split from './src/components/tools/split.vue'
import iceTag from './src/components/tools/ice-tag.vue'
import iceLink from './src/components/text/ice-link.vue'
import show from './src/components/tools/show.vue'
import iceTitle from './src/components/text/ice-title.vue'
import iceCard from '@/components/card/ice-card.vue'
import iceMessage from '@/components/message/index'

const components = [
    iceButton,
    iceText,
    split,
    iceTag,
    iceLink,
    show,
    iceTitle,
    iceCard,
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
}

function registerUi (app) {
    app.config.globalProperties.$message = iceMessage
    components.map(item => {
        app.component(item.name, item)

    })
}

export default registerUi
