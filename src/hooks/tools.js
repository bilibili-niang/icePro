import colors from "../assets/colors/colors.json"

const colorsMap = colors

const dark = localStorage.getItem('mode') ? localStorage.getItem('mode') : null

const defaultColor = localStorage.getItem('color') ? localStorage.getItem('color') : null

colorsMap.forEach(item => {
    colorsMap[item.pinyin] = {
        color: item.RGBA,
        hover: item.bleak
    }
})
/**
 * 通过json返回对应的颜色信息
 * 需要判断 深色/浅色 模式
 * Author: 张嘉凯
 * Date: 2023/7/26
 * Time: 11:09
 */
const findColor = function (pinyin) {
    /*if (defaultColor) {
        let r = parseInt(defaultColor.substring(1, 3), 16)
        let g = parseInt(defaultColor.substring(3, 5), 16)
        let b = parseInt(defaultColor.substring(5, 7), 16)
        return {
            color: `rgba(${ r },${ g },${ b },${ 1 })`,
            hover: `rgba(${ r },${ g },${ b },${ .5 })`
        }
    } else {*/
    if (dark) {
        const obj = colorsMap[pinyin]
        return obj || false
    } else {
        const obj = colorsMap[pinyin]
        return obj || false
    }
    // }
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
