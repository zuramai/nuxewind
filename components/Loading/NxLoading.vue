<template>
    <div class="loading">
        <div :class="getClasses" v-if="type == 'ripple'" :style="getSize"><div></div><div></div></div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'ripple'
        },
        width: {
            type: Number,
            default: 30,
        },
        height: {
            type: Number,
            default: 30,
        }
    },
    computed: {
        getClasses() {
            return `nx-loading nx-${this.type} ` 
        },
        getSize() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`,
            }
        }
    }
}
</script>