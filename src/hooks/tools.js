import colors from "../assets/colors/colors.json"

const colorsMap = colors
colorsMap.forEach(item => {
    colorsMap[item.pinyin] = {
        color: item.RGBA,
        hover: item.bleak
    }
})
/**
 * 通过json返回对应的颜色信息
 * Author: 张嘉凯
 * Date: 2023/7/26
 * Time: 11:09
 */
const findColor = function (pinyin) {
    const obj = colorsMap[pinyin]
    return obj || false
}
/**
 * 复制
 * Author: 张嘉凯
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
