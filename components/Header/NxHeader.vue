<template>
    <div id="header-wrapper">
        <NxSidebar/>
        <header id='main-header' class="w-100 bg-white border-b border-gray-400 flex items-center">
            <div class="container mx-auto">
                <div class="flex row items-center">
                    <div class="w-1/2 col">
                        <div class='logo flex items-center'>
                            <transition name="fade-3s-reverse">
                                <Logo v-if="$store.state.minimizeSidebar"/>
                            </transition>
                            <transition name="fade-3s">
                                <bootstrap-icon v-if="!$store.state.minimizeSidebar" icon="filter-left" class='text-gray-500' size='lg'></bootstrap-icon>
                            </transition>
                        </div>
                    </div>
                    <div class="w-1/2 col flex justify-end">
                        <div class="dropdown flex items-center">
                            <div class="name mr-2 font-semibold text-right">
                                <h5>Ahmad Saugi</h5>
                                <p class='text-xs'>Administrator</p>
                            </div>
                            <nx-avatar :src="require('@/assets/images/avatar/1.jpg')" size="sm"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>