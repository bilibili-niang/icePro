import iceButton from './src/components/button/normal/iceButton.vue'
import iceText from './src/components/text/ice-text.vue'
import split from './src/components/tools/split.vue'
import iceTag from './src/components/tools/ice-tag.vue'
import iceLink from './src/components/text/ice-link.vue'
import show from './src/components/tools/show.vue'
import iceTitle from './src/components/text/ice-title.vue'
import iceCard from '@/components/card/ice-card.vue'


const components = [
    iceButton,
    iceText,
    split,
    iceTag,
    iceLink,
    show,
    iceTitle,
    iceCard
]

export {
    iceButton,
    iceText,
    split,
    iceTag,
    iceLink,
    show,
    iceTitle,
    iceCard
}

function registerUi (app) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i ++) {
        var component = components_1[_i]
        app.component(component.name, component)
    }
}

export default registerUi

