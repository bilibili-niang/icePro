import fs from "fs"
import {baseParse} from "@vue/compiler-core"

const inlineStyleTransform = {
  name: "inlineStyleTransform",
  transform(code, fileObj) {
    const fileNameSplit = (fileObj.split("?")[0]).split("/")[(fileObj.split("?")[0]).split("/").length - 1]
    // console.log("fileNameSplit:");
    // console.log(fileNameSplit);
    if (!fileNameSplit.includes(".inlineStyle.vue")) {
      return
    }

    const file = fs.readFileSync(fileObj.split("?")[0]).toString()
    console.log("baseParse(file):")
    console.log(baseParse(file).loc)
  }
}

export default inlineStyleTransform