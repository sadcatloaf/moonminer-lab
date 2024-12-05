<script setup>
import { AppState } from './AppState.js';
import { computed, onMounted, ref } from 'vue'
import { upgradeService } from './services/UpgradeService.js';

const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.timeUpgrades)
const kittens = computed(() => AppState.kittens)
const clickPower = computed(() => {
  let total = 1
  AppState.clickUpgrades.forEach(upgrade => total += upgrade.quantity * upgrade.multiplier)
  return total
})

const autoPower = computed(() => {
  let total = 0
  AppState.timeUpgrades.forEach(upgrade => total += upgrade.quantity * upgrade.multiplier)
  return total
})

onMounted(() => {
  setInterval(collectAuto, 3000)
})

function increaseUpgrade(upgrade) {
  upgradeService.increaseUpgrade(upgrade)
}

function mineKitten() {
  upgradeService.mineKitten(clickPower.value)
}

function collectAuto() {
  upgradeService.mineKitten(autoPower.value)
}


</script>


// HTML

<!-- v-for="upgrade in upgrades" :key="upgrade.name" -->

<template>

  <body class="container-fluid">
    <header>
      <div class="text-center m-3 text-light">
        <h1>KittenMiner V2</h1>
      </div>
    </header>
    <main>
      <section class="row">
        <div class="col-md-12 d-flex justify-content-center m-3">
          <img @click="mineKitten()" @contextmenu.prevent=""
            src="https://orig14.deviantart.net/c5f5/f/2016/355/3/f/__gif_oh_christmas_cat_oh_christmas_cat____by_littlepidgie-dasenyx.gif"
            alt="It's a cat">
        </div>
      </section>
    </main>
    <footer>
      <div class="text-center text-light fs-2">
        <span>click {{ clickPower }}</span>
        <span class="mx-5">{{ kittens }}</span>
        <span>auto {{ autoPower }}</span>
      </div>
      <section class="row text-light text-center justify-content-evenly m-3 p-2">
        <div v-for="upgrade in clickUpgrades" :key="upgrade.name" class="col-md-5 d-flex">
          <button @click="increaseUpgrade(upgrade)" :disabled="upgrade.price > kittens" class="m-2 btn btn-success">{{
            upgrade.name }}</button>
          <span>Qty {{ upgrade.quantity }}</span>
          <span>Price {{ upgrade.price }}</span>
        </div>
        <div v-for="upgrade in autoUpgrades" :key="upgrade.name" class="col-md-5 d-flex">
          <button @click="increaseUpgrade(upgrade)" :disabled="upgrade.price > kittens" class="m-2 btn btn-warning">{{
            upgrade.name }}</button>
          <span>Qty {{ upgrade.quantity }}</span>
          <span>Price {{ upgrade.price }}</span>
        </div>
      </section>
    </footer>
  </body>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

body {
  background-image: url(https://images.unsplash.com/photo-1575332080189-ad1f42446b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwc25vd3xlbnwwfHwwfHx8Mg%3D%3D);
  background-position: center;
  background-size: cover;
}

img {
  border-radius: 50%;
  height: 70vh;
}
</style>
