<template>
    <div class="foot">
     <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Passion du Foot </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">Contact</b-nav-item>
         <b-nav-item href="#">Catalog</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>

       <b-nav-item-dropdown text="Users" centre>
        <b-dropdown-item href="#">Account</b-dropdown-item>
        <b-dropdown-item href="#">Registration</b-dropdown-item>
      </b-nav-item-dropdown>

        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>




<script>
export default {
    
}
</script>