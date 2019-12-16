<template>
  <div>
    <form
      action="https://formspree.io/mpzzywyr"
      method="POST"
    >
      Name:<br>
      <input
        type="text"
        name="name"
      ><br>Email:<br>
      <input
        type="email"
        name="_replyto"
      ><br>Subject:<br>
      <input
        type="text"
        name="subject"
        value="New submission!"
      ><br>Message:<br>
      <input
        type="text"
        name="body"
      ><br><br>
      <button
        type="submit"
      >
        Send
      </button>
    </form>
  </div>
</template>

<style lang="stylus" scoped>
  form
    text-align center
</style>

<script>

</script>
