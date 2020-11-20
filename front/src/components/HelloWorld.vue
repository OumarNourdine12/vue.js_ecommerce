<template>
  <div class="page">
    <b-jumbotron>
      <h1>Connexion / Inscription</h1>
      <p> Bienvevue !</p>
      <template v-slot:header></template>

      <hr class="my-4" />
<!-- <div class="col-med-9 h100d-flex justify-content-centre align-items-centre"> -->
  <Form/>

    </b-jumbotron>
  </div>
</template>

<script>
import Form from "./Form.vue";


export default {
  name: "HelloWorld",
  components: {
    Form
  },
  props: {
    msg: String,
  },

};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  width: 90;
}
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
