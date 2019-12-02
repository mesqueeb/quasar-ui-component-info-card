import { version } from '../package.json'

import InfoCard from './components/InfoCard/index.vue'

export {
  version,

  InfoCard
}

export default {
  version,

  InfoCard,

  install (Vue) {
    Vue.component(InfoCard.name, InfoCard)
  }
}
