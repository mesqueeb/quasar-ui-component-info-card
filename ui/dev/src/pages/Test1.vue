<template>
  <q-page padding class="q-gutter-xl">
    <InfoCard
      :propData.sync="propData"
      :propsSchema="propsSchema"
      :propsSeparateTab="['Schema']"
      :styleClasses="['.easy-component-yo']"
      :styleClassesData="{}"
      tagName="EasyComponentYo"
      title="Basic Example"
    >
      <q-btn v-bind="propData" label="Touch me" />
    </InfoCard>
    <InfoCard
      :propData.sync="propData"
      :propsSchema="propsSchema"
      :propsSeparateTab="['Schema']"
      :staticSchemaTab="staticSchemaTab"
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
    const propsSchema = [
      {
        id: 'loading',
        fieldType: 'toggle',
        category: 'state',
        label: 'Loading',
        subLabel: 'When `true` it will show a loading state!',
        hasMarkdown: true,
      },
      {
        id: 'label',
        fieldType: 'input',
        category: 'content',
        label: 'Label',
        subLabel: 'An external label above the element.',
        hasMarkdown: true,
      },
    ]
    const staticSchemaTab = `export default [
  {
    id: 'loading',
    fieldType: 'toggle',
    category: 'state',
    label: 'Loading',
    subLabel: 'When \`true\` it will show a loading state!',
    hasMarkdown: true,
  },
  {
    id: 'label',
    fieldType: 'input',
    category: 'content',
    label: 'Label',
    subLabel: 'An external label above the element.',
    hasMarkdown: true,
  },
]`
    const propData = {
      value: {
        hello: 1,
      },
      loading: false,
      otherProp: { data: () => [].map(Boolean) },
      otherProp2: () => [].map(Boolean),
      otherProp3 () {
        return [].map(Boolean)
      },
      label: (val, { formDataNested }) => (formDataNested.clicked ? 'Nice!' : ''),
    }
    return { propData, propsSchema, staticSchemaTab }
  },
}
</script>
