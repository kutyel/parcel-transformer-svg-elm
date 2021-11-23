import { parse } from 'path'
import { Transformer } from '@parcel/plugin'
import { generateSvgFunction } from 'svg2elm'

const getComponentName = (filePath) => {
  const validCharacters = /[^a-zA-Z0-9_-]/g
  return parse(filePath).name.replace(validCharacters, '')
}

export default new Transformer({
  async transform({ asset }) {
    const source = await asset.getCode()
    const componentName = getComponentName(asset.filePath)
    const code = await generateSvgFunction(componentName, source)

    asset.type = 'elm'
    asset.bundleBehavior = null
    asset.setCode(code)

    return [asset]
  },
})
