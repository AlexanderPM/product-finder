<script setup lang="ts">
import { ref, computed } from 'vue'
import { useProducts, type Product } from '~/composables/useProducts'

import HeaderBar from '~/components/HeaderBar.vue'
import SearchInput from '~/components/SearchInput.vue'
import SearchSuggestions from '~/components/SearchSuggestions.vue'

const search = ref('')
const { data } = useProducts()

const filteredProducts = computed<Product[]>(() => {
  if (!data?.value?.products || !search.value.trim()) return []

  const seen = new Set<string>()

  return data.value.products.filter(p => {
    const title = p.title.toLowerCase()
    if (!title.includes(search.value.toLowerCase()) || seen.has(title)) return false
    seen.add(title)
    return true
  })
})
</script>

<template>
  <div class="home-page">
    <HeaderBar />

    <div class="content">
      <div class="main-content">
        <h1 class="title">Find Product of your dream</h1>

        <div class="search-container">
          <SearchInput v-model="search" size="middle" />
          <SearchSuggestions :products="filteredProducts" :search-term="search" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  min-height: 100dvh;
  width: 100%;
  background-color: var(--bg-color);
  color: var(--color-white);
  display: flex;
  flex-direction: column;

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-content {
      margin-top: -200px;
      text-align: center;

      .title {
        text-align: start;
        font-size: 48px;
        font-weight: 700;
        margin-left: -10px;
      }

      .search-container {
        margin-top: 168px;

        position: relative;
        width: 100%;
      }
    }
  }
}
</style>
