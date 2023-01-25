<template>
  <div ref="target" class="v-tooltip" @click="onActivatorClick">
    <slot name="activator"></slot>
    <div class="v-tooltip__content" v-show="isVisible">
      <slot />
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {onClickOutside} from '@vueuse/core';

const target = ref(null);

const isVisible = ref(false);

function onActivatorClick() {
  isVisible.value = true;
}

onClickOutside(target, () => isVisible.value = false);
</script>

<style lang="scss" scoped>
.v-tooltip {
  position: relative;
  cursor: pointer;

  &__content {
    box-sizing: border-box;
    position: absolute;
    top: 115%;
    left: 50%;
    z-index: 100;
    pointer-events: none;
    min-width: 200px;
    padding: 10px 12px;
    background: $base-1000;
    box-shadow: 0 4px 4px rgba($base-1000, 0.25);
    border-radius: 6px;
    font-family: $base-font;
    text-align: center;
    font-size: 12px;
    line-height: 14px;
    color: $base-0;
    transform: translateX(-50%);

    &:after {
      content: "";
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent $base-1000 transparent;
    }
  }
}
</style>
