# Fontawesome SVG Vue
Vue component for [Fontawesome](https://fontawesome.com/) icon.

This component uses direct imported icons, and render as &lt;svg&gt;.
Main element is &lt;svg&gt;, all attributes are inherited.

## Props
* icon: IconDefinition

## Attributes default values
These attributes has default value, can override.
* fill: 'currentColor' (SVG)
* role: 'img' (ARIA)
* viewBox: set as icon property. Override this value is not recommended. (SVG)

## Usage
```vue
<script lang="ts" setup>
import faSvg from 'fa-svg-vue'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <faSvg :icon="faThumbsUp" width="64"/>
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

## Related
[@fortawesome/vue-fontawesome](https://www.npmjs.com/package/@fortawesome/vue-fontawesome): offcial fontawesome component for vue, uses library and icon name.
