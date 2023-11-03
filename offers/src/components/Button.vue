<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
 <div class="button"> Button</div>
</template>

<style scoped>
  .button {
    width: 100px;
    height: 45px;
    background: black;
    color: white;
  }

</style>
