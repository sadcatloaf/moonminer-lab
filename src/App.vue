<script setup>
import { AppState } from './AppState.js';
import { computed } from 'vue'

const upgrades = AppState.upgrades

function increaseUpgrades() {
  upgradeService.increaseUpgrades(upgrades)
}
function mineKitten() {
  console.log('Clicked kitten')
}


</script>


// HTML

<!-- v-for="upgrade in upgrades" :key="upgrade.name" -->

<template>
  <body class="container-fluid">
    <header>
      <div class="text-center m-3">
        <h1>KittenMiner V2</h1>
      </div>
    </header>
    <main>
      <section class="row">
        <div class="col-md-12 d-flex justify-content-center m-3">
          <img @click="mineKitten" src="https://orig14.deviantart.net/c5f5/f/2016/355/3/f/__gif_oh_christmas_cat_oh_christmas_cat____by_littlepidgie-dasenyx.gif" alt="It's a cat">
        </div>
      </section>
    </main>
    <footer>
      <section class="row text-light text-center justify-content-evenly m-3 p-2">
        <div class="col-md-5 d-flex text-right">
          <div class="col-4">
            <button @click="increaseUpgrades" class="m-2 btn btn-success">Yarn Ball</button>
            <span>0</span>
          </div>
          <div class="col-4">
            <button @click="increaseUpgrades" class="m-2 btn btn-success">Temptations</button>
            <span>0</span>
          </div>
        </div>
        <div class="col-md-2">
          <span>0</span>
        </div>
        <div class="col-md-5 d-flex text-right">
          <div class="col-4">
            <button @click="increaseUpgrades" class="m-2 btn btn-success">Laser Pointer</button>
            <span>0</span>
          </div>
          <div class="col-4 ">
            <button @click="increaseUpgrades" class="m-2 btn btn-success">Christmas Tree</button>
            <span>0</span>
          </div>
        </div>
      </section>
    </footer>
  </body>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

body{
  background-image: url(https://images.unsplash.com/photo-1575332080189-ad1f42446b1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwc25vd3xlbnwwfHwwfHx8Mg%3D%3D);
  background-position: center;
  background-size: cover;
}

img{
  border-radius: 50%;
  height: 70vh;
}

</style>
