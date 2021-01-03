<template>
    <div class='nx-component'>
        <div class="nx-table-wrapper">
            <table :class="tableClasses">
                <thead>
                    <slot name="thead"/>
                </thead>
                <tbody>
                    <slot name="tbody"/>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        type: {
            type: String,
            default: 'hover',
            validator: function (value) {
                return ['hover', 'bordered', 'borderless'].indexOf(value) !== -1
            }
        },
        size: {
            type: String,
            default: 'md',
            validator: function (value) {
                return ['sm', 'md', 'lg'].indexOf(value) !== -1
            }
        },
        rounded: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        tableClasses() {
            return `
                nx-table 
                w-full 
                rounded-lg
                table-${this.type}
                table-${this.size}
            `
        }
    }
}
</script>