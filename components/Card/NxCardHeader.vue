<template>
    <div class="card-header p-4 pb-3 flex justify-between">
        <div class="card-heading">
            <h4 class='text-gray-600 text-md uppercase
                        dark:text-gray-500'><slot name="title"/></h4>
            <p class='text-sm text-gray-500'><slot name="subtitle"/></p>
        </div>
        <div class="card-actions">
            <slot name="actions"/>
        </div>
    </div>
</template>