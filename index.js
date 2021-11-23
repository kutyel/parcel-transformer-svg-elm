import { Transformer } from '@parcel/plugin'
import { generateSvgFunction } from 'svg2elm'

export default new Transformer({
  async transform({ asset }) {
    const source = await asset.getCode()
    const componentName = getComponentName(asset.filePath)

    // Run it through the svg2elm compiler
    const code = await generateSvgFunction(componentName, source)

    asset.type = 'elm'
    asset.setCode(code)

    return [asset]
  },
})
