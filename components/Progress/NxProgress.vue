<template>
    <div class='nx-component mb-2'>
        <div :class="progressClasses">
            <div :class="progressBarClasses" :style="{ width: `${value}%` }">
                <label :class="{'absolute right-0 text-xs':true, 'top--5': label=='top'}" v-if="label"><slot/></label>
            </div>
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
                nx-progress-bar 
                ${this.getColor} ${this.label=='top' ? 'mt-5': ''} 
                relative
            `
        },
        getSize() {
            if(this.size == 'sm') { return 'h-1 rounded-full' }
            if(this.size == 'md') { return 'h-2 rounded-full' }
            if(this.size == 'lg') { return 'h-3 rounded-full' }
            if(this.size == 'xl') { return 'h-5 rounded-full' }
        },
        getColor() {
            switch (this.color) {
                case 'primary':
                    return `bg-${this.color}`
                    break;
                case 'secondary':
                    return `bg-${this.color} text-gray-700`
                    break;
                case 'warning':
                    return `bg-${this.color}`
                    break;
                case 'danger':
                    return `bg-${this.color}`
                    break;
                case 'success':
                    return `bg-${this.color}`
                    break;
                case 'dark':
                    return `bg-${this.color}`
                    break;
                case 'info':
                    return `bg-${this.color}`
                    break;
                default:
                    break;
            }
        }
    }
}
</script>