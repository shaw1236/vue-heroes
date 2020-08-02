<template>
  <div id="app">
    <nav>
        <router-link to="/" class="link">Home</router-link>
        <router-link to="/Hello" class="link">Hello</router-link>
        <router-link to="/dashboard" class="link">Dashboard</router-link>
        <router-link to="/heroes" class="link">Hero List</router-link>
    </nav>
    <router-view />   
  </div>
</template>

<script>
export default {
}
</script>

<style>
.link {
    text-decoration: underline;
}
</style>