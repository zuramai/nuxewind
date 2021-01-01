<template>
    <button class='px-5 py-2 bg-blue-400 dark:bg-gray-900 text-white'>
        <slot/>
    </button>
</template>
<script>
export default {
    props: {
        color: {
            default: 'primary'
        }
    }
}
</script>