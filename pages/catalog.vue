<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProducts, type Product } from '~/composables/useProducts'

const search = ref('')

const { data, pending, error } = useProducts()

const filteredProducts = computed<Product[]>(() => {
  if (!data?.value?.products) return []
  return data.value.products.filter(p => p.title.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="catalog-page">
    <HeaderBar v-model="search" :show-search="true" size="small" />

    <div class="catalog">
      <h2 class="title">Catalog</h2>

      <div v-if="pending">Загрузка...</div>
      <div v-else-if="error">Ошибка при загрузке</div>
      <div v-else-if="filteredProducts.length === 0 && search.trim().length > 0" class="no-results">
        Ничего не найдено
      </div>
      <ProductList v-else :products="filteredProducts" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.catalog-page {
  min-height: 100dvh;
  width: 100%;
  background-color: var(--bg-color);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  row-gap: 100px;

  .catalog {
    padding: 0 60px 60px;

    .title {
      font-size: 40px;
      font-weight: 700;
      margin-bottom: 40px;
    }

    .no-results {
      color: var(--color-white);
      font-size: 18px;
      padding: 20px 0;
      text-align: start;
    }
  }
}
</style>
