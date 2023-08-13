import iceButton from './src/iceButton.vue'

console.log(iceButton)
/* istanbul ignore next */
iceButton.install = function (app) {
    app.component(iceButton.name, iceButton)
}

export default iceButton
