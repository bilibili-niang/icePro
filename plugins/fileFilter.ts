import { baseParse } from '@vue/compiler-core'
import * as fs from 'fs'
import type { Plugin } from 'vite'

interface PreviewPlugin extends Plugin {
  name: string;
  transform(code: string, id: string): string | void;
}

const vitePluginVue: PreviewPlugin = {
  name: 'preview',
  transform(code: string, id: string): string | void {
    if (
      !/\/.*\.preview\.vue/.test(id) ||
      !/vue&type=preview/.test(id)
    ) {
      return
    }

    const filename: string = id.split('?')[0]
    const file: string = fs.readFileSync(filename).toString()
    const parse = baseParse(file).children
    const parsed = parse.find((n: any) => n.tag === 'preview')
    let styleCode = parse.find((n: any) => n.tag === 'style') || null
    const content = parse.find((n: any) => n.tag === 'template')
    const previewNode = parse.find((n: any) => n.tag === 'preview')
    const containerNode = content?.children.find((n: any) => n.tag === 'container')
    const scriptNode = parse.find((n: any) => n.tag === 'script')
    
    // 获取预览标题
    const title = previewNode?.children[0]?.content || ''
    
    // 获取container内容
    const main = containerNode?.loc?.source?.replace(/<\/?container>/g, '').trim() || ''
    
    // 获取script内容
    let scriptContent = ''
    if (scriptNode) {
      const setupMatch = scriptNode.loc?.source?.match(/<script.*?>([\s\S]*?)<\/script>/)?.[1] || ''
      scriptContent = setupMatch.trim()
    }
    
    // 获取style内容
    let styleContent = ''
    if (styleCode) {
      styleContent = styleCode?.loc?.source?.replace(/<\/?style.*?>/g, '').trim() || ''
    }

    return `export default Component => {
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
      Component.__sourceCode = ${JSON.stringify(main)}
      ${scriptContent ? `Component.__script = ${JSON.stringify(scriptContent)}` : ''}
      ${styleContent ? `Component.__styleCode = ${JSON.stringify(styleContent)}` : ''}
    }`
  }
}

export default vitePluginVue
