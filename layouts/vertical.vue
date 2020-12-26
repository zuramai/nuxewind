<template>
    <div id="layout-vertical" class='layout-wrapper bg-light dark:bg-black-600 min-h-screen'>
        <div id="app">
            <nx-header/>
        </div>
        <div id="content" 
            :class="{'sidebar-minimized': $store.state.minimizeSidebar, 
                    'sidebar-maximized': !$store.state.minimizeSidebar}">
            <Nuxt/>
        </div>
        <page-settings></page-settings>
    </div>
</template>