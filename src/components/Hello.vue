<template>
  <div>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  data() {
      return { msg: 'Hello Vue World!', done: false }
  },

  methods: {
      check() { this.done = !this.done; }
    }
};
</script>