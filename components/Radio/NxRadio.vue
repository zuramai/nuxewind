<template>
    <div class='nx-component'>
        <div :class="{'nx-radio':true, [`nx-radio-${shape}`]: true, [`nx-radio-${color}`]: true}">
            <input :id="getValue" type="radio" :name="name" class="hidden" :value="val" @change="changeSelect()"/>
            <label :for="getValue" class="flex items-center cursor-pointer">
                <span class="w-4 h-4 inline-block mr-1 rounded-full border border-gray-400" v-if="shape=='circle'"></span>
                <span class="w-4 h-4 inline-block mr-1 rounded-sm border border-gray-400" v-else-if="shape=='square'"></span>
                {{label}}
            </label>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        val: {
            type: String,
        },
        color: {
            type: String,
            required:false,
            default: "primary"
        },
        name: {
            type: String,
            required: true,
        },
        shape: {
            type: String,
            required: false,
            default: "circle"
        }
    },
    methods: {
        changeSelect() {
            this.$emit('input', this.val)
        }
    },
    computed: {
        getValue() {
            return this.val.toLowerCase();
        }
    }
}
</script>
<style lang="scss">

.nx-radio {
	input[type="radio"] {
		&+label span {
			transition: background .2s,
			transform .2s;

			&.triangle-up {
				width: 0;
				height: 0;
				border-left: 50px solid transparent;
				border-right: 50px solid transparent;
				border-bottom: 100px solid red;
			}
		}
	}

	@each $key, $val in $colors {
		
		&.nx-radio-#{$key} input[type="radio"]:checked + label {
			color: $val; //text-blue
				span {
					background-color: $val;; //bg-blue
					box-shadow: 0px 0px 0px 2px white inset;
				}
			}
	}
}
</style>