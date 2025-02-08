declare module '*.png' {
  const value: string;
  export default value;
}

// 如果你需要支持其他类型的文件，比如 .jpg 或 .svg，也可以在这里添加：
declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}