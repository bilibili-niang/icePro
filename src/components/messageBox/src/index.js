import { createVNode, render } from 'vue'
import iceMessage from './index.vue'

// 创建一个全局变量来存储消息框的容器
let containerFa

// 检查是否已经创建了消息框的容器
if (!containerFa) {
  containerFa = document.createElement('div')
  containerFa.className = 'ice-message-box-container'
  document.body.appendChild(containerFa)
}

const iceMessageBox = (text) => {
  const appendTo = containerFa

  // 创建虚拟节点
  const vm = createVNode(iceMessage, { text })

  // 查找或创建一个用于渲染的 DOM 元素
  let messageElement = appendTo.querySelector('.ice-message-box')
  if (!messageElement) {
    messageElement = document.createElement('div')
    appendTo.appendChild(messageElement)
  }

  // 渲染组件
  render(vm, messageElement)

  // 返回一个销毁方法
  return {
    destroy: close
  }
}

export default iceMessageBox