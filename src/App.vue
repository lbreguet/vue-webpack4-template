<template>
  <div class="container center-content">
    <div id="nav">
      <b-card
        title="FFD"
        no-body
      >
        <b-card-header header-tag="nav">
          <b-nav
            card-header
          >
            <!-- <b-nav-item>'s with child routes. Note the trailing slash on the first <b-nav-item> -->
            <b-nav-item
              to="/"
              exact
              exact-active-class="active"
            >
              <img
                src="../assets/img/logo.png"
                alt="Logo"
                title="Home"
                height="42"
                width="68"
              >
            </b-nav-item>
            <b-nav-item
              to="/about"
              exact
              exact-active-class="active"
            >
              About
            </b-nav-item>
            <b-nav-item
              to="/contact"
              exact
              exact-active-class="active"
            >
              Contact Me
            </b-nav-item>
            <b-nav-item
              to="/directory"
              exact
              exact-active-class="active"
            >
              Film Directory
            </b-nav-item>
            <b-nav-item
              v-if="user"
              to="/logout"
              exact
              exact-active-class="active"
            >
              Logout
            </b-nav-item>
            <b-nav-item
              v-else
              to="/login"
              exact
              exact-active-class="active"
            >
              Login
            </b-nav-item>
          </b-nav>
        </b-card-header>
      </b-card>
    </div>
    <RouterView />
  </div>
</template>

<style lang="stylus" scoped>

.container
  font-family 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
  max-width 1200px

b-nav-item
  font-size 40px
</style>

<script>
export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/10lhvy')
      .then(response => response.json())
      .then(json => {
        sessionStorage.users = JSON.stringify(json.users)
        console.log(sessionStorage)
      })
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}
</script>
