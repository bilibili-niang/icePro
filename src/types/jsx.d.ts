import 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    'ice-link': typeof import('../components/link')['default']
    'ice-avatar': typeof import('../components/avatar')['default']
    'ice-title': typeof import('../components/title')['default']
    'ice-button': typeof import('../components/button')['default']
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elem: string]: any
  }
}
