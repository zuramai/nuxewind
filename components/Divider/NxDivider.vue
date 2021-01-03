<template>
    <div class='nx-divider block text-center overflow-hidden my-3'>
        <div class="divider-text relative inline-block px-3 bg-white">
            {{text}}
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            required: false,
            type: String
        }
    }
}
</script>
<style lang="scss">
.nx-divider {
    .divider-text:before, .divider-text:after {
        content: "";
        position: absolute;
        top: 50%;
        width: 9999px;
        border-top: 1px solid #dfe3e7;
    }
    .divider-text:before {
        right: 100%
    }
    .divider-text:after {
        left: 100%
    }
}
</style>