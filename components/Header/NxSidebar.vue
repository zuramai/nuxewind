<template>
    <div :class="{
        'sidebar-wrapper absolute left-0 bottom-0 top-0 h-screen bg-white':true,
        'sidebar-open': !$store.state.minimizeSidebar 
        }">
        <div class="sidebar-topbar p-5 flex items-center justify-center" @click="$store.commit('toggleSidebar')">
            <transition name="fade-3s">
                <Logo v-if="!$store.state.minimizeSidebar"/>
            </transition>
            <transition name="fade-3s">
                <bootstrap-icon v-if="$store.state.minimizeSidebar" icon="filter-left" class='text-gray-500' size='lg'></bootstrap-icon>
            </transition>
        </div>
        <ul class="sidebar-menu mt-16">
            <li class='sidebar-item' v-for="(menuItem,index) in menuItems" :key="index">
                <nuxt-link :to="{path: menuItem.url}" class='sidebar-link  flex items-center py-3 text-gray-500 hover:bg-gray-100'>
                    <bootstrap-icon :icon="menuItem.icon" size="md" :title="menuItem.text"></bootstrap-icon>
                    <transition name="fade-3s-instant">
                        <span class='text-md font-semibold mt-1 sidebar-menu-text' v-if="!$store.state.minimizeSidebar">{{ menuItem.text }}</span>
                    </transition>
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