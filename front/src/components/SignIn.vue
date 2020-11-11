<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      

      <div class="password">
        <b-form @submit.stop.prevent>
          <label for="text-password">Password</label>
          <b-form-input
            type="password"
            id="text-password"
            aria-describedby="password-help-block"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </b-form-text>
        </b-form>
      </div>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
