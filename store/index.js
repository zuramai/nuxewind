export const state = () => ({
    layout: 'vertical',
    theme: "dark",
    minimizeSidebar: false
});
export const mutations = {
    toggleSidebar(state) {
        state.minimizeSidebar = !state.minimizeSidebar
    },
    changeLayout(state, value) {
        state.layout = value;
    },
    changeTheme(state, value) {
        this.$colorMode.preference = value;
        state.theme = value;
    }
}
export const actions = {
    changeTheme(state, value) {
        state.theme = value;
    }
}