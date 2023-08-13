import iceButton from './src/iceButton.vue';

/* istanbul ignore next */
iceButton.install = function (app) {
    app.component(iceButton.name, iceButton);
};

export default iceButton;
