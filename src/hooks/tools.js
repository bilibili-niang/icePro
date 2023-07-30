import { useRouter } from 'vue-router'
import colors from "../assets/colors/colors.json"

const goHref = function (href, params) {
    const router = useRouter()
    router.push({
        path: href,
        query: {
            params
        }
    })
}
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
    navigator.clipboard.writeText(str)
        .then(() => {
            return '已复制到剪贴板'
        })
        .catch(() => {
            return '复制失败'
        })
}
export {
    goHref,
    findColor,
    copyText
}
