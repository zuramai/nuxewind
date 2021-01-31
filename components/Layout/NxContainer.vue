<template>
    <div :class="`${containerClasses} mx-auto`">
        <slot/>
    </div>
</template>
<script>
export default {
    props: {
        vertical: {
            required: false
        },
        horizontal: {
            required: false,
        }
    },
    computed: {
        containerClasses() {
            return this.$store.state.layout == 'vertical' ? this.verticalClasses : this.horizontalClasses
        },
        verticalClasses() {
            return this.vertical == 'fluid' ? 'container-fluid' : 'container'
        },
        horizontalClasses() {
            return this.horizontal == 'fluid' ? 'container-fluid' : 'container'
        },
        
    }
}
</script>