<template>
  <div class="custom-css">
    <h1>Hi {{ name }} !</h1>
    <h2>I'm on github !</h2>
  </div>
</template>

<!-- API Option: oK -->
<!-- script>
export default {
  props: {
    name: {
      type: String,
      default: 'World'
    }
  }
}
</script -->

<!-- API Composition -->
<script setup>
defineProps({
  name: {
    type: String,
    default: 'World'
  }
})
</script>

<style>
.custom-css {
  background: gray;
}
</style>
