<template>
  <div>
    <ul>
      <li
        v-for="movie in movies"
        :key="movie"
      >
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

<script>
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
