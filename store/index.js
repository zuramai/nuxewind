export const state = () => ({
    layout: 'horizontal',
    theme: "light",
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
        state.theme = value;
    }
}
export const actions = {
    toggleSidebar(state) {        
    }
}