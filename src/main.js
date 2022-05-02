import { defineCustomElement } from 'vue'
import MyCustomVueComponent from '@/components/MyCustomVueComponent.ce.vue'

const MyElement = defineCustomElement(MyCustomVueComponent)

window.customElements.define('my-custom-vue-component', MyElement)
