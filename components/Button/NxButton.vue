<template>
    <button :class="buttonClasses" :disabled="disabled || loading">
        <nx-loading type='ripple' v-if="loading"/>
        <slot v-else/>
    </button>
</template>
<script>
export default {
    props: {
        color: {
            default: 'primary'
        },
        rounded: {
            default:'md',
            type: String,
        },
        shadow: {
            type: String,
            default: null,
        },
        type: {
            type: String,
            default: 'solid'
        },
        size: {
            type: String,
            default: 'md'
        },
        disabled: {
            type: Boolean,
            default: false, 
        },
        loading: {
            type: Boolean,
            default: false, 
        }
    },
    data: () => ({
        sizeClasses: {
            'sm': 'px-1  text-sm',
            'md': 'px-3 py-1 text-base',
            'lg': 'px-3 py-2 text-lg',
        },
        textColors: {
            'primary': 'text-gray-200',
            'secondary': 'text-white',
            'warning': 'text-white',
            'danger': 'text-white',
            'success': 'text-white',
            'dark': 'text-white',
            'info': 'text-white',
            'light': 'text-gray-600',
        }
    }),
    computed: {
        buttonClasses() {
            return `
                nx-button
                transition duration-200
                rounded-${this.rounded}
                shadow-${this.shadow}
                ${this.getVariants}
                ${this.sizeClasses[this.size]}
                ${this.textColors[this.color]}
            `
        },
        getVariants() {
            if(this.type == 'solid') return `bg-${this.color} disabled:bg-lighten-${this.color} disabled:cursor-not-allowed hover:bg-darken-${this.color}`
            else if(this.type == 'outline') return `border border-${this.color} text-${this.color} hover:text-white hover:bg-${this.color}`
        },
        getSize() {

        }
    }
}
</script>