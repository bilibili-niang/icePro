import './index.css'
import { defineComponent, computed, ref, watch, onMounted } from 'vue'

// 预设的颜色组合，每个数组包含两个颜色：[主色, 次要色]
const presetColors = [
  // 浅色系列
  ['#ffedcb', '#ffc145'], // 温暖米黄
  ['#e3f4f4', '#d2e9e9'], // 清新浅蓝
  ['#ffd4d4', '#ffb3b3'], // 柔和粉红
  ['#dbf1c1', '#9ed368'], // 自然青绿
  ['#f9f5f2', '#f8e5d4'], // 温柔米色
  ['#e5e1f9', '#c3bef0'], // 淡雅紫色
  ['#cdfad5', '#98d8aa'], // 清新绿色
  ['#fff8e3', '#f7e6c4'], // 温暖黄色
  ['#f1f7fd', '#d7e9f7'], // 天空蓝
  ['#ffe5ec', '#ffc2d1'], // 甜美粉色
  ['#eaf6f6', '#b8e0e0'], // 湖水蓝
  ['#f0ece2', '#dfd3c3'], // 优雅灰棕
  ['#f6e5f5', '#e4c1f9'], // 梦幻紫色
  ['#e3f6f5', '#bae8e8'], // 薄荷绿
  ['#fff0f3', '#ffccd5'], // 浅珊瑚色
  ['#f0efeb', '#ddbea9'], // 温暖棕色
  ['#f7f3ff', '#e2d6ff'], // 轻柔紫色
  ['#e9fae3', '#c1e698'], // 嫩芽绿
  ['#ffeef4', '#ffc7d9'], // 浪漫粉色
  ['#edf6f9', '#b5e2fa'], // 清爽蓝色
  ['#fef6e1', '#f8d49d'], // 温暖橙色
  ['#e8f3e8', '#b8dbb8'], // 森林绿
  ['#f3e6e3', '#e4bfb3'], // 暖灰粉
  ['#e7f2f9', '#b6daf2'], // 海洋蓝
  ['#fbf0f0', '#f5c8c8'], // 浅玫瑚

  // 深色系列
  ['#2c3333', '#395b64'], // 深墨绿
  ['#222831', '#393e46'], // 深夜黑
  ['#1b262c', '#0f4c75'], // 深海蓝
  ['#2d2424', '#5c3d2e'], // 深咖啡
  ['#352f44', '#5c5470'], // 深紫灰
  ['#1a1a2e', '#16213e'], // 深空蓝
  ['#2c3639', '#3f4e4f'], // 深橄榄
  ['#2d033b', '#810ca8'], // 深紫罗兰
  ['#27374d', '#526d82'], // 深青灰
  ['#1f1d36', '#3f3351'], // 深梅紫
  ['#2c061f', '#374045'], // 深酒红
  ['#132043', '#1f4172'], // 深靛蓝
  ['#3c2a21', '#674747'], // 深赭石
  ['#251b37', '#372948'], // 深莓紫
  ['#1a120b', '#3c2a21']  // 深棕褐
]

// 注册CSS自定义属性，使其支持过渡动画
const registerCSSProperties = () => {
  if (CSS && CSS.registerProperty) {
    try {
      CSS.registerProperty({
        name: '--c1',
        syntax: '<color>',
        inherits: false,
        initialValue: '#ffedcb'
      });
      CSS.registerProperty({
        name: '--c2',
        syntax: '<color>',
        inherits: false,
        initialValue: '#ffc145'
      });
    } catch (e) {
      // 如果属性已经注册，会抛出错误，可以忽略
    }
  }
}

export default defineComponent({
  name: 'SimpleBackground',
  props: {
    primaryColor: {
      type: String,
      default: '#ffedcb'
    },
    secondaryColor: {
      type: String,
      default: '#ffc145'
    },
    // 是否允许点击随机更换背景色,默认false
    allowClick: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    // 使用响应式数据存储当前颜色
    const currentPrimaryColor = ref(props.primaryColor)
    const currentSecondaryColor = ref(props.secondaryColor)

    // 在组件挂载时注册CSS属性
    onMounted(() => {
      registerCSSProperties()
    })

    // 监听props颜色变化
    watch(() => props.primaryColor, (newColor) => {
      currentPrimaryColor.value = newColor
    })
    watch(() => props.secondaryColor, (newColor) => {
      currentSecondaryColor.value = newColor
    })

    // 从预设颜色中随机选择一组
    const getRandomPresetColors = () => {
      const index = Math.floor(Math.random() * presetColors.length)
      return presetColors[index]
    }

    // 处理点击事件
    const handleClick = () => {
      if (props.allowClick) {
        const [primary, secondary] = getRandomPresetColors()
        currentPrimaryColor.value = primary
        currentSecondaryColor.value = secondary
      }
    }

    // 如果允许点击，初始化时自动执行一次随机
    if (props.allowClick) {
      const [primary, secondary] = getRandomPresetColors()
      currentPrimaryColor.value = primary
      currentSecondaryColor.value = secondary
    }

    const style = computed(() => ({
      '--c1': currentPrimaryColor.value,
      '--c2': currentSecondaryColor.value
    }))

    return () => {
      return (
        <div
          class="simpleBackground"
          style={style.value}
          onClick={handleClick}
        >
        </div>
      )
    }
  }
})
