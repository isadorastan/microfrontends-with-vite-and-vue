<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})


</script>

<template>
 <div class="filter"> Filters: (offer)</div>
</template>

<style scoped>
  .filter {
    width: 300px;
    height: 450px;
    border: 2px solid blue;
  }

</style>
