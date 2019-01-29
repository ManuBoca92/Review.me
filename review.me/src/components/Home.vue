<template>
  <div class="jumbotron">
    <div class="container">
        <div class="row">
        <div class="col-lg-10 col-xs-6">
          <router-link to="/" tag="a">
            <h3>review.me</h3>
          </router-link>
        </div>
        <div class="w-100"></div>
        <div class="col-xs-6">
          <input
            type="search"
            v-model="$store.state.text"
           >
        </div>
        <div class="col-xs-6">
          <router-link to="/book">
              <button @click="getBook">GO</button>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'text'
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
h3 {
  font-family: Herculanum;
  font-size: 60px;
  text-align: left;
  text-shadow: 0px 6px 10px #000000;
  opacity: 100px;
  width: 355px;
  height: 70px;
  cursor: pointer;
  padding-left: 200px;
}

input[type=search]{
  border-color: #000000;
  opacity: 100px;
  width: 672px;
  height: 40px;
  font-size: 15px;
  font-family: Herculanum;
  border-radius: 45px;
  border: #000000 0.1px;
  text-align: left;
  box-shadow: 0px 2px 30px;
  outline:none;
  padding: 20px;
}

.center {
  display: table;
  width: 40%;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

.search {
  display: flex;
}

button {
  background-color: #ffffff;
  border: none;
  color: #000000;
  width: 100px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  border-radius: 20px;
  margin-left: 20px;
  box-shadow: 0px 2px 30px;
  cursor: pointer;
}
</style>
