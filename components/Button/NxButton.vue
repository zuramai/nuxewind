<template>
    <button :class="buttonClasses" 
        :disabled="disabled || loading" 
        :type="type"
        @click="$emit('click')"
    >
        <half-circle-spinner
            :animation-duration="1000"
            :size="20"
            :color="'rgba(255,255,255,.5)'"
            v-if="loading"
            class='mr-2'
        />
        <slot/>
    </button>
</template>
<script>

export default {
    props: {
        color: {
            default: 'primary'
        },
        block: {
            default: false
        },
        rounded: {
            default:'md',
            type: String,
        },
        shadow: {
            type: String,
            default: null,
        },
        variant: {
            type: String,
            default: 'solid'
        },
        size: {
            type: String,
            default: 'md'
        },
        type: {
            type: String,
            default: 'button'
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
            'xl': 'px-5 py-3 text-xl',
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
                flex items-center
                nx-button
                transition duration-200
                rounded-${this.rounded}
                shadow-${this.shadow}
                ${this.getVariants}
                ${this.sizeClasses[this.size]}
                ${this.textColors[this.color]}
                ${this.block ? 'w-full justify-center' : ''}
            `
        },
        getVariants() {
            if(this.variant == 'solid') return `bg-${this.color} disabled:bg-lighten-${this.color} disabled:cursor-not-allowed hover:bg-darken-${this.color}`
            else if(this.variant == 'outline') return `border border-${this.color} text-${this.color} hover:text-white hover:bg-${this.color}`
        },
        getSize() {

        }
    }
}
</script>