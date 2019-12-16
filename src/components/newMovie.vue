<template>
  <div>
    <b-button v-b-modal.modal-1>
      New Movie
    </b-button>

    <b-modal
      id="modal-1"
      title="BootstrapVue"
    >
      <form>
        Title:<br>
        <input
          class="title"
          type="text"
          name="title"
        ><br>
        Year:<br>
        <input
          class="year"
          type="text"
          name="year"
        ><br>
        Genre:<br>
        <input
          class="genre"
          type="text"
          name="genre"
        ><br>
        Poster Url:<br>
        <input
          class="img"
          type="text"
          name="img"
        >
        <br>
        <input
          type="button"
          value="Submit"
          @click="newMovie()"
        >
      </form>
    </b-modal>
  </div>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery
export default {
  methods: {
    newMovie () {
      let title = $('.title').val()
      let year = $('.year').val()
      let genre = $('.genre').val()
      let img = $('.img').val()
      $('.allmovies').append('<tr>' +
        '<td><img src="' + img + '"></td>' +
        '<td>' + title + '</td>' +
        '<td>' + genre + '</td>' +
        '<td>' + year + '</td>' +
      '</tr>')
    }
  }
}
</script>
