<template>
  <div class="tabs-panel-code">
    <q-markdown v-if="code" no-line-numbers no-container :src="code" />
  </div>
</template>

<script>
import { isFullString } from 'is-what'
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'

export default {
  name: 'TabsPanelCode',
  components: { QMarkdown },
  props: {
    varDataPrintReady: {
      desc:
        'A single object with all variables to be printed. Each key will be printed as `const [key] = value`.',
      type: [Object, String],
    },
    varNameProps: String,
  },
  data () {
    return {}
  },
  computed: {
    code () {
      const { varDataPrintReady, varNameProps } = this
      if (isFullString(varDataPrintReady)) {
        return `
\`\`\`js
${varDataPrintReady.replace('export default ', `const ${varNameProps} = `)}
\`\`\``.trim()
      }
      const vars = Object.entries(varDataPrintReady).reduce((carry, [key, value]) => {
        carry += `\nconst ${key} = ${value}`
        return carry
      }, '')
      return `
\`\`\`js${vars}
\`\`\``.trim()
    },
  },
}
</script>
