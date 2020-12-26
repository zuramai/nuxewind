<template>
    <div id="topbar" class='w-full h-16 flex items-center'>
        <div class="container mx-auto">
            <ul class="topbar-menu flex">
                <li class='sidebar-item mr-5' v-for="(menuItem,index) in menuItems" :key="index">
                    <nuxt-link :to="{path: menuItem.url}" class='sidebar-link  flex items-center py-3 text-gray-300 hover:opacity-1 transition duration-100 hover:text-white'>
                        <bootstrap-icon :icon="menuItem.icon" size="sm" :title="menuItem.text"></bootstrap-icon>
                        <transition name="fade-3s-instant">
                            <span class='text-md ml-3 mt-1 sidebar-menu-text' v-if="!$store.state.minimizeSidebar">{{ menuItem.text }}</span>
                        </transition>
                        <nx-dropdown></nx-dropdown>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import MenuItems from './menu-items.json';
export default {
    data: () => ({
        menuItems: MenuItems
    })
}
</script>
<style lang="scss">
#topbar {
    background: mix(#4d73ff,#9969ff,  40%) ;  /* fallback for old browsers */
    
}
</style>