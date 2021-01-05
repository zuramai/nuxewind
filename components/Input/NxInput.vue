<template>
    <div class="nx-component">
        <div :class="wrapperInputClasses" v-if="placeholder || labelPlaceholder">
            <input 
                v-on:input="updateValue($event.target.value)" :class="inputClasses" 
                @focus="isFocus=true" 
                @blur="isFocus=false"
                :disabled='disabled'
                :type="type"
                :value="value"
                >
            <span :class="spanClasses">{{ placeholder || labelPlaceholder }}</span>
            <i :class="{[icon]:true, 'nx-input-icon absolute px-2 border-r border-gray-400': true}" v-if="icon"></i>
        </div>
        <div :class="wrapperInputClasses" v-else-if="label ">
            <span :class="spanClasses">{{ label }}</span>
            <input 
                v-on:input="updateValue($event.target.value)" :class="inputClasses" 
                @focus="isFocus=true" 
                @blur="isFocus=false"
                :type="type"
                :value="value"
                >
            <i :class="{[icon]:true, 'nx-input-icon absolute px-2 border-r border-gray-400': true}" v-if="icon"></i>
        </div>
        <div :class="wrapperInputClasses" v-else>
            <input 
                v-on:input="updateValue($event.target.value)" 
                :class="inputClasses" 
                @focus="isFocus=true" 
                @blur="isFocus=false"
                :type="type"
                :value="value"
                >
        </div>
    </div>
</template>
<script>
export default {
    props: {
        disabled: {
            required: false,
            type: Boolean,
            default: false,
        },
        size: {
            required:false,
            type: String,
            default: 'md'
        },
        placeholder: {
            required: false,
            type: String
        },
        label: {
            required: false,
            type: String,
        },
        labelPlaceholder: {
            required: false,
            type: String
        },
        icon: {
            required: false,
            type: String,
        },
        color: {
            required: false,
            default: 'primary',
            validator: function (value) {
                return ['primary', 'success', 'warning', 'danger', 'dark'].indexOf(value) !== -1
            }
        },
        rounded: {
            required:false,
            type: String,
            default: 'md',
        },
        value: {
            type: String,
            default: '',
        },
        type: {
            required: false,
            default: 'text',
            validator: function (value) {
                return ['text', 'email', 'number', 'url', 'password'].indexOf(value) !== -1
            }
        }
    },
    data() {
        return {
            isFocus: false,
        }
    },
    computed: {
        wrapperInputClasses() {
            return {
                'mt-6': this.labelPlaceholder,
                'is-label-placeholder': this.labelPlaceholder, 
                'nx-input-placeholder': this.placeholder, 
                'nx-input-wrapper relative my-3':true, 
                [`nx-input-${this.color}`]: true, 
                'is-input-icon':this.icon,  
                'is-focus': this.isFocus,
                [`size-${this.size}`]: true,
                'nx-input-label': this.label
            }
        },
        inputClasses() {
            return `nx-input dark:nx-input-dark nx-input-${this.size} border border-gray-400 rounded-${this.rounded} w-full transition duration-200`
        },
        spanClasses() {
            return {
                'nx-placeholder absolute ': this.placeholder || this.labelPlaceholder,
                'nx-label': this.label,
                'pointer-events-none': this.label,
                'cursor-text select-none w-full  pointer-events-none text-gray-600 duration-200':true, 
                'opacity-0': this.value!=='' && this.placeholder,
                'stick': this.value!=='' && this.labelPlaceholder,
                'text-xs': this.size == 'sm',
                'text-sm': this.size == 'md',
                'text-md': this.size == 'lg',
            }
        }
    },
    watch: {
        isFocus() {
            if(this.isFocus) this.$emit('focus');
            else this.$emit('blur');
        }
    },
    methods: {
        updateValue(value) {
            this.value = value;
            this.$emit('input', value)
        }
    }
    
}
</script>
<style lang="scss">
</style>