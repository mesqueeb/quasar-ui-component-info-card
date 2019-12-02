<template>
  <div class="tabs-panel-code">
    <q-markdown v-if="code" no-line-numbers no-container :src="code" />
  </div>
</template>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'

export default {
  name: 'TabsPanelCode',
  components: { QMarkdown },
  props: {
    varDataPrintReady: {
      desc: 'A single object with all variables to be printed. Each key will be printed as `const [key] = value`.',
      type: Object,
    },
  },
  data () { return {} },
  computed: {
    code () {
      const { varDataPrintReady } = this
      const vars = Object.entries(varDataPrintReady)
        .reduce((carry, [key, value]) => {
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
