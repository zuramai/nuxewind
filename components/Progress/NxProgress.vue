<template>
    <div class='nx-component mb-2'>
        <label v-if="label">{{ label }}</label>
        <div class="nx-progress">
            <div class="nx-progress-bar" :style="{ width: `${value}%` }"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
        },
        value: 0
    }
}
</script>