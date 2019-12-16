<template>
  <div v-if="codeVBind && codeRegular" class="tabs-panel-template q-pa-md">
    <div class="text-bold q-my-sm">dynamic prop binding with v-bind</div>
    <q-markdown no-line-numbers no-container :src="codeVBind" />
    <div class="text-bold q-my-sm">regular prop binding</div>
    <q-markdown no-line-numbers no-container :src="codeRegular" />
  </div>
  <div v-else class="tabs-panel-template">
    <q-markdown no-line-numbers no-container :src="codeVBind" />
  </div>
</template>

<script>
import { QMarkdown } from '@quasar/quasar-ui-qmarkdown'
import { isFullString } from 'is-what'

export default {
  name: 'TabsPanelTemplate',
  components: { QMarkdown },
  props: {
    tagName: {
      desc: 'The tag name for the template component. Eg. `EasyForm` will render `<EasyForm />`',
      type: String,
    },
    varNameProps: { type: String },
    varNameValue: { type: String },
    propDataPrintReady: [Object, String],
    varDataPrintReady: [Object, String],
  },
  data () {
    return {}
  },
  computed: {
    codeVBind () {
      const { tagName, varNameValue, varNameProps } = this
      return `
\`\`\`html
<template>
  <${tagName}
    v-model="${varNameValue}"
    v-bind="${varNameProps}"
  />
<\/template>
\`\`\``.trim()
    },
    codeRegular () {
      const { tagName, varNameValue, propDataPrintReady, varDataPrintReady } = this
      if (isFullString(varDataPrintReady) && !isFullString(propDataPrintReady)) return false
      const props = Object.entries(propDataPrintReady).reduce((carry, [key, value]) => {
        if (isFullString(value) && value.startsWith("'") && value.endsWith("'")) {
          carry += `\n    ${key}="${value.slice(1, -1)}"`
          return carry
        }
        carry += `\n    :${key}="${value}"`
        return carry
      }, `v-model="${varNameValue}"`)
      return `
\`\`\`html
<template>
  <${tagName}
    ${props}
  />
<\/template>
\`\`\``.trim()
    },
  },
}
</script>
