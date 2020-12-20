<template>
    <div class="card-wrapper mb-5">
        <div class="card bg-white  rounded-md border border-gray-200 
                    dark:bg-gray-600">
            <slot name="header"/>
            <div class="card-image" v-if="this.$slots.image">
                <slot name="image">
                    <img src="@/assets/images/no-image.png" alt="No image available">
                </slot>
            </div>
            <div class="card-body px-5 py-5 pt-0">
                <slot name="body"/>
            </div>
            <div class="card-footer">
                <slot name="footer"/>
            </div>
        </div>
    </div>
</template>