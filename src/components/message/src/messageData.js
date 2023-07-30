exports.__esModule = true;
exports.messageEmits = exports.messageProps = exports.messageTypes = void 0;
exports.messageTypes = ["success", "info", "warning", "error"];
exports.messageProps = {
    duration: {
        type: Number,
        "default": 3000
    },
    id: {
        type: String,
        "default": ""
    },
    offset: {
        type: Number,
        "default": 100
    },
    zIndex: {
        type: Number,
        "default": 0
    },
    onClose: {
        type: Function,
        required: false
    },
    type: {
        type: String,
        values: exports.messageTypes,
        "default": "info"
    },
    message: {
        type: [String, Object],
        "default": ""
    },
    showClose: {
        type: Boolean,
        "default": false
    },
    center: {
        type: Boolean,
        "default": false
    }
};
exports.messageEmits = ["destroy"];
