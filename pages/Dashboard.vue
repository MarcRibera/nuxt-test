<template lang="html">
  <div class="container">
      <h1>Dashboard</h1>
  </div>
</template>

<script>
  export default {
    // example how set metadata for current page
    head() {
      return {
        meta: [
          {
            hid: 'dashboard description',
            name: 'description',
            content: 'Dashboard metadata description'
          }
        ]
      }
    }
  }
</script>

<style lang="css" scoped>
</style>
