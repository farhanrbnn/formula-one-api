<template>
    <div id="admin">
    <form>
        <div id="width">
        <p class="h4 text-center mb-4">Admin Login</p>
        <label for="defaultFormLoginEmailEx" class="grey-text">Username</label>
        <input type="email" id="defaultFormLoginEmailEx" class="form-control"/>
         <br/>
         <label for="defaultFormLoginPasswordEx" class="grey-text">password</label>
         <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
         <div class="text-center mt-4">
            <b-button class="mt-3" variant="primary">Log In</b-button>
        </div>
        </div>
    </form>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    #width {
        margin: 0 auto;
        width: 500px;
    }
</style>
