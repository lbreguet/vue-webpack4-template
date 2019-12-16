<template>
  <div class="container">
    <newMovie />
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
import newMovie from '../components/newMovie'
export default {
  components: {
    newMovie
  },
  data: function () {
    return {
      movies: [],
      years: [],
      selected: []
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/1byntq')
      .then(response => response.json())
      .then(json => {
        this.movies = json.movies
      })
      .then(() => {
        let y = []
        for (let i = 0; i < this.movies.length; i++) {
          let temp = this.movies[i].year
          y.push(temp)
        }
        let rem = (arr) => arr.filter((v, i) => arr.indexOf(v) === i)
        this.years = rem(y)
        this.years.sort()
      })
  },
  methods: {
    onClear () {
      this.selected = []
    }
  }
}
</script>
