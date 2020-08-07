<template>
<div>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li v-for="hero in heroes" :key="hero.id">
      <router-link :to="'/hero/' + hero.id">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </router-link>
      <button v-on:click="deleteHero(hero.id)" class="delete">x</button>
    </li>
  </ul>
    <div>
      <strong>Hero name:</strong>
        <input type="text" v-model="heroName">
        <button v-on:click ="addHero">Add</button>
    </div>
</div>
</template>

<script>
import {HeroApiService} from "../services/HeroApiService";

export default {
  data() {
    return { 
      heroes: [],
      heroName: ""
    }
  },
  created: function() {
    let vm = this;
    HeroApiService.list().then(res => vm.heroes = res.data)
  },

  methods: {
    addHero: function() {
      let vm = this;
      //alert(vm.heroName);
      console.log("Call add api");
      HeroApiService.post({name: vm.heroName}).then(response => {
          console.log(response);
          let hero = response.data;
          vm.heroes.push(hero);
          vm.$forceUpdate();
      }).catch(error => console.log(error));
    },
      
    deleteHero: function(id) {
      let vm = this;     
      //alert(id);
      console.log("Call delete api");  
      HeroApiService.delete(id).then(res => {
          console.log(res);
          vm.heroes = vm.heroes.filter(hero => hero.id !== id);
          vm.$forceUpdate();
      }).catch(error => console.log(error));
    }
  },
    
  computed: {
    method1() {
    }    
  }
}
</script>

<style>
.heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
}
  
.heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
}
  
.heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
}
  
.heroes li.selected {
    background-color: #CFD8DC;
    color: white;
}

.heroes li.selected:hover {
    background-color: #BBD8DC;
    color: white;
}
  
.heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color:#405061;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
}

button {
    border: none;
    color: white;
    background-color: green;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>