<template>
  <div class="full-width center-content">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-email"
        label="Email:"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          required
          placeholder="Your email address"
        />
      </b-form-group>
      <b-form-group
        id="input-group-password"
        label="Password:"
        label-for="input-password"
      >
        <b-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter Password"
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
      >
        Log in
      </b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      let myjson = JSON.parse(sessionStorage.users)
      console.log(myjson)
      let email = this.form.email
      let password = this.form.password
      sessionStorage.user = JSON.stringify(myjson.find(function (user) {
        return ((user.email === email) && (user.password === password))
      }))
      console.log(sessionStorage.user)

      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form
  text-align center
  width 50%
</style>
