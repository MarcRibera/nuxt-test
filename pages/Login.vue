<template lang="html">
    <div class="container">
      <h3 class="title"> Welcome to Nuxt.js</h3>
      <b-form @submit="onSubmit">
        <b-form-input
          class="input"
          v-model="user"
          type="text"
          placeholder="Enter email"
          required>
        </b-form-input>
        <b-form-input
          class="input"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          required>
        </b-form-input>
        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  // layout:'no-navbar',
  data(){
    return {
      user:'',
      password:''
    }
  },
  methods:{
    onSubmit() {
      console.log(this.$router);
      this.$router.push('/dashboard')
    }
  }

}
</script>

<style lang="css" scoped>
.container {
  flex-direction: column
}
.title {
  color: deeppink;
  margin: 40px 0px;
  font-weight: 700;
}
.sign_in {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 40px;
  margin: 0 auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08), 0 3px 3px 0 rgba(0, 0, 0, 0.12);
}
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
.message {
  color: red;
  font-size: 16px;
  max-width: 260px;
  text-align: center;
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
