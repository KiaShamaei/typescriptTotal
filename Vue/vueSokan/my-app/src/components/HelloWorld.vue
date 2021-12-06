<template>
  <div>
    <p>{{ msg }}</p>
    <h2>This is oruter</h2>
    <p><router-link to="/navi">navi</router-link></p>
    <p><router-link to="/choose">choose</router-link></p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
