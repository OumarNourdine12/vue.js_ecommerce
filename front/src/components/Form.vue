<template>
  <div>
    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="SignUp" active>
      <SignUp/>
        </b-tab>
        <b-tab title="SignIn">
      <SignIn/>
       
    </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>



<script>
import SignIn from "./SignIn";
import SignUp from "./SingUp";




export default {
  name: "Form",
  components: {
      SignIn,
      SignUp
  }
};
</script>