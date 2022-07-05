import type { IconDefinition } from '@fortawesome/fontawesome-common-types'
import type { FunctionalComponentOptions } from 'vue'

interface FaSvgProps {
    icon: IconDefinition
}

const faSvg: FunctionalComponentOptions<FaSvgProps> = {
  functional: true,
  render(h, { props, data }) {
    const [width, height, /* ligatures */, /* unicode */, svgPathData] = props.icon.icon
    const renderPath = (d: string) => h('path', { attrs: { d } })

    return h('svg', {
      ...data,
      attrs: {
        xmlns: 'http://www.w3.org/2000/svg',
        role: 'img',
        fill: 'currentColor',
        viewBox: `0 0 ${width} ${height}`,
        ...data.attrs,
      },
    }, Array.isArray(svgPathData) ? svgPathData.map(renderPath) : [renderPath(svgPathData)])
  },
}

export default faSvg
