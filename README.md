# Fontawesome icon to inline SVG for Vue.js
Vue component for [Fontawesome](https://fontawesome.com/) icon.

When use on vue 2(2.7+), should import from 'fa-svg-vue/vue2'

This component uses direct imported icons, supports tree-shaking.
Icon renders as &lt;svg&gt; tag.
Main element is &lt;svg&gt;, all attributes are inherited.

## Props
* icon: IconDefinition, imported from fontawesome icons.

## Attributes's default
These attributes has default value, can override by set attribute.
* fill: 'currentColor' (SVG)
* role: 'img' (ARIA)
* viewBox: set as icon property. Override this value is not recommended. (SVG)

## Usage
In SFC .vue file,
```vue
<script lang="ts" setup>
import faSvg from 'fa-svg-vue'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome }  from '@fortawesome/free-regular-svg-icons'
</script>

<template>
  <faSvg :icon="faThumbsUp" width="64"/>
  <faSvg :icon="faFontAwesome" width="64"/>
</template>
```

### By global component registration
In your main script,
```javascript
import { createApp } from 'vue'
import faSvg from 'fa-svg-vue'

const app = createApp(/* your app options */)
app.component("faSvg", faSvg);
```

## Usable icons
* [@fortawesome/free-solid-svg-icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons): Solid icons
* [@fortawesome/free-regular-svg-icons](https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons): Regular icons
* [@fortawesome/free-brands-svg-icons](https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons): Brands icons

## Related
* [Fontawesome homepage](https://fontawesome.com/): You can search free icons from [here](https://fontawesome.com/search?m=free).
* [@fortawesome/vue-fontawesome](https://www.npmjs.com/package/@fortawesome/vue-fontawesome): Official fontawesome component for vue.
