<template>
    <div class='nx-component'>
        <table class="nx-table">
            <thead>
                <slot name="thead"/>
            </thead>
            <tbody>
                <slot name="tbody"/>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props: {

    }
}
</script>