// 获取当前主题
export const getTheme = () => {
  return document.querySelector('html').classList[0] || ''
}