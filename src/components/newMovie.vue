<template>
  <div>
    <b-button v-b-modal.modal-1>
      New Movie
    </b-button>

    <b-modal
      id="modal-1"
      title="BootstrapVue"
    >
      <b-form @submit="onSubmit">
        <b-form-input
          v-model="movie.title"
          class="title"
          type="text"
          name="title"
          placeholder="Title"
        />
        <b-form-input
          v-model="movie.year"
          class="year"
          type="text"
          name="year"
          placeholder="Year"
        />

        <b-form-input
          v-model="movie.genre"
          class="genre"
          type="text"
          name="genre"
          placeholder="Genre"
        />
        <b-form-input
          v-model="movie.img"
          class="img"
          type="text"
          name="img"
          placeholder="Poster Url"
        />

        <b-button
          type="submit"
          variant="primary"
        >
          Submit
        </b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movie: {
        title: '',
        year: '',
        genre: '',
        img: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log(this.$axios)
      this.$axios.post('/movies', this.movie)
        .then(response => {
          alert(response.data.data.message)
          this.$emit('refresh')
        })
    }
  }
}
</script>
