<template>
  <div class="hello">
    <h3 align="center">Formula One API</h3>
    <h4>Select Team</h4>
    <div id="dropdown">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dropdown {
  width: 500px;

}
</style>
