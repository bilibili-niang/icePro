const Message = function (options) {
    options = options || {}
    // 如果传入的不是对象,将options赋值给message,可以直接弹出
    if (typeof options === 'string') {
        options = {
            message: options
        }
    }
    console.log('获取的options:')
    console.log(options)

}

// 绑定一个关闭方法
Message.closeAll = function () {
    console.log('弹窗关闭啦')
}
export default Message
