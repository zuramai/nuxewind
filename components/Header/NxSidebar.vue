<template>
    <div :class="{
        'sidebar-wrapper absolute left-0 bottom-0 top-0 h-screen bg-white':true,
        'sidebar-open': !$store.state.minimizeSidebar 
        }">
        <div class="sidebar-topbar flex items-center justify-center" @click="$store.commit('toggleSidebar')">
            <bootstrap-icon icon="filter-left" class='text-gray-500' size='lg'></bootstrap-icon>
        </div>
        <ul class="sidebar-menu mt-16">
            <li class='sidebar-item text-center' v-for="(menuItem,index) in menuItems" :key="index">
                <nuxt-link :to="{path: menuItem.url}" class='sidebar-link block py-3 text-gray-500'>
                    <bootstrap-icon :icon="menuItem.icon" size="md" :title="menuItem.text"></bootstrap-icon>
                </nuxt-link>
            </li>
        </ul>
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