<template>
    <span :class="badgeClasses">
        <slot/>
    </span>
</template>
<script>
export default {
    props: {
        color: {
            required: false,
            default: "primary"
        },
        size: {
            required: false,
            default: 'md'
        },
        shadow: {
            type: String,
            default: 'none'
        },
        rounded: {
            type: String,
            default: 'full',
        }
    },
    data: () => ({
        textColors: {
            'primary': 'text-white',
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
        badgeClasses() {
            return `
                badge bg-gray-400  box-border inline-block font-normal tracking-wide align-middle 
                rounded-${this.rounded}
                ${this.getColorClasses} 
                ${this.getSize}
                shadow-${this.shadow}
            `
        },
        getColorClasses() {
            return `bg-${this.color} ${this.textColors[this.color]}`
        },
        getSize() {
            let size = this.size;
            if(size == 'sm') return `px-1 text-xxs`;
            else if(size == 'md') return `px-2 py-1 text-xs`;
            else if(size == 'lg') return `px-3 py-2 text-sm`;
        }
    }
}
</script> 