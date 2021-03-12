<template lang="html">
  <div class="container">
    <h4>Project Settings:</h4>

    <b-form @submit="updateTitle">
      <b-form-input
        class="input"
        v-model="projectTitle"
        type="text"
        placeholder="Type your new project name">
      </b-form-input>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectTitle:'',
    }
  },
  methods: {
    updateTitle(e){
      e.preventDefault()
      this.$store.commit('changeProjectTitle', this.projectTitle)
      projectTitle:''
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    flex-direction: column;
    max-width: 700px;
  }
  h4 {margin:30px 0px;}
  .input {
    font-size: 18px;
    line-height: 1.8;
    padding: 8px 16px;
    display: block;
    width: 100%;
    min-width: 260px;
    background: #f3f3f3;
    border: 1px solid #eee;
    margin-bottom: 20px;
  }
  .btn {
    margin-top: 40px;
    padding: 16px;
    border: none;
    width: 100%;
    background-color: teal;
    font-size: 18px;
    color: white;
  }
</style>
