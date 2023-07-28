import { useRouter } from 'vue-router'
import colors from "@/assets/colors/colors.json"

const router = useRouter()
const goHref = function (href, params) {
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


/* @author 张嘉凯
 * @date 2023/7/26 @time 11:09
 * 通过json返回对应的颜色信息
*/
const findColor = function (pinyin) {
    const obj = colorsMap[pinyin]
    return obj || false

    /*const obj = colors.find((n) => {
        return n.pinyin === pingyin
    })
    if (obj) {
        return {
            color: obj.RGBA,
            hover: obj.bleak
        }
    } else {
        return false
    }*/
}
/* @author 张嘉凯
 * @date 2023/7/26 @time 15:01
 *  复制
*/
const copy = function (str) {
    console.log('触发了copy')
    console.log('接收的值', str)
    let clipboard = new Clipboard(str)
    clipboard.on('success', e => {
        console.log('复制成功')
        // 释放内存
        clipboard.destroy()
    })
    clipboard.on('error', e => {
        // 不支持复制
        console.log('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
    })
}


export {
    goHref,
    findColor,
    copy
}
