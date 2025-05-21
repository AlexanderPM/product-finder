<script setup lang="ts">
const modelValue = defineModel<string>({ default: '' })

const { size = '' } = defineProps<{
  size?: string
}>()
</script>

<template>
  <div :class="['search-input', size]">
    <Icon name="mdi:magnify" class="icon" />
    <input
      :value="modelValue"
      type="text"
      placeholder="Find Your product"
      class="input"
      @input="modelValue = ($event.target as HTMLInputElement)?.value || ''"
    />
  </div>
</template>

<style scoped lang="scss">
.search-input {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-white);
  border-radius: 24px;
  background: transparent;
  padding: 8px 12px;
  width: 100%;

  .icon {
    color: var(--color-white);
    font-size: 20px;
    margin-right: 8px;
    flex-shrink: 0;
  }

  .input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 16px;
    font-weight: 400;
    width: 100%;
    font-family: inherit;

    &::placeholder {
      color: var(--color-white);
    }
  }
}

.small {
  width: 460px;
}

.middle {
  padding: 26px 46px;
  width: 726px;
  border-radius: 35px;
  font-weight: 600;

  .icon {
    font-size: 24px !important;
    margin-right: 30px;
  }
}
</style>
