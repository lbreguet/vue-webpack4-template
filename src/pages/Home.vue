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
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}
</script>
