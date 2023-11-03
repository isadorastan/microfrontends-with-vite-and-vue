<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Menu from 'id_bundle/Menu'
import Filter from 'offer_bundle/Filter'
import Card from './components/Cards.vue'
</script>

<template>
  <div class="app-body">
    <Menu></Menu>
    <div class="content">
      <Filter></Filter>
      <div class="showcase">
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content {
    display: flex;
    gap: 20px;
    margin: 20px 50px;
  }

  .showcase {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
</style>
