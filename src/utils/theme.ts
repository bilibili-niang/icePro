// 主题类型
export type ThemeType = 'purple' | 'blue' | 'green' | 'orange';

// 主题管理类
class ThemeManager {
  // 当前主题
  private currentTheme: ThemeType = 'purple';

  // 获取当前主题
  getCurrentTheme(): ThemeType {
    return this.currentTheme;
  }

  // 设置主题
  setTheme(theme: ThemeType) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
    // 保存到 localStorage，以便页面刷新后保持主题
    localStorage.setItem('theme', theme);
  }

  // 初始化主题
  init() {
    // 从 localStorage 获取保存的主题
    const savedTheme = localStorage.getItem('theme') as ThemeType;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      // 默认使用紫色主题
      this.setTheme('purple');
    }
  }
}

// 导出单例
export const themeManager = new ThemeManager();

// 初始化主题
if (typeof window !== 'undefined') {
  themeManager.init();
}
