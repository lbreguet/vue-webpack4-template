<template>
  <div>
    <div>
      <b-button v-b-modal.modal-1>
        Filter
      </b-button>

      <b-modal
        id="modal-1"
        title="Filter"
      >
        <div>
          <b-form-group label="Genres:">
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="selected"
              :options="genres"
              name="genres"
            />
          </b-form-group>
        </div>
        <span @click="onClear">Clear</span>
      </b-modal>
    </div>
    <div>
      <div
        v-for="movie in filteredMovies"
        :key="movie.id"
      >
        <img :src="movie.img">
        <p>{{ movie.title }}</p>
        <p>{{ movie.genre }}</p>
        <p>{{ movie.year }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      movies: [],
      genres: [],
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
        let g = []
        for (let i = 0; i < this.movies.length; i++) {
          let temp = this.movies[i].genre.split(', ')
          for (let j = 0; j < temp.length; j++) {
            g.push(temp[j])
          }
        }
        let rem = (arr) => arr.filter((v, i) => arr.indexOf(v) === i)
        this.genres = rem(g)
        this.genres.sort()
      })
  },
  computed: {
      filteredMovies () {
          if (this.selected === []) {
              console.log("empty")
              return this.movies
          } else {
              console.log("filter")
              return this.movies
          }
      }
  },
  methods: {
    onClear () {
       this.selected = []
    }
  }
}
</script>
