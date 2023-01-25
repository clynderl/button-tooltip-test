<template>
  <component
      :is="component"
      class="v-button"
      :class="classes"
      v-bind="linkProperties"
      :disabled="disabled"
      :type="!link && !href ? type : null"
      @click="onClick"
  >
        <span
            v-if="$slots.default"
            class="v-button__text"
        >
            <slot />
        </span>
  </component>
</template>

<script setup>
import {computed, resolveComponent} from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator(value) {
      return ['medium'].includes(value);
    },
  },
  color: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary'].includes(value);
    },
  },
  href: {
    type: String,
    default: '',
  },
  link: {
    type: [String, Object],
    default: '',
  },
  type: {
    type: String,
    default: 'button',
  },
  disabled: Boolean,
  responsive: Boolean,
  blank: Boolean,
});
const classes = computed(() => [
  `v-button--${props.color}`,
  `v-button--${props.size}`,
  {
    'is-disabled': props.disabled,
    'is-responsive': props.responsive,
  },
]);
const emit = defineEmits(['click']);
const component = computed(() => {
  if (props.href) {
    return 'a';
  } else if (props.link) {
    return resolveComponent('NuxtLink');
  }
  return props.type;
});
const linkProperties = computed(() => {
  const linkProperties = {};
  if (props.link) {
    linkProperties.to = props.link;
  } else if (props.href) {
    linkProperties.href = props.href;
  }
  if (props.blank) {
    linkProperties.target = '_blank';
  }
  return linkProperties;
});
const onClick = e => {
  if (props.disabled) {
    return;
  }
  emit('click', e);
};
</script>

<style lang="scss">
.v-button {
  $block: &;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  font-family: $base-font;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  user-select: none;

  &--primary {
    background-color: $brand-blue;
    color: $base-0;
    transition: background .4s ease;

    &:hover {
      background-color: $brand-blue-hover;
    }

    &:active {
      background-color: $brand-blue-active;
    }

    &.is-disabled {
      //TODO: add disabled color
      background-color: $brand-blue;
    }
  }

  &--medium {
    height: 56px;
    padding: 0 50px;
    border-radius: $border-radius;
    font-size: 16px;
    line-height: 18px;
    font-weight: 400;
  }

  &.is-responsive {
    width: 100%;
  }

  &__text {
    display: flex;
    line-height: normal;
    opacity: 1;
  }
}
</style>
