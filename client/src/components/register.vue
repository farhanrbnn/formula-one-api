<template>
  <div id="register">
    <div id="form">
      <b-form-group id="input-group-1" label="Full Name" label-for="input-1">
        <b-form-input id="input-1" placeholder="Enter Your Full Name" v-model="name"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Email" label-for="input-2">
        <b-form-input id="input-2" placeholder="Enter Your Email" v-model="email"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Password" label-for="input-3">
        <b-form-input id="input-3" placeholder="Enter Your Password" v-model="password"></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Re-enter Password" label-for="input-4">
        <b-form-input id="input-4" placeholder="Re-enter Your Password" v-model="passwords"></b-form-input>
      </b-form-group>
      <b-button class="mt-5" variant="primary" @click="postData">Submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      passwords: ''
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
