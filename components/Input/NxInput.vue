<template>
    <div class='nx-component mb-2'>
        <label v-if="label">{{ label }}</label>
        <input type="text" name="" id="" :class="inputClasses" @focus="onfocus" @blur="onblur" :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'md'
        },
        label: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        rounded: {
            type: String,
            default: 'md'
        },
        placeholder: {
            type: String
        },
        block: {
            default: true
        }
    },
    data: () => ({
        focus: false,
    }),
    methods: {
        onfocus() {
            this.$emit('focus');
            this.focus = true;
        },
        onblur() {
            this.$emit('blur');
            this.focus = false;
        }
    },
    computed: {
        inputClasses() {
            return `
                transition duration-200 border border-gray-300 rounded-${this.rounded} ${this.getSize} ${this.getBlock} ${this.focusClasses}
            `
        },
        getBlock() {
            return this.block ? 'w-full' : ''
        },
        getSize() {
            if(this.size == 'sm') { return 'p-2' }
            else if(this.size == 'md') { return 'px-2 py-1' }
            else if(this.size == 'lg') { return 'p-3' }
        },
        focusClasses() {
            if(this.focus)
                return `shadow-md border-blue-500`
        }
    }
}
</script>