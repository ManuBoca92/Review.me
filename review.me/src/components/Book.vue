<template>
  <div>
    <div>
      <app-home v-model="result"></app-home>
    </div>
    <template>
      <div class="container">
        <br>
        <div class="row">
          <div class="col-md-4 col-xs">
            <img :src="result.volumeInfo.imageLinks.small || result.volumeInfo.imageLinks.thumbnail" alt="">
          </div>

          <div class="col-md-8 col-xs-10">
            <div class="col">
              <p
               v-for="author in result.volumeInfo.authors"
               :key="author">
                <strong>Authors:</strong> {{ author }}</p>
            </div>
            <div class="w-100"></div>
            <div class="col">
              <p
               v-for="category of result.volumeInfo.categories"
               :key="category">
               <strong>Categories:</strong> {{ category }}</p>
            </div>
            <div class="w-100"></div>
            <div class="col">
              <p><strong>Ratings:</strong> {{ result.volumeInfo.averageRating }}</p>
            </div>
            <div class="w-100"></div>
            <div class="col">
              <p><strong>No. of ratings:</strong> {{ result.volumeInfo.ratingsCount}}</p>
            </div>
            <div class="w-100"></div>
            <div class="col">
              <p><strong>Summary</strong></p>
              <p v-html="result.volumeInfo.description"></p>
            </div>
          </div>

        </div>
    </div>
    </template>

  </div>
</template>

<script>
import Home from './Home.vue'
import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
    appHome: Home
  },
  computed: {
    ...mapGetters([
      'result'
    ])
  },
  methods: {
    ...mapActions([
      'getBook'
    ])
  }

}
</script>

<style scoped>
.container {
  width: 1650px;
  max-width: 1450px;;
  height: 2218px;
  margin-top: 1%;
  padding-left: 5%;
  padding-right: 5%;
}

p {
  padding-left: 10px;
}
</style>
