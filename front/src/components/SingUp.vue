<template>
  <div>
    

    <b-form @submit="onSubmit" @reset="onReset" >
      <b-form-group id="input-group-1" label="Votre Nom:" label-for="input-1">
        <b-form-input
          :class="{ borderError: $v.form.nom.$error }"
          @input="$v.form.nom.$touch()"
          id="input-1"
          v-model="form.nom"
          type="Nom"
          required
          placeholder="Entrez Nom"
        ></b-form-input>
      </b-form-group>

      <div class="error" v-if="!$v.form.nom.required"></div>
      <div class="error" v-if="!$v.form.nom.minLength">
        Name must have at least
        {{ $v.form.nom.$params.minLength.min }} letters.
      </div>

      <b-form-group
        id="input-group-2"
        label="Votre Prenom:"
        label-for="input-2"
      >
        <b-form-input
          :class="{ borderError: $v.form.prenom.$error }"
          @input="$v.form.prenom.$touch()"
          id="input-2"
          v-model="form.prenom"
          required
          placeholder="Entez Prénom"
        ></b-form-input>
        <div class="error" v-if="!$v.form.prenom.required">
         
        </div>
        <div class="error" v-if="!$v.form.prenom.minLength">
          Name must have at least
          {{ $v.form.prenom.$params.minLength.min }} letters.
        </div>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Votre Adresse Email:"
        label-for="input-3"
      >
        <b-form-input
          :class="{ borderError: $v.form.email.$error }"
          @input="$v.form.email.$touch()"
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Entez email"
        ></b-form-input>

        <div class="error" v-if="!$v.form.email.required">
          
        </div>
        <div class="error" v-if="!$v.form.email.minLength">
          Name must have at least
          {{ $v.form.email.$params.minLength.min }} letters.
        </div>
      </b-form-group>

      <b-form-group
        id="input-group-4"
        label="Your Password:"
        label-for="input-4"
      >
        <b-form-input
          :class="{ borderError: $v.form.password.$error }"
          @input="$v.form.password.$touch()"
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
        <div class="error" v-if="!$v.form.password.required">
        
        </div>
        <div class="error" v-if="!$v.form.password.minLength">
          Name must have at least
          {{ $v.form.password.$params.minLength.min }} letters.
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>





<script>
import { required, minLength } from "vuelidate/lib/validators";
const axios = require("axios");
export default {
  data() {
    return {
      form: {
           nom: "",
           prenom: "",
        email: "",
        password: "",
        submitStatus: null,
      },
      show: true,
    };
  },
  validations: {
    form: {
      nom: {
        required,
        minLength: minLength(4)
      },
      prenom: {
        required,
        minLength: minLength(4),
      },
      email: {
        required,
        minLength: minLength(4),
      },
      password: {
        required,
        minLength: minLength(4),
      },
    },
  },
  methods: {
      onSubmit(evt) {
      evt.preventDefault();

      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("erreur");
      } else {
        axios
          .post("http://localhost:3000/SingUp", {
            nom: this.form.nom,
            prenom: this.form.prenom,
            email: this.form.email,
            password: this.form.password,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      
    }, 
  
  },

};
</script>



<style scoped>
.borderError {
  border-color: red;
}
</style>