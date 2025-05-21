<script setup lang="ts">
import { ref, watch } from 'vue'
import SearchInput from '~/components/SearchInput.vue'

const props = defineProps<{
  showSearch?: boolean
  size?: string
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const localValue = ref(props.modelValue ?? '')

watch(
  () => props.modelValue,
  newVal => {
    if (newVal !== localValue.value) {
      localValue.value = newVal ?? ''
    }
  }
)

function onUpdateValue(value: string) {
  localValue.value = value
  emit('update:modelValue', value)
}
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="container">
        <NuxtLink to="/">
          <img src="/logo.svg" alt="Logo" class="user-icon" />
        </NuxtLink>
        <search-input
          v-if="showSearch"
          v-model="localValue"
          :size="size"
          @update:model-value="onUpdateValue"
        />
      </div>
      <img src="/user.svg" alt="user-icon" class="user-icon" />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  padding: 0 60px;
  height: 120px;

  .header-content {
    width: 100%;
    padding: 30px 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
    border-bottom: 1px solid var(--color-white);

    .container {
      display: flex;
      align-items: center;
      gap: 60px;
    }

    .logo,
    .user-icon {
      cursor: pointer;

      &:hover,
      &:focus {
        opacity: 0.8;
      }

      &:active {
        opacity: 0.6;
      }
    }
  }
}
</style>
