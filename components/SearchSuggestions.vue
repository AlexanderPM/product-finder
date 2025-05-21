<script setup lang="ts">
import type { Product } from '~/composables/useProducts'

defineProps<{
  products: Product[]
  searchTerm: string
}>()
</script>

<template>
  <div v-if="products.length || searchTerm.trim().length > 0" class="suggestions-wrapper">
    <ul v-if="products.length" class="suggestions">
      <li v-for="product in products" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
    <p v-else class="no-results">Ничего не найдено</p>
  </div>
</template>

<style scoped lang="scss">
.suggestions-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  margin-top: 15px;
  width: 726px;
  max-height: 305px;
  background-color: transparent;
  border: 2px solid var(--color-white);
  border-radius: 10px;
  overflow-y: auto;
  list-style: none;
}

.suggestions {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    text-align: start;
    margin: 0 15px;
    padding: 15px 0;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    border-bottom: 1px solid var(--color-white);

    &:last-child {
      border-bottom: none;
    }
    &:hover {
      opacity: 0.8;
    }
  }
}

.no-results {
  padding: 15px;
  color: var(--color-white);
  font-size: 16px;
  text-align: center;
  margin: 0;
}
</style>
