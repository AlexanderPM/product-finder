<script setup lang="ts">
defineProps<{ product: Product }>()
</script>

<template>
  <div class="card">
    <div class="main-info">
      <img src="/product.png" alt="preview" class="preview" />
      <div class="product-title">{{ product.title }}</div>
      <div class="desc">{{ product.description }}</div>
    </div>
    <div class="warranty">
      <div class="warranty_label">warranty</div>
      <div class="warranty_level">{{ product.warrantyInformation }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid var(--color-white);
  border-radius: 23px;
  width: 420px;
  min-height: 490px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .main-info {
    .preview {
      width: 103%;
      height: 253px;
      object-fit: cover;
      border-radius: 23px;
      display: block;
      transform: translateX(-5px);
    }

    .product-title {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      margin: 0 auto;
      padding: 12px 40px;
    }

    .desc {
      margin-top: 24px;
      padding: 20px 20px;
    }
  }

  .warranty {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;

    &_label,
    &_level {
      font-weight: 700;
    }
  }
}
</style>
