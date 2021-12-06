

<template>
<div>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  
  </div>
   
    <!-- Toolbar -->
    <nav class="toolbar" role="banner">
      <span>{{appName}}</span>
    </nav>
    <router-view></router-view>

 
  </div>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      appName: 'Vue Converter',
      rialValue: 0,
      usdValue: 0,
      usdValueInput: ''
    }
  },
    methods: {

  }
}
</script>

<style>

</style>
