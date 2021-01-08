<template>
    <div class="card-wrapper mb-5 dark:shadow-none">
        <div class="card bg-white  rounded-md border border-gray-200 
                    dark:bg-dark-card
                    dark:border-gray-800
                    dark:shadow-none">
            <slot name="header"/>
            <div class="card-image" v-if="this.$slots.image">
                <slot name="image">
                    <img src="@/assets/images/no-image.png" alt="No image available">
                </slot>
            </div>
            <slot name="body-free"/>
            <div class="card-body px-5 py-5 pt-0" v-if="$slots.body">
                <slot name="body"/>
            </div>
            <div class="card-footer">
                <slot name="footer"/>
            </div>
        </div>
    </div>
  </div>
</template>
