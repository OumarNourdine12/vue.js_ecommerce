<template>
  <div>


    <b-form class="form"  @submit="onSubmit" @reset="onReset" >
      <b-form-group id="input-group-1" 
      label="Votre Nom">
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

      <div v-if="$v.form.nom.dirty">
      <p class="error" v-if="!$v.form.nom.required">
        Name must have at least </p>
        <p class="error" v-if="!$v.form.nom.minLength"> Last Name is required.
           {{ $v.nom.$params.minLength.min}} letters</p>
           <p class="error"
           v-if="!$v.from.nom.maxLength"> You should have amaximum of 
           {{ $v.nom.$params.maxLength.max}} letters</p>
      
      </div>

      <b-form-group
        id="input-group-2"
        label="Votre Prenom"
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
        label="Votre Adresse Email"
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

       <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
        :class="{ error: $v.form.password.$error }"
          id="input-3"
          type="password"
          v-model.trim="form.password"
          required
          placeholder="Enter your secret password"
          @input="$v.form.password.$touch()"
        ></b-form-input>
        <div v-if="$v.form.password.$dirty">
          <p class="err_mess" v-if="!$v.form.password.required">
            Password must be fill
          </p>
        </div>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>





<script>
import { required, maxLength, minLength, email  } from "vuelidate/lib/validators";
const axios = require("axios");
export default {
  data() {
    return {
      form: {
           nom: "",
           prenom: "",
        email: "",
        password: "",
        minLength: "",
        maxLength: "",

        // submitStatus: null,
      },
      show: true,
      
      
    };
  },
  validations: {
    form: {
      nom: {
        required,
        minLength: minLength(4),
        
      },
      prenom: {
        required,
        minLength: minLength(4),
        maxLength
      },
      email: {
        email,
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
            console.log("mama")
            
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

/* .error {
  color: red;
  border: 1px solid red;
} */
.form {
  display: inline-block;
  text-align: center;
  width: 49%;
}
.validators {
  display: inline-block;
  width: 49%;
  text-align: center;
  vertical-align: top;
}
.input {
  padding: 5px;
}
input:focus {
  outline: none;
}
</style>