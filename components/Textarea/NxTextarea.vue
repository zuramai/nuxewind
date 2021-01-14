<template>
    <div class='nx-component'>
        <div class="nx-textarea">
            <textarea 
                    :class="textareaClasses" 
                    :name="name" 
                    :id="id" 
                    :cols="cols" 
                    :rows="rows" 
                    @blur="$emit('blur')"
                    @focus="$emit('focus')"
                    @input="$emit('input', value)"
                    v-model="value"></textarea>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
        },
        id: {
            type: String,
        },
        rows: {
            type: Number
        },
        cols: {
            type: Number
        },
        rounded: {
            type: String,
            default: 'md'
        },
        value: {
            type: String
        },
        size: {
            type: String,
            default: 'md'
        }
    },
    computed: {
        textareaClasses() {
            return `
                ${this.getSize}
                rounded-${this.rounded}
                dark:bg-dark-input
            `
        },
        getSize() {
            if(this.size == 'sm') return 'p-2 text-normal'
            else if(this.size == 'md') return 'p-2 text-md'
            else if(this.size == 'lg') return 'p-4 text-xl'
        }
    }
}
</script>