<template>
  <div class="bootstrap-icon">
    <i
      :class="{ [`bi bi-${icon}`]: true }"
      :style="{
        fontSize: getSize().width + 'px',
        color: 'inherit',
        width: getSize().width + 'px',
        height: getSize().height + 'px',
      }"
    ></i>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "md",
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
  },
  computed: {
    getExactSize() {
      let size = this.getSize();
      return {
        width: !!this.width ? this.width : size.width,
        height: !!this.height ? this.height : size.height,
      };
    },
  },
  methods: {
    getSize() {
      let size;
      if (this.size == "sm") size = { width: 18, height: 18 };
      else if (this.size == "md") size = { width: 24, height: 24 };
      else if (this.size == "lg") size = { width: 32, height: 32 };
      return size;
    },
  },
};
</script>
