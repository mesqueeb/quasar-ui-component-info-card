<template>
  <div class="tabs-panel-script">
    <q-markdown v-if="code" no-line-numbers no-container :src="code" />
  </div>
</template>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'

export default {
  name: 'TabsPanelScript',
  components: { QMarkdown },
  props: ['valuePrintReady', 'propDataPrintReady', 'varNameProps', 'varNameValue', 'propsSeparateTab'],
  data () { return {} },
  computed: {
    code () {
      const { valuePrintReady, propDataPrintReady, varNameProps, varNameValue, propsSeparateTab } = this
      const props = Object.entries(propDataPrintReady)
        .reduce((carry, [key, value]) => {
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
