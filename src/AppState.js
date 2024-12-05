import { reactive } from 'vue'
import { Kittens } from './models/Kittens.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,
kittens: 0,
clickUpgrades: [
  new Kittens({
    name: 'Yarn Ball',
    price: 25,
    multiplier: 10
  }),
  new Kittens({
    name: 'Temptations',
    price: 35,
    multiplier: 20
  }),
],

timeUpgrades: [
  new Kittens({
    name: 'Laser Pointer',
    price: 100,
    multiplier: 35
  }),
  new Kittens({
    name: 'Christmas Tree',
    price: 5000,
    multiplier: 100
  })
]


})

