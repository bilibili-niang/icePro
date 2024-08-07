import colors from "../assets/colors/colors.json"

const colorsMap = colors

const dark = localStorage.getItem("mode") ? localStorage.getItem("mode") : null

colorsMap.forEach(item => {
  colorsMap[item.pinyin] = {
    color: item.RGBA,
    hover: item.bleak
  }
})
/**
 * 通过json返回对应的颜色信息
 * 需要判断 深色/浅色 模式
 * Date: 2023/7/26
 * Time: 11:09
 */
const findColor = function (pinyin) {
  if (dark) {
    const obj = colorsMap[pinyin]
    return obj || false
  } else {
    const obj = colorsMap[pinyin]
    return obj || false
  }
}
/**
 * 复制
 * Date: 2023/7/26
 * Time: 15:01
 */
const copyText = function (str) {
  return navigator.clipboard.writeText(str)
    .then(() => {
      return true
    })
    .catch(() => {
      return false
    })
}
export {
  findColor,
  copyText
}
