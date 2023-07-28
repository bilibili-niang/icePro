/*
import fs from 'fs'

const file = fs.readFileSync('./colors.json')
const data = JSON.parse(file)
// console.log(data)
data.forEach(item => {
    if (item.RGB) {
        const [r, g, b] = item.RGB
        item.RGBA = `rgba(${ r },${ g },${ b },1)`
        item.bleak = `rgba(${ r },${ g },${ b },.5)`
        delete item.RGB
        delete item.CMYK
    }
})
console.log(data)

const jsonData = JSON.stringify(data, null, 2)
fs.writeFileSync('./colors.json', jsonData)
console.log('Data saved to colors.json')
*/
