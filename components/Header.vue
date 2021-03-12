<template lang="html">
  <div class="container header-wrap">
    <h1>{{projectTitle}}</h1>
    <p>Testing Nuxt.js</p>
  </div>
</template>

<script>
export default {
  computed:{
    projectTitle() {
      return this.$store.state.projectTitle
    }
  }
}
</script>

<style lang="css" scoped>
  h1 {
    color: deeppink;
    font-size: 3em;
    margin-bottom: 0px;
  }
  .header-wrap {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding-top: 72px;

  }
  p {
    font-style: italic;
  }
</style>
