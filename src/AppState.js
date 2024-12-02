import { reactive } from 'vue'
import { Kittens } from './models/Kittens.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

upgrades: [
  new Kittens({
    name: 'Yarn Ball'
  }),
  new Kittens({
    name: 'Temptations'
  }),
  new Kittens({
    name: 'Laser Pointer'
  }),
  new Kittens({
    name: 'Christmas Tree'
  })
]



})

