<template>
    <div class="nx-component" @mouseover="showDropdown" @mouseleave="hideDropdown">
        <div class="dropdown-button" @click="toggleDropdown" ref="dropdownButton">
            <slot name="button"></slot>
        </div>
        <div class="nx-dropdown-wrapper absolute z-10">
            <transition :name="transition">
                <div class="nx-dropdown bg-white dark:bg-dark rounded-sm shadow-lg  p-5" :style="{ top: offsetTop }" v-show="show"> 
                    <slot name="body"/>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: Boolean
        },
        transition: {
            type: String,
            default: 'drop'
        },
        trigger: {
            type: String,
            default: 'click'
        }
    },
    mounted() {
        this.getDropdownOffset();
    },
    data: () => ({
        show: false,
        offsetTop: 0
    }),
    methods: {
        getDropdownOffset() {
            let btnHeight = this.$refs.dropdownButton.clientHeight;
            
            this.offsetTop = `${btnHeight}px`
        },
        hideDropdown() {
            this.show = false
        },
        showDropdown() {
            this.show = true;
        },
        toggleDropdown() {
            
        }
    }
}
</script>