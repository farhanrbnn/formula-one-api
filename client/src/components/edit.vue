<template>
  <div id="edit">
    <h3 align="center">Insert New Data</h3>
    <div id="form">
      <b-form-group id="input-group-1" label="Constructor" label-for="input-1">
        <b-form-input id="input-1" placeholder="Enter Constructor" v-model="Constructor"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Team Principle" label-for="input-2">
        <b-form-input id="input-2" placeholder="Enter Team Principle" v-model="teamPrinciple"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Team Base" label-for="input-3">
        <b-form-input id="input-3" placeholder="Enter Team Base" v-model="base"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Power Unit" label-for="input-4">
        <b-form-input id="input-4" placeholder="Enter Power Unit" v-model="powerUnit"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-5" label="Car Chassis" label-for="input-5">
        <b-form-input id="input-5" placeholder="Enter Chassis Code" v-model="chassis"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-6" label="Driver Name" label-for="input-5">
        <b-form-input id="input-6" placeholder="Enter Driver Name" v-model="driver.name"></b-form-input>
      </b-form-group>
       <b-button class="mt-5" variant="primary" @click="postData">Submit</b-button>
    </div>
  </div>
</template>

<script>
import DataService from '../web_service/services'

export default {
  name: 'edit',
  data () {
    return {
      Constructor: '',
      teamPrinciple: '',
      base: '',
      powerUnit: '',
      chassis: '',
      driver: {
        name: ''
      }
    }
  },
  method: {
    postData () {
      let data = {
        Constructor: this.Constructor,
        teamPrinciple: this.teamPrinciple,
        base: this.base,
        powerUnit: this.powerUnit,
        chassis: this.chassis,
        driver: {
          name: this.name
        }
      }

      DataService.create(data)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  #form {
    margin: 0 auto;
    width: 500px;
  }
</style>
