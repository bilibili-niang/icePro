import {baseParse} from "@vue/compiler-core"
import * as fs from "fs"

const vitePluginVue = {
  name: "preview",
  transform(code, id) {
    if (
      !/\/src\/pages\/doc\/.*\.preview\.vue/.test(id) ||
      !/vue&type=preview/.test(id)
    ) {
      return
    }
    const filename = id.split("?")[0]
    const file = fs.readFileSync(filename).toString()
    const parse = baseParse(file).children
    const parsed = parse.find((n, index) => n.tag === "preview")
    let styleCode = parse.find((n, index) => n.tag === "style") || null
    let script = parse.find((n, index) => n.tag === "script") || null

    if (styleCode) {
      styleCode = styleCode.loc.source
    }
    if (script) {
      script = script.loc.source
    }
    const content = parse.find((n, index) => n.tag === "template")
    let sourceCode = content.children.find((n, index) => n.tag === "container")
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join("").trim()
    if (!sourceCode) {
      sourceCode = main
    }
    return `export default function (Component) {
                        Component.__sourceCode = ${JSON.stringify(sourceCode.loc.source)};
                        Component.__sourceCodeTitle = ${JSON.stringify(title)};
                        Component.__styleCode = ${JSON.stringify(styleCode || null)};
                        Component.__script = ${JSON.stringify(script || null)};
                        return Component;
                    }`.trim()
  }
}

export default vitePluginVue
