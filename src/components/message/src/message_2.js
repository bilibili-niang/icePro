import { createVNode, isVNode, ref, render } from 'vue'
import iceMessage from './message.vue'

let seed = 1
const zIndex = ref(2000)
const instances = []
// 创建 Message 函数
const Message = function (options = {}) {
    // 如果传入的不是对象,将options赋值给message,可以直接弹出
    if (typeof options === 'string') {
        options = {
            message: options
        }
    }
    let verticalOffset = options.offset || 20
    instances.forEach(({ vm }) => {
        verticalOffset += ( vm.el?.offsetHeight || 0 ) + 70
    })
    const id = `message_${ seed ++ }`
    const userOnClose = options.onClose
    const props = {
        message: options.message,
        id,
        offset: verticalOffset,
        zIndex: zIndex.value ++,
        ...options,
        onClose: () => {
            close(id, userOnClose)
        },
    }
    let appendTo = document.body
    // msg item
    const container = document.createElement("div")
    let containerFa = null
    if (document.querySelector('.ice-message-container')) {
        containerFa = document.querySelector('.ice-message-container')
    } else {
        containerFa = document.createElement("div")
        containerFa.className = "ice-message-container"
    }

    // 如果传入了元素,那么在元素内部插入,反之不执行
    if (options.appendTo instanceof HTMLElement) {
        appendTo = options.appendTo
    } else if (typeof options.appendTo === "string") {
        appendTo = document.querySelector(options.appendTo)
    }

    // 为创建的元素指定一个类名
    container.className = `${ id } ice-message`
    const message = props.message
    const vm = createVNode(
        iceMessage,
        // 传入属性
        props,
        isVNode(props.message) ? { default: () => message } : null
    )
    vm.props.onDestroy = () => {
        render(null, container)
    }
    render(vm, container)
    instances.push({ vm })
    containerFa.appendChild(container)
    // 父容器添加进body
    appendTo.appendChild(containerFa)
    return {
        close: () => {
            console.log('调用了emit的close--->')
            close(id, userOnClose),
                ( ( vm.component.proxy ).visible = false )
        },
        destroy: () => {
            console.log('destroy')
        }
    }
}

export function destroy (id) {
    const index = instances.findIndex(({ vm }) => vm.component.props.id === id)
    if (index !== - 1) {
        const { vm } = instances[index]
        if (vm) {
            render(null, vm.el)
            instances.splice(index, 1)
        }
    }
}

const list = ["success", "info", "warning", "error"]

list.forEach((type) => {
    Message[type] = (options = {}) => {
        if (typeof options === "string" || isVNode(options)) {
            options = {
                message: options,
            }
        }
        return Message({
            ...options,
            type,
        })
    }
})

export function close (id, userOnClose) {
    setTimeout(function () {
        const divs = document.querySelector('.ice-message-container').children
        for (let i = divs.length - 1; i >= 0; i --) {
            const div = divs[i]
            if (div.textContent.trim() === '') {
                div.remove()
            }
        }
    }, 500)

}

// 绑定一个关闭方法
export function closeAll () {
    for (let i = instances.length - 1; i >= 0; i --) {
        const instance = instances[i].vm.component
        instance.proxy.close()
    }
}

Message.closeAll = closeAll

export default Message
