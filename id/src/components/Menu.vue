<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
 <div class="menu"> Menu - ID</div>
</template>

<style scoped>
.menu {
  background: blue;
  height: 45px;
  width: 100%;
}
</style>
