<template>
    <div class="section-header mb-5">
        <div class="section-title" v-if="!!this.$slots.title">
            <h3 class='text-2xl dark:text-white'>
                <slot name="title"/>
            </h3>
        </div>
        <div class="section-subtitle" v-if="!!this.$slots.subtitle">
            <p class='text-md text-gray-500'>
                <slot name="subtitle"/>
            </p>
        </div>
    </div>
</template>