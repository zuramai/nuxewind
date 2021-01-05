<template>
  <div>
    <ol class="list-none p-0 inline-flex">
      <li v-for="item in items" :key="item.text" class="flex items-center mr-2">
        <nuxt-link
          tag="a"
          :to="item.href"
          class="mr-2"
          :class="breadcrumbClassItems"
        >
          {{ item.text }}
        </nuxt-link>
        <bootstrap-icon
          :icon="divider"
          size="sm"
          v-if="!item.disabled"
        ></bootstrap-icon>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sizeClasses: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      textColors: {
        primary: "text-gray-600",
        secondary: "text-blue-600",
        warning: "text-yellow-600",
        danger: "text-red-600",
        success: "text-green-600",
        dark: "text-light-600",
        info: "text-white",
        light: "text-gray-600",
      },
    };
  },
  props: {
    items: {
      type: Array,
    },
    divider: {
      type: String,
      default: "chevron-right",
    },
    size: {
      type: String,
      default: "md",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    breadcrumbClassItems() {
      return `mr-2 ${this.sizeClasses[this.size]} ${
        this.textColors[this.color]
      }`;
    },
  },
};
</script>
