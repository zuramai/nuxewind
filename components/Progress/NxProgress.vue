<template>
    <div class='nx-component mb-2'>
        <label v-if="label">{{ label }}</label>
        <div :class="progressClasses">
            <div :class="progressBarClasses" :style="{ width: `${value}%` }"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
        },
        value: {
            type: String,
            default: 0
        },
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
        progressClasses() {
            return `
                nx-progress ${this.getSize}
            `
        },
        progressBarClasses() {
            return `
                nx-progress-bar ${this.getColor}
            `
        },
        getSize() {
            if(this.size == 'sm') { return 'nx-progress-bar-sm' }
            if(this.size == 'md') { return 'nx-progress-bar-md' }
            if(this.size == 'lg') { return 'nx-progress-bar-lg' }
        },
        getColor() {
            switch (this.color) {
                case 'primary':
                    return 'bg-primary'
                    break;
                case 'secondary':
                    return 'bg-gray-400 text-gray-700'
                    break;
                case 'warning':
                    return 'bg-yellow-500'
                    break;
                case 'danger':
                    return 'bg-red-500'
                    break;
                case 'success':
                    return 'bg-green-500'
                    break;
                case 'dark':
                    return 'bg-gray-700'
                    break;
                case 'info':
                    return 'bg-blue-300'
                    break;
                default:
                    break;
            }
        }
    }
}
</script>