<script setup>
import { ref } from 'vue'
import Button from 'offer_bundle/Button'

defineProps({
  msg: String,
})

</script>

<template>
  <div class="card">
    <p> Cards (foundation)</p>
    <Button />
  </div>
</template>

<style scoped>
 .card {
    width: 200px;
    height: 350px;
    border: 1px solid purple;
 }
</style>
