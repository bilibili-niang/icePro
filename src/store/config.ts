import { defineStore } from 'pinia'
import { ref } from 'vue'

const themeStore = defineStore('config', () => {
  const isDark = ref(false)

  const changeTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      localStorage.setItem('mode', 'dark')
      document.querySelector('html').classList.remove('light')
      document.querySelector('html').classList.add('dark')
    } else {
      localStorage.setItem('mode', 'light')
      document.querySelector('html').classList.remove('dark')
      document.querySelector('html').classList.add('light')
    }
  }

  const init = () => {
    const savedTheme = localStorage.getItem('mode')
    isDark.value = savedTheme === 'dark'
    if (isDark.value) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.add('light')
    }
  }

  init()

  return {
    isDark,
    changeTheme,
    init
  }
})

export { themeStore }