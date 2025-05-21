<script setup lang="ts">
import { defineProps } from 'vue'
import ProductCard from './ProductCard.vue'

defineProps<{ products: Product[] }>()
</script>

<template>
  <div class="list">
    <ProductCard v-for="item in products" :key="item.id" :product="item" />
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  gap: 38px;
  flex-wrap: wrap;
}
</style>
