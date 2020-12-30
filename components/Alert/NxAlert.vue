<template>
    <div class="nx-component">
        <div :class="alertClasses">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'md'
        },
        color: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        alertClasses() {
            return `
                nx-alert shadow-lg rounded-md ${this.getSize} ${this.getColor}
            `
        },
        getSize() {
            if(this.size == 'sm') { return 'p-2' }
            if(this.size == 'md') { return 'px-4 py-3' }
            if(this.size == 'lg') { return 'px-5 py-4' }
        },
        getColor() {
            switch (this.color) {
                case 'primary':
                    return 'bg-primary text-white'
                    break;
                case 'secondary':
                    return 'bg-gray-400 text-gray-700'
                    break;
                case 'warning':
                    return 'bg-yellow-500 text-white'
                    break;
                case 'danger':
                    return 'bg-red-500 text-white'
                    break;
                case 'success':
                    return 'bg-green-500 text-white'
                    break;
                case 'dark':
                    return 'bg-gray-700 text-white'
                    break;
                case 'info':
                    return 'bg-blue-300 text-white'
                    break;
                default:
                    break;
            }
        },
    }
}
</script>