<template>
    <div :class="{'page-settings absolute flex items-start':true, 'open': show}">
        <div class="page-settings-toggler bg-blue-600 hover:bg-blue-800 transition duration-200 px-3 py-2 pb-3 cursor-pointer rounded-l-xl "
            @click="show=!show">
            <bootstrap-icon icon="gear" class='text-white'></bootstrap-icon>
        </div>
        <div class="page-settings-menu p-3 shadow-xl bg-white w-64 min-h-24">
            <div class="form-group">
                <label for="">Theme</label>
                <nx-radio v-model="theme" name="theme" val="dark" label="Dark Mode"></nx-radio>
                <nx-radio v-model="theme" name="theme" val="light" label="Light Mode"></nx-radio>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        show: false,
    }),
    computed: {
        theme: {
            set(newValue) {
                this.$store.commit('changeTheme',newValue)
            },
            get() {
                return this.$store.state.theme
            }
        }
    }
}
</script>
<style scoped lang="scss">
.page-settings {
    top: 50%;
    right: -16rem;
    &.open {
        right: 0;
    }
}
</style>