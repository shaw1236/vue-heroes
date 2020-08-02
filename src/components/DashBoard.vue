<template>
  <div>
    <div>
      <h1>{{title}}</h1>
      <nav>
        <router-link :to="'/dashboard'">
          <p class="link">Dash Board</p>
        </router-link>
        <router-link :to="'/heroes'">
          <p class="link">Hero List</p>
        </router-link>
      </nav>
    </div>
    <hr/>
    <h3>Top Heroes</h3>
    <div class="grid grid-pad">
      <router-link v-for="hero in heroes" :key="hero.id" class="col-1-4" :to="'/hero/'+ hero.id">
        <div class="module hero">
          <h4>{{hero.name}}</h4>
        </div>
      </router-link>
    </div>
    <div v-if="messages.length">
      <hr/>
        <h2>Messages</h2>
          <button v-on:click="clear" class="clear">clear</button>
          <div v-for="message in messages" :key="message"> {{message}} </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const Headers = { 'Content-Type': 'application/json' };

export default {
  data() {
    return {
      title: "Tour of Heroes", 
      apiUrl: "http://localhost:8080/api/heroes",
      heroes: [],
      heroName: "",
      messages: []
    }
  },
  created: function() {
    let vm = this;
    axios.get(vm.apiUrl, {Headers}).then(res => vm.heroes = res.data.slice(0, 4))
    vm.add("Get the data from API");
  },
  methods: {
     clear: function() {
        this.messages.length = 0;
        this.$forceUpdate();
     },
     add: function(message) {
        this.messages.push(message);
        this.$forceUpdate();
     }
  }

  /*components: {
    Message
  }
  */ 
}

</script>

<style>
[class*='col-'] {
    float: left;
    padding-right: 20px;
    padding-bottom: 20px;
}
[class*='col-']:last-of-type {
    padding-right: 0;
}
a {
    text-decoration: none;
}
*, *:after, *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
h3 {
    text-align: center;
    margin-bottom: 0;
}
h4 {
    position: relative;
}
.grid {
    margin: 0;
}
.col-1-4 {
    width: 25%;
}
.module {
    padding: 20px;
    text-align: center;
    color: #eee;
    max-height: 120px;
    min-width: 120px;
    background-color: #3f525c;
    border-radius: 2px;
}
.module:hover {
    background-color: #eee;
    cursor: pointer;
    color: #607d8b;
}
.grid-pad {
    padding: 10px 0;
}
.grid-pad > [class*='col-']:last-of-type {
    padding-right: 20px;
}
@media (max-width: 600px) {
    .module {
      font-size: 10px;
      max-height: 75px; 
    }
}
@media (max-width: 1024px) {
    .grid {
      margin: 0;
    }
    .module {
      min-width: 60px;
    }
}
.link {
    text-decoration: underline;
}
</style>
