<template>
  <div class="home">
    <h3 align="center">Formula One API</h3>
    <h4>Select Team</h4>
    <div>
      <b-form-select id="dropdown" v-model="selected">
         <b-form-select-option :value="data._id" v-for="data in datas" :key="data.Constructor">{{ data.Constructor }}</b-form-select-option>
      </b-form-select>
    </div>
       <b-button class="mt-5" v-on:click="seen = true" variant="primary">Generate Key</b-button>
         <h4>API link</h4>
       <div v-if="seen" id="api-link">
         <h3>{{link}}{{selected}}</h3>
       </div>
  </div>
</template>

<script>
import DataService from '../web_service/services'

export default {
  name: 'home',
  data () {
    return {
      datas: null,
      selected: null,
      link: 'http://localhost:5000/api/',
      seen: false
    }
  },
  created () {
    DataService.getAll()
      .then(res => {
        this.datas = res.data.data
      })
      .catch((err) => {
        alert('error when fetching API' + err)
      })
  }
}
</script>

<style scoped>
#dropdown {
  width: 500px;
}
#api-link {
  margin-top: 20px;
}
</style>
