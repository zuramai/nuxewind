<template>
    <div id="topbar" class='w-full h-16 flex items-center dark:bg-dark-topbar'>
        <div class="container mx-auto">
            <ul class="topbar-menu flex">
                <template v-for="(menuItem,index) in menuItems" >
                    <li class='sidebar-item mr-8' :key="index" v-if="menuItem.condition!=='vertical-only'" >
                        <nx-dropdown v-if="!!menuItem.children" class='dropdown-topbar' >
                            <template slot="button">
                                <nuxt-link :to="{path: menuItem.url}" class='sidebar-link relative flex items-center py-3 text-gray-300 hover:opacity-1 transition duration-100 hover:text-white'>
                                    <bootstrap-icon :icon="menuItem.icon" size="sm" :title="menuItem.text"></bootstrap-icon>
                                    <transition name="fade-3s-instant">
                                        <span class='text-md ml-3 mt-1 sidebar-menu-text' v-if="!$store.state.minimizeSidebar">{{ menuItem.text }}</span>
                                    </transition>
                                </nuxt-link>
                            </template>
                            <template slot="body">
                                <ul class="submenu">
                                    <li class="" v-for="(submenu, sIndex) in menuItem.children" :key="sIndex">
                                        <nuxt-link :to="{path: submenu.url}" class='dark-hover:text-gray-400 hover:text-gray-800 text-gray-600 py-2 transition duration-200 block'>{{ submenu.text }}</nuxt-link>
                                    </li>
                                </ul>
                            </template>
                        </nx-dropdown>
                        <nuxt-link v-else :to="{path: menuItem.url}" class='sidebar-link relative flex items-center py-3 text-gray-300 hover:opacity-1 transition duration-100 hover:text-white'>
                            <bootstrap-icon :icon="menuItem.icon" size="sm" :title="menuItem.text"></bootstrap-icon>
                            <transition name="fade-3s-instant">
                                <span class='text-md ml-3 mt-1 sidebar-menu-text' v-if="!$store.state.minimizeSidebar">{{ menuItem.text }}</span>
                            </transition>
                        </nuxt-link>
                    </li>
                </template>
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
    background: mix(#4d73ff,#9969ff,  60%) ;  /* fallback for old browsers */
    .dropdown-topbar {
        top: 50px;
    }
}
</style>