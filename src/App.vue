<script setup>
import { AppState } from './AppState.js';
import { computed } from 'vue'




</script>


// HTML


<template>
  <body class="container-fluid">
    <header>
      <div class="text-center">
        <h1>KittenMiner V2</h1>
      </div>
    </header>
    <main>
      <section class="row">
        <div class="col-md-12">
          <img src="https://orig14.deviantart.net/c5f5/f/2016/355/3/f/__gif_oh_christmas_cat_oh_christmas_cat____by_littlepidgie-dasenyx.gif" alt="It's a cat">
        </div>
      </section>
    </main>
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

</style>
