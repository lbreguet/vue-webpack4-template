<template>
  <div class="container">
    <newMovie @refresh="refresh()" />
    <table class="all-movies">
      <tr>
        <th>Poster</th>
        <th>Title</th>
        <th>Genre</th>
        <th>Year</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
      <tr
        v-for="movie in movies"
        :key="movie.id"
      >
        <td><img :src="movie.img"></td>
        <td>{{ movie.title }}</td>
        <td>{{ movie.genre }}</td>
        <td>{{ movie.year }}</td>
      </tr>
    </table>
  </div>
</template>

<style lang="stylus" scoped>
    table
      text-align center

    tr
      padding 10
</style>

<script>
// import newMovie from '../components/newMovie'
export default {
  data: function () {
    return {
      movies: []
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/1byntq')
      .then(response => response.json())
      .then(json => {
        this.movies = json.movies
      })
  }
}
</script>
