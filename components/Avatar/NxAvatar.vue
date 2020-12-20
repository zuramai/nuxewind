<template>
    <div class="avatar">
        <img :src="src" :alt="alt" 
            :class="{
                'w-4 h-4': size=='xs',
                'w-10 h-10': size=='sm',
                'w-12 h-12': size=='md',
                'w-16 h-16': size=='lg',
                'w-24 h-24': size=='xl',
                'object-cover rounded-full':true
            }">
    </div>
</template>
<script>
export default {
    props: {
        src: {
            required: true
        },
        alt: {
            type: String,
            default: "Avatar"
        },
        size: {
            type: String,
            default: 'md'
        }
    }
}
</script>