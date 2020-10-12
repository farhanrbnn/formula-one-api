<template>
  <div id="edit">
    <h3 align="center">Insert New Data</h3>
    <div id="form">
      <b-form-group id="input-group-1" label="Constructor" label-for="input-1">
        <b-form-input id="input-1" placeholder="Enter Constructor" v-model="Constructor"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Team Principal" label-for="input-2">
        <b-form-input id="input-2" placeholder="Enter Team Principal" v-model="teamPrincipal"></b-form-input>
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
      <b-row>
        <b-col>
          <b-form-group id="input-group-6" label="Driver #1 Name" label-for="input-6">
            <b-form-input id="input-6" placeholder="Enter Driver Name" v-model="driver.name"></b-form-input>
          </b-form-group>
        </b-col>
         <b-col>
           <b-form-group id="input-group-7" label="Driver #1 Nationality" label-for="input-7">
            <b-form-input id="input-7" placeholder="Enter Driver Nationality" v-model="driver.nationality"></b-form-input>
          </b-form-group>
         </b-col>
       </b-row>
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
      teamPrincipal: '',
      base: '',
      powerUnit: '',
      chassis: '',
<<<<<<< HEAD
      driver: {
        name: '',
        nationality: ''
      }
=======
      name: '',
      nationality: ''
>>>>>>> 59a35a4d89106064d0bc4a4d14467b48237d0b48
    }
  },
  methods: {
    postData () {
      let data = {
        Constructor: this.Constructor,
        teamPrincipal: this.teamPrincipal,
        base: this.base,
        powerUnit: this.powerUnit,
        chassis: this.chassis,
        driver: this.driver
      }

      DataService.create(data)
        .then((res) => {
          alert('data input succeeded')
          this.Constructor = ' '
          this.teamPrincipal = ' '
          this.base = ' '
          this.powerUnit = ' '
          this.chassis = ' '
          this.driver = ' '
        })
        .catch((err) => {
          alert(err)
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
