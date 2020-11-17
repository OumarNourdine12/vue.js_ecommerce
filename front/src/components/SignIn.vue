<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Email address:" label-for="input-2">
        <b-form-input
          id="input-2" 
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="password:" label-for="input-3">
        <b-form-input id="input-3" type="password" v-model="form.password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success">Sign-in</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "SignIn",
  
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post("http://localhost:3000/SignIn", this.form)
        .then((response) => {
          this.form = response
      console.log(response.data)
            
          // alert(JSON.stringify(this.form))
          this.$router.push('/')
                
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>


<style scoped>

</style>