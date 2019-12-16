<template>
  <div class="tabs-panel-script">
    <q-markdown v-if="code" no-line-numbers no-container :src="code" />
  </div>
</template>

<script>
import { isFullString } from 'is-what'
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'

export default {
  name: 'TabsPanelScript',
  components: { QMarkdown },
  props: [
    'valuePrintReady',
    'propDataPrintReady',
    'varDataPrintReady',
    'varNameProps',
    'varNameValue',
    'propsSeparateTab',
  ],
  data () {
    return {}
  },
  computed: {
    code () {
      const {
        valuePrintReady,
        propDataPrintReady,
        varDataPrintReady,
        varNameProps,
        varNameValue,
        propsSeparateTab,
      } = this
      if (isFullString(varDataPrintReady) && !isFullString(propDataPrintReady)) {
        return `
\`\`\`js
${varDataPrintReady.replace('export default ', `const ${varNameProps} = `)}

export default {
  data () {
    return {
      ${varNameProps},
    }
  },
}
\`\`\``.trim()
      }
      if (isFullString(propDataPrintReady)) {
        return `
\`\`\`
<script>
export default {
  data () {
    return {
      ${propDataPrintReady.replace('\n', `    \n`)}
    }
  },
}
<\/script>
\`\`\``.trim()
      }
      const props = Object.entries(propDataPrintReady).reduce((carry, [key, value]) => {
        if (key === 'schema' && propsSeparateTab.includes(value)) {
          carry += `\n        ${key}: ${value}, // see 'Schema' tab on the left`
          return carry
        }
        carry += `\n        ${key}: ${value},`
        return carry
      }, '')
      return `
\`\`\`
<script>
export default {
  data () {
    return {
      ${varNameValue}: ${valuePrintReady}, // this is in sync with the data when used with v-model
      ${varNameProps}: {${props}
      }
    }
  },
}
<\/script>
\`\`\``.trim()
    },
  },
}
</script>
