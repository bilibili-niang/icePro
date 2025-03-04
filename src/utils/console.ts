interface ConsoleAuthorOptions {
  title?: string;
  author?: string;
  source?: string;
  titleColor?: string;
  authorColor?: string;
  sourceColor?: string;
  fontSize?: string;
}

/**
 * 在控制台输出带样式的作者信息
 * @param options 配置选项
 */
export const printAuthorInfo = (options: ConsoleAuthorOptions = {}) => {
  const {
    title = '',
    author = '',
    source = '',
    titleColor = '#ff5555',
    authorColor = '#50fa7b',
    sourceColor = '#f1fa8c',
    fontSize = '14px'
  } = options

  const styles = [
    `color: ${titleColor}; font-size: ${fontSize}; font-weight: bold;`,
    'color: #8be9fd;',
    `color: ${authorColor}; font-weight: bold;`,
    '',
    'color: #bd93f9;',
    `color: ${sourceColor}; text-decoration: underline;`
  ]

  console.log(
    `%c${title}%c by %c${author}%c\n%cSource: %c${source}`,
    ...styles
  )
}
