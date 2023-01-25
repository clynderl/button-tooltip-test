<script setup>
import {useCounterStore} from '@/stores/counter';
import ButtonTooltip from '@/components/ButtonTooltip.vue';

const counterStore = useCounterStore();
</script>

<template>
  <div class="content">
    <ButtonTooltip
        :button-text="counterStore.buttonText"
        :tooltip-text="counterStore.tooltipText"
        @click="counterStore.increment"
    />
  </div>
</template>

<style lang="scss">
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>

