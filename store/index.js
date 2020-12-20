export const state = () => ({
    theme: ['#2e5bff','#e0e7ff'],
    minimizeSidebar: true
});
export const mutations = {
    toggleSidebar(state) {
        state.minimizeSidebar = !state.minimizeSidebar
    }
}
export const actions = {
    toggleSidebar(state) {        
    }
}