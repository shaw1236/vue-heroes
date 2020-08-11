<template>
  <div v-if="hero">
    <h2>{{uppercaseName}} - Details</h2>
    <div><span>Id: </span>{{hero.id}}</div>
    <div>
      <label>name:
        <input type="text" v-model="hero.name"/>
      </label>
    </div>
    <button v-on:click="saveHero">save</button>
    <button v-on:click="goback">go back</button>
  </div>
</template>

<script>
import {HeroApiService} from "../services/HeroApiService";

export default {
  data() {
    return { 
      apiUrl: "http://localhost:8080/api/heroes",
      // {{ $route.params.id }}
      hero: { id: 11, name: "" }
    }
  },
  created: function() {
    let vm = this;
    vm.hero.id = this.$route.params.id? this.$route.params.id : vm.hero.id; 
    HeroApiService.get(vm.hero.id).then(res => vm.hero = res.data)
  },

  methods: {
    saveHero: function() {
      let vm = this;
      
      //console.log("Call add api");
      HeroApiService.put(vm.hero).then(response => {
          //console.log(response);
          vm.$forceUpdate();
      }).catch(error => console.log(error));
    },

    goback: function() {
      //window.history.length > 1? this.$router.go(-1) : this.$router.push('/')
      this.$router.go(-1);
    }
  },

  computed: {
    uppercaseName() {
      return this.hero.name.toUpperCase();
    }    
  }
}

</script>

<style>
/* HeroDetailComponent's private CSS styles */
label {
    display: inline-block;
    width: 3em;
    margin: .5em 0;
    color: #607D8B;
    font-weight: bold;
}
  
input {
    height: 2em;
    font-size: 1em;
    padding-left: .4em;
}
  
button0 {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
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

button:hover {
    background-color: #cfd8dc;
}
  
button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
}
</style>