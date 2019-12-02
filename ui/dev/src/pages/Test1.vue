<template>
  <q-page padding>
    <InfoCard
      :propData.sync="propData"
      :propsSchema="propsSchema"
      :propsSeparateTab="[]"
      :styleClasses="['.easy-component-yo']"
      :styleClassesData="{}"
      tagName="EasyComponentYo"
      title="Basic Example"
    >
      <q-btn v-bind="propData" label="Touch me" />
    </InfoCard>
  </q-page>
</template>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>

<script>
export default {
  data () {
    const propData = {
      loading: false,
    }
    const propsSchema = [
      {
        id: 'loading',
        fieldType: 'toggle',
        category: 'state',
        label: 'Loading',
        subLabel: 'When `true` it will show a loading state!',
        hasMarkdown: true,
      }
    ]
    return { propData, propsSchema }
  },
}
</script>
