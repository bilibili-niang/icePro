import { createVNode, render } from 'vue'

const iceMessageBox = () => {

  let seed = 1
  let appendTo = document.body

  const vm = createVNode(
    iceMessageBox
  )
  vm.props.onDestroy = () => {
    console.log('触发销毁事件')
  }

  let containerFa = null
  if (document.querySelector('.ice-message-box-container')) {
    containerFa = document.querySelector('.ice-message-box-container')
  } else {
    containerFa = document.createElement('div')
    containerFa.className = 'ice-message-box-container'
  }

  const container = document.createElement('div')

  const id = `message_${seed++}`

  // 为创建的元素指定一个类名
  container.className = `${id} ice-message-box`

  containerFa.appendChild(container)
  // 父容器添加进body
  appendTo.appendChild(containerFa)

  render(vm, container)
}
export default iceMessageBox
