import Vue from 'vue'
import * as spinners from 'epic-spinners'

Object.entries(spinners).forEach(([name, component]) => {
    Vue.component(name, component)
})