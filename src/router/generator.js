import * as fs from 'fs'
// import path from 'path'
import { defineAsyncComponent } from 'vue'


/**
 *  获取文件夹下所有文件路径
 * @param {String} fallPath 想要遍历的路径
 * @returns {*[]} 路径数组
 */
const pathList = function (fallPath) {
    let allPath = []
    fs.readdirSync(fallPath).map(item => {
        const childrenPath = fallPath.replaceAll('\\', '/') + '/' + item
        if (fs.statSync(childrenPath).isDirectory()) {
            allPath = allPath.concat(pathList(childrenPath))
        } else {
            if (childrenPath.indexOf('index.vue') !== - 1) {
                allPath.push(childrenPath)
            }
        }
    })
    return allPath
}
/*const res = pathList('../pages/doc').map(item => {
    return {
        path: '/doc/' + item.replace(/^.*[\\\/]/, ''),
        name: item.split('\\')[3],
        component: defineAsyncComponent(() => import(item))
    }
})*/

export default {
    list () {
        const res = pathList('../pages/doc').map(item => {
            return {
                path: '/doc/' + item.replace(/^.*[\\\/]/, ''),
                name: item.split('/')[3],
                component: defineAsyncComponent(() => import(item))
            }
        })
        return res
    }
}

