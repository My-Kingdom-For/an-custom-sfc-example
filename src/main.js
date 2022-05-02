import { defineCustomElement } from 'vue'

function kebablize (str) {
  return String(str)
    .replace(/[a-z][A-Z]/g, (match) => `${match[0]}-${match[1]}`)
    .toLowerCase()
}

function importAll (resolve) {
  resolve.keys().forEach((key) => {
    const vueComponent = resolve(key).default
    const customComponent = defineCustomElement(vueComponent)
    const kebabName = kebablize(key.replace(/^\.\/|\.ce\.vue$/g, ''))

    console.log(kebabName, customComponent)
    window.customElements.define(kebabName, customComponent)
    return key
  })
}

importAll(require.context('./components/', false, /\.ce\.vue$/))
