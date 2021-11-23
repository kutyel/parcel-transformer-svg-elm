const path = require('path')
const { Transformer } = require('@parcel/plugin')
const { generateSvgFunction } = require('svg2elm')

const getComponentName = (filePath) => {
  const validCharacters = /[^a-zA-Z0-9_-]/g
  return path.parse(filePath).name.replace(validCharacters, '')
}

module.exports = new Transformer({
  async transform({ asset }) {
    const source = await asset.getCode()
    const componentName = getComponentName(asset.filePath)

    // Run it through the svg2elm compiler
    const code = await generateSvgFunction(componentName, source)

    asset.type = 'elm'
    asset.bundleBehavior = null
    asset.setCode(code)

    return [asset]
  },
})
