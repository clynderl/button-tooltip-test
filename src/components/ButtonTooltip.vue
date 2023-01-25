<template>
  <VTooltip>
    <template #activator>
      <VButton @click="emit('click')">
        {{ buttonText}}
      </VButton>
    </template>
    {{ tooltipText }}
  </VTooltip>
</template>

<script setup>
import VTooltip from '@/components/VTooltip.vue';
import VButton from '@/components/VButton.vue';

defineProps({
  buttonText: {
    type: String,
    default: 'Click me',
  },
  tooltipText: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem et fuga laboriosam.',
  },
})

const emit = defineEmits(['click']);
</script>
