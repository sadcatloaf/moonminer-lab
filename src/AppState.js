import { reactive } from 'vue'
import { Upgrades } from './models/Upgrades.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

upgrades: [
  new Upgrades({
    name: 'Yarn Ball'
  }),
  new Upgrades({
    name: 'Temptations'
  }),
  new Upgrades({
    name: 'Laser Pointer'
  }),
  new Upgrades({
    name: 'Christmas Tree'
  })
]
})

