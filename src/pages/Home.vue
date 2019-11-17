<template>
  <div>
    <h1>Welcome <span v-if="user">{{ user.name }}</span> to the Fan Film Database</h1>
  </div>
</template>

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
        /*
        console.log(json.users)
        sessionStorage.users = JSON.parse(json.users)[0]
        console.log(sessionStorage)
        */
        sessionStorage.setItem('users', JSON.stringify(json.users))

        let usersDataString = sessionStorage.getItem('users')
        console.log(usersDataString)

        var usersData = JSON.parse(usersDataString)
        console.log(usersData)

        sessionStorage.users = JSON.parse(usersData)
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
