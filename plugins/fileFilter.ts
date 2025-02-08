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
    let script = parse.find((n: any) => n.tag === 'script') || null

    if (styleCode) {
      styleCode = styleCode.loc.source
    }
    if (script) {
      script = script.loc.source
    }
    const content = parse.find((n: any) => n.tag === 'template')
    const main = content?.children[0].loc.source
    return `export default Component => {
      Component.__sourceCode = ${JSON.stringify(main)}
      ${styleCode ? `Component.__sourceStyle = ${JSON.stringify(styleCode)}` : ''}
      ${script ? `Component.__sourceScript = ${JSON.stringify(script)}` : ''}
    }`
  }
}

export default vitePluginVue
