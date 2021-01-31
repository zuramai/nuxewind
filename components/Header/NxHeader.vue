<template>
    <div id="header-wrapper">
        <nx-sidebar v-if="isLayoutVertical"/>
        <header id='main-header' :class="{'w-100 bg-white flex items-center':true, 'border-b border-gray-400': isLayoutVertical ,'dark:bg-dark-header': isLayoutHorizontal}">
            <nx-container vertical="fluid" class="flex-grow">
                <div class="flex row items-center">
                    <div class="w-1/2 col">
                        <div class='logo flex items-center'>
                            <Logo v-if="isLayoutHorizontal"/>
                            <template v-else>
                                <transition name="fade-3s-reverse">
                                    <Logo v-if="$store.state.minimizeSidebar && isLayoutVertical"/>
                                </transition>
                                <transition name="fade-3s">
                                    <bootstrap-icon v-if="!$store.state.minimizeSidebar" icon="filter-left" class='text-gray-500' size='lg'></bootstrap-icon>
                                </transition>
                            </template>
                        </div>
                    </div>
                    <div class="w-1/2 col flex justify-end">
                        <div class="dropdown flex items-center">
                            <div class="name mr-2 font-semibold text-right">
                                <h5 class='dark:text-gray-400'>Ahmad Saugi</h5>
                                <p class='text-xs'>Administrator</p>
                            </div>
                            <nx-avatar :src="require('@/assets/images/avatar/1.jpg')" size="sm"/>
                        </div>
                    </div>
                </div>
            </nx-container>
        </header>
        <nx-topbar v-if="isLayoutHorizontal"/>
    </div>
</template>
<script>
export default {
    computed: {
        isLayoutVertical() {
            return this.$store.state.layout == 'vertical'
        },
        isLayoutHorizontal() {
            return this.$store.state.layout == 'horizontal'
        }
    }
}
</script>