import type { IconDefinition } from "@fortawesome/fontawesome-common-types"
import type { FunctionalComponent } from "vue"
import { h } from "vue"

interface FaSvgProps {
    icon: IconDefinition
}

const faSvg: FunctionalComponent<FaSvgProps> = (props, context) => {
    // const [width, height, /* ligatures */, /* unicode */, svgPathData] = props.icon.icon;
    const icon = props.icon.icon;
    const svgPathData = icon[4];
    const renderPath = (d: string) => h('path', { d });
    
    return h(
        'svg',
        Object.assign({
            xmlns: 'http://www.w3.org/2000/svg',
            role: 'img',
            fill: 'currentColor',
            viewBox: `0 0 ${icon[0]} ${icon[1]}`,
        }, context.attrs),
        Array.isArray(svgPathData) ? svgPathData.map(renderPath) : renderPath(svgPathData)
    )
}
faSvg.props = ['icon']

export default faSvg;
