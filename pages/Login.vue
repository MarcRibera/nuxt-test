<template lang="html">
    <div class="container">
      <h3 class="title"> Welcome to Nuxt.js</h3>
      <b-form @submit="authenticate">
        <b-form-input
          class="input"
          v-model="user"
          type="text"
          placeholder="Enter email"
          >
        </b-form-input>
        <b-form-input
          class="input"
          v-model="password"
          type="password"
          placeholder="Enter your password"
          >
        </b-form-input>
        <div class="error-msg" v-if="errorMsg" >{{errorMsg}}</div>
        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  layout:'no-navbar',
  data(){
    return {
      user:'',
      password:'',
      errorMsg:'',
      validUser:{name:'mike', password:'adminadmin'},
    }
  },
  methods:{
    authenticate(e) {
      e.preventDefault()
      if (
          this.user === this.validUser.name
          && this.password === this.validUser.password
        )
      {
        this.$router.push('/dashboard')
      } else if (this.user === '' || this.user === ''){
        this.errorMsg = 'Please enter your username and password'
      } else {
        this.errorMsg = 'The username or password is wrong'
      }

    }
  }

}
</script>

<style lang="css" scoped>
.container {
  flex-direction: column;
  max-width: 400px;
}
.title {
  color: deeppink;
  margin: 40px 0px;
  font-weight: 700;
  text-align: center;
  font-size: 45px;
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
.btn {
  margin-top: 40px;
  padding: 16px;
  border: none;
  width: 100%;
  background-color: teal;
  font-size: 18px;
  color: white;
}
.error-msg {
  color: red;
  font-size: 16px;
  text-align: center;
}
</style>
